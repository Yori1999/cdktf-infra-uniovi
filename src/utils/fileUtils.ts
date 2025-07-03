import * as path from "path";

export function getDockerfilesPath(): string {
  return path.resolve(__dirname, "../infrastructure-assets/dockerfiles/");
}
