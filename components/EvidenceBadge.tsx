import type { EvidenceClass } from '@/lib/data';

const EVIDENCE_LABELS: Record<EvidenceClass, string> = {
  A: 'extern geprüft',
  B: 'intern dokumentiert',
  C: 'berechnet / modelliert',
  D: 'Entwicklungsstatus'
};

export interface EvidenceBadgeProps {
  evidenceClass: EvidenceClass;
  sourceLabel?: string;
  size?: 'sm' | 'md';
}

// Evidence must never be communicated by color alone: letter + spelled-out status + optional source.
export function EvidenceBadge({ evidenceClass, sourceLabel, size = 'md' }: EvidenceBadgeProps) {
  return (
    <span
      className={`evidence-badge evidence-badge--${evidenceClass}`}
      style={size === 'sm' ? { fontSize: '0.74rem' } : undefined}
    >
      <span className="evidence-badge__letter" aria-hidden="true">
        <span>{evidenceClass}</span>
      </span>
      <span className="evidence-badge__text">
        {evidenceClass} · {EVIDENCE_LABELS[evidenceClass]}
      </span>
      {sourceLabel ? <span className="evidence-badge__source">· {sourceLabel}</span> : null}
    </span>
  );
}

export { EVIDENCE_LABELS };
