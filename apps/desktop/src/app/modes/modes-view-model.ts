import {
  createDesktopShellViewModel,
  DesktopShellViewModel,
} from "../shell";

export interface ModeItemViewModel {
  key: string;
  label: string;
  description: string;
  active: boolean;
}

export interface ModesViewModel {
  title: string;
  statusMessage: DesktopShellViewModel["state"]["statusMessage"];
  modes: ModeItemViewModel[];
}

export function createModesViewModel(): ModesViewModel {
  const shellViewModel = createDesktopShellViewModel();

  const modes: ModeItemViewModel[] = [
    {
      key: "default",
      label: "Default Mode",
      description: "Standard workflow for most users.",
      active: true,
    },
    {
      key: "advanced",
      label: "Advanced Mode",
      description: "Enable detailed configuration for power users.",
      active: false,
    },
    {
      key: "safe",
      label: "Safe Mode",
      description: "Restrict features to reduce risk of misconfiguration.",
      active: false,
    },
  ];

  return {
    title: "Modes",
    statusMessage: shellViewModel.state.statusMessage,
    modes,
  };
}
