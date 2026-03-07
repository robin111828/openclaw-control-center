import {
  createDesktopShellViewModel,
  DesktopShellViewModel,
} from "../shell";

export interface SetupViewModel {
  title: string;
  installationStatus: DesktopShellViewModel["state"]["openClawStatus"]["installationStatus"];
  configPath: DesktopShellViewModel["state"]["openClawStatus"]["config"]["path"];
  configExists: DesktopShellViewModel["state"]["openClawStatus"]["config"]["exists"];
  statusMessage: DesktopShellViewModel["state"]["statusMessage"];
  checklist: {
    key: string;
    label: string;
    completed: boolean;
  }[];
}

export function createSetupViewModel(): SetupViewModel {
  const shellViewModel = createDesktopShellViewModel();

  const installationReady =
    shellViewModel.state.openClawStatus.installationStatus === "installed";

  const configReady = shellViewModel.state.openClawStatus.config.exists;

  return {
    title: "Setup",
    installationStatus: shellViewModel.state.openClawStatus.installationStatus,
    configPath: shellViewModel.state.openClawStatus.config.path,
    configExists: shellViewModel.state.openClawStatus.config.exists,
    statusMessage: shellViewModel.state.statusMessage,
    checklist: [
      {
        key: "installation",
        label: "Detect OpenClaw installation",
        completed: installationReady,
      },
      {
        key: "config",
        label: "Discover OpenClaw config path",
        completed: configReady,
      },
      {
        key: "bootstrap",
        label: "Prepare initial desktop bootstrap flow",
        completed: true,
      },
    ],
  };
}
