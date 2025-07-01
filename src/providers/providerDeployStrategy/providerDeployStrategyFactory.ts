import { ProviderType } from "../providerType";
import { AwsDeployStrategy } from "./awsDeployStrategy";
import { IDeployStrategy } from "./deployStrategy";
import { DockerDeployStrategy } from "./dockerDeployStrategy";

export class ProviderDeployStrategyFactory {
  // Realmente no retorna nada, recordar que estamos tratando con un enfoque imperativo pero para
  // DECLARAR recursos, no hace falta ni guardarlos
  static getProviderDeployStrategy(
    providerType: ProviderType,
  ): IDeployStrategy {
    switch (providerType) {
      case ProviderType.DOCKER:
        return this.getDockerDeployStrategy();
      case ProviderType.AWS:
        return this.getAWSDeployStrategy();
      default:
        throw new Error(
          "Provider does not have an associated deployment strategy yet",
        );
    }
  }

  private static getDockerDeployStrategy(): DockerDeployStrategy {
    return new DockerDeployStrategy();
  }

  private static getAWSDeployStrategy(): AwsDeployStrategy {
    return new AwsDeployStrategy();
  }

  // Prevents instantiation, just in case
  private constructor() {}
}
