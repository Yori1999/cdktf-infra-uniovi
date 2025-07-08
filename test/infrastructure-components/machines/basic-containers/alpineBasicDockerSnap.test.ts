import { App, TerraformStack, Testing } from "cdktf";
import { AlpineBasic } from "../../../../src/infrastructure-components/machines/basic-containers/alpineBasic";
import { ProviderType } from "../../../../src/providers/providerType";
import { AlpineVersion } from "../../../../src/supported-images/supportedMachineImages";

function createTestStack(
  version: AlpineVersion,
  useVolume: boolean,
): TerraformStack {
  const app = new App();
  const stack = new TerraformStack(app, `test-${version}`);

  new AlpineBasic(stack, "Test", version, {
    providerType: ProviderType.DOCKER,
    dockerProps: {
      useVolume: useVolume,
    },
  });

  return stack;
}

const alpineVersions = [
  { version: AlpineVersion.LATEST, expectedImage: "alpine:latest" },
];

describe("AlpineBasic Docker container creation", () => {
  test.each(alpineVersions)(
    "creates a Docker container for %o",
    ({ version, expectedImage }) => {
      const stack = createTestStack(version, false);
      const synth = Testing.synth(stack);
      const parsed = JSON.parse(synth);

      expect(parsed).toMatchSnapshot();
      expect(parsed.resource.docker_container).toBeDefined();

      const image = parsed.resource.docker_image["Test_Test-image_5197E2DB"];
      expect(image.name).toBe(expectedImage);
    },
  );

  test("creates an AlpineBasic Docker container with volume", () => {
    const stack = createTestStack(AlpineVersion.LATEST, true);
    const synth = Testing.synth(stack);
    const parsed = JSON.parse(synth);

    expect(parsed).toMatchSnapshot();

    const container =
      parsed.resource.docker_container["Test_Test-container_72A6054C"];
    expect(container.volumes).toHaveLength(1);
  });
});
