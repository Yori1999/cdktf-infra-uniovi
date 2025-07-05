import { ApacheServerBase } from "./apacheServerBase";
import {
  InternalMachineComponentPropsInterface,
  ServerPropsInterface,
} from "../../../props/props";
import { IDeployStrategy } from "../../../providers/providerDeployStrategy/deployStrategy";
import { supportedHardenedApacheImages } from "../../../supported-images/supportedServerImages";

export class HardenedApacheServer extends ApacheServerBase {
  protected get supportedApacheImagesMap(): Record<
    string,
    Record<string, string>
  > {
    return supportedHardenedApacheImages;
  }

  protected deploy(
    strategy: IDeployStrategy,
    id: string,
    props: ServerPropsInterface,
    imageIdentifier: string,
  ): void {
    strategy.deployHardenedServer(
      this,
      id,
      props,
      this.getAdditionalProps(props.providerType, imageIdentifier),
    );
  }

  protected getDockerProps(
    imageIdentifier: string,
  ): InternalMachineComponentPropsInterface {
    return {
      dockerProps: {
        imageName: imageIdentifier,
        // In this case, we'll be using a custom hardened image, so no need to curate a custom Dockerfile
      },
    };
  }

  protected getAWSProps(
    imageIdentifier: string,
  ): InternalMachineComponentPropsInterface {
    return {
      awsProps: {
        ami: imageIdentifier,
        customInitScriptPath: "apache-hardened",
      },
    };
  }
}
