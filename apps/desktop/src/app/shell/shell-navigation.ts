import { createDesktopShellState } from "./shell-state";

export interface DesktopNavigationItem {
  label: string;
  key: string;
  description: string;
  isActive: boolean;
}

function getNavigationDescription(key: string): string {
  switch (key) {
    case "dashboard":
      return "Overview of OpenClaw status and app state.";
    case "setup":
      return "Installation, environment checks, and onboarding.";
    case "connectors":
      return "Connector onboarding and integration management.";
    case "modes":
      return "Mode switching for common workflows.";
    case "diagnostics":
      return "Status details, logs, and troubleshooting.";
    case "settings":
      return "General configuration and preferences.";
    default:
      return "Navigation item.";
  }
}

export function createDesktopNavigationItems(): DesktopNavigationItem[] {
  const shellState = createDesktopShellState();

  return shellState.navigationItems.map((item, index) => {
    const key = item.toLowerCase();

    return {
      label: item,
      key,
      description: getNavigationDescription(key),
      isActive: index === 0,
    };
  });
}
