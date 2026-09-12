import Link from 'next/link';
import type { SystemDef } from '@/lib/data';
import type { Locale } from '@/lib/i18n';
import { EvidenceBadge } from './EvidenceBadge';

export interface SystemCardProps {
  system: SystemDef;
  href?: string;
  locale?: Locale;
  summary?: string;
}

export function SystemCard({ system, href, locale = 'de', summary }: SystemCardProps) {
  const name = system.name[locale] ?? system.name.de ?? system.id;
  const localizedSummary = summary ?? (locale === 'de' ? system.public_summary_de : undefined);
  return (
    <div className="system-card">
      <span className="system-card__name">{href ? <Link href={href}>{name}</Link> : name}</span>
      {localizedSummary ? <p className="system-card__summary">{localizedSummary}</p> : null}
      <div className="system-card__badges">
        <EvidenceBadge evidenceClass={system.evidence_class} size="sm" locale={locale} />
      </div>
    </div>
  );
}
