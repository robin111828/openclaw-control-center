[简体中文版本](README.zh.md)
# OpenClaw Control Center
OpenClaw is powerful, but currently not user-friendly enough for ordinary users:

- High threshold for CLI configuration
- Complex integration with Feishu / WeCom / QQ
- Lack of dedicated control entry on mobile devices
- Opaque status of models / skills / permissions
- Difficult troubleshooting

OpenClaw Control Center aims to fill this layer of "operating system-level control panel".

## Goals

- Zero-CLI first run
- Connector setup wizard
- Phone as remote control
- Mode-based workflow switching
- Visible health and logs

## MVP

- One-click OpenClaw setup
- Visual settings panel
- At least one production-ready connector
- Mobile pairing
- Mode switcher
- Basic diagnostics

## Repository structure

- `apps/desktop` Desktop main console
- `apps/mobile` Mobile / PWA
- `packages/connector-sdk` Connector development SDK
- `packages/openclaw-bridge` Communication layer with OpenClaw
- `connectors/` Official and community connectors
- `templates/` Mode templates
- `docs/` PRD, architecture, contribution guidelines

## Roadmap

### v0.1
- Project scaffold
- Desktop MVP
- Example connector
- Basic diagnostics

### v0.2
- Mobile pairing
- Multi-connector support
- Template marketplace (basic)

### v0.3
- Team-oriented features
- Remote device management

## Contributing

Issues, PRs, connectors, templates, and installation scripts are all welcome.

Please read first:
- `CONTRIBUTING.md`
- `docs/connector-spec/`
- `docs/roadmap/`

## License


Apache-2.0
