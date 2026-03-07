import { detectOpenClawInstallationFromEnv } from "./detect-installation";
import {
  OpenClawConfigLocation,
  OpenClawInstallationStatus,
  OpenClawStatus,
} from "./types";

/**
 * Detect whether OpenClaw appears to be installed.
 *
 * Current implementation:
 * - delegates to a minimal environment-based detector
 *
 * Future versions should extend this with real local checks.
 */
export function detectOpenClawInstallation(): OpenClawInstallationStatus {
  return detectOpenClawInstallationFromEnv();
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
      installationStatus === "installed"
        ? "OpenClaw appears to be installed."
        : "Bridge status is currently using a placeholder implementation.",
  };
}

export type {
  OpenClawConfigLocation,
  OpenClawInstallationStatus,
  OpenClawStatus,
} from "./types";

export {
  detectOpenClawInstallationFromEnv,
  type BridgeEnvironmentLike,
} from "./detect-installation";
