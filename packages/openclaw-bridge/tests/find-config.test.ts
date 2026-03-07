import { findOpenClawConfigFromEnv } from "../src/find-config";

function expectEqual<T>(actual: T, expected: T, label: string): void {
  if (actual !== expected) {
    throw new Error(
      `[${label}] Expected ${String(expected)}, got ${String(actual)}`,
    );
  }
}

export function runFindConfigTests(): void {
  const discovered = findOpenClawConfigFromEnv({
    OPENCLAW_CONFIG_PATH: "/tmp/openclaw/config.json",
  });

  expectEqual(
    discovered.path,
    "/tmp/openclaw/config.json",
    "config path should be returned when provided",
  );

  expectEqual(
    discovered.exists,
    true,
    "config should be marked as existing when path is provided",
  );

  const missing = findOpenClawConfigFromEnv({});

  expectEqual(
    missing.path,
    null,
    "missing config path should return null",
  );

  expectEqual(
    missing.exists,
    false,
    "missing config path should return exists=false",
  );
}
