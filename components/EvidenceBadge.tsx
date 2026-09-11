import type { EvidenceClass } from '@/lib/data';
import type { Locale } from '@/lib/i18n';

const EVIDENCE_LABELS: Record<Locale, Record<EvidenceClass, string>> = {
  de: {
    A: 'extern geprüft',
    B: 'intern dokumentiert',
    C: 'berechnet / modelliert',
    D: 'Entwicklungsstatus'
  },
  en: {
    A: 'externally tested',
    B: 'internally documented',
    C: 'calculated / modelled',
    D: 'development status'
  }
};

export interface EvidenceBadgeProps {
  evidenceClass: EvidenceClass;
  sourceLabel?: string;
  size?: 'sm' | 'md';
  locale?: Locale;
}

// Evidence must never be communicated by color alone: letter + spelled-out status + optional source.
export function EvidenceBadge({ evidenceClass, sourceLabel, size = 'md', locale = 'de' }: EvidenceBadgeProps) {
  return (
    <span
      className={`evidence-badge evidence-badge--${evidenceClass}`}
      style={size === 'sm' ? { fontSize: '0.74rem' } : undefined}
    >
      <span className="evidence-badge__letter" aria-hidden="true">
        <span>{evidenceClass}</span>
      </span>
      <span className="evidence-badge__text">
        {evidenceClass} · {EVIDENCE_LABELS[locale][evidenceClass]}
      </span>
      {sourceLabel ? <span className="evidence-badge__source">· {sourceLabel}</span> : null}
    </span>
  );
}

export { EVIDENCE_LABELS };
