import { AwsProvider } from "@cdktf/provider-aws/lib/provider";
import { DockerProvider } from "@cdktf/provider-docker/lib/provider";
import { TerraformProvider } from "cdktf";
import { Construct } from "constructs";
import { ProviderType } from "./providerType";

export class SingletonProviderFactory {
  // We could've chosen not to return anything but... we might need it
  static getProvider(
    providerType: ProviderType,
    scope: Construct,
    existingProvider?: TerraformProvider,
  ): TerraformProvider {
    if (existingProvider) {
      return existingProvider;
    }

    if (!this.providers[providerType]) {
      const provider = SingletonProviderFactory.createProvider(
        providerType,
        scope,
      );
      this.providers[providerType] = provider;
    }

    return this.providers[providerType];
  }

  private static providers: { [key in ProviderType]?: TerraformProvider } = {};

  /**
   * Creates a provider based on a given type, with either the default properties or the properties passed by the user
   * @param providerType the type of the provider to create
   * @param scope
   * @param properties a set of properties that may override the default ones
   * @returns
   */
  private static createProvider(
    providerType: ProviderType,
    scope: Construct,
  ): TerraformProvider {
    switch (providerType) {
      case ProviderType.DOCKER:
        return new DockerProvider(scope, "docker", {});
      case ProviderType.AWS:
        return new AwsProvider(scope, "aws", {
          region: "eu-west-1",
        });
    }
  }

  // Prevents instantiation, just in case
  private constructor() {}
}
