import { TerraformProvider } from "cdktf";
import { Construct } from "constructs";
import {
  BasicMachineComponentPropsInterface,
  InternalMachineComponentPropsInterface,
} from "../../../props/props";
import { IDeployStrategy } from "../../../providers/providerDeployStrategy/deployStrategy";
import { ProviderDeployStrategyFactory } from "../../../providers/providerDeployStrategy/providerDeployStrategyFactory";
import { SingletonProviderFactory } from "../../../providers/singletonProviderFactory";
import {
  AlpineVersion,
  supportedAlpineImages,
} from "../../../supported-images/supportedMachineImages";
import { checkIsValidId } from "../../../utils/stringUtils";

export class AlpineBasic extends Construct {
  constructor(
    scope: Construct,
    id: string,
    version: AlpineVersion,
    machineProps: BasicMachineComponentPropsInterface,
    provider?: TerraformProvider,
  ) {
    // necesario normalizar el id
    checkIsValidId(id);

    super(scope, id);

    const deployWith: ProviderType = machineProps.providerType;

    if (Object.keys(supportedAlpineImages[deployWith]).length > 0) {
      const imageWithTag = (
        supportedAlpineImages[deployWith] as Record<AlpineVersion, string>
      )[version];
      if (imageWithTag != undefined) {
        SingletonProviderFactory.getProvider(deployWith, this, provider);
        const deployStrategy: IDeployStrategy =
          ProviderDeployStrategyFactory.getProviderDeployStrategy(deployWith);
        deployStrategy.deployBasicMachine(
          this,
          id,
          machineProps,
          this.getAdditionalProps(deployWith, imageWithTag),
        );
      }
    }
  }

  protected getAdditionalProps(
    providerType: ProviderType,
    imageIdentifier: string,
  ): InternalMachineComponentPropsInterface {
    switch (providerType) {
      case ProviderType.Docker:
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
