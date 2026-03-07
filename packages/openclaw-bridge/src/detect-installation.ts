import { OpenClawInstallationStatus } from "./types";

/**
 * A minimal environment shape so this package does not depend directly
 * on Node.js globals in its earliest form.
 */
export interface BridgeEnvironmentLike {
  OPENCLAW_INSTALLED?: string;
}

/**
 * Normalize common truthy environment values.
 */
function isTruthyFlag(value: string | undefined): boolean {
  if (!value) {
    return false;
  }

  const normalized = value.trim().toLowerCase();
  return normalized === "1" || normalized === "true" || normalized === "yes";
}

/**
 * Detect whether OpenClaw appears to be installed.
 *
 * Current strategy:
 * - if an environment-like object explicitly indicates installation, return "installed"
 * - otherwise return "unknown"
 *
 * Future versions can extend this with:
 * - platform-specific path checks
 * - command availability checks
 * - config discovery integration
 */
export function detectOpenClawInstallationFromEnv(
  env: BridgeEnvironmentLike = {},
): OpenClawInstallationStatus {
  if (isTruthyFlag(env.OPENCLAW_INSTALLED)) {
    return "installed";
  }

  return "unknown";
}
