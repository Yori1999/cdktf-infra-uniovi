import { Construct } from "constructs";
import {
  CustomMachineComponentPropsInterface,
  InternalMachineComponentPropsInterface,
} from "../../../props/props";
import { IDeployStrategy } from "../../../providers/providerDeployStrategy/deployStrategy";
import { UbuntuCustomBase } from "../ubuntuCustomBase";

export class UbuntuPro extends UbuntuCustomBase {
  protected ubuntuProToken?: string;

  protected deploy(
    strategy: IDeployStrategy,
    id: string,
    machineProps: CustomMachineComponentPropsInterface,
    imageIdentifier: string,
  ): Construct {
    // Fail "fast" in case we don't have a token set as param
    // Important: THIS IS COMMON, so we'll catch it here instead of in the deployCustomMachine (it's the same logic for all providers)
    this.ubuntuProToken = process.env.UBUNTU_PRO_TOKEN;

    this.checkUbuntuProTokenProvided();

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
      ubuntuProToken: this.ubuntuProToken,
      dockerProps: {
        imageName: imageIdentifier,
        dockerfilePath: "ubuntu-pro",
        customImageName: "ubuntu-pro",
        volumeContainerPath: "/home/ubuntu",
      },
    };
  }

  protected getAWSProps(
    imageIdentifier: string,
  ): InternalMachineComponentPropsInterface {
    return {
      ubuntuProToken: this.ubuntuProToken,
      awsProps: {
        ami: imageIdentifier,
        customInitScriptPath: "ubuntu-pro",
      },
    };
  }

  private checkUbuntuProTokenProvided(): void {
    if (!this.ubuntuProToken) {
      throw new Error(
        "Ubuntu Pro token has not been set. You need to provide an Ubuntu Pro token, by setting UBUNTU_PRO_TOKEN with the --var option when calling cdktf deploy",
      );
    }
  }
}
