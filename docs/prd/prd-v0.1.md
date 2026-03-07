# OpenClaw Control Center PRD v0.1

## 1. Project Overview

### 1.1 Project Name
**OpenClaw Control Center**

Chinese name suggestion: **智爪中控**

### 1.2 One-line Positioning
A cross-device control hub for OpenClaw that makes setup, connector onboarding, device linking, and task management visual, guided, and easy to use.

### 1.3 Background

OpenClaw is powerful, but the real-world setup and daily usage path is still too engineering-oriented for many users.

Common friction points include:

- CLI-first onboarding
- Complicated connector setup
- Weak mobile control experience
- Invisible configuration state
- Hard-to-debug failures
- Fragmented cross-device experience

What users often need is not another chat entry point, but a dedicated **control layer** designed specifically for OpenClaw.

## 2. Product Opportunity

There is a clear product opportunity in building a control center that:

- reduces setup complexity
- simplifies connector authorization
- turns mobile into a remote control, not just a message inbox
- exposes status, logs, and permissions visually
- provides mode-based workflows for common use cases

## 3. Target Users

### 3.1 Power Users
Users already using OpenClaw who want easier setup, easier maintenance, and mobile access.

### 3.2 Technical Creators / Builders
Users who want to switch models, connectors, skills, templates, and modes through a visual interface.

### 3.3 Open-source Contributors
Developers who want to contribute connectors, templates, documentation, and UX improvements.

## 4. Core Problems

### 4.1 Installation Complexity
Users do not want to manage environment setup, dependency checks, and initialization through CLI only.

### 4.2 Connector Friction
Connecting tools like Feishu, WeCom, QQ, and other channels can be long and error-prone.

### 4.3 Weak Mobile Control
Mobile currently works better as a message endpoint than as a real control interface.

### 4.4 Invisible State
Users do not clearly know:

- which model is active
- which connector is enabled
- which permissions are granted
- which mode is currently running

### 4.5 Poor Diagnostics
When something fails, users often cannot quickly tell whether the problem comes from OpenClaw itself, a connector, credentials, or the local environment.

## 5. Product Goals

## 5.1 v0.1 Goals

- Let users initialize core setup without relying fully on CLI
- Let users configure at least one connector through a guided UI
- Let users inspect system status visually
- Let users switch modes quickly
- Prepare a basic path for mobile pairing

## 5.2 Non-goals for v0.1

The following are intentionally out of scope for the first version:

- enterprise multi-tenant management
- advanced team collaboration workflows
- billing and subscription systems
- cloud-hosted control plane
- full connector coverage
- complex orchestration engine

## 6. MVP Scope

### 6.1 Must-have

1. Desktop initialization wizard
2. OpenClaw installation / status detection
3. Visual configuration editor
4. Single connector onboarding flow
5. Basic diagnostics and status page
6. Mode switcher
7. Initial mobile pairing design path

### 6.2 Should-have

1. Log aggregation view
2. Error classification hints
3. Example templates
4. Connector SDK documentation stub

### 6.3 Later

1. QQ deep integration
2. Multi-account / multi-workspace support
3. Team template sharing
4. Cloud sync
5. Enterprise permission model

## 7. User Scenarios

### Scenario 1: First-time Setup
A user opens the desktop app, runs an initialization flow, checks environment readiness, and generates a default configuration.

### Scenario 2: Connector Onboarding
A user chooses a connector, follows a guided setup wizard, completes authorization, and runs a connectivity test.

### Scenario 3: Mobile as Remote Control
A user pairs their phone with the desktop instance and uses the phone to switch modes or inspect task state.

### Scenario 4: Failure Diagnosis
A user notices missing message returns, opens the diagnostics page, and identifies an expired token or connector failure.

## 8. Information Architecture

### 8.1 Desktop Navigation

- Dashboard
- Setup & Environment
- Connectors
- Modes
- Models & Skills
- Status & Logs
- Settings

### 8.2 Mobile Navigation

- Home
- Modes
- Tasks
- Notifications
- Settings

## 9. Open-source Strategy

### 9.1 Open-source Core

The following should remain open-source:

- core control center
- connector SDK
- mode templates
- config structure
- example connector
- basic documentation and onboarding

### 9.2 Potential Commercial Extensions

Potential future commercial layers may include:

- team management console
- remote device fleet management
- cloud sync and backup
- enterprise audit logs
- officially maintained enterprise-grade connectors

## 10. Success Metrics

At an early stage, success can be measured by:

- time-to-first-setup
- connector onboarding success rate
- visibility of system state
- number of community issues and contributions
- number of reusable templates and connectors added

## 11. Risks

### 11.1 Scope Creep
Too many connectors and features too early may blur the product.

### 11.2 Tight Coupling
If UI, bridge logic, and connector implementations are not separated well, the project will become hard to maintain.

### 11.3 Security Expectations
A control center touching credentials and connectors must be explicit and careful about permissions and local behavior.

### 11.4 UX Debt
If the first version is too technical, the product may fail to solve the original usability problem.

## 12. Guiding Principles

- Product clarity over feature quantity
- Guided setup over raw configuration exposure
- Local-first and visible behavior
- Clear separation between core and connectors
- Open architecture for community contributions
- MVP before ecosystem expansion
