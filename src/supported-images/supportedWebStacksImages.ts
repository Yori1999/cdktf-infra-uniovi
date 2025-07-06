// Utility file for defining supported images of software used for defining a LAMP/LEMP stack for different providers

import { ProviderType } from "../providers/providerType";

export enum PhpMyAdminVersion {
  LATEST = "latest",
}
export const supportedPhpMyAdminImages = Object.freeze({
  [ProviderType.DOCKER]: {
    [PhpMyAdminVersion.LATEST]: "phpmyadmin:latest",
  },
  [ProviderType.AWS]: {
    [PhpMyAdminVersion.LATEST]: "", // review
  },
}) satisfies Record<ProviderType, Record<PhpMyAdminVersion, string>>;

export enum ApachePhpVersion {
  PHP_APACHE_8_2 = "phpApache82",
  PHP_APACHE_8_3 = "phpApache83",
}
export const supportedApachePhpImages = Object.freeze({
  [ProviderType.DOCKER]: {
    [ApachePhpVersion.PHP_APACHE_8_2]: "php:8.2.28-apache",
    [ApachePhpVersion.PHP_APACHE_8_3]: "php:8.3.21-apache",
  },
  [ProviderType.AWS]: {
    [ApachePhpVersion.PHP_APACHE_8_2]: "", // review -> we're going to install everything OVER a regular Ubuntu Machine
    [ApachePhpVersion.PHP_APACHE_8_3]: "", // review
  },
}) satisfies Record<ProviderType, Record<ApachePhpVersion, string>>;

export enum NginxPhpVersion {
  PHP_NGINX_8_2 = "phpNginx82",
}
export const supportedNginxPhpImages = Object.freeze({
  [ProviderType.DOCKER]: {
    [NginxPhpVersion.PHP_NGINX_8_2]: "php:8.2-fpm",
  },
  [ProviderType.AWS]: {
    [NginxPhpVersion.PHP_NGINX_8_2]: "", // review
  },
}) satisfies Record<ProviderType, Record<NginxPhpVersion, string>>;

export enum MySQLVersion {
  LATEST = "latest",
  LTS = "lts",
  MYSQL_9_3 = "mysql93",
  MYSQL_8_4 = "mysql84",
}
export const supportedMySqlImages = Object.freeze({
  [ProviderType.DOCKER]: {
    [MySQLVersion.LATEST]: "mysql:latest",
    [MySQLVersion.LTS]: "mysql:lts",
    [MySQLVersion.MYSQL_9_3]: "mysql:9.3.0",
    [MySQLVersion.MYSQL_8_4]: "mysql:8.4.5",
  },
  [ProviderType.AWS]: {
    [MySQLVersion.LATEST]: "", // review
    [MySQLVersion.LTS]: "", // review
    [MySQLVersion.MYSQL_9_3]: "", // review
    [MySQLVersion.MYSQL_8_4]: "", // review
  },
}) satisfies Record<ProviderType, Record<MySQLVersion, string>>;
export const supportedHardenedMySqlImages = Object.freeze({
  [ProviderType.DOCKER]: {
    [MySQLVersion.LATEST]: "rapidfort/mysql-official:latest",
    [MySQLVersion.LTS]: "rapidfort/mysql-official:8.4",
    [MySQLVersion.MYSQL_9_3]: "rapidfort/mysql-official:9.3.0",
    [MySQLVersion.MYSQL_8_4]: "rapidfort/mysql-official:8.4",
  },
  [ProviderType.AWS]: {
    [MySQLVersion.LATEST]: "", // review
    [MySQLVersion.LTS]: "", // review
    [MySQLVersion.MYSQL_9_3]: "", // review
    [MySQLVersion.MYSQL_8_4]: "", // review
  },
}) satisfies Record<ProviderType, Record<MySQLVersion, string>>;
