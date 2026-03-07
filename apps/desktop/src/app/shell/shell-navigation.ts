import { createDesktopShellState } from "./shell-state";

export interface DesktopNavigationItem {
  label: string;
  key: string;
}

export function createDesktopNavigationItems(): DesktopNavigationItem[] {
  const shellState = createDesktopShellState();

  return shellState.navigationItems.map((item) => ({
    label: item,
    key: item.toLowerCase(),
  }));
}
