import { DataAwsSubnet } from "@cdktf/provider-aws/lib/data-aws-subnet";
import { DataAwsSubnets } from "@cdktf/provider-aws/lib/data-aws-subnets";
import { DataAwsVpc } from "@cdktf/provider-aws/lib/data-aws-vpc";
import { EbsVolume } from "@cdktf/provider-aws/lib/ebs-volume";
import { Instance } from "@cdktf/provider-aws/lib/instance";
import {
  SecurityGroup,
  SecurityGroupIngress,
} from "@cdktf/provider-aws/lib/security-group";
import { VolumeAttachment } from "@cdktf/provider-aws/lib/volume-attachment";
import { Fn, TerraformOutput } from "cdktf";
import { Construct } from "constructs";
import { IDeployStrategy } from "./deployStrategy";
import { StackType } from "../../infrastructure-components/stacks/stackType";
import {
  AWSLampStackProps,
  AWSLempStackProps,
  AwsServerProps,
  BaseWebStackProps,
  BasicAWSMachineComponentProps,
  BasicMachineComponentPropsInterface,
  CustomAWSMachineComponentProps,
  CustomMachineComponentPropsInterface,
  InternalAWSMachineComponentProps,
  InternalMachineComponentPropsInterface,
  LampStackPropsInterface,
  LempStackPropsInterface,
  ServerPropsInterface,
} from "../../props/props";
import {
  supportedUbuntuImages,
  UbuntuVersion,
} from "../../supported-images/supportedMachineImages";
import { generateUserData } from "../../utils/aws/userDataUtils";
import { normalizeId } from "../../utils/stringUtils";
import { ProviderType } from "../providerType";

export class AwsDeployStrategy implements IDeployStrategy {
  /**
   * Generates a basic AWS machine deployment.
   * This method deploys a basic AWS EC2 instance with optional EBS volume for persistence.
   * It sets up the necessary VPC, subnet, security group, and instance properties.
   * @param scope The construct scope where the resources will be defined
   * @param id The ID for the machine component, which will be normalized to ensure it is valid for AWS resources.
   * @param basicMachineProps An object containing the properties for the basic machine.
   * @param internalMachineComponentProps An object containing internal properties for the machine component, including AWS-specific properties.
   * The `awsProps` property should contain the AWS-specific properties for the machine component.
   * @returns
   */
  deployBasicMachine(
    scope: Construct,
    id: string,
    basicMachineProps: BasicMachineComponentPropsInterface,
    internalMachineComponentProps: InternalMachineComponentPropsInterface,
  ): Construct {
    // Validate properties for AWS machine deployment exist
    if (!basicMachineProps.awsProps) {
      throw new Error(
        "AWS properties are required for deploying a basic machine.",
      );
    }
    if (!internalMachineComponentProps.awsProps) {
      throw new Error(
        "Internal AWS properties are required for the basic machine.",
      );
    }
    const awsProps: BasicAWSMachineComponentProps = basicMachineProps.awsProps;
    // They should come as this is an internal property we set
    const internalAWSProps: InternalAWSMachineComponentProps =
      internalMachineComponentProps.awsProps;

    /* NORMALIZE THE ID FOR USING IT  */
    // Normalize the ID to ensure it is valid for AWS resources
    const normalizedId = normalizeId(id);

    /* GET THE VPC PASSED BY THE USER OR GET THE DEFAULT ONE FOR THE USER'S REGION */
    // VPC and subnet
    const vpcId: string = this.getOrDefaultVPCId(
      scope,
      normalizedId,
      awsProps.vpcId,
    );
    // Subnet ID + get the corresponding availability zone
    const subnetId = this.getOrDefaultSubnetId(
      scope,
      normalizedId,
      vpcId,
      awsProps.subnetId,
    );
    const subnetData = new DataAwsSubnet(scope, `${normalizedId}-subnet-az`, {
      id: subnetId,
    });

    /* GET THE SECURITY GROUP PASSED BY THE USER OR CREATE ONE FOR THE USER'S VPC */
    // Security group
    const sgId =
      awsProps.securityGroupId ??
      new SecurityGroup(scope, `${normalizedId}-sg`, {
        vpcId,
        ingress: [
          // allow SSH from anywhere for simplicity, but we need to allow SSH at least because otherwise it's impossible to access it even from AWS console
          this.getDefaultSSHSecurityGroup(),
        ],
        egress: [
          { protocol: "-1", fromPort: 0, toPort: 0, cidrBlocks: ["0.0.0.0/0"] },
        ],
      }).id;

    const instance = new Instance(scope, `${normalizedId}-basic-machine`, {
      ami: internalAWSProps.ami,
      instanceType: "t2.micro", // keep it as t2.micro for simplicity and cost-effectiveness
      subnetId,
      vpcSecurityGroupIds: [sgId],
      associatePublicIpAddress: true, // keeps it easy to SSH
      userData: generateUserData({
        enablePersistence: awsProps.usePersistence ?? false,
        userProvidedUserData: `
          #!/bin/bash
          apt-get update && apt-get install -y openssh-server
          systemctl enable ssh
          systemctl start ssh
          `,
      }),
      tags: {
        Name: `${normalizedId}-basic-machine`,
      },
    });

    // If persistence is enabled, create an EBS volume and attach it to the instance
    if (awsProps.usePersistence) {
      this.createBasicVolumeAndAttachment(
        scope,
        normalizedId,
        instance,
        subnetData.availabilityZone,
      );
    }

    // Register the public IP as a Terraform output
    this.getInstancePublicIp(scope, normalizedId, instance);

    return instance;
  }

  /**
   * Generates a custom AWS machine using the provided properties.
   * A custom machine is any machine that is slightly more complex than a basic machine, and that will require a custom init script for further personalization.
   * This method deploys an AWS EC2 instance with custom properties and optional EBS volume for persistence.
   * It sets up the necessary VPC, subnet, security group, and instance properties, if not provided.
   * It also allows for custom user data to be provided, which can include additional setup scripts or configurations that will override the original script
   * @param scope The construct scope where the resources will be defined
   * @param id The ID for the machine component, which will be normalized to ensure it is valid for AWS resources.
   * @param customMachineProps An object containing the properties for the custom machine. At this point it should include AWS-specific properties.
   * @throws Error if AWS-specific properties are not provided in customMachineProps.
   * @param internalMachineComponentProps An object containing internal properties for the machine component, including AWS-specific properties.
   * @throws Error if internal AWS properties are not provided in internalMachineComponentProps.
   * @returns
   */
  deployCustomMachine(
    scope: Construct,
    id: string,
    customMachineProps: CustomMachineComponentPropsInterface,
    internalMachineComponentProps: InternalMachineComponentPropsInterface,
  ): Construct {
    if (!customMachineProps.awsProps) {
      throw new Error("AWS properties required for custom AWS machine.");
    }
    if (!internalMachineComponentProps.awsProps) {
      throw new Error("Internal AWS properties are required");
    }
    const awsProps: CustomAWSMachineComponentProps =
      customMachineProps.awsProps;
    // They should come as this is an internal property we set
    const internalAWSProps: InternalAWSMachineComponentProps =
      internalMachineComponentProps.awsProps;

    /* NORMALIZE THE ID FOR USING IT  */
    // Normalize the ID to ensure it is valid for AWS resources
    const normalizedId = normalizeId(id);

    // Define the VPC
    const vpcId = this.getOrDefaultVPCId(scope, normalizedId, awsProps.vpcId);
    // Subnet ID + get the corresponding availability zone
    const subnetId = this.getOrDefaultSubnetId(
      scope,
      normalizedId,
      vpcId,
      awsProps.subnetId,
    );
    const subnetData = new DataAwsSubnet(scope, `${normalizedId}-subnet-az`, {
      id: subnetId,
    });
    // Security group ingress rules
    const additionalSecurityGroupIngressRules: SecurityGroupIngress[] = [
      ...(internalAWSProps.additionalSecurityGroupIngressRules ?? []),
    ];
    additionalSecurityGroupIngressRules.push(this.getDefaultSSHSecurityGroup());
    additionalSecurityGroupIngressRules.push(this.getDefaultVNCSecurityGroup());
    const securityGroupIngressRules: SecurityGroupIngress[] =
      awsProps.securityGroupIngressRules ?? [];
    const allSecurityGroupIngressRules: SecurityGroupIngress[] =
      this.preserveUniqueRules(
        securityGroupIngressRules,
        additionalSecurityGroupIngressRules,
      );
    const securityGroup =
      awsProps.securityGroupId ??
      new SecurityGroup(scope, `${normalizedId}-sg`, {
        vpcId,
        ingress: allSecurityGroupIngressRules,
        egress: [
          { protocol: "-1", fromPort: 0, toPort: 0, cidrBlocks: ["0.0.0.0/0"] },
        ],
      }).id;

    // Create the EC2 instance
    const instance = new Instance(scope, `${normalizedId}-custom-machine`, {
      ami: internalAWSProps.ami,
      instanceType: "t2.micro",
      availabilityZone: subnetData.availabilityZone,
      subnetId,
      vpcSecurityGroupIds: [securityGroup],
      associatePublicIpAddress: true,
      userData: awsProps.customUserData
        ? generateUserData({
            enablePersistence: awsProps.usePersistence ?? false,
            userProvidedUserData: awsProps.customUserData,
          })
        : generateUserData({
            enablePersistence: awsProps.usePersistence ?? false,
            userDataSetupFileDirectory: internalAWSProps.customInitScriptPath,
          }),
      tags: {
        Name: `${normalizedId}-custom-machine`,
      },
    });

    // Define the EBS volume, that is, persistence
    if (awsProps.usePersistence) {
      this.createBasicVolumeAndAttachment(
        scope,
        normalizedId,
        instance,
        subnetData.availabilityZone,
      );
    }

    // Register the public IP as a Terraform output
    this.getInstancePublicIp(scope, normalizedId, instance);

    return instance;
  }

  /**
   * Generates a basic AWS server using the provided properties.
   * This method is used to deploy an AWS EC2 instance with basic server properties and optional EBS volume for persistence.
   * This method is specifically designed for server deployments, which may include additional configurations such as ports and networks.
   * By default, it will expose ports 80 and 443, but this can be customized through the serverProps.
   * @param scope The scope where the resources will be defined
   * @param id The ID for the server component, which will be normalized to ensure it is valid for AWS resources.
   * @param serverProps An object containing the properties for the server. At this point it should include AWS-specific properties.
   * @param internalMachineComponentProps An object containing internal properties for the machine component, including AWS-specific properties.
   * @returns A Construct representing instance that is the AWS server.
   */
  deployBasicServer(
    scope: Construct,
    id: string,
    serverProps: ServerPropsInterface,
    internalMachineComponentProps: InternalMachineComponentPropsInterface,
  ): Construct {
    if (!serverProps.awsProps) {
      throw new Error(
        "Server-specific AWS properties are required for basic server.",
      );
    }
    if (!internalMachineComponentProps.awsProps) {
      throw new Error("Internal AWS properties are required for basic server.");
    }
    const awsProps: AwsServerProps = serverProps.awsProps;
    // They should come as this is an internal property we set
    const internalAWSProps: InternalAWSMachineComponentProps =
      internalMachineComponentProps.awsProps;

    const normalizedId = normalizeId(id);

    // Define the VPC
    const vpcId = this.getOrDefaultVPCId(scope, normalizedId, awsProps.vpcId);
    // Subnet ID + get the corresponding availability zone
    const subnetId = this.getOrDefaultSubnetId(
      scope,
      normalizedId,
      vpcId,
      awsProps.subnetId,
    );
    const subnetData = new DataAwsSubnet(scope, `${normalizedId}-subnet-az`, {
      id: subnetId,
    });
    // Security group ingress rules
    const additionalSecurityGroupIngressRules: SecurityGroupIngress[] = [
      this.getDefaultSSHSecurityGroup(),
      this.getDefaultHTTPSecurityGroup(),
      this.getDefaultHTTPSSecurityGroup(),
    ];
    const securityGroupIngressRules: SecurityGroupIngress[] =
      awsProps.securityGroupIngressRules ?? [];
    const allSecurityGroupIngressRules: SecurityGroupIngress[] =
      this.preserveUniqueRules(
        securityGroupIngressRules,
        additionalSecurityGroupIngressRules,
      );
    const securityGroup =
      awsProps.securityGroupId ??
      new SecurityGroup(scope, `${normalizedId}-sg`, {
        vpcId,
        ingress: allSecurityGroupIngressRules,
        egress: [
          { protocol: "-1", fromPort: 0, toPort: 0, cidrBlocks: ["0.0.0.0/0"] },
        ],
      }).id;

    // Create the EC2 instance
    const instance = new Instance(scope, `${normalizedId}-basic-server`, {
      ami: internalAWSProps.ami,
      instanceType: "t2.micro",
      availabilityZone: subnetData.availabilityZone,
      subnetId,
      vpcSecurityGroupIds: [securityGroup],
      associatePublicIpAddress: true,
      userData: generateUserData({
        enablePersistence: awsProps.usePersistence ?? false,
        userDataSetupFileDirectory: internalAWSProps.customInitScriptPath,
      }),
      tags: {
        Name: `${normalizedId}-basic-server`,
      },
    });

    if (awsProps.usePersistence) {
      this.createBasicVolumeAndAttachment(
        scope,
        normalizedId,
        instance,
        subnetData.availabilityZone,
      );
    }

    // Register the public IP as a Terraform output
    this.getInstancePublicIp(scope, normalizedId, instance);

    return instance;
  }

  /**
   * Generates an insecure AWS server using the provided properties.
   * This method is used to deploy an AWS EC2 instance with insecure server properties and optional EBS volume for persistence.
   * This method is specifically designed for server deployments, which may include additional configurations such as ports and networks.
   * By default, it will expose ports 22 (SSH) and 80 (HTTP), but this can be customized through the serverProps.
   * @param scope The scope where the resources will be defined
   * @param id The ID for the server component, which will be normalized to ensure it is valid for AWS resources.
   * @param serverProps An object containing the properties for the server. At this point it should include AWS-specific properties.
   * @param internalMachineComponentProps An object containing internal properties for the machine component, including AWS-specific properties.
   * @throws Error if AWS-specific properties are not provided in serverProps.
   * @throws Error if internal AWS properties are not provided in internalMachineComponentProps.
   * @returns A Construct representing instance that is the AWS server.
   */
  deployInsecureServer(
    scope: Construct,
    id: string,
    serverProps: ServerPropsInterface,
    internalMachineComponentProps: InternalMachineComponentPropsInterface,
  ): Construct {
    if (!serverProps.awsProps) {
      throw new Error(
        "Server-specific AWS properties are required for the insecure server.",
      );
    }
    if (!internalMachineComponentProps.awsProps) {
      throw new Error(
        "Internal AWS properties are required for the insecure server.",
      );
    }
    const awsProps: AwsServerProps = serverProps.awsProps;
    const internalAWSProps: InternalAWSMachineComponentProps =
      internalMachineComponentProps.awsProps;

    /* NORMALIZE THE ID FOR USING IT  */
    // Normalize the ID to ensure it is valid for AWS resources
    const normalizedId = normalizeId(id);

    // Define the VPC
    const vpcId = this.getOrDefaultVPCId(scope, normalizedId, awsProps.vpcId);
    // Subnet ID + get the corresponding availability zone
    const subnetId = this.getOrDefaultSubnetId(
      scope,
      normalizedId,
      vpcId,
      awsProps.subnetId,
    );
    const subnetData = new DataAwsSubnet(scope, `${normalizedId}-subnet-az`, {
      id: subnetId,
    });
    // Security group ingress rules
    const additionalSecurityGroupIngressRules: SecurityGroupIngress[] = [
      this.getDefaultSSHSecurityGroup(),
      this.getDefaultHTTPSecurityGroup(),
    ];
    const securityGroupIngressRules: SecurityGroupIngress[] =
      awsProps.securityGroupIngressRules ?? [];
    const allSecurityGroupIngressRules: SecurityGroupIngress[] =
      this.preserveUniqueRules(
        securityGroupIngressRules,
        additionalSecurityGroupIngressRules,
      );
    const securityGroup =
      awsProps.securityGroupId ??
      new SecurityGroup(scope, `${normalizedId}-sg`, {
        vpcId,
        ingress: allSecurityGroupIngressRules,
        egress: [
          { protocol: "-1", fromPort: 0, toPort: 0, cidrBlocks: ["0.0.0.0/0"] },
        ],
      }).id;

    // Create the EC2 instance
    const instance = new Instance(scope, `${normalizedId}-insecure-server`, {
      ami: internalAWSProps.ami,
      instanceType: "t2.micro",
      availabilityZone: subnetData.availabilityZone,
      subnetId,
      vpcSecurityGroupIds: [securityGroup],
      associatePublicIpAddress: true,
      userData: generateUserData({
        enablePersistence: awsProps.usePersistence ?? false,
        userDataSetupFileDirectory: internalAWSProps.customInitScriptPath,
      }),
      tags: {
        Name: `${normalizedId}-insecure-server`,
      },
    });

    if (awsProps.usePersistence) {
      this.createBasicVolumeAndAttachment(
        scope,
        normalizedId,
        instance,
        subnetData.availabilityZone,
      );
    }

    // Register the public IP as a Terraform output
    this.getInstancePublicIp(scope, normalizedId, instance);

    return instance;
  }

  /**
   * Generates a hardened AWS server using the provided properties.
   * This method is used to deploy an AWS EC2 instance with hardened server properties and optional EBS volume for persistence.
   * This method is specifically designed for server deployments, which may include additional configurations such as ports and networks.
   * By default, it will expose ports 22 (SSH), 80 (HTTP), and 443 (HTTPS), but this can be customized through the serverProps.
   * @param scope The scope where the resources will be defined
   * @param id The ID for the server component, which will be normalized to ensure it is valid for AWS resources.
   * @param serverProps An object containing the properties for the server. At this point it should include AWS-specific properties.
   * @param internalMachineComponentProps An object containing internal properties for the machine component, including AWS-specific properties.
   * @throws Error if AWS-specific properties are not provided in serverProps.
   * @throws Error if internal AWS properties are not provided in internalMachineComponentProps.
   * @returns A Construct representing instance that is the AWS server.
   */
  deployHardenedServer(
    scope: Construct,
    id: string,
    serverProps: ServerPropsInterface,
    internalMachineComponentProps: InternalMachineComponentPropsInterface,
  ): Construct {
    if (!serverProps.awsProps) {
      throw new Error(
        "Server-specific AWS properties are required for basic server.",
      );
    }
    if (!internalMachineComponentProps.awsProps) {
      throw new Error(
        "Internal AWS properties are required for the hardened server.",
      );
    }
    const awsProps: AwsServerProps = serverProps.awsProps;
    // They should come as this is an internal property we set
    const internalAWSProps: InternalAWSMachineComponentProps =
      internalMachineComponentProps.awsProps;

    const normalizedId = normalizeId(id);

    // Define the VPC
    const vpcId = this.getOrDefaultVPCId(scope, normalizedId, awsProps.vpcId);
    // Subnet ID + get the corresponding availability zone
    const subnetId = this.getOrDefaultSubnetId(
      scope,
      normalizedId,
      vpcId,
      awsProps.subnetId,
    );
    const subnetData = new DataAwsSubnet(scope, `${normalizedId}-subnet-az`, {
      id: subnetId,
    });
    // Security group ingress rules
    const additionalSecurityGroupIngressRules: SecurityGroupIngress[] = [
      this.getDefaultSSHSecurityGroup(),
      this.getDefaultHTTPSecurityGroup(),
      this.getDefaultHTTPSSecurityGroup(),
    ];
    const securityGroupIngressRules: SecurityGroupIngress[] =
      awsProps.securityGroupIngressRules ?? [];
    const allSecurityGroupIngressRules: SecurityGroupIngress[] =
      this.preserveUniqueRules(
        securityGroupIngressRules,
        additionalSecurityGroupIngressRules,
      );
    const securityGroup =
      awsProps.securityGroupId ??
      new SecurityGroup(scope, `${normalizedId}-sg`, {
        vpcId,
        ingress: allSecurityGroupIngressRules,
        egress: [
          { protocol: "-1", fromPort: 0, toPort: 0, cidrBlocks: ["0.0.0.0/0"] },
        ],
      }).id;

    // Create the EC2 instance
    const instance = new Instance(scope, `${normalizedId}-hardened-server`, {
      ami: internalAWSProps.ami,
      instanceType: "t2.micro",
      availabilityZone: subnetData.availabilityZone,
      subnetId,
      vpcSecurityGroupIds: [securityGroup],
      associatePublicIpAddress: true,
      userData: generateUserData({
        enablePersistence: awsProps.usePersistence ?? false,
        userDataSetupFileDirectory: internalAWSProps.customInitScriptPath,
      }),
      tags: {
        Name: `${normalizedId}-hardened-server`,
      },
    });

    if (awsProps.usePersistence) {
      this.createBasicVolumeAndAttachment(
        scope,
        normalizedId,
        instance,
        subnetData.availabilityZone,
      );
    }

    // Register the public IP as a Terraform output
    this.getInstancePublicIp(scope, normalizedId, instance);

    return instance;
  }

  /**
   * Generates a basic web stack using the provided properties.
   * This method is used to deploy a web stack using AWS, which can be either a LAMP or LEMP stack depending on the `stackType` property.
   * It will be used to set up a single instance with everything necessary to run a web stack (database, PHP, web server).
   * @param scope The construct scope where the resources will be defined
   * @param id The ID for the instance, which will be normalized to ensure it is valid for AWS resources.
   * @param stackType The type of stack to deploy, which can be either a basic web stack or a hardened web stack.
   * @param props An object containing the properties for the web stack. At this point it should include AWS-specific properties.
   * @throws Error if AWS-specific properties are not provided in props.
   */
  deployWebStack(
    scope: Construct,
    id: string,
    stackType: StackType,
    props: BaseWebStackProps,
  ): void {
    const normalizedId = normalizeId(id);

    switch (stackType) {
      case StackType.LAMP: {
        const lampStackProps: LampStackPropsInterface =
          props as LampStackPropsInterface;
        if (!lampStackProps.awsProps) {
          throw new Error("AWS properties are required for LAMP stack.");
        }
        const awsLampStackProps: AWSLampStackProps = lampStackProps.awsProps;
        return this.deployLampStack(scope, normalizedId, awsLampStackProps);
      }
      case StackType.LEMP: {
        const lempStackProps: LempStackPropsInterface =
          props as LempStackPropsInterface;
        if (!lempStackProps.awsProps) {
          throw new Error("AWS properties are required for LEMP stack.");
        }
        const awsLempStackProps: AWSLampStackProps = lempStackProps.awsProps;
        return this.deployLempStack(scope, normalizedId, awsLempStackProps);
      }
    }
  }

  private deployLampStack(
    scope: Construct,
    normalizedId: string,
    props: AWSLampStackProps,
  ): void {
    const lampStackProps: LampStackPropsInterface =
      props as LampStackPropsInterface;
    if (!lampStackProps.awsProps) {
      throw new Error("AWS properties are required for LAMP stack.");
    }
    const awsProps: AWSLampStackProps = lampStackProps.awsProps;

    const vpcId = this.getOrDefaultVPCId(scope, normalizedId, awsProps.vpcId);
    const subnetId = this.getOrDefaultSubnetId(
      scope,
      normalizedId,
      vpcId,
      awsProps.subnetId,
    );
    const subnetData = new DataAwsSubnet(scope, `${normalizedId}-subnet-az`, {
      id: subnetId,
    });
    // Security group ingress rules
    const securityGroupIngressRules: SecurityGroupIngress[] = [
      this.getDefaultSSHSecurityGroup(),
      this.getDefaultHTTPSecurityGroup(),
      this.getDefaultHTTPSSecurityGroup(),
    ];
    const securityGroup = new SecurityGroup(scope, `${normalizedId}-sg`, {
      vpcId,
      ingress: securityGroupIngressRules,
      egress: [
        { protocol: "-1", fromPort: 0, toPort: 0, cidrBlocks: ["0.0.0.0/0"] },
      ],
    }).id;

    const instance = new Instance(scope, `${normalizedId}-lamp-stack`, {
      ami: supportedUbuntuImages[ProviderType.AWS][UbuntuVersion.UBUNTU_22],
      instanceType: "t2.micro",
      availabilityZone: subnetData.availabilityZone,
      subnetId,
      vpcSecurityGroupIds: [securityGroup],
      associatePublicIpAddress: true,
      userData: generateUserData({
        enablePersistence: false,
        userDataSetupFileDirectory: "lamp-stack",
      }),
    });

    this.getInstancePublicIp(scope, normalizedId, instance);
  }

  private deployLempStack(
    scope: Construct,
    normalizedId: string,
    props: AWSLempStackProps,
  ): void {
    const lampStackProps: LampStackPropsInterface =
      props as LampStackPropsInterface;
    if (!lampStackProps.awsProps) {
      throw new Error("AWS properties are required for LAMP stack.");
    }
    const awsProps: AWSLampStackProps = lampStackProps.awsProps;

    const vpcId = this.getOrDefaultVPCId(scope, normalizedId, awsProps.vpcId);
    const subnetId = this.getOrDefaultSubnetId(
      scope,
      normalizedId,
      vpcId,
      awsProps.subnetId,
    );
    const subnetData = new DataAwsSubnet(scope, `${normalizedId}-subnet-az`, {
      id: subnetId,
    });
    // Security group ingress rules
    const securityGroupIngressRules: SecurityGroupIngress[] = [
      this.getDefaultSSHSecurityGroup(),
      this.getDefaultHTTPSecurityGroup(),
      this.getDefaultHTTPSSecurityGroup(),
    ];
    const securityGroup = new SecurityGroup(scope, `${normalizedId}-sg`, {
      vpcId,
      ingress: securityGroupIngressRules,
      egress: [
        { protocol: "-1", fromPort: 0, toPort: 0, cidrBlocks: ["0.0.0.0/0"] },
      ],
    }).id;

    // Create the EC2 instance
    const instance = new Instance(scope, `${normalizedId}-lemp-stack`, {
      ami: supportedUbuntuImages[ProviderType.AWS][UbuntuVersion.UBUNTU_22],
      instanceType: "t2.micro",
      availabilityZone: subnetData.availabilityZone,
      subnetId,
      vpcSecurityGroupIds: [securityGroup],
      associatePublicIpAddress: true,
      userData: generateUserData({
        enablePersistence: false,
        userDataSetupFileDirectory: "lemp-stack",
      }),
    });

    this.getInstancePublicIp(scope, normalizedId, instance);
  }

  // REGION UTILITY METHODS FOR CREATING AND WORKING WITH AWS RESOURCES //

  /**
   * Returns the VPC ID, either from the provided vpcId or the default VPC for the user's region.
   * If vpcId is not provided, it fetches the default VPC.
   * @param scope The construct scope where the resources will be defined
   * @param normalizedId The normalized ID for the resources
   * @param vpcId Optional VPC ID provided by the user
   * @returns The VPC ID to be used
   */
  private getOrDefaultVPCId(
    scope: Construct,
    normalizedId: string,
    vpcId?: string,
  ): string {
    return (
      vpcId ??
      new DataAwsVpc(scope, `${normalizedId}-default-vpc`, { default: true }).id
    );
  }

  /**
   * Returns the subnet ID, either from the provided subnetId or the first subnet in the VPC.
   * If subnetId is not provided, it fetches the first subnet in the VPC.
   * @param scope The construct scope where the resources will be defined
   * @param normalizedId The normalized ID for the resources
   * @param vpcId The VPC ID to which the subnet belongs
   * @param subnetId The subnet ID provided by the user, if any
   * @returns The subnet ID to be used, either the provided one or the first subnet in the VPC
   */
  private getOrDefaultSubnetId(
    scope: Construct,
    normalizedId: string,
    vpcId: string,
    subnetId?: string,
  ): string {
    if (subnetId) {
      return subnetId;
    }
    const subnets = new DataAwsSubnets(scope, `${normalizedId}-subnets`, {
      filter: [{ name: "vpc-id", values: [vpcId] }],
    });
    return Fn.element(subnets.ids, 0);
  }

  /**
   * Creates a basic EBS volume and attaches it to the given instance.
   * @param scope The construct scope where the resources will be defined
   * @param normalizedId The normalized ID for the resources
   * @param instance The AWS Instance resource to which the volume will be attached
   * @param availabilityZone The availability zone where the volume will be created
   * @returns
   */
  private createBasicVolumeAndAttachment(
    scope: Construct,
    normalizedId: string,
    instance: Instance,
    availabilityZone: string,
  ): VolumeAttachment {
    const volume = new EbsVolume(scope, `${normalizedId}-ebs-volume`, {
      availabilityZone: availabilityZone,
      size: 10,
      type: "gp3",
      tags: {
        Name: `${normalizedId}-volume`,
      },
    });
    return new VolumeAttachment(scope, `${normalizedId}-volume-attachment`, {
      deviceName: "/dev/sdf",
      instanceId: instance.id,
      volumeId: volume.id,
    });
  }

  /**
   * Given two arrays of SecurityGroupIngress rules, this method combines them and ensures that only unique rules are preserved.
   * It uses a Map to track uniqueness based on a combination of protocol, ports, and CIDR blocks.
   * This is useful to avoid duplicate rules when merging user-defined rules with default rules.
   * @param securityGroupIngressRules The existing security group ingress rules
   * @param additionalSecurityGroupIngressRules The additional security group ingress rules to be merged
   * @returns An array of unique SecurityGroupIngress rules
   */
  private preserveUniqueRules(
    securityGroupIngressRules: SecurityGroupIngress[],
    additionalSecurityGroupIngressRules: SecurityGroupIngress[],
  ): SecurityGroupIngress[] {
    const allSecurityGroupIngressRules: SecurityGroupIngress[] = [
      ...securityGroupIngressRules,
      ...additionalSecurityGroupIngressRules,
    ];

    const uniqueRules = new Map<string, SecurityGroupIngress>();

    allSecurityGroupIngressRules.forEach((rule) => {
      const protocol = rule.protocol ?? "any";
      const fromPort =
        rule.fromPort !== undefined ? rule.fromPort.toString() : "any";
      const toPort = rule.toPort !== undefined ? rule.toPort.toString() : "any";
      const cidrBlocks = Array.isArray(rule.cidrBlocks)
        ? rule.cidrBlocks.slice().sort().join(",")
        : "any";
      // Easier to use a string key for uniqueness
      const key = `${protocol}-${fromPort}-${toPort}-${cidrBlocks}`;
      if (!uniqueRules.has(key)) {
        uniqueRules.set(key, rule);
      }
    });

    return Array.from(uniqueRules.values());
  }

  /**
   * Registers a Terraform output for the public IP of the instance.
   * This is useful for accessing the instance after deployment.
   * @param scope Construct scope where the output will be defined
   * @param normId The normalized ID
   * @param instance The AWS Instance resource
   */
  private getInstancePublicIp(
    scope: Construct,
    normalizedId: string,
    instance: Instance,
  ): TerraformOutput {
    return new TerraformOutput(scope, `${normalizedId}-public-ip`, {
      value: instance.publicIp,
    });
  }

  /**
   * Returns the default security group ingress rule for SSH access.
   * This rule allows SSH access on port 22 from any IP address.
   * This is useful for remote management of the instance and geeneral access to it.
   * @returns A SecurityGroupIngress object for SSH access
   */
  private getDefaultSSHSecurityGroup(): SecurityGroupIngress {
    return {
      protocol: "tcp",
      fromPort: 22,
      toPort: 22,
      cidrBlocks: ["0.0.0.0/0"],
    };
  }

  /**
   * Returns the default security group ingress rule for HTTP access.
   * This rule allows HTTP access on port 80 from any IP address.
   * This is useful for web applications that do not require HTTPS.
   * @returns A SecurityGroupIngress object for HTTP access
   */
  private getDefaultHTTPSecurityGroup(): SecurityGroupIngress {
    return {
      protocol: "tcp",
      fromPort: 80,
      toPort: 80,
      cidrBlocks: ["0.0.0.0/0"],
    };
  }

  /**
   * Returns the default security group ingress rule for HTTPS access.
   * This rule allows HTTPS access on port 443 from any IP address.
   * This is useful for secure web applications.
   * @returns A SecurityGroupIngress object for HTTPS access
   */
  private getDefaultHTTPSSecurityGroup(): SecurityGroupIngress {
    return {
      protocol: "tcp",
      fromPort: 443,
      toPort: 443,
      cidrBlocks: ["0.0.0.0/0"],
    };
  }

  /**
   * Returns the default security group ingress rule for VNC access.
   * This rule allows VNC access on port 5900 from any IP address.
   * This is useful for remote desktop access to the instance.
   * @note This rule is not recommended for production environments due to security risks.
   * It is provided for convenience in development and testing scenarios.
   * @returns A SecurityGroupIngress object for VNC access
   */
  private getDefaultVNCSecurityGroup(): SecurityGroupIngress {
    return {
      protocol: "tcp",
      fromPort: 5900,
      toPort: 5900,
      cidrBlocks: ["0.0.0.0/0"],
    };
  }
}
