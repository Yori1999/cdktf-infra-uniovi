import { App, TerraformStack, Testing } from "cdktf";
import { UbuntuBasic } from "../../../../src/infrastructure-components/machines/basic-containers/ubuntuBasic";
import { ProviderType } from "../../../../src/providers/providerType";
import { UbuntuVersion } from "../../../../src/supported-images/supportedMachineImages";

function createTestStack(
  version: UbuntuVersion,
  useVolume: boolean,
): TerraformStack {
  const app = new App();
  const stack = new TerraformStack(app, `test-${version}`);

  new UbuntuBasic(stack, "Test", version, {
    providerType: ProviderType.DOCKER,
    dockerProps: {
      useVolume: useVolume,
    },
  });

  return stack;
}

const ubuntuVersions = [
  { version: UbuntuVersion.UBUNTU_18, expectedImage: "ubuntu:18.04" },
  { version: UbuntuVersion.UBUNTU_20, expectedImage: "ubuntu:20.04" },
  { version: UbuntuVersion.UBUNTU_22, expectedImage: "ubuntu:22.04" },
  { version: UbuntuVersion.UBUNTU_24, expectedImage: "ubuntu:24.04" },
  { version: UbuntuVersion.LATEST, expectedImage: "ubuntu:latest" },
];

describe("UbuntuBasic Docker container creation", () => {
  test.each(ubuntuVersions)(
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

  test("creates a Docker container with volume", () => {
    const stack = createTestStack(UbuntuVersion.UBUNTU_22, true);
    const synth = Testing.synth(stack);
    const parsed = JSON.parse(synth);

    expect(parsed).toMatchSnapshot();

    const container =
      parsed.resource.docker_container["Test_Test-container_72A6054C"];
    expect(container.volumes).toHaveLength(1);
  });
});
