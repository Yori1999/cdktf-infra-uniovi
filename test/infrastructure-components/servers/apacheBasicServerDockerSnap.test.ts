import { App, TerraformStack, Testing } from "cdktf";
import { ApacheServer } from "../../../src/infrastructure-components/servers/apache/basicApacheServer";
import { ProviderType } from "../../../src/providers/providerType";
import { ApacheVersion } from "../../../src/supported-images/supportedServerImages";

function createTestStack(
  version: ApacheVersion,
  useVolume: boolean,
): TerraformStack {
  const app = new App();
  const stack = new TerraformStack(app, `test-${version}`);

  new ApacheServer(stack, "Test", version, {
    providerType: ProviderType.DOCKER,
    dockerProps: {
      useVolume: useVolume,
    },
  });

  return stack;
}

const apacheVersions = [
  { version: ApacheVersion.LATEST, expectedImage: "httpd:latest" },
  { version: ApacheVersion.APACHE_DEBIAN, expectedImage: "httpd:bookworm" },
  { version: ApacheVersion.APACHE_ALPINE, expectedImage: "httpd:alpine" },
];

describe("Apache Basic Server Docker container creation", () => {
  test.each(apacheVersions)(
    "creates a Docker container for %o",
    ({ version, expectedImage }) => {
      const stack = createTestStack(version, false);
      const synth = Testing.synth(stack);
      const parsed = JSON.parse(synth);

      expect(parsed).toMatchSnapshot();
      expect(parsed.resource.docker_container).toBeDefined();

      const image = parsed.resource.docker_image["Test_Test-image_5197E2DB"];
      expect(image.name).toBe(expectedImage);
      expect(
        parsed.resource.docker_container["Test_Test-container_72A6054C"].ports,
      ).toHaveLength(2);
    },
  );

  test("creates a Docker container with volume", () => {
    const stack = createTestStack(ApacheVersion.LATEST, true);
    const synth = Testing.synth(stack);
    const parsed = JSON.parse(synth);

    expect(parsed).toMatchSnapshot();

    const container =
      parsed.resource.docker_container["Test_Test-container_72A6054C"];
    expect(container.volumes).toHaveLength(1);
  });
});
