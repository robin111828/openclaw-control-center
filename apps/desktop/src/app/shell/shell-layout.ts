import {
  DesktopShellState,
  createDesktopShellState,
} from "./shell-state";

export interface DesktopShellLayout {
  headerTitle: string;
  sidebarItems: string[];
  footerMessage: string;
  statusSummary: {
    installationStatus: DesktopShellState["openClawStatus"]["installationStatus"];
    configPath: DesktopShellState["openClawStatus"]["config"]["path"];
    configExists: DesktopShellState["openClawStatus"]["config"]["exists"];
  };
}

export function createDesktopShellLayout(): DesktopShellLayout {
  const shellState: DesktopShellState = createDesktopShellState();

  return {
    headerTitle: shellState.appTitle,
    sidebarItems: shellState.navigationItems,
    footerMessage: shellState.statusMessage,
    statusSummary: {
      installationStatus: shellState.openClawStatus.installationStatus,
      configPath: shellState.openClawStatus.config.path,
      configExists: shellState.openClawStatus.config.exists,
    },
  };
}
