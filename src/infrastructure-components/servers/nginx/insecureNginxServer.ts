import { Construct } from "constructs";
import { NginxServerBase } from "./nginxServerBase";
import {
  InternalMachineComponentPropsInterface,
  ServerPropsInterface,
} from "../../../props/props";
import { IDeployStrategy } from "../../../providers/providerDeployStrategy/deployStrategy";
import { supportedNginxImages } from "../../../supported-images/supportedServerImages";

export class InsecureNginxServer extends NginxServerBase {
  protected get supportedNginxImagesMap(): Record<
    string,
    Record<string, string>
  > {
    return supportedNginxImages;
  }

  protected deploy(
    strategy: IDeployStrategy,
    id: string,
    props: ServerPropsInterface,
    imageIdentifier: string,
  ): Construct {
    return strategy.deployInsecureServer(
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
        customImageName: "nginx-insecure",
        dockerfilePath: "nginx-insecure",
      },
    };
  }

  protected getAWSProps(
    imageIdentifier: string,
  ): InternalMachineComponentPropsInterface {
    return {
      awsProps: {
        ami: imageIdentifier,
        customInitScriptPath: "nginx-insecure",
      },
    };
  }
}
