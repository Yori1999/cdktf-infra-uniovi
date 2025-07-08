import { Construct } from "constructs";
import { StackType } from "../../infrastructure-components/stacks/stackType";
import {
  BaseWebStackProps,
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
  ): Construct;

  deployInsecureServer(
    scope: Construct,
    id: string,
    props: ServerPropsInterface,
    internalMachineComponentProps: InternalMachineComponentPropsInterface,
  ): Construct;

  deployHardenedServer(
    scope: Construct,
    id: string,
    props: ServerPropsInterface,
    internalMachineComponentProps: InternalMachineComponentPropsInterface,
  ): Construct;

  deployWebStack(
    scope: Construct,
    id: string,
    stackType: StackType,
    props: BaseWebStackProps,
  ): void;
}
