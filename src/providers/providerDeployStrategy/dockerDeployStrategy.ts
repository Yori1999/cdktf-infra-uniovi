import * as path from "path";

import {
  Container,
  ContainerConfig,
  ContainerPorts,
  ContainerVolumes,
} from "@cdktf/provider-docker/lib/container";
import { Image, ImageConfig } from "@cdktf/provider-docker/lib/image";
import { Network } from "@cdktf/provider-docker/lib/network";
import { Volume } from "@cdktf/provider-docker/lib/volume";
import { TerraformOutput } from "cdktf";
import { Construct } from "constructs";
import { IDeployStrategy } from "./deployStrategy";
import { StackType } from "../../infrastructure-components/stacks/stackType";
import {
  BaseWebStackProps,
  BasicDockerMachineComponentProps,
  BasicMachineComponentPropsInterface,
  CustomDockerMachineComponentProps,
  CustomMachineComponentPropsInterface,
  DockerServerProps,
  InternalDockerMachineComponentProps,
  InternalMachineComponentPropsInterface,
  LampStackPropsInterface,
  LempStackPropsInterface,
  ServerPropsInterface,
} from "../../props/props";
import { supportedNginxImages } from "../../supported-images/supportedServerImages";
import {
  MySQLVersion,
  supportedApachePhpImages,
  supportedHardenedMySqlImages,
  supportedMySqlImages,
  supportedNginxPhpImages,
  supportedPhpMyAdminImages,
} from "../../supported-images/supportedWebStacksImages";
import { getDockerfilePath } from "../../utils/fileUtils";
import { normalizeId } from "../../utils/stringUtils";
import { ProviderType } from "../providerType";

export class DockerDeployStrategy implements IDeployStrategy {
  // DEPLOY METHODS REGION //

  /**
   * Generates a basic, generic Docker container using the provided properties.
   * This method is used to deploy a basic machine using Docker.
   * It creates a Docker image and a container with the specified configurations.
   * Optionally, it can include volumes, either a default volume or a set of volumes passed by the user
   * @param scope The scope in which the resources will be created.
   * @param id
   * @param basicMachineProps An object containing the properties for the basic machine. At this point it should include Docker-specific properties.
   * @param internalMachineComponentProps An object containing internal properties for the machine component, including Docker-specific properties.
   * @returns A Construct representing the deployed Docker container.
   * @throws Error if Docker-specific properties are not provided in basicMachineProps.
   */
  deployBasicMachine(
    scope: Construct,
    id: string,
    basicMachineProps: BasicMachineComponentPropsInterface,
    internalMachineComponentProps: InternalMachineComponentPropsInterface,
  ): Construct {
    if (!basicMachineProps.dockerProps) {
      throw new Error(
        "DockerDeployStrategy didn't receive Docker-specific props.",
      );
    }
    if (!internalMachineComponentProps.dockerProps) {
      throw new Error(
        "DockerDeployStrategy didn't receive Docker-specific internal props.",
      );
    }
    const dockerMachineConfig: BasicDockerMachineComponentProps =
      basicMachineProps.dockerProps;
    const dockerInternalProps: InternalDockerMachineComponentProps =
      internalMachineComponentProps.dockerProps;

    const normalizedId = normalizeId(id);

    const imageConf: ImageConfig = this.getDefaultImageConfig(
      dockerInternalProps.imageName,
    );
    const dockerImage: Image = new Image(
      scope,
      `${normalizedId}-image`,
      imageConf,
    );

    // include the possibility of including a volume or a set of volumes, coming from DockerMachineComponentProps
    const machineVolumes: ContainerVolumes[] = this.createContainerVolumes(
      scope,
      normalizedId,
      dockerMachineConfig.useVolume,
      dockerMachineConfig.volumes,
    );

    const containerConf: ContainerConfig = {
      ...this.getDefaultContainerConfig(
        `${normalizedId}-container`,
        dockerImage,
      ),
      command: ["sleep", "infinity"], // If not, the container will launch and stop and we won't be able to use it as a "virtual machine"
      ...(machineVolumes.length > 0 ? { volumes: machineVolumes } : {}),
      ...(dockerMachineConfig.networks &&
      dockerMachineConfig.networks.length > 0
        ? { networksAdvanced: dockerMachineConfig.networks }
        : {}),
    };

    const container: Container = new Container(
      scope,
      `${normalizedId}-container`,
      containerConf,
    );
    this.getContainerIp(scope, normalizedId, container);
    return container;
  }

  /**
   * Generates a custom Docker machine using the provided properties.
   * This method is used to deploy a custom machine using Docker.
   * A custom machine is any machine that is slightly more complex than a basic machine, and that will require a custom Docker image that we build with a custom Dockerfile.
   * It can include additional configurations such as ports, networks, and volumes.
   * @param scope The scope in which the resources will be created.
   * @param id
   * @param customMachineProps An object containing the properties for the custom machine. At this point it should include Docker-specific properties.
   * @param internalMachineComponentProps An object containing internal properties for the machine component, including Docker-specific properties.
   * @throws Error if Docker-specific properties are not provided in customMachineProps.
   * @returns A Construct representing the deployed Docker container.
   */
  deployCustomMachine(
    scope: Construct,
    id: string,
    customMachineProps: CustomMachineComponentPropsInterface,
    internalMachineComponentProps: InternalMachineComponentPropsInterface,
  ): Construct {
    if (!customMachineProps.dockerProps) {
      throw new Error(
        "DockerDeployStrategy didn't receive Docker-specific props.",
      );
    }
    if (!internalMachineComponentProps.dockerProps) {
      throw new Error(
        "DockerDeployStrategy didn't receive Docker-specific internal props.",
      );
    }
    const dockerProps: CustomDockerMachineComponentProps =
      customMachineProps.dockerProps;
    const internalDockerProps: InternalDockerMachineComponentProps =
      internalMachineComponentProps.dockerProps;

    // Normalize the ID to ensure it is valid for AWS resources
    const normalizedId = normalizeId(id);

    // PORTS FINAL DEFINITION //
    const additionalPorts: ContainerPorts[] = [
      ...(internalDockerProps.additionalPorts ?? []),
    ];
    if (dockerProps.exposeSSH) {
      const sshDefaultPort: ContainerPorts = dockerProps.externalSSHPort
        ? { internal: 22, external: dockerProps.externalSSHPort }
        : { internal: 22, external: 2222 };
      additionalPorts.push(sshDefaultPort);
    }
    if (dockerProps.exposeVNC) {
      const vncDefaultPort: ContainerPorts = dockerProps.externalVNCPort
        ? { internal: 5900, external: dockerProps.externalVNCPort }
        : { internal: 5900, external: 5900 };
      additionalPorts.push(vncDefaultPort);
    }
    if (dockerProps.exposeRDP) {
      const rdpDefaultPort: ContainerPorts = dockerProps.externalRDPPort
        ? { internal: 3389, external: dockerProps.externalRDPPort }
        : { internal: 3389, external: 3389 };
      additionalPorts.push(rdpDefaultPort);
    }
    const ports: ContainerPorts[] = dockerProps.ports ?? [];
    const finalPorts: ContainerPorts[] = this.mergeAndValidatePorts(
      ports,
      additionalPorts,
    );

    const fullImageConf: ImageConfig = {
      ...(internalDockerProps.customImageName
        ? this.getDefaultImageConfig(
            `${internalDockerProps.customImageName}:latest`,
          )
        : this.getDefaultImageConfig(internalDockerProps.imageName)),
      ...(internalDockerProps.dockerfilePath
        ? {
            buildAttribute: {
              context: path.dirname(
                getDockerfilePath(internalDockerProps.dockerfilePath),
              ),
              buildArgs: {
                BASE_IMAGE: internalDockerProps.imageName,
                UBUNTU_PRO_TOKEN:
                  internalMachineComponentProps.ubuntuProToken ?? "",
              },
            },
          }
        : {}),
    };
    const dockerImage: Image = new Image(
      scope,
      `${normalizedId}-${internalDockerProps.customImageName}-image`,
      fullImageConf,
    );

    const machineVolumes: ContainerVolumes[] = this.createContainerVolumes(
      scope,
      normalizedId,
      dockerProps.useVolume,
      dockerProps.volumes,
      internalDockerProps.volumeContainerPath,
    );

    const containerConf: ContainerConfig = {
      ...this.getDefaultContainerConfig(
        `${normalizedId}-container`,
        dockerImage,
      ),
      command: ["sleep", "infinity"], // If not, the container will launch and stop and we won't be able to use it as a "virtual machine"
      ...(machineVolumes.length > 0 ? { volumes: machineVolumes } : {}),
      ...(dockerProps.networks && dockerProps.networks.length > 0
        ? { networksAdvanced: dockerProps.networks }
        : {}),
      ...(finalPorts.length > 0 ? { ports: finalPorts } : {}),
    };

    const container: Container = new Container(
      scope,
      `${normalizedId}-container`,
      containerConf,
    );
    this.getContainerIp(scope, normalizedId, container);
    return container;
  }

  /**
   * Generates a basic Docker server using the provided properties.
   * This method is used to deploy a basic server using Docker.
   * It creates a Docker image and a container with the specified configurations.
   * Optionally, it can include volumes, either a default volume or a set of volumes passed by the user.
   * This method is specifically designed for server deployments, which may include additional configurations such as ports and networks.
   * By default, it will expose ports 80 and 443, but this can be customized through the serverProps.
   * @param scope The scope in which the resources will be created.
   * @param id
   * @param serverProps An object containing the properties for the server. At this point it should include Docker-specific properties.
   * @param internalMachineComponentProps An object containing internal properties for the machine component, including Docker-specific properties.
   * @throws Error if Docker-specific properties are not provided in serverProps.
   */
  deployBasicServer(
    scope: Construct,
    id: string,
    serverProps: ServerPropsInterface,
    internalMachineComponentProps: InternalMachineComponentPropsInterface,
  ): Construct {
    if (!serverProps.dockerProps) {
      throw new Error(
        "DockerDeployStrategy didn't receive Docker-specific props.",
      );
    }
    if (!internalMachineComponentProps.dockerProps) {
      throw new Error(
        "DockerDeployStrategy didn't receive Docker-specific internal props.",
      );
    }
    const dockerServerConfig: DockerServerProps = serverProps.dockerProps;
    const dockerInternalProps: InternalDockerMachineComponentProps =
      internalMachineComponentProps.dockerProps;

    const normalizedId = normalizeId(id);

    const imageConf: ImageConfig = this.getDefaultImageConfig(
      `${dockerInternalProps.imageName}:latest`,
    );
    const dockerImage: Image = new Image(
      scope,
      `${normalizedId}-image`,
      imageConf,
    );

    const machineVolumes: ContainerVolumes[] = this.createContainerVolumes(
      scope,
      normalizedId,
      dockerServerConfig.useVolume,
      dockerServerConfig.volumes,
    );

    const fullServerContainerConf: ContainerConfig = {
      ...this.getDefaultContainerConfig(
        `${normalizedId}-container`,
        dockerImage,
      ),
      ports: dockerServerConfig.ports ?? [
        { internal: 80, external: 8080 },
        { internal: 443, external: 8443 },
      ],
      ...(machineVolumes.length ? { volumes: machineVolumes } : {}),
      ...(dockerServerConfig.networks && dockerServerConfig.networks.length > 0
        ? { networksAdvanced: dockerServerConfig.networks }
        : {}),
    };
    const container: Container = new Container(
      scope,
      `${normalizedId}-container`,
      fullServerContainerConf,
    );

    this.getContainerIp(scope, normalizedId, container);
    return container;
  }

  /**
   * Generates an insecure Docker server using the provided properties.
   * This method is used to deploy an insecure server using Docker.
   * It creates a Docker image and a container with the specified configurations.
   * Optionally, it can include volumes, either a default volume or a set of volumes passed by the user.
   * This method is specifically designed for server deployments, which may include additional
   * configurations such as ports and networks.
   * By default, it will expose ports 80 and 8080, but this can be customized through the serverProps.
   * @param scope The scope in which the resources will be created.
   * @param id
   * @param serverProps An object containing the properties for the server. At this point it should include Docker-specific properties.
   * @throws Error if Docker-specific properties are not provided in serverProps.
   * @param internalMachineComponentProps An object containing internal properties for the machine component, including Docker-specific properties.
   */
  deployInsecureServer(
    scope: Construct,
    id: string,
    serverProps: ServerPropsInterface,
    internalMachineComponentProps: InternalMachineComponentPropsInterface,
  ): Construct {
    if (!serverProps.dockerProps) {
      throw new Error(
        "DockerDeployStrategy didn't receive Docker-specific props.",
      );
    }
    if (!internalMachineComponentProps.dockerProps) {
      throw new Error(
        "DockerDeployStrategy didn't receive Docker-specific internal props.",
      );
    }
    const dockerServerConfig: DockerServerProps = serverProps.dockerProps;
    const dockerInternalProps: InternalDockerMachineComponentProps =
      internalMachineComponentProps.dockerProps;

    const normalizedId = normalizeId(id);

    const fullImageConf: ImageConfig = {
      ...this.getDefaultImageConfig(
        `${dockerInternalProps.customImageName}:latest`,
      ),
      ...(dockerInternalProps.dockerfilePath
        ? {
            buildAttribute: {
              context: path.dirname(
                getDockerfilePath(dockerInternalProps.dockerfilePath),
              ),
              buildArgs: {
                BASE_IMAGE: dockerInternalProps.imageName,
              },
            },
          }
        : {}),
    };
    const dockerImage: Image = new Image(
      scope,
      `${normalizedId}-insecure-image`,
      fullImageConf,
    );

    const fullServerContainerConf = {
      ...this.getDefaultContainerConfig(
        `${normalizedId}-insecure-container`,
        dockerImage,
      ),
      ports: dockerServerConfig.ports ?? [{ internal: 80, external: 8080 }],
      ...(dockerServerConfig.networks && dockerServerConfig.networks.length > 0
        ? { networksAdvanced: dockerServerConfig.networks }
        : {}),
    };

    const container: Container = new Container(
      scope,
      `${normalizedId}-insecure-container`,
      fullServerContainerConf,
    );

    this.getContainerIp(scope, normalizedId, container);
    return container;
  }

  deployHardenedServer(
    scope: Construct,
    id: string,
    serverProps: ServerPropsInterface,
    internalMachineComponentProps: InternalMachineComponentPropsInterface,
  ): Construct {
    if (!serverProps.dockerProps) {
      throw new Error(
        "DockerDeployStrategy didn't receive Docker-specific props.",
      );
    }
    if (!internalMachineComponentProps.dockerProps) {
      throw new Error(
        "DockerDeployStrategy didn't receive Docker-specific internal props.",
      );
    }
    const dockerServerProps: DockerServerProps = serverProps.dockerProps;
    const dockerInternalProps: InternalDockerMachineComponentProps =
      internalMachineComponentProps.dockerProps;

    const normalizedId = normalizeId(id);

    const imageConf: ImageConfig = this.getDefaultImageConfig(
      dockerInternalProps.imageName,
    );
    const dockerImage: Image = new Image(
      scope,
      `${normalizedId}-hardened-image`,
      imageConf,
    );

    const machineVolumes: ContainerVolumes[] = this.createContainerVolumes(
      scope,
      normalizedId,
      dockerServerProps.useVolume,
      dockerServerProps.volumes,
    );

    const fullServerContainerConf = {
      ...this.getDefaultContainerConfig(
        `${normalizedId}-hardened-container`,
        dockerImage,
      ),
      ...(dockerServerProps.ports?.length
        ? { ports: dockerServerProps.ports }
        : {
            ports: [
              { internal: 80, external: 8080 },
              { internal: 443, external: 8443 },
            ],
          }),
      ...(dockerServerProps.networks?.length
        ? { networksAdvanced: dockerServerProps.networks }
        : {}),
      ...(machineVolumes.length ? { volumes: machineVolumes } : {}),
    };

    const container: Container = new Container(
      scope,
      `${normalizedId}-hardened-container`,
      fullServerContainerConf,
    );

    this.getContainerIp(scope, normalizedId, container);
    return container;
  }

  deployWebStack(
    scope: Construct,
    id: string,
    stackType: StackType,
    props: BaseWebStackProps,
  ): void {
    const normalizedId = normalizeId(id);
    const network: Network = this.createBasicNetwork(
      scope,
      `${normalizedId}-${stackType}`,
    );
    switch (stackType) {
      case StackType.LAMP: {
        const lampStackProps: LampStackPropsInterface =
          props as LampStackPropsInterface;
        if (!lampStackProps.dockerProps) {
          throw new Error(
            "DockerDeployStrategy didn't receive Docker-specific props for LAMP stack.",
          );
        }
        const mySqlPort: number = lampStackProps.dockerProps.mySqlPort ?? 3306;
        const mySqlContainer: Container = this.createSqlContainer(
          scope,
          normalizedId,
          network,
          stackType,
          props,
          mySqlPort,
          false,
        ); // at this point, we're telling whether we want to deploy the hardened MySQL version or not (in this case, not)
        return this.deployLampStack(
          scope,
          normalizedId,
          network,
          mySqlContainer,
          lampStackProps,
        );
      }
      case StackType.LEMP: {
        const lempStackProps: LempStackPropsInterface =
          props as LempStackPropsInterface;
        if (!lempStackProps.dockerProps) {
          throw new Error(
            "DockerDeployStrategy didn't receive Docker-specific props for LEMP stack.",
          );
        }
        const mySqlPort: number = lempStackProps.dockerProps.mySqlPort ?? 3306;
        const mySqlContainer: Container = this.createSqlContainer(
          scope,
          normalizedId,
          network,
          stackType,
          props,
          mySqlPort,
          false,
        ); // at this point, we're telling whether we want to deploy the hardened MySQL version or not (in this case, not)
        return this.deployLempStack(
          scope,
          normalizedId,
          network,
          mySqlContainer,
          props as LempStackPropsInterface,
        );
      }
    }
  }

  /**
   * Helper method to deploy a LAMP stack.
   * This method creates the necessary Docker containers for a LAMP stack, including Apache with PHP and optionally PhpMyAdmin container, save for the MySQL container, which must be created beforehand
   * @param scope
   * @param id
   * @param network
   * @param mySqlContainer
   * @param props
   */
  private deployLampStack(
    scope: Construct,
    id: string,
    network: Network,
    mySqlContainer: Container,
    props: LampStackPropsInterface,
  ): void {
    if (!props.dockerProps) {
      throw new Error(
        "The method didn't receive Docker-specific props for LAMP stack.",
      );
    } // This needs to be checked again as well because in TypeScript we can use props.dockerProps?.apachePort but it isn't translatable to other languages directly

    const apacheImage = new Image(
      scope,
      `${id}-lamp-apache-image`,
      this.getDefaultImageConfig(
        props.phpVersion ??
          supportedApachePhpImages[ProviderType.DOCKER].phpApache82,
      ),
    );
    const apachePHPContainer: Container = new Container(
      scope,
      `${id}-apache-php-container`,
      {
        ...this.getDefaultContainerConfig(
          `${id}-apache-php-container`,
          apacheImage,
        ),
        networksAdvanced: [{ name: network.name }],
        ports: [
          {
            internal: 80,
            external: props.dockerProps.apachePort ?? 8080,
          },
        ],
      },
    );
    this.getContainerIp(
      scope,
      `${id}-apache-php-container`,
      apachePHPContainer,
    );

    if (props.includePhpMyAdmin) {
      const phpMyAdminImage = new Image(
        scope,
        `${id}-phpmyadmin-image`,
        this.getDefaultImageConfig(
          supportedPhpMyAdminImages[ProviderType.DOCKER].latest,
        ),
      );
      const phpMyAdminContainer: Container = new Container(
        scope,
        `${id}-phpmyadmin-container`,
        {
          ...this.getDefaultContainerConfig(
            `${id}-phpmyadmin-container`,
            phpMyAdminImage,
          ),
          networksAdvanced: [{ name: network.name }],
          ports: [
            {
              internal: 80,
              external: props.dockerProps.phpMyAdminPort ?? 8081,
            },
          ],
          env: [
            "PMA_HOST=" + mySqlContainer.name,
            "PMA_PORT=" + mySqlContainer.ports.get(0).external,
          ],
        },
      );
      this.getContainerIp(
        scope,
        `${id}-phpmyadmin-container`,
        phpMyAdminContainer,
      );
    }
  }

  /**
   * Helper method to deploy a LEMP stack.
   * This method creates the necessary Docker containers for a LEMP stack, including Apache with PHP, save for the MySQL container, which must be created beforehand
   * @param scope
   * @param id
   * @param network
   * @param mySqlContainer
   * @param props
   */
  private deployLempStack(
    scope: Construct,
    id: string,
    network: Network,
    mySqlContainer: Container,
    props: LempStackPropsInterface,
  ): void {
    if (!props.dockerProps) {
      throw new Error(
        "The method didn't receive Docker-specific props for LEMP stack.",
      );
    } // This needs to be checked again as well because in TypeScript we can use props.dockerProps?.apachePort but it isn't translatable to other languages directly

    const phpImage = new Image(
      scope,
      `${id}-nginx-php-image`,
      this.getDefaultImageConfig(
        props.phpVersion ??
          supportedNginxPhpImages[ProviderType.DOCKER].phpNginx82,
      ),
    );
    const phpContainer = new Container(scope, `${id}-lemp-php-container`, {
      ...this.getDefaultContainerConfig(`${id}-lemp-php-container`, phpImage),
      networksAdvanced: [{ name: network.name }],
      env: [
        "DB_HOST=" + mySqlContainer.name,
        "DB_NAME=" + (props.mySqlDatabase ?? "lempdb"),
        "DB_USER=" + (props.mySqlUser ?? "lempuser"),
        "DB_PASSWORD=" + (props.mySqlPassword ?? "test123..."),
      ],
    });

    const nginxImage = new Image(scope, `${id}-lemp-nginx-image`, {
      ...this.getDefaultImageConfig(`lemp-nginx-image:latest`),
      buildAttribute: {
        context: path.dirname(
          getDockerfilePath("lemp-nginx"), // This is the path to the Dockerfile for the LEMP Nginx image
        ),
        buildArgs: {
          BASE_IMAGE: supportedNginxImages[ProviderType.DOCKER].latest,
          PHP_CONTAINER_NAME: phpContainer.name,
        },
      },
    });

    const container: Container = new Container(
      scope,
      `${id}-lemp-nginx-container`,
      {
        ...this.getDefaultContainerConfig(
          `${id}-lemp-nginx-container`,
          nginxImage,
        ),
        networksAdvanced: [{ name: network.name }],
        ports: [
          {
            internal: 80,
            external: props.dockerProps.nginxPort ?? 8080,
          },
        ],
      },
    );
    this.getContainerIp(scope, `${id}-lemp-nginx-container`, container);
  }

  /**
   * Helper method to create a SQL container for the LAMP/LEMP stack.
   * This method creates a MySQL container with the specified configurations.
   * It includes the option to use a hardened version of the MySQL image, so we can deploy a more secure version of MySQL while still reusing the method.
   * @param scope The scope in which the resources will be created.
   * @param constructId The ID of the construct to be created.
   * @param network The Docker network in which the MySQL container will be created, which should be the same as for the other containers that are part of the stack.
   * @param props The properties for the base web stack, which should include MySQL-specific properties.
   * @param mySqlPort The port on which the MySQL container will be exposed. If not provided, it defaults to 3306.
   * @param useHardenedVersion Whether to use a hardened version of the MySQL image. If true, it will use the hardened version; otherwise, it will use the standard version.
   * @returns The created MySQL container.
   */
  private createSqlContainer(
    scope: Construct,
    constructId: string,
    network: Network,
    stackType: StackType,
    props: BaseWebStackProps,
    mySqlPort: number,
    useHardenedVersion: boolean,
  ): Container {
    const mySqlImageVersion: MySQLVersion =
      props.mySqlVersion ?? MySQLVersion.LATEST;
    const databaseVolume: Volume = this.createBasicVolume(
      scope,
      `${constructId}-${stackType}-mysql`,
    );
    const mySqlImage = new Image(
      scope,
      `${constructId}-mysql-${stackType}-image`,
      useHardenedVersion
        ? this.getDefaultImageConfig(
            supportedHardenedMySqlImages[ProviderType.DOCKER][
              mySqlImageVersion
            ],
          )
        : this.getDefaultImageConfig(
            supportedMySqlImages[ProviderType.DOCKER][mySqlImageVersion],
          ),
    );
    const container: Container = new Container(
      scope,
      `${constructId}-mysql-${stackType}-container`,
      {
        ...this.getDefaultContainerConfig(
          `${constructId}-mysql-${stackType}-container`,
          mySqlImage,
        ),
        networksAdvanced: [{ name: network.name }],
        volumes: [
          {
            containerPath: "/var/lib/mysql",
            volumeName: databaseVolume.name,
          },
        ],
        env: [
          `MYSQL_ROOT_PASSWORD=${props.mySqlRootPassword ?? "test123..."}`,
          `MYSQL_DATABASE=${props.mySqlDatabase ?? stackType + "db"}`,
          `MYSQL_USER=${props.mySqlUser ?? stackType + "user"}`,
          `MYSQL_PASSWORD=${props.mySqlPassword ?? "test123..."}`,
        ],
        ports: [{ internal: 3306, external: mySqlPort ?? 3306 }],
      },
    );
    this.getContainerIp(
      scope,
      `${constructId}-mysql-${stackType}-container`,
      container,
    );
    return container;
  }

  // METHODS FOR CREATING COMMON ASSETS //

  // Method to register the IP of the container //
  /**
   * Registers a Terraform output for the public IP of the container.
   * This is useful for accessing the container after deployment.
   * @param scope Construct scope where the output will be defined
   * @param normId The normalized ID
   * @param container The Docker container for which the IP will be registered
   */
  private getContainerIp(
    scope: Construct,
    normalizedId: string,
    container: Container,
  ): TerraformOutput {
    let ip: string;
    try {
      ip = container.networkData.get(0).ipAddress;
    } catch {
      ip = "No IP address available";
    }
    return new TerraformOutput(scope, `${normalizedId}-public-ip`, {
      value: ip,
    });
  }

  // Utility methods region for creating basic resources //

  /**
   * Creates a basic Docker volume.
   * This method is used to create a volume that can be used by the Docker container.
   * @param scope The scope in which the volume will be created.
   * @param volumeId The ID of the volume to be created.
   * @returns The created Docker volume.
   */
  private createBasicVolume(scope: Construct, volumeId: string): Volume {
    return new Volume(scope, `${volumeId}-volume`, {
      name: `${volumeId}-data`,
    });
  }

  /**
   * Creates a basic Docker network.
   * This method is used to create a network that can be used by the Docker container.
   * @param scope The scope in which the network will be created.
   * @param networkId The ID of the network to be created.
   * @returns The created Docker network.
   */
  private createBasicNetwork(scope: Construct, networkId: string): Network {
    return new Network(scope, networkId + "-network", {
      name: networkId + "-network",
    });
  }

  // Utility methods region for creating more complex assets //

  private createContainerVolumes(
    scope: Construct,
    id: string,
    useVolume?: boolean,
    volumes?: ContainerVolumes[],
    defaultVolumePath?: string,
  ): ContainerVolumes[] {
    let machineVolumes: ContainerVolumes[] = [];
    if (useVolume) {
      if (!volumes || volumes.length === 0) {
        const basicVolume: Volume = this.createBasicVolume(scope, id);
        machineVolumes.push({
          containerPath: defaultVolumePath ?? "/mnt/data",
          volumeName: basicVolume.name,
        });
      } else {
        machineVolumes = volumes;
      }
    }
    return machineVolumes;
  }

  /**
   * Merges and validates the provided ports and additional ports.
   * This method ensures that there are no duplicate internal ports and that external ports are not reused.
   * It returns a list of valid ports that can be used for the Docker container.
   * @param providedPorts A first list of ContainerPorts to merge.
   * @param additionalPorts A second list of ContainerPorts to merge, which may include additional ports that should be considered.
   * @returns A list of valid ContainerPorts that can be used for the Docker container, without duplicates.
   */
  private mergeAndValidatePorts(
    providedPorts: ContainerPorts[],
    additionalPorts: ContainerPorts[],
  ): ContainerPorts[] {
    const allPorts: ContainerPorts[] = [...providedPorts, ...additionalPorts];

    const internalPorts = new Set<number>();
    const externalPorts = new Set<number>();
    const validPorts: ContainerPorts[] = [];

    allPorts.forEach((containerPort) => {
      const isInternalUsed = internalPorts.has(containerPort.internal);
      const isExternalUsed =
        containerPort.external !== undefined &&
        externalPorts.has(containerPort.external);

      if (!isInternalUsed && (!containerPort.external || !isExternalUsed)) {
        // this specific ContainerPort is valid
        validPorts.push(containerPort);
        internalPorts.add(containerPort.internal);
        if (containerPort.external !== undefined) {
          externalPorts.add(containerPort.external);
        }
      }
    });

    return validPorts;
  }

  // UTILITY METHODS REGION FOR DEFAULT CONFIGS //

  private getDefaultImageConfig(imageName: string): ImageConfig {
    return {
      name: imageName,
      keepLocally: false,
    };
  }

  private getDefaultContainerConfig(
    containerName: string,
    dockerImage: Image,
  ): ContainerConfig {
    return {
      name: containerName,
      image: dockerImage.name,
    };
  }
}
