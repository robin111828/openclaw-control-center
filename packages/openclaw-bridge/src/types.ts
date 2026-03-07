export type OpenClawInstallationStatus =
  | "installed"
  | "not_found"
  | "unknown";

export interface OpenClawConfigLocation {
  path: string | null;
  exists: boolean;
}

export interface OpenClawStatus {
  installationStatus: OpenClawInstallationStatus;
  config: OpenClawConfigLocation;
  message: string;
}
