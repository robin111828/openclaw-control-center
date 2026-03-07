# connectors

This directory is intended to define the connectors area of the desktop application.

The connectors area should help users understand, configure, and manage the platforms that OpenClaw Control Center can connect to.

## Purpose

The connectors area should help users work with:

- supported connector types
- connector readiness
- onboarding flow entry points
- connector status visibility
- future authorization and repair flows

## Responsibilities

This layer should be responsible for:

- connector-oriented view models
- connector summary data
- connector onboarding entry composition
- future connector status and action presentation

## Non-goals

This layer should not:

- contain low-level connector implementation logic
- replace bridge-level detection logic
- own unrelated application state
- become a dumping ground for generic utilities

## Suggested future structure

```text
connectors/
├─ README.md
├─ connectors-view-model.ts
├─ connectors-summary.ts
└─ index.ts
 
