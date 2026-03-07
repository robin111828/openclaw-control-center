# setup

This directory is intended to define the setup area of the desktop application.

The setup area should guide users through installation checks, environment readiness, and the first usable path toward running OpenClaw Control Center.

## Purpose

The setup area should help users understand and complete:

- OpenClaw installation readiness
- configuration discovery readiness
- environment validation
- first-run onboarding steps
- future repair and re-check flows

## Responsibilities

This layer should be responsible for:

- setup-oriented view models
- onboarding flow state
- setup summary data
- future install / recheck action entry points

## Non-goals

This layer should not:

- contain low-level bridge implementation details
- replace diagnostics pages
- own connector-specific onboarding
- become a generic dumping ground for unrelated page logic

## Suggested future structure

```text
setup/
├─ README.md
├─ setup-view-model.ts
├─ setup-summary.ts
└─ index.ts
