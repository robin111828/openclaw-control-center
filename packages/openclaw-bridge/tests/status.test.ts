import { getOpenClawStatusFromEnv } from "../src/status";

function expectEqual<T>(actual: T, expected: T, label: string): void {
  if (actual !== expected) {
    throw new Error(
      `[${label}] Expected ${String(expected)}, got ${String(actual)}`,
    );
  }
}

export function runStatusTests(): void {
  const installed = getOpenClawStatusFromEnv({
    OPENCLAW_INSTALLED: "true",
  });

  expectEqual(
    installed.installationStatus,
    "installed",
    "installed flag should produce installed status",
  );

  expectEqual(
    installed.message,
    "OpenClaw appears to be installed.",
    "installed status should produce installed message",
  );

  const configOnly = getOpenClawStatusFromEnv({
    OPENCLAW_CONFIG_PATH: "/tmp/openclaw/config.json",
  });

  expectEqual(
    configOnly.config.path,
    "/tmp/openclaw/config.json",
    "config-only status should include discovered config path",
  );

  expectEqual(
    configOnly.message,
    "OpenClaw config path was discovered.",
    "config-only status should produce config discovery message",
  );

  const placeholder = getOpenClawStatusFromEnv({});

  expectEqual(
    placeholder.installationStatus,
    "unknown",
    "missing env should keep installation status unknown",
  );

  expectEqual(
    placeholder.message,
    "Bridge status is currently using a placeholder implementation.",
    "missing env should keep placeholder message",
  );
}
