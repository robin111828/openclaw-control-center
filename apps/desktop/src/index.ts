import {
  createDesktopShellViewModel,
  DesktopShellViewModel,
} from "./app/shell";
import {
  createDashboardSummary,
  createDashboardViewModel,
  DashboardSummary,
  DashboardViewModel,
} from "./app/dashboard";

export interface DesktopAppShellState {
  title: string;
  statusMessage: string;
  navigationItems: string[];
  openClawStatus: DesktopShellViewModel["state"]["openClawStatus"];
}

export interface DesktopAppBootstrapResult {
  viewModel: DesktopShellViewModel;
  dashboard: {
    viewModel: DashboardViewModel;
    summary: DashboardSummary;
  };
  appState: DesktopAppShellState;
}

export function createDesktopAppShellState(): DesktopAppShellState {
  const viewModel = createDesktopShellViewModel();

  return {
    title: viewModel.state.appTitle,
    statusMessage: viewModel.state.statusMessage,
    navigationItems: viewModel.state.navigationItems,
    openClawStatus: viewModel.state.openClawStatus,
  };
}

export function bootstrapDesktopApp(): DesktopAppBootstrapResult {
  const viewModel = createDesktopShellViewModel();
  const dashboardViewModel = createDashboardViewModel();
  const dashboardSummary = createDashboardSummary();
  const appState = createDesktopAppShellState();

  return {
    viewModel,
    dashboard: {
      viewModel: dashboardViewModel,
      summary: dashboardSummary,
    },
    appState,
  };
}
