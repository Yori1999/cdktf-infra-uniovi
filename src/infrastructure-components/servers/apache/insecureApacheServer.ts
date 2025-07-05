import { ApacheServerBase } from "./apacheServerBase";
import {
  InternalMachineComponentPropsInterface,
  ServerPropsInterface,
} from "../../../props/props";
import { IDeployStrategy } from "../../../providers/providerDeployStrategy/deployStrategy";
import { ProviderType } from "../../../providers/providerType";
import {
  ApacheVersion,
  supportedApacheImages,
} from "../../../supported-images/supportedServerImages";

export class InsecureApacheServer extends ApacheServerBase {
  protected get supportedApacheImagesMap(): Record<
    ProviderType,
    Record<ApacheVersion, string>
  > {
    return supportedApacheImages;
  }

  protected deploy(
    strategy: IDeployStrategy,
    id: string,
    props: ServerPropsInterface,
    imageIdentifier: string,
  ): void {
    strategy.deployInsecureServer(
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
        customImageName: "apache-insecure",
        dockerfilePath: "apache-insecure",
      },
    };
  }

  protected getAWSProps(
    imageIdentifier: string,
  ): InternalMachineComponentPropsInterface {
    return {
      awsProps: {
        ami: imageIdentifier,
        customInitScriptPath: "apache-insecure",
      },
    };
  }
}
