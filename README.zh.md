[English version](README.md)
# OpenClaw Control Center
OpenClaw 很强，但目前对普通用户并不够顺手：

- CLI 配置门槛高
- 飞书 / 企微 / QQ 接入复杂
- 手机端缺少专门控制入口
- 模型 / 技能 / 权限状态不透明
- 故障排查困难

OpenClaw Control Center 旨在补上这一层“操作系统级别的控制面板”。

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

- `apps/desktop` 桌面端主控台
- `apps/mobile` 手机端 / PWA
- `packages/connector-sdk` 连接器开发 SDK
- `packages/openclaw-bridge` 与 OpenClaw 通信层
- `connectors/` 官方和社区连接器
- `templates/` 模式模板
- `docs/` PRD、架构、贡献指南

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

欢迎提交 issue、PR、连接器、模板与安装脚本。

请先阅读：
- `CONTRIBUTING.md`
- `docs/connector-spec/`
- `docs/roadmap/`

## License

Apache-2.0