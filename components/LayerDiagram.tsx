import type { SystemLayer } from '@/lib/data';

const STATUS_LABELS: Record<string, string> = {
  objektspezifisch_zu_pruefen: 'objektspezifisch zu prüfen',
  untergrundabhaengig_noch_zu_definieren: 'untergrundabhängig, noch zu definieren',
  systemdicke_noch_freizugeben: 'Systemdicke noch freizugeben',
  nur_nach_systemfreigabe: 'nur nach Systemfreigabe'
};

export function LayerDiagram({ layers, accent }: { layers: SystemLayer[]; accent?: string }) {
  const sorted = [...layers].sort((a, b) => a.order - b.order);
  return (
    <div className="layer-diagram" role="list" aria-label="Schichtaufbau">
      {sorted.map((layer) => (
        <div
          key={layer.order}
          role="listitem"
          className={`layer-diagram__layer${layer.role === 'functional_layer' ? ' layer-diagram__layer--functional' : ''}`}
          style={accent ? ({ '--card-accent': accent } as React.CSSProperties) : undefined}
        >
          <span className="layer-diagram__order">Schicht {layer.order}</span>
          <div className="layer-diagram__label">{layer.label_de}</div>
          {layer.status ? (
            <div className="layer-diagram__status">{STATUS_LABELS[layer.status] ?? layer.status.replace(/_/g, ' ')}</div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
