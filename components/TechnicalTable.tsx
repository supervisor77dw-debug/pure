import type { ValueRecord } from '@/lib/data';
import { EvidenceBadge } from './EvidenceBadge';
import { TechnicalValue } from './TechnicalValue';

export interface TechnicalTableProps {
  values: ValueRecord[];
}

// Desktop: table. Mobile: the same markup collapses into stacked label/value rows via CSS.
// A card-based fallback is also offered for very small values sets.
export function TechnicalTable({ values }: TechnicalTableProps) {
  if (values.length === 0) return null;
  return (
    <table className="technical-table">
      <caption className="visually-hidden">Technische Kennwerte</caption>
      <thead>
        <tr>
          <th scope="col">Kennwert</th>
          <th scope="col">Wert</th>
          <th scope="col">Evidenz</th>
          <th scope="col">Hinweis</th>
        </tr>
      </thead>
      <tbody>
        {values.map((v) => {
          const figure = v.value !== undefined
            ? `${v.value}${v.uncertainty ? ` ± ${v.uncertainty}` : ''} ${v.unit !== 'dimensionless' ? v.unit : ''}`
            : `${v.value_display ?? '—'}`;
          const warning = v.product_mapping?.warning_de ?? v.warning_de;
          return (
            <tr key={v.id}>
              <td data-label="Kennwert">{v.label.de}{v.symbol ? ` (${v.symbol})` : ''}</td>
              <td data-label="Wert">{figure}</td>
              <td data-label="Evidenz"><EvidenceBadge evidenceClass={v.evidence_class} size="sm" /></td>
              <td data-label="Hinweis">{warning ?? '—'}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export { TechnicalValue };
