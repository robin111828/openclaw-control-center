# Security Policy

## Supported Scope

At the current stage, security reports are especially valuable for issues involving:

- Local configuration handling
- Token / credential storage
- Connector authentication flows
- Local bridge communication with OpenClaw
- Device pairing
- Sensitive log exposure
- Permission escalation risks
- Malicious connector or template execution paths

## Reporting a Vulnerability

If you discover a potential security issue, please do **not** publish full exploit details in a public GitHub issue.

Please report it privately first.

### Recommended report content

Please include:

- A clear description of the issue
- Affected component(s)
- Reproduction steps
- Potential impact
- Suggested mitigation, if any
- Screenshots / logs / proof of concept when appropriate

## Response Goals

We aim to:

- Acknowledge valid reports reasonably quickly
- Reproduce and assess impact
- Prioritize fixes based on severity
- Publish a fix or mitigation note when ready

## Responsible Disclosure

We ask reporters to:

- Give maintainers a reasonable window to investigate
- Avoid publishing sensitive exploit details before a fix is available
- Avoid accessing data that does not belong to you
- Avoid actions that would damage systems, data, or users

## Security Design Priorities

As the project evolves, these are core priorities:

- Minimize credential exposure
- Keep connector permissions visible and auditable
- Avoid hidden network behavior
- Keep local-first behavior explicit
- Make risky operations understandable to users
- Separate core control logic from connector-specific execution paths

## Current Project Stage

This project is early-stage and evolving. That means:

- Interfaces may change
- Security hardening is ongoing
- Community review is especially valuable

## Contact

For now, please use the repository owner contact method listed in the repository profile or project contact information.

A dedicated private security reporting channel can be added in a later version of the project.
