import { Construct } from "constructs";
import { NginxServerBase } from "./nginxServerBase";
import {
  InternalMachineComponentPropsInterface,
  ServerPropsInterface,
} from "../../../props/props";
import { IDeployStrategy } from "../../../providers/providerDeployStrategy/deployStrategy";
import { supportedHardenedNginxImages } from "../../../supported-images/supportedServerImages";

export class HardenedNginxServer extends NginxServerBase {
  protected get supportedNginxImagesMap(): Record<
    string,
    Record<string, string>
  > {
    return supportedHardenedNginxImages;
  }

  protected deploy(
    strategy: IDeployStrategy,
    id: string,
    props: ServerPropsInterface,
    imageIdentifier: string,
  ): Construct {
    return strategy.deployHardenedServer(
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
        // In this case, we'll be using a hardened AMI from Nginx, so no need to curate any custom scripts
      },
    };
  }
}
