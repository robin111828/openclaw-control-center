import {
  OpenClawStatus,
  getOpenClawStatus,
} from "../../../../../packages/openclaw-bridge/src/index";

export interface DesktopShellState {
  appTitle: string;
  navigationItems: string[];
  statusMessage: string;
  openClawStatus: OpenClawStatus;
}

export function createDesktopShellState(): DesktopShellState {
  const bridgeStatus = getOpenClawStatus();

  return {
    appTitle: "OpenClaw Control Center",
    navigationItems: [
      "Dashboard",
      "Setup",
      "Connectors",
      "Modes",
      "Diagnostics",
      "Settings",
    ],
    statusMessage: bridgeStatus.message,
    openClawStatus: bridgeStatus,
  };
}
