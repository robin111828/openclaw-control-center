import { createDesktopShellLayout, DesktopShellLayout } from "./shell-layout";
import {
  createDesktopNavigationItems,
  DesktopNavigationItem,
} from "./shell-navigation";
import { createDesktopShellState, DesktopShellState } from "./shell-state";

export interface DesktopShellViewModel {
  state: DesktopShellState;
  layout: DesktopShellLayout;
  navigation: DesktopNavigationItem[];
}

export function createDesktopShellViewModel(): DesktopShellViewModel {
  const state = createDesktopShellState();
  const layout = createDesktopShellLayout();
  const navigation = createDesktopNavigationItems();

  return {
    state,
    layout,
    navigation,
  };
}
