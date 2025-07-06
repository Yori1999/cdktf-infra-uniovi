import { LampBase } from "./lampBase";
import { StackType } from "./stackType";
import { LampStackPropsInterface } from "../../props/props";
import { IDeployStrategy } from "../../providers/providerDeployStrategy/deployStrategy";

export class LampStack extends LampBase {
  protected deploy(
    strategy: IDeployStrategy,
    id: string,
    stackType: StackType,
    stackProps: LampStackPropsInterface,
  ): void {
    return strategy.deployWebStack(this, id, stackType, stackProps);
  }
}
