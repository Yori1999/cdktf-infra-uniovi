import { validateImageExists } from "../../src/supported-images/supportedImagesValidator";

describe("validateImageExists", () => {
  it("should throw an error if the imageIdentifier is an empty string", () => {
    expect(() => validateImageExists("")).toThrow(
      "This version of the machine doesn't exist for the given provider",
    );
  });

  it("should throw an error if the imageIdentifier is a string with only spaces", () => {
    expect(() => validateImageExists("   ")).toThrow(
      "This version of the machine doesn't exist for the given provider",
    );
  });

  it("should not throw an error if the imageIdentifier is a valid non-empty string", () => {
    expect(() => validateImageExists("valid-image")).not.toThrow();
  });
});
