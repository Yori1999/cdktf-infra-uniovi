import {
  Container,
  ContainerConfig,
  ContainerVolumes,
} from "@cdktf/provider-docker/lib/container";
import { Image, ImageConfig } from "@cdktf/provider-docker/lib/image";
import { Volume } from "@cdktf/provider-docker/lib/volume";
import { Construct } from "constructs";
import { IDeployStrategy } from "./deployStrategy";
import {
  BasicDockerMachineComponentProps,
  BasicMachineComponentPropsInterface,
  DockerServerProps,
  InternalDockerMachineComponentProps,
  InternalMachineComponentPropsInterface,
  ServerPropsInterface,
} from "../../props/props";
import { normalizeId } from "../../utils/stringUtils";

export class DockerDeployStrategy implements IDeployStrategy {
  // DEPLOY METHODS REGION //

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
