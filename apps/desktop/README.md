# desktop-app

The desktop app is the primary control interface for OpenClaw Control Center.

It is intended to provide a guided, visual, and local-first experience for managing OpenClaw across setup, configuration, diagnostics, connectors, and mode switching.

## Responsibilities

The desktop app is expected to handle:

- setup and onboarding flows
- environment and installation checks
- visual configuration management
- connector onboarding wizard
- system status and diagnostics display
- mode switching
- user-facing control interactions

## Non-goals

The desktop app should not:

- directly embed low-level OpenClaw operational logic
- hardcode connector internals
- replace the bridge layer
- become a catch-all location for unrelated logic

## Relationship to other packages

The desktop app will eventually rely on:

- `@openclaw-control-center/openclaw-bridge`
- future core state packages
- future shared UI packages

Its role is to present a usable product shell, not to own every internal concern.

## Initial v0 Scope

The first desktop implementation should stay intentionally small.

### Initial focus

- establish app structure
- define the first visible shell
- connect to placeholder bridge status APIs
- prepare for setup and diagnostics pages

## Suggested future structure

```text
desktop/
├─ README.md
├─ package.json
└─ src/
   ├─ app/
   ├─ pages/
   └─ components/
