import { Construct } from "constructs";
import { IDeployStrategy } from "../../../providers/providerDeployStrategy/deployStrategy";
import { UbuntuBase } from "../ubuntuBase";
import { CustomMachineComponentPropsInterface, InternalMachineComponentPropsInterface} from "../../../props/props";

export class UbuntuDev extends UbuntuBase {
    
    protected deploy(strategy: IDeployStrategy, id: string, machineProps: CustomMachineComponentPropsInterface, imageIdentifier: string): Construct {
        return strategy.deployCustomMachine(this, id, machineProps, this.getAdditionalProps(machineProps.providerType, imageIdentifier));
    }

    protected getDockerProps(imageIdentifier: string): InternalMachineComponentPropsInterface {
        return {
            dockerProps: {
                imageName: imageIdentifier,
                dockerfilePath: "ubuntu-dev",
                customImageName: "ubuntu-dev",
                volumeContainerPath: "/home/ubuntu"
            }
        };
    }
    
    protected getAWSProps(imageIdentifier: string): InternalMachineComponentPropsInterface {
        return {
            awsProps: {
                ami: imageIdentifier,
                customInitScriptPath: "ubuntu-dev",
            }
        };
    }
}