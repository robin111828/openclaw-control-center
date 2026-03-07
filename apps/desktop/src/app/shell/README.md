# desktop app shell

This directory is intended to define the outer shell of the desktop application.

The shell is the first visible product layer users interact with. It should provide the structural frame that holds navigation, status presentation, and page routing in the future.

## Purpose

The shell layer should make the product feel coherent and navigable.

It is expected to provide:

- top-level app frame
- global layout structure
- navigation container
- high-level status presentation
- space for future route or page composition

## Responsibilities

This layer should be responsible for:

- shell-level composition
- app frame definition
- layout boundaries
- top navigation or side navigation structure
- high-level status slot placement

## Non-goals

This layer should not:

- implement low-level bridge logic
- own connector-specific workflows
- contain detailed page business logic
- become a place for unrelated helper code

## Suggested future structure

```text
shell/
├─ README.md
├─ shell-state.ts
├─ shell-layout.ts
└─ shell-navigation.ts
