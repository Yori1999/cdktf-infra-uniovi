import { Construct } from "constructs";
import {
  BasicMachineComponentPropsInterface,
  CustomMachineComponentPropsInterface,
  InternalMachineComponentPropsInterface,
  ServerPropsInterface,
} from "../../props/props";

export interface IDeployStrategy {
  deployBasicMachine(
    scope: Construct,
    id: string,
    props: BasicMachineComponentPropsInterface,
    internalMachineComponentProps: InternalMachineComponentPropsInterface,
  ): Construct;

  deployCustomMachine(
    scope: Construct,
    id: string,
    props: CustomMachineComponentPropsInterface,
    internalMachineComponentProps: InternalMachineComponentPropsInterface,
  ): Construct;

  deployBasicServer(
    scope: Construct,
    id: string,
    props: ServerPropsInterface,
    internalMachineComponentProps: InternalMachineComponentPropsInterface,
  ): void;
  //deployInsecureServer(scope: Construct, id: string, props: ServerPropsInterface, internalMachineComponentProps: InternalMachineComponentPropsInterface) : void;
  //deployHardenedServer(scope: Construct, id: string, props: ServerPropsInterface, internalMachineComponentProps: InternalMachineComponentPropsInterface) : void;

  //deployWebStack(scope: Construct, id: string, props: BaseWebStackProps) : void;
  //deployHardenedWebStack(scope: Construct, id: string, props: BaseWebStackProps) : void;
}
