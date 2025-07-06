import { Construct } from "constructs";
import { StackType } from "./stackType";
import { LempStackPropsInterface } from "../../props/props";
import { IDeployStrategy } from "../../providers/providerDeployStrategy/deployStrategy";
import { ProviderDeployStrategyFactory } from "../../providers/providerDeployStrategy/providerDeployStrategyFactory";
import { ProviderType } from "../../providers/providerType";
import { SingletonProviderFactory } from "../../providers/singletonProviderFactory";
import { checkIsValidId } from "../../utils/stringUtils";

export abstract class LempBase extends Construct {
  constructor(
    scope: Construct,
    id: string,
    stackProps: LempStackPropsInterface,
  ) {
    checkIsValidId(id);

    super(scope, id);

    const deployWith: ProviderType = stackProps.providerType;

    SingletonProviderFactory.getProvider(deployWith, this);
    const deployStrategy: IDeployStrategy =
      ProviderDeployStrategyFactory.getProviderDeployStrategy(deployWith);

    this.deploy(deployStrategy, id, StackType.LEMP, stackProps);
  }

  protected abstract deploy(
    strategy: IDeployStrategy,
    id: string,
    stackType: StackType,
    stackProps: LempStackPropsInterface,
  ): void;
}
