export enum AlpineVersion {
  LATEST = "latest",
}
export const supportedAlpineImages = Object.freeze({
  [ProviderType.Docker]: {
    [AlpineVersion.LATEST]: "alpine:latest",
  },
  [ProviderType.AWS]: {
    [AlpineVersion.LATEST]: "ami-0d2e72039b74fb9d7", // Alpine Linux on AWS from Solve DevOps, from Marketplace
  },
}) satisfies Record<ProviderType, Record<AlpineVersion, string>>;

export enum DebianVersion {
  LATEST = "latest",
  DEBIAN_12 = "debian12",
  DEBIAN_11 = "debian11",
}
export const supportedDebianImages = Object.freeze({
  [ProviderType.Docker]: {
    [DebianVersion.LATEST]: "debian:latest",
    [DebianVersion.DEBIAN_12]: "debian:bookworm",
    [DebianVersion.DEBIAN_11]: "debian:bullseye",
  },
  [ProviderType.AWS]: {
    [DebianVersion.LATEST]: "ami-0fbb72557598f5284", // all AMIs are from AWS Marketplace
    [DebianVersion.DEBIAN_12]: "ami-0fbb72557598f5284", // Debian 12 (HVM), EBS General Purpose (SSD) Volume Type. Community developed free GNU/Linux distribution.
    [DebianVersion.DEBIAN_11]: "ami-08b11b3defb3d4b52", // Debian 11
  },
}) satisfies Record<ProviderType, Record<DebianVersion, string>>;

export enum UbuntuVersion {
  LATEST = "latest",
  UBUNTU_18 = "ubuntu18",
  UBUNTU_20 = "ubuntu20",
  UBUNTU_22 = "ubuntu22",
  UBUNTU_24 = "ubuntu24",
}
export const supportedUbuntuImages = Object.freeze({
  [ProviderType.Docker]: {
    [UbuntuVersion.LATEST]: "ubuntu:latest",
    [UbuntuVersion.UBUNTU_18]: "ubuntu:18.04",
    [UbuntuVersion.UBUNTU_20]: "ubuntu:20.04",
    [UbuntuVersion.UBUNTU_22]: "ubuntu:22.04",
    [UbuntuVersion.UBUNTU_24]: "ubuntu:24.04",
  },
  [ProviderType.AWS]: {
    [UbuntuVersion.LATEST]: "ami-01f23391a59163da9",
    [UbuntuVersion.UBUNTU_18]: "",
    [UbuntuVersion.UBUNTU_20]: "",
    [UbuntuVersion.UBUNTU_22]: "ami-021d9f8e43481e7da", // Ubuntu Server 22.04 LTS (HVM), SSD Volume Type
    [UbuntuVersion.UBUNTU_24]: "ami-01f23391a59163da9", // Ubuntu Server 24.04 LTS (HVM), SSD Volume Type
  },
}) satisfies Record<ProviderType, Record<UbuntuVersion, string>>;
// satisfies preserva claves exactas sin ampliarlas, a diferencia de : Type, que las "ensancha".
