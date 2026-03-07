import { createDesktopShellLayout } from "./app/shell/shell-layout";
import { createDesktopNavigationItems } from "./app/shell/shell-navigation";
import { createDesktopShellState } from "./app/shell/shell-state";

export interface DesktopAppShellState {
  title: string;
  statusMessage: string;
  navigationItems: string[];
}

export interface DesktopAppBootstrapResult {
  shellState: ReturnType<typeof createDesktopShellState>;
  shellLayout: ReturnType<typeof createDesktopShellLayout>;
  navigation: ReturnType<typeof createDesktopNavigationItems>;
  appState: DesktopAppShellState;
}

export function createDesktopAppShellState(): DesktopAppShellState {
  const shellState = createDesktopShellState();

  return {
    title: shellState.appTitle,
    statusMessage: shellState.statusMessage,
    navigationItems: shellState.navigationItems,
  };
}

export function bootstrapDesktopApp(): DesktopAppBootstrapResult {
  const shellState = createDesktopShellState();
  const shellLayout = createDesktopShellLayout();
  const navigation = createDesktopNavigationItems();
  const appState = createDesktopAppShellState();

  return {
    shellState,
    shellLayout,
    navigation,
    appState,
  };
}
