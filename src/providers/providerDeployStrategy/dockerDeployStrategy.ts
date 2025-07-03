import * as path from "path";

import {
  Container,
  ContainerConfig,
  ContainerPorts,
  ContainerVolumes,
} from "@cdktf/provider-docker/lib/container";
import { Image, ImageConfig } from "@cdktf/provider-docker/lib/image";
import { Volume } from "@cdktf/provider-docker/lib/volume";
import { Construct } from "constructs";
import { IDeployStrategy } from "./deployStrategy";
import {
  BasicDockerMachineComponentProps,
  BasicMachineComponentPropsInterface,
  CustomDockerMachineComponentProps,
  CustomMachineComponentPropsInterface,
  DockerServerProps,
  InternalDockerMachineComponentProps,
  InternalMachineComponentPropsInterface,
  ServerPropsInterface,
} from "../../props/props";
import { getDockerfilesPath } from "../../utils/fileUtils";
import { normalizeId } from "../../utils/stringUtils";

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
    const dockerMachineConfig: BasicDockerMachineComponentProps =
      basicMachineProps.dockerProps;

    // We know the properties are going to come, they are internal
    const dockerInternalProps: InternalDockerMachineComponentProps =
      internalMachineComponentProps.dockerProps as InternalDockerMachineComponentProps;

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

    return new Container(scope, `${normalizedId}-container`, containerConf);
  }

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
    const dockerProps: CustomDockerMachineComponentProps =
      customMachineProps.dockerProps;

    // Normalize the ID to ensure it is valid for AWS resources
    const normalizedId = normalizeId(id);

    // PORTS FINAL DEFINITION //
    const additionalPorts: ContainerPorts[] = [
      ...(internalMachineComponentProps.dockerProps?.additionalPorts ?? []),
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

    // We know the properties are going to come, they are internal
    const dockerInternalMachineComponentProps: InternalDockerMachineComponentProps =
      internalMachineComponentProps.dockerProps as InternalDockerMachineComponentProps;

    const fullImageConf: ImageConfig = {
      ...(dockerInternalMachineComponentProps.customImageName
        ? this.getDefaultImageConfig(
            `${dockerInternalMachineComponentProps.customImageName}:latest`,
          )
        : this.getDefaultImageConfig(
            dockerInternalMachineComponentProps.imageName,
          )),
      ...(dockerInternalMachineComponentProps.dockerfilePath
        ? {
            buildAttribute: {
              context:
                path.dirname(getDockerfilesPath()) +
                dockerInternalMachineComponentProps.dockerfilePath,
              buildArgs: {
                BASE_IMAGE: dockerInternalMachineComponentProps.imageName,
                UBUNTU_PRO_TOKEN:
                  internalMachineComponentProps.ubuntuProToken ?? "",
              },
            },
          }
        : {}),
    };
    const dockerImage: Image = new Image(
      scope,
      `${normalizedId}-${dockerInternalMachineComponentProps.customImageName}-image`,
      fullImageConf,
    );

    const machineVolumes: ContainerVolumes[] = this.createContainerVolumes(
      scope,
      normalizedId,
      dockerProps.useVolume,
      dockerProps.volumes,
      dockerInternalMachineComponentProps.volumeContainerPath,
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

    return new Container(scope, `${normalizedId}-container`, containerConf);
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
  ): void {
    if (!serverProps.dockerProps) {
      throw new Error(
        "DockerDeployStrategy didn't receive Docker-specific props.",
      );
    }
    const dockerServerConfig: DockerServerProps = serverProps.dockerProps;
    // We know the properties are going to come, they are internal
    const dockerInternalProps: InternalDockerMachineComponentProps =
      internalMachineComponentProps.dockerProps as InternalDockerMachineComponentProps;

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
    new Container(scope, `${normalizedId}-container`, fullServerContainerConf);
  }

  // METHODS FOR CREATING COMMON ASSETS //

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
