import type { Locale } from '@/lib/i18n';

export interface SystemLayerStackProps {
  layers: readonly string[];
  locale: Locale;
  label?: string;
}

export function SystemLayerStack({ layers, locale, label }: SystemLayerStackProps) {
  return (
    <figure className="system-layer-stack">
      <div className="system-layer-stack__surface" aria-label={label}>
        {layers.map((layer, index) => (
          <div className={`system-layer-stack__layer system-layer-stack__layer--${index}`} key={`${layer}-${index}`}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{layer}</strong>
          </div>
        ))}
      </div>
      <figcaption>{locale === 'de' ? 'Schematische Darstellung – nicht maßstäblich.' : 'Schematic representation – not to scale.'}</figcaption>
    </figure>
  );
}
