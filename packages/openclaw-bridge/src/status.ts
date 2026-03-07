import { detectOpenClawInstallationFromEnv } from "./detect-installation";
import { findOpenClawConfigFromEnv } from "./find-config";
import { OpenClawStatus } from "./types";

export interface BridgeStatusEnvironmentLike {
  OPENCLAW_INSTALLED?: string;
  OPENCLAW_CONFIG_PATH?: string;
}

/**
 * Build a normalized OpenClaw status object from an environment-like source.
 *
 * Current strategy:
 * - derive installation status from OPENCLAW_INSTALLED
 * - derive config location from OPENCLAW_CONFIG_PATH
 * - return a user-facing message based on discovered information
 *
 * Future versions can extend this with:
 * - filesystem checks
 * - command availability checks
 * - richer diagnostic metadata
 */
export function getOpenClawStatusFromEnv(
  env: BridgeStatusEnvironmentLike = {},
): OpenClawStatus {
  const installationStatus = detectOpenClawInstallationFromEnv(env);
  const config = findOpenClawConfigFromEnv(env);

  return {
    installationStatus,
    config,
    message:
      installationStatus === "installed"
        ? "OpenClaw appears to be installed."
        : config.exists
          ? "OpenClaw config path was discovered."
          : "Bridge status is currently using a placeholder implementation.",
  };
}
