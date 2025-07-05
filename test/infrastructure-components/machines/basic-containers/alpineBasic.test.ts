//import { App, TerraformProvider, TerraformStack } from "cdktf";
import { App, TerraformStack, Testing } from "cdktf";
import { Construct } from "constructs";
//import { checkIsValidId } from "../../../../src/utils/stringUtils";
//import { BasicMachineComponentPropsInterface } from "../../../../src/props/props";
import { AlpineBasic } from "../../../../src/infrastructure-components/machines/basic-containers/alpineBasic";
import { ProviderType } from "../../../../src/providers/providerType";
//import { SingletonProviderFactory } from "../../../../src/providers/singletonProviderFactory";
//import { ProviderDeployStrategyFactory } from "../../../../src/providers/providerDeployStrategy/providerDeployStrategyFactory";
//import { AlpineVersion, supportedAlpineImages } from "../../../../src/supported-images/supportedMachineImages";

//import { Container } from "@cdktf/provider-docker/lib/container";
import { AlpineVersion } from "../../../../src/supported-images/supportedMachineImages";

class TestStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AlpineBasic(this, "Test", AlpineVersion.LATEST, {
      providerType: ProviderType.DOCKER,
      dockerProps: {
        containerName: "TestContainer",
      },
    });
  }
}

// Checks that:
// - AlpineBasic construct synthesizes without error.
// - It creates the expected Terraform resources.
test("creates a Docker container", () => {
  const app = new App();
  const stack = new TestStack(app, "test");

  const synth = Testing.synth(stack);
  const parsed = JSON.parse(synth);

  expect(parsed).toMatchSnapshot();
  expect(parsed.resource.docker_container).toBeDefined();
  expect(
    parsed.resource.docker_container["Test_Test-container_72A6054C"].name,
  ).toBe("Test-container");
});

/*jest.mock("../../../providers/singletonProviderFactory", () => ({
    SingletonProviderFactory: {
        getProvider: jest.fn(),
    },
}));

jest.mock("../../../providers/providerDeployStrategy/providerDeployStrategyFactory", () => ({
    ProviderDeployStrategyFactory: {
        getProviderDeployStrategy: jest.fn(() => ({
            deployBasicMachine: jest.fn(),
        })),
    }
}));*/

/*jest.mock("../../../../src/utils/stringUtils", () => ({
    checkIsValidId: jest.fn(),
}));

describe("AlpineBasic", () => {
    const mockScope = {} as Construct;
    const mockId = "test-alpine";
    const mockVersion = AlpineVersion.LATEST; // Example Alpine version, but it can only be one of the supported versions, the app doesn't let you enter anything you like
    const mockProvider = {} as TerraformProvider;
    const mockMachineProps: BasicMachineComponentPropsInterface = {
        providerType: ProviderType.DOCKER,
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should validate the ID", () => {
        new AlpineBasic(mockScope, mockId, mockVersion, mockMachineProps, mockProvider);
        expect(checkIsValidId).toHaveBeenCalledWith(mockId);
    });

    it("should call SingletonProviderFactory.getProvider with correct arguments", () => {
        new AlpineBasic(mockScope, mockId, mockVersion, mockMachineProps, mockProvider);
        expect(SingletonProviderFactory.getProvider).toHaveBeenCalledWith(
            ProviderType.DOCKER,
            expect.any(Construct),
            mockProvider,
        );
    });

    it("should call ProviderDeployStrategyFactory.getProviderDeployStrategy with correct arguments", () => {
        new AlpineBasic(mockScope, mockId, mockVersion, mockMachineProps, mockProvider);
        expect(ProviderDeployStrategyFactory.getProviderDeployStrategy).toHaveBeenCalledWith(
            ProviderType.DOCKER,
        );
    });

    it("should call deployBasicMachine with correct arguments", () => {
        const deployStrategyMock = ProviderDeployStrategyFactory.getProviderDeployStrategy(ProviderType.DOCKER);
        const imageWithTag = supportedAlpineImages[ProviderType.DOCKER][mockVersion];

        new AlpineBasic(mockScope, mockId, mockVersion, mockMachineProps, mockProvider);

        expect(deployStrategyMock.deployBasicMachine).toHaveBeenCalledWith(
            expect.any(Construct),
            mockId,
            mockMachineProps,
            {
                dockerProps: {
                    imageName: imageWithTag,
                },
            },
        );
    });
});*/
