# OpenClaw Control Center Roadmap v0.1

## Project Stage

Current stage: **foundation and open-source launch**

This version focuses on turning the project from an idea into a credible open-source repository with a clear direction, usable structure, and early contributor guidance.

---

## Milestone 0 — Open-source Foundation

### Goal
Establish the repository as a serious, contributor-friendly open-source project.

### Deliverables
- README.md
- README.zh.md
- LICENSE
- CONTRIBUTING.md
- CODE_OF_CONDUCT.md
- SECURITY.md
- PRD v0.1
- Roadmap v0.1

### Outcome
A public repository with clear positioning, contribution expectations, and initial product scope.

---

## Milestone 1 — Project Scaffold

### Goal
Set up the initial repository structure for future development.

### Deliverables
- monorepo structure
- apps/desktop
- apps/mobile
- packages/core
- packages/ui
- packages/connector-sdk
- packages/openclaw-bridge
- docs/architecture
- templates/
- connectors/example

### Outcome
A maintainable project layout ready for implementation.

---

## Milestone 2 — Desktop MVP Shell

### Goal
Build the minimum desktop control center shell.

### Deliverables
- dashboard page
- setup & environment page
- connectors page
- modes page
- status & logs page
- settings page

### Outcome
A visible product shell that demonstrates the main control-center concept.

---

## Milestone 3 — OpenClaw Bridge

### Goal
Create the first bridge layer between the control center and local OpenClaw environment.

### Deliverables
- installation detection
- config discovery
- config read/write
- command trigger interface
- normalized error handling

### Outcome
The control center can inspect and interact with the local OpenClaw instance.

---

## Milestone 4 — Connector MVP

### Goal
Support at least one guided connector onboarding flow.

### Deliverables
- connector SDK draft
- example connector
- one real connector onboarding flow
- connectivity test
- authorization status display

### Outcome
Users can connect one supported platform through a guided setup path.

---

## Milestone 5 — Mode System

### Goal
Introduce mode-based workflow switching.

### Deliverables
- writing mode
- office mode
- research mode
- automation mode
- template loading structure

### Outcome
Users can switch between practical usage modes without manually adjusting many settings.

---

## Milestone 6 — Mobile Pairing Path

### Goal
Prepare the first usable phone-as-remote-control flow.

### Deliverables
- pairing design
- QR-based linking flow
- mobile status page
- mode switching from mobile
- notification return path

### Outcome
Mobile becomes a lightweight control endpoint instead of only a message endpoint.

---

## Near-term Priorities

The highest short-term priorities are:

1. repository credibility
2. clear product boundaries
3. desktop MVP shell
4. bridge architecture
5. connector onboarding path

---

## Not in v0.1

The following are intentionally postponed:

- deep QQ integration
- multi-account support
- enterprise permission system
- remote cloud-hosted management
- team collaboration workflows
- billing system
- large-scale plugin marketplace

---

## Contributor-friendly Areas

Early contributors can most easily help in these areas:

- documentation
- UI mockups
- onboarding flow design
- connector abstraction discussion
- environment detection scripts
- example templates
- diagnostics ideas

---

## Release Plan

### v0.1.0-alpha
Repository foundation release.

Includes:
- project positioning
- contribution files
- PRD v0.1
- roadmap v0.1

### v0.1.1-alpha
Documentation and repository structure refinement.

Expected additions:
- improved README
- issue templates
- initial architecture notes
- scaffold planning

### v0.2.0-alpha
Early implementation release.

Expected additions:
- desktop shell
- first bridge prototype
- connector SDK draft

---

## Roadmap Principles

This roadmap follows several principles:

- start narrow
- make progress visible
- separate product core from connector details
- prefer guided UX over technical complexity
- keep the project contribution-friendly
- earn ecosystem expansion after MVP clarity
