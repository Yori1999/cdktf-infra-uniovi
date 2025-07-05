import * as path from "path";
import { getDockerfilesPath } from "../../src/utils/fileUtils";

describe("getDockerfilesPath", () => {
  it("should return the correct path to the dockerfiles directory", () => {
    const expectedPath = path.resolve(
      __dirname,
      "../../infrastructure-assets/dockerfiles/",
    );
    const result = getDockerfilesPath();
    expect(result).toBe(expectedPath);
  });
});
