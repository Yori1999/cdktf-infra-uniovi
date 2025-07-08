import { App, TerraformStack, Testing } from "cdktf";
import { DebianBasic } from "../../../../src/infrastructure-components/machines/basic-containers/debianBasic";
import { ProviderType } from "../../../../src/providers/providerType";
import { DebianVersion } from "../../../../src/supported-images/supportedMachineImages";

function createTestStack(
  version: DebianVersion,
  useVolume: boolean,
): TerraformStack {
  const app = new App();
  const stack = new TerraformStack(app, `test-${version}`);

  new DebianBasic(stack, "Test", version, {
    providerType: ProviderType.DOCKER,
    dockerProps: {
      useVolume: useVolume,
    },
  });

  return stack;
}

const debianVersions = [
  { version: DebianVersion.DEBIAN_12, expectedImage: "debian:bookworm" },
  { version: DebianVersion.DEBIAN_11, expectedImage: "debian:bullseye" },
  { version: DebianVersion.LATEST, expectedImage: "debian:latest" },
];

describe("DebianBasic Docker container creation", () => {
  test.each(debianVersions)(
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

  test("creates a Debian Basic Docker container with volume", () => {
    const stack = createTestStack(DebianVersion.LATEST, true);
    const synth = Testing.synth(stack);
    const parsed = JSON.parse(synth);

    expect(parsed).toMatchSnapshot();

    const container =
      parsed.resource.docker_container["Test_Test-container_72A6054C"];
    expect(container.volumes).toHaveLength(1);
  });
});
