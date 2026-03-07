# Contributing to OpenClaw Control Center

感谢你对 OpenClaw Control Center 的关注与贡献。

本项目的目标，是为 OpenClaw 提供一个更易用的跨端控制中枢，让安装、配置、连接器接入、模式切换、移动端控制和状态诊断变得更简单、更直观。

## 我们欢迎哪些贡献

欢迎以下类型的贡献：

- Bug 修复
- UI / UX 优化
- 文档完善
- 示例模板
- 安装脚本与环境检测脚本
- 连接器开发（如飞书、企微、QQ 等）
- 配置系统与状态诊断能力
- 测试、反馈与 issue 整理

## 开始之前

提交贡献前，请先阅读：

- `README.md`
- `README.zh.md`

后续补齐后，也建议阅读：

- `docs/prd/prd-v0.1.md`
- `docs/roadmap/roadmap-v0.1.md`

确保你的改动与当前项目方向一致。

## 贡献流程

### 1. Fork 仓库
先 fork 本仓库到你自己的 GitHub 账号。

### 2. 创建分支
请不要直接在 `main` 分支开发。

建议分支命名：

- `feat/xxx`
- `fix/xxx`
- `docs/xxx`
- `refactor/xxx`

例如：

```bash
git checkout -b feat/feishu-connector-wizard
