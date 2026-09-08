export interface MaturityBadgeProps {
  label: string;
}

// Renders a maturity/status statement as text, never as a bare color dot.
export function MaturityBadge({ label }: MaturityBadgeProps) {
  return <span className="pill" role="status">{label}</span>;
}
