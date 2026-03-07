# desktop app structure

This directory is intended to hold the top-level app shell structure for the desktop application.

It represents the first layer above the raw entry file and should gradually define how the desktop product is organized.

## Purpose

The `app/` layer should help structure the desktop product into clear, user-facing areas such as:

- dashboard
- setup
- connectors
- modes
- status and diagnostics
- settings

## Responsibilities

This layer should be responsible for:

- app-level structure
- shell composition
- top-level navigation concepts
- page grouping
- app-wide layout conventions

## Non-goals

This layer should not:

- contain low-level OpenClaw bridge logic
- directly handle connector internals
- become a dumping ground for unrelated utilities

## Suggested future structure

```text
app/
├─ README.md
├─ shell/
├─ navigation/
├─ dashboard/
├─ setup/
├─ connectors/
├─ modes/
├─ diagnostics/
└─ settings/
