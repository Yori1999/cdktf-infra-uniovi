import * as path from "path";
import { getDockerfilePath } from "../../src/utils/fileUtils";

describe("getDockerfilePath", () => {
  it("should return the correct path for a given filename", () => {
    const filename = "Dockerfile";
    const expectedPath = path.resolve(
      __dirname,
      "../../infrastructure-assets/dockerfiles",
      filename,
    );

    const result = getDockerfilePath(filename);

    expect(result).toBe(expectedPath);
  });

  it("should handle filenames with special characters", () => {
    const filename = "Dockerfile.prod";
    const expectedPath = path.resolve(
      __dirname,
      "../../infrastructure-assets/dockerfiles",
      filename,
    );

    const result = getDockerfilePath(filename);

    expect(result).toBe(expectedPath);
  });

  it("should handle empty filenames", () => {
    const filename = "";
    const expectedPath = path.resolve(
      __dirname,
      "../../infrastructure-assets/dockerfiles",
      filename,
    );

    const result = getDockerfilePath(filename);

    expect(result).toBe(expectedPath);
  });
});
