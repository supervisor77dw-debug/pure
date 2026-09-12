import Link from 'next/link';
import type { EvidenceRecord } from '@/lib/data';
import type { Locale } from '@/lib/i18n';
import { EvidenceBadge } from './EvidenceBadge';

export interface EvidenceCardProps {
  evidence: EvidenceRecord;
  href?: string;
  sourceLabel?: string;
  locale?: Locale;
}

export function EvidenceCard({ evidence, href, sourceLabel, locale = 'de' }: EvidenceCardProps) {
  return (
    <div className="evidence-card">
      <EvidenceBadge evidenceClass={evidence.evidence_class} sourceLabel={sourceLabel} locale={locale} />
      <h3>{href ? <Link href={href}>{evidence.title[locale] ?? evidence.title.de}</Link> : evidence.title[locale] ?? evidence.title.de}</h3>
      <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
        {evidence.standard?.designation}
        {evidence.report_number ? ` · ${locale === 'de' ? 'Bericht' : 'Report'} ${evidence.report_number}` : ''}
        {evidence.report_date ? ` · ${evidence.report_date}` : ''}
      </p>
    </div>
  );
}
