import { detectOpenClawInstallationFromEnv } from "./detect-installation";
import { findOpenClawConfigFromEnv } from "./find-config";
import { getOpenClawStatusFromEnv } from "./status";
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
 * Current implementation:
 * - delegates to a minimal environment-based config lookup
 *
 * Future versions should detect real config locations by platform.
 */
export function findOpenClawConfig(): OpenClawConfigLocation {
  return findOpenClawConfigFromEnv();
}

/**
 * Return a normalized OpenClaw status object for upper layers.
 *
 * Current implementation:
 * - delegates to the dedicated status composition module
 */
export function getOpenClawStatus(): OpenClawStatus {
  return getOpenClawStatusFromEnv();
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

export {
  findOpenClawConfigFromEnv,
  type BridgeConfigEnvironmentLike,
} from "./find-config";

export {
  getOpenClawStatusFromEnv,
  type BridgeStatusEnvironmentLike,
} from "./status";
