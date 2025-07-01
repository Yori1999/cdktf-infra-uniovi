import * as fs from "fs";
import * as path from "path";

interface UserDataOptions {
  userProvidedUserData?: string;
  enablePersistence: boolean;
  userDataSetupFileDirectory?: string;
  ubuntuProToken?: string;
}

export function generateUserData(userDataOptions: UserDataOptions): string {
  const lines: string[] = [];

  if (userDataOptions.userProvidedUserData) {
    if (!userDataOptions.userProvidedUserData.trim().startsWith("#!")) {
      lines.unshift("#!/bin/bash");
    }
    lines.push(userDataOptions.userProvidedUserData.trim());
  } else {
    lines.push("#!/bin/bash");
  }

  if (userDataOptions.userDataSetupFileDirectory) {
    const basePath = path.resolve(
      __dirname,
      "../../infrastructure-assets/userdata/" +
        userDataOptions.userDataSetupFileDirectory,
    );
    const scriptPath = path.join(basePath, "init.sh");
    const scriptExists = fs.existsSync(scriptPath);
    if (scriptExists) {
      const initScript = fs.readFileSync(scriptPath, "utf-8");
      lines.push("mkdir -p /opt");
      lines.push("cat <<EOF > /opt/init.sh");
      lines.push(initScript.trim());
      lines.push("EOF");
      lines.push("chmod +x /opt/init.sh");
      if (userDataOptions.ubuntuProToken) {
        lines.push("/opt/init.sh '${ubuntuProToken}'");
      } else {
        lines.push("/opt/init.sh");
      }
    } else {
      throw new Error(`User data init script not found at: ${scriptPath}`);
    }
  }

  if (userDataOptions.enablePersistence) {
    lines.push("");
    lines.push("# Volume setup");
    lines.push(
      [
        "(",
        "  while [ ! -e /dev/xvdf ]; do sleep 1; done",
        "  mkfs -t ext4 /dev/xvdf",
        "  mkdir -p /mnt/data",
        "  mount /dev/xvdf /mnt/data",
        ") &",
      ].join("\n"), // Otherwise it was giving indentation issues, it's more readable this way despite it being more clunky
    );
  }

  return lines.join("\n");
}
