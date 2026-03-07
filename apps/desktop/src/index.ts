import { getOpenClawStatus } from "../../../packages/openclaw-bridge/src/index";

export interface DesktopAppShellState {
  title: string;
  statusMessage: string;
}

export function createDesktopAppShellState(): DesktopAppShellState {
  const bridgeStatus = getOpenClawStatus();

  return {
    title: "OpenClaw Control Center",
    statusMessage: bridgeStatus.message,
  };
}

export function bootstrapDesktopApp(): DesktopAppShellState {
  return createDesktopAppShellState();
}
