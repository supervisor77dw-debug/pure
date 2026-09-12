import type { ValueRecord } from '@/lib/data';
import type { Locale } from '@/lib/i18n';
import { EvidenceBadge } from './EvidenceBadge';

export interface TechnicalValueProps {
  value: ValueRecord;
  locale?: Locale;
  label?: string;
  warning?: string;
}

// Renders a single technical figure exactly as stored in /data/values — never hard-coded.
export function TechnicalValue({ value, locale = 'de', label, warning: warningOverride }: TechnicalValueProps) {
  const showsUnitSeparately = value.value !== undefined && value.unit !== 'dimensionless';
  const figure = value.value !== undefined
    ? `${value.value}${value.uncertainty ? ` ± ${value.uncertainty}` : ''}`
    : value.value_display ?? '—';

  const warning = warningOverride ?? value.product_mapping?.warning_de ?? value.warning_de;

  return (
    <div className="technical-value">
      <span className="technical-value__label">{label ?? value.label[locale] ?? value.label.de}{value.symbol ? ` (${value.symbol})` : ''}</span>
      <span className="technical-value__figure">
        {figure} {showsUnitSeparately ? <span className="technical-value__unit">{value.unit}</span> : null}
      </span>
      <span className="technical-value__badge">
        <EvidenceBadge evidenceClass={value.evidence_class} size="sm" locale={locale} />
      </span>
      {warning ? <span className="technical-value__warning">{warning}</span> : null}
    </div>
  );
}
