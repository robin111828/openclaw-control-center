import {
  createDesktopShellViewModel,
  DesktopShellViewModel,
} from "../shell";

export interface ConnectorItemViewModel {
  key: string;
  label: string;
  supported: boolean;
  configured: boolean;
  statusLabel: string;
}

export interface ConnectorsViewModel {
  title: string;
  statusMessage: DesktopShellViewModel["state"]["statusMessage"];
  items: ConnectorItemViewModel[];
}

function createConnectorStatusLabel(
  supported: boolean,
  configured: boolean,
): string {
  if (!supported) {
    return "Not supported yet.";
  }

  if (configured) {
    return "Configured.";
  }

  return "Ready for onboarding.";
}

export function createConnectorsViewModel(): ConnectorsViewModel {
  const shellViewModel = createDesktopShellViewModel();

  const items: ConnectorItemViewModel[] = [
    {
      key: "feishu",
      label: "Feishu",
      supported: true,
      configured: false,
      statusLabel: createConnectorStatusLabel(true, false),
    },
    {
      key: "wecom",
      label: "WeCom",
      supported: true,
      configured: false,
      statusLabel: createConnectorStatusLabel(true, false),
    },
    {
      key: "qq",
      label: "QQ",
      supported: false,
      configured: false,
      statusLabel: createConnectorStatusLabel(false, false),
    },
  ];

  return {
    title: "Connectors",
    statusMessage: shellViewModel.state.statusMessage,
    items,
  };
}
