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
    providerType: ProviderType.AWS,
    awsProps: {
      usePersistence: useVolume,
    },
  });

  return stack;
}

const debianVersions = [
  { version: DebianVersion.DEBIAN_12, expectedImage: "ami-0fbb72557598f5284" },
  { version: DebianVersion.DEBIAN_11, expectedImage: "ami-08b11b3defb3d4b52" },
  { version: DebianVersion.LATEST, expectedImage: "ami-0fbb72557598f5284" },
];

describe("DebianBasic AWS instance creation", () => {
  test.each(debianVersions)(
    "creates an AWS instance for %o",
    ({ version, expectedImage }) => {
      const stack = createTestStack(version, false);
      const synth = Testing.synth(stack);
      const parsed = JSON.parse(synth);

      expect(parsed).toMatchSnapshot();
      expect(parsed.resource.aws_instance).toBeDefined();

      const image =
        parsed.resource.aws_instance["Test_Test-basic-machine_D641CCA5"];
      expect(image.ami).toBe(expectedImage);
    },
  );

  test("creates a Debian Basic AWS instance with volume", () => {
    const stack = createTestStack(DebianVersion.LATEST, true);
    const synth = Testing.synth(stack);
    const parsed = JSON.parse(synth);

    expect(parsed).toMatchSnapshot();

    const volume =
      parsed.resource.aws_ebs_volume["Test_Test-ebs-volume_AABF43EC"];
    expect(volume.type).toBe("gp3");
  });
});
