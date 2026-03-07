# OpenClaw Control Center Architecture Overview

## 1. Purpose

OpenClaw Control Center is intended to act as a cross-device control layer for OpenClaw.

Its purpose is not to replace OpenClaw itself, but to make installation, configuration, connector onboarding, diagnostics, and mode switching easier to understand and operate.

The architecture should therefore prioritize:

- guided usability
- clear separation of responsibilities
- local-first behavior
- connector extensibility
- contributor-friendly structure

---

## 2. High-level Architecture

The project is expected to evolve into a modular structure with five major layers:

1. **Desktop App Layer**
2. **Mobile / Remote Layer**
3. **Core Control Layer**
4. **OpenClaw Bridge Layer**
5. **Connector and Template Layer**

These layers should remain loosely coupled wherever possible.

---

## 3. Layer Responsibilities

### 3.1 Desktop App Layer

The desktop app is the main control interface.

Its responsibilities include:

- setup wizard
- environment checks
- visual configuration editing
- diagnostics and health display
- connector onboarding flows
- mode switching
- local status visibility

The desktop app should be the primary place where users manage OpenClaw in a structured way.

---

### 3.2 Mobile / Remote Layer

The mobile layer is not intended to be a full replacement for the desktop control center.

Its main responsibilities include:

- phone pairing
- lightweight status viewing
- mode switching
- notification return path
- quick task inspection

The mobile layer should function as a remote control and companion interface.

---

### 3.3 Core Control Layer

The core layer contains the product’s domain logic.

It should define and manage concepts such as:

- modes
- system state
- environment status
- connector metadata
- diagnostics structure
- user-facing configuration models

This layer should be independent from UI concerns as much as possible.

---

### 3.4 OpenClaw Bridge Layer

The bridge layer connects the control center to the local OpenClaw environment.

Its responsibilities include:

- detecting OpenClaw installation state
- locating config files
- reading and writing configuration
- triggering local commands
- normalizing errors and responses
- exposing bridge-safe APIs to upper layers

This layer is especially important because it separates UI logic from OpenClaw-specific operational details.

---

### 3.5 Connector and Template Layer

This layer handles external platform integration and reusable usage presets.

It includes:

- connector definitions
- authorization flow adapters
- connector health metadata
- example connectors
- mode templates
- template loading structure

This layer should remain extensible and contributor-friendly.

---

## 4. Suggested Repository Evolution

The project can gradually evolve toward a monorepo structure like this:

```text
.
├─ apps/
│  ├─ desktop/
│  └─ mobile/
├─ packages/
│  ├─ core/
│  ├─ ui/
│  ├─ connector-sdk/
│  ├─ config-engine/
│  └─ openclaw-bridge/
├─ connectors/
│  └─ example/
├─ templates/
├─ docs/
│  ├─ prd/
│  ├─ roadmap/
│  └─ architecture/
