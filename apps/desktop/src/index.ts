import {
  createDesktopShellViewModel,
  DesktopShellViewModel,
} from "./app/shell/shell-view-model";

export interface DesktopAppShellState {
  title: string;
  statusMessage: string;
  navigationItems: string[];
  openClawStatus: DesktopShellViewModel["state"]["openClawStatus"];
}

export interface DesktopAppBootstrapResult {
  viewModel: DesktopShellViewModel;
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
  const appState = createDesktopAppShellState();

  return {
    viewModel,
    appState,
  };
}
