import Link from 'next/link';
import type { EvidenceRecord } from '@/lib/data';
import { EvidenceBadge } from './EvidenceBadge';

export interface EvidenceCardProps {
  evidence: EvidenceRecord;
  href?: string;
  sourceLabel?: string;
}

export function EvidenceCard({ evidence, href, sourceLabel }: EvidenceCardProps) {
  return (
    <div className="evidence-card">
      <EvidenceBadge evidenceClass={evidence.evidence_class} sourceLabel={sourceLabel} />
      <h3>{href ? <Link href={href}>{evidence.title.de}</Link> : evidence.title.de}</h3>
      <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
        {evidence.standard?.designation}
        {evidence.report_number ? ` · Bericht ${evidence.report_number}` : ''}
        {evidence.report_date ? ` · ${evidence.report_date}` : ''}
      </p>
    </div>
  );
}
