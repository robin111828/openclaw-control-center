# control

This directory defines the Control page domain of the desktop application.

The Control page is responsible for sending commands to the local OpenClaw bridge, and optionally receiving execution feedback.

## Purpose

- Expose actionable commands (ping, open_app, run_command_placeholder)  
- Display execution results / status feedback  
- Integrate with shell and dashboard status  

## Suggested future structure

```text
control/
├─ README.md
├─ control-view-model.ts
└─ index.ts
