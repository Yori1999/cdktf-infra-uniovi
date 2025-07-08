import { SecurityGroupIngress } from "@cdktf/provider-aws/lib/security-group";
import {
  ContainerNetworksAdvanced,
  ContainerPorts,
  ContainerVolumes,
} from "@cdktf/provider-docker/lib/container";
import { ProviderType } from "../providers/providerType";
import {
  MySQLVersion,
  ApachePhpVersion,
  PhpMyAdminVersion,
  NginxPhpVersion,
} from "../supported-images/supportedWebStacksImages";

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

// REGION CUSTOM MACHINE PROPS //
export interface CustomDockerMachineComponentProps
  extends BasicDockerMachineComponentProps {
  /**
   * Whether to expose SSH access to the container (defaults to false if not included).
   * If true, you can optionally specify `externalSSHPort` (default internal port is 22, external port is 2222).
   */
  readonly exposeSSH?: boolean;
  /**
   * External port to map to container's SSH port (22). If not set, port 2222 will try to be assigned
   */
  readonly externalSSHPort?: number;
  /**
   * Enables remote desktop access via VNC (default internal & external port is 5900).
   */
  readonly exposeVNC?: boolean;
  /**
   * External port to use for VNC, if `exposeVNC` is true, unless overriden in `ports`.
   */
  readonly externalVNCPort?: number;
  /**
   * Enables remote desktop access via RDP (default internal & external port is 3389).
   */
  readonly exposeRDP?: boolean;
  /**
   * External port to use for RDP, if `exposeRDP` is true.
   */
  readonly externalRDPPort?: number;
  /**
   * List of ports to expose from the container, following Docker's ContainerPorts schema.
   * Each port must have an internal value, external is optional (if not present, Docker will choose a random port).
   * These ports will take precedence over any other port configured, so in case a port is defined in externalSSHPort,
   * externalVNCPort or externalRDPPort and explicitly set again in this ports property, this second value is the one
   * that will get added to the container
   */
  readonly ports?: ContainerPorts[];
}
export interface CustomAWSMachineComponentProps
  extends BasicAWSMachineComponentProps {
  readonly securityGroupIngressRules?: SecurityGroupIngress[];
  /**
   * Allows the user to pass custom user data for the machine.
   * This is an optional property; if specified, it will override any default user data that would be generated.
   * You are usually okay with not passing this property, unless you have really specific requirements for the machine's initialization and want fine-grained
   * control over the user data script.
   */
  readonly customUserData?: string;
}
export interface CustomMachineComponentPropsInterface
  extends BaseInfrastructureComponentProps {
  readonly dockerProps?: CustomDockerMachineComponentProps;
  readonly awsProps?: CustomAWSMachineComponentProps;
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

// REGION SERVER PROPS //
export interface DockerServerProps extends BasicDockerMachineComponentProps {
  /**
   * An optional list of ports to expose from the container, following Docker's `ContainerPorts` schema.
   * Each port must have an internal value, external is optional (if not present, Docker will choose a random port).
   */
  readonly ports?: ContainerPorts[];
}
export interface AwsServerProps extends BasicAWSMachineComponentProps {
  /**
   * An optional list of security group ingress rules to apply to the server.
   * This property allows you to define specific rules for inbound traffic to the server.
   * Each rule must follow the `SecurityGroupIngress` schema.
   */
  readonly securityGroupIngressRules?: SecurityGroupIngress[];
}
export interface ServerPropsInterface extends BaseInfrastructureComponentProps {
  readonly dockerProps?: DockerServerProps;
  readonly awsProps?: AwsServerProps;
}

// REGION LAMP STACK CONFIG //
export interface BaseWebStackProps {
  /**
   * The type of stack being deployed.
   * This property is used to determine the specific stack configuration and behavior.
   * It is a mandatory property and must be one of the supported stack types.
   * @example StackType.LAMP
   */
  readonly mySqlVersion?: MySQLVersion;
  readonly mySqlRootPassword?: string;
  readonly mySqlPassword?: string;
  readonly mySqlUser?: string;
  readonly mySqlDatabase?: string;
}
interface BaseLampStackProps extends BaseWebStackProps {
  /**
   * The version of PHP to use in the LAMP stack.
   * This property is optional and can be omitted if the default version is acceptable.
   * If specified, it is mandatory to use a supported version from the `ApachePhpVersion` enum.
   */
  readonly phpVersion?: ApachePhpVersion;
  readonly includePhpMyAdmin: boolean;
  readonly phpMyAdminVersion?: PhpMyAdminVersion;
}
interface BaseLempStackProps extends BaseWebStackProps {
  readonly phpVersion?: NginxPhpVersion;
}
export interface DockerLampStackProps {
  readonly apachePort?: number;
  readonly phpMyAdminPort?: number;
  readonly mySqlPort?: number;
}
export interface DockerLempStackProps {
  readonly nginxPort?: number;
  readonly mySqlPort?: number;
}
export interface AWSLampStackProps {
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
}
export interface AWSLempStackProps {
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
}
export interface LampStackPropsInterface
  extends BaseInfrastructureComponentProps,
    BaseLampStackProps {
  readonly dockerProps?: DockerLampStackProps;
  readonly awsProps?: AWSLampStackProps;
}
export interface LempStackPropsInterface
  extends BaseInfrastructureComponentProps,
    BaseLempStackProps {
  readonly dockerProps?: DockerLempStackProps;
  readonly awsProps?: AWSLempStackProps;
}
