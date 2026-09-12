'use client';

import type { EvidenceClass } from '@/lib/data';
import type { Locale } from '@/lib/i18n';
import { EVIDENCE_COPY } from '@/lib/evidence-copy';
import { usePathname } from 'next/navigation';

export interface EvidenceBadgeProps {
  evidenceClass: EvidenceClass;
  sourceLabel?: string;
  size?: 'sm' | 'md';
  locale?: Locale;
}

// Evidence must never be communicated by color alone: letter + spelled-out status + optional source.
export function EvidenceBadge({ evidenceClass, sourceLabel, size = 'md', locale = 'de' }: EvidenceBadgeProps) {
  const pathname = usePathname();
  const routeLocale: Locale = pathname?.startsWith('/en/') || pathname === '/en' ? 'en' : locale;
  return (
    <span
      className={`evidence-badge evidence-badge--${evidenceClass}`}
      style={size === 'sm' ? { fontSize: '0.74rem' } : undefined}
    >
      <span className="evidence-badge__letter" aria-hidden="true">
        <span>{evidenceClass}</span>
      </span>
      <span className="evidence-badge__text">
        {evidenceClass} · {EVIDENCE_COPY[routeLocale][evidenceClass].label}
      </span>
      {sourceLabel ? <span className="evidence-badge__source">· {sourceLabel}</span> : null}
    </span>
  );
}
