import { createDashboardViewModel, DashboardViewModel } from "./dashboard-view-model";

export interface DashboardSummary {
  title: string;
  statusLine: string;
  installationStatus: DashboardViewModel["installationStatus"];
  configStateLabel: string;
}

export function createDashboardSummary(): DashboardSummary {
  const dashboard = createDashboardViewModel();

  return {
    title: dashboard.title,
    statusLine: dashboard.statusMessage,
    installationStatus: dashboard.installationStatus,
    configStateLabel: dashboard.configExists
      ? `Config found at: ${dashboard.configPath}`
      : "Config path not discovered yet.",
  };
}
