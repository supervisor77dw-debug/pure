import Link from 'next/link';
import type { SystemDef } from '@/lib/data';
import { EvidenceBadge } from './EvidenceBadge';

export interface SystemCardProps {
  system: SystemDef;
  href?: string;
}

export function SystemCard({ system, href }: SystemCardProps) {
  const name = system.name.de ?? system.id;
  return (
    <div className="system-card">
      <span className="system-card__name">{href ? <Link href={href}>{name}</Link> : name}</span>
      {system.public_summary_de ? <p className="system-card__summary">{system.public_summary_de}</p> : null}
      <div className="system-card__badges">
        <EvidenceBadge evidenceClass={system.evidence_class} size="sm" />
      </div>
    </div>
  );
}
