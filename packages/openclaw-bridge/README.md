# openclaw-bridge

`openclaw-bridge` is the package responsible for connecting OpenClaw Control Center to the local OpenClaw environment.

Its purpose is to isolate OpenClaw-specific operational logic from the UI and higher-level product layers.

## Responsibilities

The bridge layer is expected to handle:

- detection of local OpenClaw installation
- discovery of configuration files
- reading and writing configuration
- normalized status reporting
- safe command triggering
- error normalization for upper layers

## Non-goals

This package should not:

- contain desktop UI logic
- contain mobile UI logic
- hardcode connector-specific workflows
- become a dumping ground for unrelated automation logic

## Initial v0 Scope

The first implementation scope is intentionally small.

### Planned functions

- `detectOpenClawInstallation()`
- `findOpenClawConfig()`
- `getOpenClawStatus()`

These functions are intended to establish the first usable bridge path between the future desktop app and the local OpenClaw runtime.

## Suggested structure

```text
openclaw-bridge/
├─ README.md
└─ src/
   └─ index.ts
