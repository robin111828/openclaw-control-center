# dashboard

This directory is intended to define the dashboard area of the desktop application.

The dashboard should become the first user-facing page that summarizes the current OpenClaw state and the most important control-center information.

## Purpose

The dashboard should provide an at-a-glance overview of:

- OpenClaw installation state
- configuration discovery state
- navigation entry points
- current product status summary
- future quick actions

## Responsibilities

This layer should be responsible for:

- dashboard-specific view models
- summary-oriented UI data
- top-level product overview logic
- future quick action entry composition

## Non-goals

This layer should not:

- contain low-level bridge logic
- own connector-specific internals
- replace diagnostics pages
- become a generic dumping ground for unrelated page utilities

## Suggested future structure

```text
dashboard/
├─ README.md
├─ dashboard-view-model.ts
└─ dashboard-summary.ts
