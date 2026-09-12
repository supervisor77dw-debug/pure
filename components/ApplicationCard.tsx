import type { ApplicationRecord } from '@/lib/data';
import { SurfaceCard } from './SurfaceCard';

export function ApplicationCard({ application, backgroundAsset }: { application: ApplicationRecord; backgroundAsset?: string }) {
  return (
    <SurfaceCard className="application-card system-context-card" surface="system-interior" backgroundAsset={backgroundAsset}>
      <span className="application-card__name">{application.name.de}</span>
      <span className="application-card__desc">{application.description.de}</span>
    </SurfaceCard>
  );
}
