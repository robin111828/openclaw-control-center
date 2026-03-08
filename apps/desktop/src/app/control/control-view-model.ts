import { createDesktopShellViewModel, DesktopShellViewModel } from "../shell";
import {
  executeBridgeAction,
  BridgeAction,
  BridgeActionResult,
} from "../../../../packages/openclaw-bridge/src/execute-action";
import { getOpenClawStatus } from "../../../../packages/openclaw-bridge/src/index";

export interface ControlActionItem {
  key: string;
  label: string;
  lastResult?: BridgeActionResult;
}

export interface ControlViewModel {
  title: string;
  statusMessage: DesktopShellViewModel["state"]["statusMessage"];
  actions: ControlActionItem[];
}

export function createControlViewModel(): ControlViewModel {
  const shellViewModel = createDesktopShellViewModel();
  const status = getOpenClawStatus();

  const actions: ControlActionItem[] = [
    { key: "ping", label: "Ping Bridge" },
    { key: "open_app", label: "Open App" },
    { key: "run_command_placeholder", label: "Run Command" },
  ];

  // Minimal: prefill lastResult for demo purposes
  actions.forEach((action) => {
    const result = executeBridgeAction({ type: action.key as BridgeAction["type"] }, status);
    action.lastResult = result;
  });

  return {
    title: "Control",
    statusMessage: shellViewModel.state.statusMessage,
    actions,
  };
}
