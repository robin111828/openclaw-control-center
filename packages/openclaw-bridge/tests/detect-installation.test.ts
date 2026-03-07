import { detectOpenClawInstallationFromEnv } from "../src/detect-installation";

function expectEqual<T>(actual: T, expected: T, label: string): void {
  if (actual !== expected) {
    throw new Error(
      `[${label}] Expected ${String(expected)}, got ${String(actual)}`,
    );
  }
}

export function runDetectInstallationTests(): void {
  expectEqual(
    detectOpenClawInstallationFromEnv({ OPENCLAW_INSTALLED: "true" }),
    "installed",
    "truthy string true should detect installation",
  );

  expectEqual(
    detectOpenClawInstallationFromEnv({ OPENCLAW_INSTALLED: "1" }),
    "installed",
    "truthy numeric flag should detect installation",
  );

  expectEqual(
    detectOpenClawInstallationFromEnv({ OPENCLAW_INSTALLED: "yes" }),
    "installed",
    "truthy yes flag should detect installation",
  );

  expectEqual(
    detectOpenClawInstallationFromEnv({ OPENCLAW_INSTALLED: "false" }),
    "unknown",
    "false flag should remain unknown",
  );

  expectEqual(
    detectOpenClawInstallationFromEnv({}),
    "unknown",
    "missing flag should remain unknown",
  );
}
