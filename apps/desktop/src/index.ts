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
import {
  createSetupSummary,
  createSetupViewModel,
  SetupSummary,
  SetupViewModel,
} from "./app/setup";
import {
  createConnectorsSummary,
  createConnectorsViewModel,
  ConnectorsSummary,
  ConnectorsViewModel,
} from "./app/connectors";
import {
  createModesSummary,
  createModesViewModel,
  ModesSummary,
  ModesViewModel,
} from "./app/modes";

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
  setup: {
    viewModel: SetupViewModel;
    summary: SetupSummary;
  };
  connectors: {
    viewModel: ConnectorsViewModel;
    summary: ConnectorsSummary;
  };
  modes: {
    viewModel: ModesViewModel;
    summary: ModesSummary;
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
  const setupViewModel = createSetupViewModel();
  const setupSummary = createSetupSummary();
  const connectorsViewModel = createConnectorsViewModel();
  const connectorsSummary = createConnectorsSummary();
  const modesViewModel = createModesViewModel();
  const modesSummary = createModesSummary();
  const appState = createDesktopAppShellState();

  return {
    viewModel,
    dashboard: {
      viewModel: dashboardViewModel,
      summary: dashboardSummary,
    },
    setup: {
      viewModel: setupViewModel,
      summary: setupSummary,
    },
    connectors: {
      viewModel: connectorsViewModel,
      summary: connectorsSummary,
    },
    modes: {
      viewModel: modesViewModel,
      summary: modesSummary,
    },
    appState,
  };
}
