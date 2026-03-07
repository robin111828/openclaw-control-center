import {
  ConnectorsViewModel,
  createConnectorsViewModel,
} from "./connectors-view-model";

export interface ConnectorsSummary {
  title: string;
  statusLine: string;
  supportedCount: number;
  configuredCount: number;
  onboardingLabel: string;
}

export function createConnectorsSummary(): ConnectorsSummary {
  const connectors: ConnectorsViewModel = createConnectorsViewModel();

  const supportedCount = connectors.items.filter((item) => item.supported).length;
  const configuredCount = connectors.items.filter((item) => item.configured).length;

  return {
    title: connectors.title,
    statusLine: connectors.statusMessage,
    supportedCount,
    configuredCount,
    onboardingLabel:
      configuredCount > 0
        ? "At least one connector is configured."
        : "No connectors configured yet.",
  };
}
