import { LempBase } from "./lempBase";
import { StackType } from "./stackType";
import { LempStackPropsInterface } from "../../props/props";
import { IDeployStrategy } from "../../providers/providerDeployStrategy/deployStrategy";

export class LempStack extends LempBase {
  protected deploy(
    strategy: IDeployStrategy,
    id: string,
    stackType: StackType,
    stackProps: LempStackPropsInterface,
  ): void {
    return strategy.deployWebStack(this, id, stackType, stackProps);
  }
}
