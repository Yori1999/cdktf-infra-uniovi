import { Construct } from "constructs";
import {
  CustomMachineComponentPropsInterface,
  InternalMachineComponentPropsInterface,
} from "../../../props/props";
import { IDeployStrategy } from "../../../providers/providerDeployStrategy/deployStrategy";
import { UbuntuCustomBase } from "../ubuntuCustomBase";

export class UbuntuDesktop extends UbuntuCustomBase {
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
        dockerfilePath: "ubuntu-desktop",
        customImageName: "ubuntu-desktop",
        volumeContainerPath: "/home/ubuntu",
      },
    };
  }

  protected getAWSProps(
    imageIdentifier: string,
  ): InternalMachineComponentPropsInterface {
    return {
      awsProps: {
        ami: imageIdentifier,
        customInitScriptPath: "ubuntu-desktop",
      },
    };
  }
}
