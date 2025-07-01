import { SecurityGroupIngress } from "@cdktf/provider-aws/lib/security-group";
import {
  ContainerNetworksAdvanced,
  ContainerPorts,
  ContainerVolumes,
} from "@cdktf/provider-docker/lib/container";
import { ProviderType } from "../providers/providerType";

export interface BaseInfrastructureComponentProps {
  /**
   * The provider type for the infrastructure component.
   * This property is used to determine which cloud provider the component will be deployed on.
   * It is a mandatory property and must be one of the supported provider types.
   * @example ProviderType.Docker
   */
  readonly providerType: ProviderType;
}

// REGION SIMPLE MACHINE PROPS //
export interface BasicDockerMachineComponentProps {
  /**
   * The custom name or identifier for the Docker container.
   * This is the name that will be used to reference the container in the Docker environment.
   * No matter the value you pass, it will be normalized to ensure it is valid for Docker.
   * @example "my-docker-container"
   */
  readonly containerName: string;
  /**
   * Networks for the Docker container.
   * This is an advanced property that allows you to specify multiple networks for the container.
   * Each network must follow Docker's `ContainerNetworksAdvanced` schema.
   */
  readonly networks?: ContainerNetworksAdvanced[];
  /**
   * Whether you want to use a volume for the container or not; if not specified, it defaults to false.
   * If set to true, you can optionally specify `volumes` to define the volumes to use.
   */
  readonly useVolume?: boolean;
  /**
   * List of volumes to use for the container, following Docker's `ContainerVolumes` schema.
   * Each volume must have a mandatory `containerPath`
   * If `useVolume` is true, this property's value will be used to define the volumes for the container.
   * If not specified, internally a default volume will be created.
   */
  readonly volumes?: ContainerVolumes[];
}
export interface BasicAWSMachineComponentProps {
  //instanceType?: string;
  /**
   * Virtual Private Cloud (VPC) ID where the machine will be deployed.
   * This is an optional property, and if not specified, the default VPC will be used.
   */
  readonly vpcId?: string;
  /**
   * Subnet ID where the machine will be deployed.
   * This is an optional property, and if not specified, the default subnet will be used.
   * If you specify a VPC, you must also specify a subnet within that VPC.
   */
  readonly subnetId?: string;
  /**
   * Security Group ID to associate with the machine.
   * This is an optional property, and if not specified, a newly created security group will be used.
   */
  readonly securityGroupId?: string;
  /**
   * Whether to use persistence for the machine.
   * This is an optional property, and if not specified, it defaults to false.
   * If set to true, the machine will be configured to use persistent storage, using an EBS volume for AWS.
   */
  readonly usePersistence?: boolean;
}
export interface BasicMachineComponentPropsInterface
  extends BaseInfrastructureComponentProps {
  readonly dockerProps?: BasicDockerMachineComponentProps;
  readonly awsProps?: BasicAWSMachineComponentProps;
}

// REGION INTERNAL MACHINE PROPS //
// For internal use only //
export interface InternalDockerMachineComponentProps {
  /**
   * The name of the Docker image to use for the machine.
   * This is a mandatory property and must be one of the supported Docker images; however, it's value should come from picking the corresponding
   * image from the supported images list, by choosing the appropriate combination of provider type and image version.
   * It is used to ensure that the machine is created with a specific image, instead of allowing the user to pass any arbitrary image name that may not
   * exist or be supported.
   * @example "ubuntu:latest"
   */
  readonly imageName: string; // Even though it may seem more appropriate to use `imageName` in place where the user can pass a custom value, we must enforce the use of some specific options
  /**
   * A custom Dockerfile path to build the image from, in case we need to build a custom image.
   * This is an optional property, and if not specified, no specific Dockerfile will be used. However, you should be careful not to pass a `customImageName` in those cases.
   */
  readonly dockerfilePath?: string;
  readonly customImageName?: string;
  readonly volumeContainerPath?: string;
  readonly buildArgs?: { [key: string]: string };
  readonly customCommand?: string[];
  /**
   * We may need to pass specific ports for certain use cases in case the user doesn't pass them.
   * We cannot rely on the user to pass them, and we shouldn't overflow the user-facing interfaces with too
   * many fields when some are "mandatory" but only for specific machines
   */
  readonly additionalPorts?: ContainerPorts[];
}
export interface InternalAWSMachineComponentProps {
  /**
   * The Amazon Machine Image (AMI) ID to use for the machine.
   * This is a mandatory property and must be one of the supported AMIs; however, its value should come from picking the corresponding
   * AMI from the supported images list, by choosing the appropriate combination of provider type and image version.
   */
  readonly ami: string; // Same as for the imageName for Docker, even though it may seem more appropriate to use `ami` in place where the user can pass a custom value, we must enforce the use of some specific options
  readonly customInitScriptPath?: string;
  readonly additionalSecurityGroupIngressRules?: SecurityGroupIngress[];
}
export interface InternalMachineComponentPropsInterface {
  /**
   * Ubuntu Pro subscription token used to attach the instance.
   */
  readonly ubuntuProToken?: string;
  readonly dockerProps?: InternalDockerMachineComponentProps;
  readonly awsProps?: InternalAWSMachineComponentProps;
}
