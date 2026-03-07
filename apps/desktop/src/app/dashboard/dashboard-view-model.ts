import {
  createDesktopShellViewModel,
  DesktopShellViewModel,
} from "../shell";

export interface DashboardViewModel {
  title: string;
  installationStatus: DesktopShellViewModel["state"]["openClawStatus"]["installationStatus"];
  configPath: DesktopShellViewModel["state"]["openClawStatus"]["config"]["path"];
  configExists: DesktopShellViewModel["state"]["openClawStatus"]["config"]["exists"];
  statusMessage: DesktopShellViewModel["state"]["statusMessage"];
  quickLinks: {
    label: string;
    key: string;
  }[];
}

export function createDashboardViewModel(): DashboardViewModel {
  const shellViewModel = createDesktopShellViewModel();

  return {
    title: "Dashboard",
    installationStatus: shellViewModel.state.openClawStatus.installationStatus,
    configPath: shellViewModel.state.openClawStatus.config.path,
    configExists: shellViewModel.state.openClawStatus.config.exists,
    statusMessage: shellViewModel.state.statusMessage,
    quickLinks: shellViewModel.navigation.map((item) => ({
      label: item.label,
      key: item.key,
    })),
  };
}
