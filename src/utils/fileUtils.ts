import * as path from "path";

export function getDockerfilePath(filename: string): string {
  return path.resolve(
    __dirname,
    "../../infrastructure-assets/dockerfiles",
    filename,
  );
}
