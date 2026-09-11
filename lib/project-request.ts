export type ProjectRequestPayload = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  product?: string;
  projectType?: string;
  location?: string;
  message: string;
  callbackRequested: boolean;
  privacyAccepted: boolean;
  website?: string;
};

export function validateProjectRequest(payload: Partial<ProjectRequestPayload>) {
  const errors: Record<string, string> = {};
  if (!payload.name?.trim()) errors.name = 'Name is required.';
  if (!payload.email?.trim() || !/^\S+@\S+\.\S+$/.test(payload.email)) errors.email = 'A valid email address is required.';
  if (!payload.message?.trim()) errors.message = 'Project description is required.';
  if (payload.privacyAccepted !== true) errors.privacyAccepted = 'Privacy consent is required.';
  return errors;
}

export async function submitProjectRequest(payload: ProjectRequestPayload) {
  const response = await fetch('/api/project-request', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.error || 'Project request could not be submitted.');
  return result;
}
