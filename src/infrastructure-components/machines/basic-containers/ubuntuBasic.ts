import { Construct } from "constructs";
import {
  BasicMachineComponentPropsInterface,
  InternalMachineComponentPropsInterface,
} from "../../../props/props";
import { IDeployStrategy } from "../../../providers/providerDeployStrategy/deployStrategy";
import { UbuntuBase } from "../ubuntuBase";

export class UbuntuBasic extends UbuntuBase {
  protected deploy(
    strategy: IDeployStrategy,
    id: string,
    machineProps: BasicMachineComponentPropsInterface,
    imageIdentifier: string,
  ): Construct {
    return strategy.deployBasicMachine(
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
      },
    };
  }

  protected getAwsProps(
    imageIdentifier: string,
  ): InternalMachineComponentPropsInterface {
    return {
      awsProps: {
        ami: imageIdentifier,
      },
    };
  }
}
