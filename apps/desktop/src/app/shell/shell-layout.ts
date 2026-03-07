import {
  DesktopShellState,
  createDesktopShellState,
} from "./shell-state";

export interface DesktopShellLayout {
  headerTitle: string;
  sidebarItems: string[];
  footerMessage: string;
}

export function createDesktopShellLayout(): DesktopShellLayout {
  const shellState: DesktopShellState = createDesktopShellState();

  return {
    headerTitle: shellState.appTitle,
    sidebarItems: shellState.navigationItems,
    footerMessage: shellState.statusMessage,
  };
}
