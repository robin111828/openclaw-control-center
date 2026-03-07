# modes

This directory is intended to define the modes area of the desktop application.

The modes area should help users switch between common usage patterns without manually adjusting many low-level settings.

## Purpose

The modes area should help users work with:

- predefined workflow modes
- mode switching readiness
- mode descriptions
- future default configuration presets
- future workflow-specific quick actions

## Responsibilities

This layer should be responsible for:

- mode-oriented view models
- mode summary data
- mode selection and display structure
- future mode-specific preset composition

## Non-goals

This layer should not:

- contain low-level bridge implementation logic
- replace detailed settings pages
- hardcode unrelated application behavior
- become a dumping ground for generic utilities

## Suggested future structure

```text
modes/
├─ README.md
├─ modes-view-model.ts
├─ modes-summary.ts
└─ index.ts
