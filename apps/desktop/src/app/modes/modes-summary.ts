import { createModesViewModel, ModesViewModel } from "./modes-view-model";

export interface ModesSummary {
  title: string;
  statusLine: string;
  activeModeKey: string;
  totalModes: number;
}

export function createModesSummary(): ModesSummary {
  const modes: ModesViewModel = createModesViewModel();
  const active = modes.modes.find((m) => m.active)?.key ?? "default";

  return {
    title: modes.title,
    statusLine: modes.statusMessage,
    activeModeKey: active,
    totalModes: modes.modes.length,
  };
}
