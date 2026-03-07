import {
  OpenClawConfigLocation,
  OpenClawInstallationStatus,
  OpenClawStatus,
} from "./types";

/**
 * Detect whether OpenClaw appears to be installed.
 *
 * This is currently a placeholder implementation.
 * Future versions should perform real local environment checks.
 */
export function detectOpenClawInstallation(): OpenClawInstallationStatus {
  return "unknown";
}

/**
 * Find the likely OpenClaw configuration path.
 *
 * This is currently a placeholder implementation.
 * Future versions should detect real config locations by platform.
 */
export function findOpenClawConfig(): OpenClawConfigLocation {
  return {
    path: null,
    exists: false,
  };
}

/**
 * Return a normalized OpenClaw status object for upper layers.
 *
 * This allows future UI layers to consume a stable structure
 * even before the real bridge implementation is complete.
 */
export function getOpenClawStatus(): OpenClawStatus {
  const installationStatus = detectOpenClawInstallation();
  const config = findOpenClawConfig();

  return {
    installationStatus,
    config,
    message:
      "Bridge status is currently using a placeholder implementation.",
  };
}

export type {
  OpenClawConfigLocation,
  OpenClawInstallationStatus,
  OpenClawStatus,
} from "./types";
