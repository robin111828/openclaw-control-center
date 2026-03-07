# OpenClaw Control Center

[中文说明](./README.zh.md)

A cross-device control hub for OpenClaw.

OpenClaw Control Center is an open-source project designed to make OpenClaw easier to install, configure, connect, and use across desktop and mobile devices.

It focuses on turning complex setup and fragmented connector workflows into a guided, visual, and contributor-friendly experience.

---

## Why this project

OpenClaw is powerful, but for many users the real challenge is not capability — it is usability.

Common friction points include:

- CLI-first onboarding
- connector setup that feels too technical
- weak mobile control experience
- invisible configuration and permission state
- hard-to-debug failures
- fragmented cross-device workflows

This project exists to solve that layer.

Instead of building yet another chat entry point, OpenClaw Control Center aims to become a dedicated **control layer** for OpenClaw.

---

## What it aims to provide

- one-click setup guidance
- visual configuration management
- guided connector onboarding
- phone-as-remote-control workflow
- mode-based switching for common use cases
- visible health, logs, and diagnostics
- an open architecture for connectors and templates

---

## Current status

**Project stage:** early open-source foundation

This repository is currently focused on:

- defining product direction
- establishing documentation and contribution structure
- preparing the project scaffold
- clarifying MVP boundaries
- making the repository contributor-friendly from day one

This is not yet a full implementation release.  
It is the foundation for a serious open-source product.

---

## MVP direction

The initial MVP is centered around six capabilities:

1. desktop initialization wizard  
2. OpenClaw installation and status detection  
3. visual configuration editor  
4. at least one guided connector onboarding flow  
5. basic diagnostics and state visibility  
6. initial mobile pairing path  

---

## Who this is for

### Power users
People already using OpenClaw who want easier setup, clearer status visibility, and smoother daily operation.

### Builders and technical creators
People who want to manage models, connectors, templates, and modes through a structured interface.

### Open-source contributors
Developers, designers, and writers who want to improve the OpenClaw ecosystem through code, docs, UX, templates, and connector work.

---

## Repository structure

```text
.
├─ docs/
│  ├─ prd/
│  └─ roadmap/
├─ README.md
├─ README.zh.md
├─ LICENSE
├─ CONTRIBUTING.md
├─ CODE_OF_CONDUCT.md
└─ SECURITY.md
