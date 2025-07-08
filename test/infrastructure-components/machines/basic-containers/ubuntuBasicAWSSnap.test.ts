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
    providerType: ProviderType.AWS,
    awsProps: {
      usePersistence: useVolume,
    },
  });

  return stack;
}

const ubuntuVersions = [
  { version: UbuntuVersion.UBUNTU_22, expectedImage: "ami-021d9f8e43481e7da" },
  { version: UbuntuVersion.UBUNTU_24, expectedImage: "ami-01f23391a59163da9" },
  { version: UbuntuVersion.LATEST, expectedImage: "ami-01f23391a59163da9" },
];

describe("UbuntuBasic AWS container creation", () => {
  test.each(ubuntuVersions)(
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

  test("creates an AWS instance with volume", () => {
    const stack = createTestStack(UbuntuVersion.UBUNTU_22, true);
    const synth = Testing.synth(stack);
    const parsed = JSON.parse(synth);

    expect(parsed).toMatchSnapshot();

    const volume =
      parsed.resource.aws_ebs_volume["Test_Test-ebs-volume_AABF43EC"];
    expect(volume.type).toBe("gp3");
  });
});
