const RELEASE_LABELS: Record<string, string> = {
  approved: 'freigegeben',
  conditional: 'bedingt freigegeben',
  public_with_limitation: 'öffentlich mit Einschränkung',
  not_finally_released: 'noch nicht final freigegeben',
  pending_confirmation: 'Bestätigung ausstehend'
};

export interface ReleaseBadgeProps {
  status: string;
}

export function ReleaseBadge({ status }: ReleaseBadgeProps) {
  const label = RELEASE_LABELS[status] ?? status.replace(/_/g, ' ');
  return <span className="pill">{label}</span>;
}
