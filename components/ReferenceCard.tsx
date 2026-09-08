export interface ReferenceCardProps {
  name: string;
  status?: string;
}

// No concrete reference projects are published yet — cards only convey the program area and status.
export function ReferenceCard({ name, status = 'Referenzprogramm im Aufbau' }: ReferenceCardProps) {
  return (
    <div className="reference-card">
      <span className="reference-card__name">{name}</span>
      <span className="reference-card__status">{status}</span>
    </div>
  );
}
