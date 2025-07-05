import { TerraformProvider } from "cdktf";
import { Construct } from "constructs";
import {
  CustomMachineComponentPropsInterface,
  InternalMachineComponentPropsInterface,
} from "../../props/props";
import { IDeployStrategy } from "../../providers/providerDeployStrategy/deployStrategy";
import { ProviderDeployStrategyFactory } from "../../providers/providerDeployStrategy/providerDeployStrategyFactory";
import { ProviderType } from "../../providers/providerType";
import { SingletonProviderFactory } from "../../providers/singletonProviderFactory";
import {
  supportedUbuntuImages,
  UbuntuVersion,
} from "../../supported-images/supportedMachineImages";
import { checkIsValidId } from "../../utils/stringUtils";

export abstract class UbuntuCustomBase extends Construct {
  protected createdUbuntuConstruct?: Construct;

  constructor(
    scope: Construct,
    id: string,
    version: UbuntuVersion,
    machineProps: CustomMachineComponentPropsInterface,
    provider?: TerraformProvider,
  ) {
    checkIsValidId(id);

    super(scope, id);

    const deployWith: ProviderType = machineProps.providerType;
    const imageIdentifier: string = supportedUbuntuImages[deployWith][version];

    if (!imageIdentifier || imageIdentifier === "") {
      throw new Error(
        "This version of the machine doesn't exist for the given provider",
      );
    }

    SingletonProviderFactory.getProvider(deployWith, this, provider);
    const deployStrategy: IDeployStrategy =
      ProviderDeployStrategyFactory.getProviderDeployStrategy(deployWith);

    this.createdUbuntuConstruct = this.deploy(
      deployStrategy,
      id,
      machineProps,
      imageIdentifier,
    );
  }

  protected abstract deploy(
    strategy: IDeployStrategy,
    id: string,
    machineProps: CustomMachineComponentPropsInterface,
    imageIdentifier: string,
  ): Construct;

  protected getAdditionalProps(
    providerType: ProviderType,
    imageIdentifier: string,
  ): InternalMachineComponentPropsInterface {
    switch (providerType) {
      case ProviderType.DOCKER:
        return this.getDockerProps(imageIdentifier);
      case ProviderType.AWS:
        return this.getAWSProps(imageIdentifier);
      default:
        return {};
    }
  }

  protected abstract getDockerProps(
    imageIdentifier: string,
  ): InternalMachineComponentPropsInterface;

  protected abstract getAWSProps(
    imageIdentifier: string,
  ): InternalMachineComponentPropsInterface;
}
