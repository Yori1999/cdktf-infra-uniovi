import { TerraformProvider } from "cdktf";
import { Construct } from "constructs";
import {
  BasicMachineComponentPropsInterface,
  InternalMachineComponentPropsInterface,
} from "../../../props/props";
import { IDeployStrategy } from "../../../providers/providerDeployStrategy/deployStrategy";
import { ProviderDeployStrategyFactory } from "../../../providers/providerDeployStrategy/providerDeployStrategyFactory";
import { ProviderType } from "../../../providers/providerType";
import { SingletonProviderFactory } from "../../../providers/singletonProviderFactory";
import { validateImageExists } from "../../../supported-images/supportedImagesValidator";
import {
  supportedUbuntuImages,
  UbuntuVersion,
} from "../../../supported-images/supportedMachineImages";
import { checkIsValidId } from "../../../utils/stringUtils";

export class UbuntuBasic extends Construct {
  constructor(
    scope: Construct,
    id: string,
    version: UbuntuVersion,
    machineProps: BasicMachineComponentPropsInterface,
    provider?: TerraformProvider,
  ) {
    // necesario normalizar el id
    checkIsValidId(id);

    super(scope, id);

    const deployWith: ProviderType = machineProps.providerType;
    const imageIdentifier: string = supportedUbuntuImages[deployWith][version];

    validateImageExists(imageIdentifier);

    SingletonProviderFactory.getProvider(deployWith, this, provider);
    const deployStrategy: IDeployStrategy =
      ProviderDeployStrategyFactory.getProviderDeployStrategy(deployWith);
    deployStrategy.deployBasicMachine(
      this,
      id,
      machineProps,
      this.getAdditionalProps(deployWith, imageIdentifier),
    );
  }

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

  protected getAdditionalProps(
    providerType: ProviderType,
    imageIdentifier: string,
  ): InternalMachineComponentPropsInterface {
    switch (providerType) {
      case ProviderType.DOCKER:
        return {
          dockerProps: {
            imageName: imageIdentifier,
          },
        };
      case ProviderType.AWS:
        return {
          awsProps: {
            ami: imageIdentifier,
          },
        };
      default:
        return {};
    }
  }
}
