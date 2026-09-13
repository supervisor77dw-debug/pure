import type { ProjectRequestPayload } from './project-request';

export type ProjectRequestDeliveryProvider = {
  name: string;
  send(payload: ProjectRequestPayload): Promise<void>;
};

type ProjectRequestDeliveryFactory = () => ProjectRequestDeliveryProvider;

const providerFactories: Record<string, ProjectRequestDeliveryFactory> = {};

export function getProjectRequestDeliveryProvider() {
  const providerName = process.env.PROJECT_REQUEST_PROVIDER?.trim();
  if (!providerName) return null;
  return providerFactories[providerName]?.() ?? null;
}