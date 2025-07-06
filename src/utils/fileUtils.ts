import * as path from "path";

export function getDockerfilePath(specificDirectory: string): string {
  return path.resolve(
    __dirname,
    "../../infrastructure-assets/dockerfiles",
    specificDirectory,
  );
}
