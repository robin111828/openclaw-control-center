import { createSetupViewModel, SetupViewModel } from "./setup-view-model";

export interface SetupSummary {
  title: string;
  statusLine: string;
  completedCount: number;
  totalCount: number;
  readinessLabel: string;
}

export function createSetupSummary(): SetupSummary {
  const setup: SetupViewModel = createSetupViewModel();
  const completedCount = setup.checklist.filter((item) => item.completed).length;
  const totalCount = setup.checklist.length;

  return {
    title: setup.title,
    statusLine: setup.statusMessage,
    completedCount,
    totalCount,
    readinessLabel:
      completedCount === totalCount
        ? "Setup looks ready."
        : "Setup still needs attention.",
  };
}
