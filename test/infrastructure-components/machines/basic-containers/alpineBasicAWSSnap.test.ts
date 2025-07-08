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
    providerType: ProviderType.AWS,
    awsProps: {
      usePersistence: useVolume,
    },
  });

  return stack;
}

const alpineVersions = [
  { version: AlpineVersion.LATEST, expectedImage: "ami-0d2e72039b74fb9d7" },
];

describe("AlpineBasic AWS instance creation", () => {
  test.each(alpineVersions)(
    "creates an AWS instance for %o",
    ({ version, expectedImage }) => {
      const stack = createTestStack(version, false);
      const synth = Testing.synth(stack);
      const parsed = JSON.parse(synth);

      expect(parsed).toMatchSnapshot();
      expect(parsed.resource.aws_instance).toBeDefined();

      const instance =
        parsed.resource.aws_instance["Test_Test-basic-machine_D641CCA5"];
      expect(instance.ami).toBe(expectedImage);
    },
  );

  test("creates an AlpineBasic AWS instance with volume", () => {
    const stack = createTestStack(AlpineVersion.LATEST, true);
    const synth = Testing.synth(stack);
    const parsed = JSON.parse(synth);

    expect(parsed).toMatchSnapshot();

    const volume =
      parsed.resource.aws_ebs_volume["Test_Test-ebs-volume_AABF43EC"];
    expect(volume.type).toBe("gp3");
  });
});
