import { DebianVersion, supportedDebianImages } from "./supportedMachineImages";
import { ProviderType } from "../providers/providerType";

export enum NginxVersion {
  LATEST = "latest",
}
export const supportedNginxImages = Object.freeze({
  [ProviderType.DOCKER]: {
    [NginxVersion.LATEST]: "nginx:latest",
  },
  [ProviderType.AWS]: {
    [NginxVersion.LATEST]:
      supportedDebianImages[ProviderType.AWS][DebianVersion.LATEST],
  },
}) satisfies Record<ProviderType, Record<NginxVersion, string>>;
export const supportedHardenedNginxImages = Object.freeze({
  [ProviderType.DOCKER]: {
    [NginxVersion.LATEST]: "rapidfort/nginx-official:latest",
  },
  [ProviderType.AWS]: {
    [NginxVersion.LATEST]: "ami-04ca7bd38fd01789c", // NGINX Plus App Protect - Ubuntu 20.04 Developer AMI
  },
}) satisfies Record<ProviderType, Record<NginxVersion, string>>;

export enum ApacheVersion {
  LATEST = "latest",
  APACHE_DEBIAN = "apacheDebian",
  APACHE_ALPINE = "apacheAlpine",
}
export const supportedApacheImages = Object.freeze({
  [ProviderType.DOCKER]: {
    [ApacheVersion.LATEST]: "httpd:latest",
    [ApacheVersion.APACHE_DEBIAN]: "httpd:bookworm",
    [ApacheVersion.APACHE_ALPINE]: "httpd:alpine",
  },
  [ProviderType.AWS]: {
    [ApacheVersion.LATEST]:
      supportedDebianImages[ProviderType.AWS][DebianVersion.LATEST],
    [ApacheVersion.APACHE_DEBIAN]:
      supportedDebianImages[ProviderType.AWS][DebianVersion.LATEST],
    [ApacheVersion.APACHE_ALPINE]: "", // doesn't exist, so we cannot assign this version but we need to include it
  },
}) satisfies Record<ProviderType, Record<ApacheVersion, string>>;
export const supportedHardenedApacheImages = Object.freeze({
  [ProviderType.DOCKER]: {
    [ApacheVersion.LATEST]: "rapidfort/apache-official:latest", // It is equivalent to httpd:latest
    [ApacheVersion.APACHE_DEBIAN]: "rapidfort/apache-official:2.4.63-bookworm",
    [ApacheVersion.APACHE_ALPINE]:
      "rapidfort/apache-official:2.4.63-alpine3.22",
  },
  [ProviderType.AWS]: {
    [ApacheVersion.LATEST]:
      supportedDebianImages[ProviderType.AWS][DebianVersion.LATEST],
    [ApacheVersion.APACHE_DEBIAN]:
      supportedDebianImages[ProviderType.AWS][DebianVersion.LATEST],
    [ApacheVersion.APACHE_ALPINE]: "", // doesn't exist, so we cannot assign this version but we need to include it
  },
}) satisfies Record<ProviderType, Record<ApacheVersion, string>>;
