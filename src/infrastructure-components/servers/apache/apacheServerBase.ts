import { TerraformProvider } from "cdktf";
import { Construct } from "constructs";
import {
  InternalMachineComponentPropsInterface,
  ServerPropsInterface,
} from "../../../props/props";
import { IDeployStrategy } from "../../../providers/providerDeployStrategy/deployStrategy";
import { ProviderDeployStrategyFactory } from "../../../providers/providerDeployStrategy/providerDeployStrategyFactory";
import { ProviderType } from "../../../providers/providerType";
import { SingletonProviderFactory } from "../../../providers/singletonProviderFactory";
import { validateImageExists } from "../../../supported-images/supportedImagesValidator";
import { ApacheVersion } from "../../../supported-images/supportedServerImages";
import { checkIsValidId } from "../../../utils/stringUtils";

export abstract class ApacheServerBase extends Construct {
  protected createdApacheServer?: Construct;

  protected abstract get supportedApacheImagesMap(): Record<
    string,
    Record<string, string>
  >; // otherwise, JSII throws error JSII1003: Only string-indexed map types are supported

  constructor(
    scope: Construct,
    id: string,
    version: ApacheVersion,
    serverProps: ServerPropsInterface,
    provider?: TerraformProvider,
  ) {
    checkIsValidId(id);

    super(scope, id);

    this.init(id, version, serverProps, provider);
  }

  private init(
    id: string,
    version: ApacheVersion,
    serverProps: ServerPropsInterface,
    provider?: TerraformProvider,
  ): void {
    const deployWith: ProviderType = serverProps.providerType;

    const imagesForProvider: Record<ApacheVersion, string> =
      this.supportedApacheImagesMap[deployWith];
    const imageIdentifier: string = imagesForProvider[version];

    validateImageExists(imageIdentifier);

    SingletonProviderFactory.getProvider(deployWith, this, provider);
    const deployStrategy: IDeployStrategy =
      ProviderDeployStrategyFactory.getProviderDeployStrategy(deployWith);
    this.createdApacheServer = this.deploy(
      deployStrategy,
      id,
      serverProps,
      imageIdentifier,
    );
  }

  protected abstract deploy(
    strategy: IDeployStrategy,
    id: string,
    props: ServerPropsInterface,
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
