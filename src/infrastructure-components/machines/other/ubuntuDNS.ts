import { Construct } from "constructs";
import {
  CustomMachineComponentPropsInterface,
  InternalMachineComponentPropsInterface,
} from "../../../props/props";
import { IDeployStrategy } from "../../../providers/providerDeployStrategy/deployStrategy";
import { UbuntuBase } from "../ubuntuBase";

export class UbuntuDNS extends UbuntuBase {
  protected deploy(
    strategy: IDeployStrategy,
    id: string,
    machineProps: CustomMachineComponentPropsInterface,
    imageIdentifier: string,
  ): Construct {
    return strategy.deployCustomMachine(
      this,
      id,
      machineProps,
      this.getAdditionalProps(machineProps.providerType, imageIdentifier),
    );
  }

  protected getDockerProps(
    imageIdentifier: string,
  ): InternalMachineComponentPropsInterface {
    return {
      dockerProps: {
        imageName: imageIdentifier,
        dockerfilePath: "ubuntu-dns",
        customImageName: "ubuntu-dns",
        // We pass this needed port JUST IN CASE the user hasn't passed anything there
        additionalPorts: [
          {
            internal: 53,
          },
        ],
      },
    };
  }

  protected getAWSProps(
    imageIdentifier: string,
  ): InternalMachineComponentPropsInterface {
    return {
      awsProps: {
        ami: imageIdentifier,
        customInitScriptPath: "ubuntu-dns",
        additionalSecurityGroupIngressRules: [
          {
            protocol: "tcp",
            fromPort: 53,
            toPort: 53,
            cidrBlocks: ["0.0.0.0/0"],
          },
          {
            protocol: "udp",
            fromPort: 53,
            toPort: 53,
            cidrBlocks: ["0.0.0.0/0"],
          },
        ], // Needs UDP for regular DNS queries and TCP for large responses (e.g. zone transfers, DNSSEC)
      },
    };
  }
}
