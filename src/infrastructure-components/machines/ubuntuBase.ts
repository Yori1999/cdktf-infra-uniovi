import { TerraformProvider } from "cdktf";
import { Construct } from "constructs";
import {
  BasicMachineComponentPropsInterface,
  InternalMachineComponentPropsInterface,
} from "../../props/props";
import { IDeployStrategy } from "../../providers/providerDeployStrategy/deployStrategy";
import { ProviderDeployStrategyFactory } from "../../providers/providerDeployStrategy/providerDeployStrategyFactory";
import { SingletonProviderFactory } from "../../providers/singletonProviderFactory";
import {
  supportedUbuntuImages,
  UbuntuVersion,
} from "../../supported-images/supportedMachineImages";
import { checkIsValidId } from "../../utils/stringUtils";

export abstract class UbuntuBase extends Construct {
  protected createdUbuntuConstruct?: Construct;

  constructor(
    scope: Construct,
    id: string,
    version: UbuntuVersion,
    machineProps: BasicMachineComponentPropsInterface,
    provider?: TerraformProvider,
  ) {
    checkIsValidId(id);

    super(scope, id);

    const deployWith: ProviderType = machineProps.providerType;
    const imageIdentifier: string = supportedUbuntuImages[deployWith][version];

    if (!imageIdentifier) {
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
    machineProps: BasicMachineComponentPropsInterface,
    imageIdentifier: string,
  ): Construct;

  protected getAdditionalProps(
    providerType: ProviderType,
    imageIdentifier: string,
  ): InternalMachineComponentPropsInterface {
    switch (providerType) {
      case ProviderType.Docker:
        return this.getDockerProps(imageIdentifier);
      case ProviderType.AWS:
        return this.getAwsProps(imageIdentifier);
      default:
        return {};
    }
  }

  protected abstract getDockerProps(
    imageIdentifier: string,
  ): InternalMachineComponentPropsInterface;

  protected abstract getAwsProps(
    imageIdentifier: string,
  ): InternalMachineComponentPropsInterface;
}
