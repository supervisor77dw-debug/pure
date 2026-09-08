import type { ApplicationRecord } from '@/lib/data';

export function ApplicationCard({ application }: { application: ApplicationRecord }) {
  return (
    <div className="application-card">
      <span className="application-card__name">{application.name.de}</span>
      <span className="application-card__desc">{application.description.de}</span>
    </div>
  );
}
