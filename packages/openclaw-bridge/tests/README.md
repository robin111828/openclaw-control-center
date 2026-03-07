# openclaw-bridge tests

This directory is intended to hold tests for the `openclaw-bridge` package.

The initial goal is modest:

- define what should be tested
- keep bridge behavior verifiable
- prepare for a future test runner setup

## Early testing targets

The first bridge testing targets should include:

- installation detection behavior
- config discovery behavior
- normalized status composition
- stable return shapes for upper layers

## Why this matters

The bridge layer is the contract between the product shell and the local OpenClaw environment.

Even in an early-stage repository, keeping this layer testable helps prevent fragile product behavior later.

## Future structure

```text
tests/
├─ README.md
├─ detect-installation.test.ts
├─ find-config.test.ts
└─ status.test.ts
