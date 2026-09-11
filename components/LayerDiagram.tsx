import type { SystemLayer } from '@/lib/data';
import type { Locale } from '@/lib/i18n';

const STATUS_LABELS: Record<Locale, Record<string, string>> = {
  de: {
    objektspezifisch_zu_pruefen: 'objektspezifisch zu prüfen',
    untergrundabhaengig_noch_zu_definieren: 'untergrundabhängig, noch zu definieren',
    systemdicke_noch_freizugeben: 'Systemdicke noch freizugeben',
    nur_nach_systemfreigabe: 'nur nach Systemfreigabe'
  },
  en: {
    objektspezifisch_zu_pruefen: 'project-specific assessment required',
    untergrundabhaengig_noch_zu_definieren: 'substrate-dependent, to be defined',
    systemdicke_noch_freizugeben: 'system thickness to be released',
    nur_nach_systemfreigabe: 'only after system release'
  }
};
const LAYER_LABELS_EN: Record<string, string> = {
  'Mineralischer Bestandsuntergrund': 'Existing mineral substrate',
  'Vorbehandlung / Grundierung': 'Pretreatment / primer',
  'Pure Thermo': 'PURE THERMO',
  'Optionale Endoberfläche': 'Optional finish'
};

export function LayerDiagram({ layers, accent, locale = 'de' }: { layers: SystemLayer[]; accent?: string; locale?: Locale }) {
  const sorted = [...layers].sort((a, b) => a.order - b.order);
  return (
    <div className="layer-diagram" role="list" aria-label={locale === 'de' ? 'Schichtaufbau' : 'Layer build-up'}>
      {sorted.map((layer) => (
        <div
          key={layer.order}
          role="listitem"
          className={`layer-diagram__layer${layer.role === 'functional_layer' ? ' layer-diagram__layer--functional' : ''}`}
          style={accent ? ({ '--card-accent': accent } as React.CSSProperties) : undefined}
        >
          <span className="layer-diagram__order">{locale === 'de' ? 'Schicht' : 'Layer'} {layer.order}</span>
          <div className="layer-diagram__label">{locale === 'de' ? layer.label_de : LAYER_LABELS_EN[layer.label_de] ?? layer.label_de}</div>
          {layer.status ? (
            <div className="layer-diagram__status">{STATUS_LABELS[locale][layer.status] ?? layer.status.replace(/_/g, ' ')}</div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
