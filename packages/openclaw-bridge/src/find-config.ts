import { OpenClawConfigLocation } from "./types";

export interface BridgeConfigEnvironmentLike {
  OPENCLAW_CONFIG_PATH?: string;
}

/**
 * Find the likely OpenClaw configuration path from an environment-like object.
 *
 * Current strategy:
 * - if OPENCLAW_CONFIG_PATH is provided, return it as an existing candidate
 * - otherwise return a null placeholder result
 *
 * Future versions can extend this with:
 * - platform-specific default paths
 * - local filesystem checks
 * - workspace-based config discovery
 */
export function findOpenClawConfigFromEnv(
  env: BridgeConfigEnvironmentLike = {},
): OpenClawConfigLocation {
  const configPath = env.OPENCLAW_CONFIG_PATH?.trim();

  if (configPath) {
    return {
      path: configPath,
      exists: true,
    };
  }

  return {
    path: null,
    exists: false,
  };
}
