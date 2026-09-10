import { AssetFigure } from './AssetFigure';
import { LightboxFigure } from './LightboxFigure';
import type { Locale } from '@/lib/i18n';
import { systemVisual } from '@/lib/thermo-system-visuals';

export function TechnicalVisual({ locale, visual, altDe, altEn, captionDe, captionEn, zoomable = false }: { locale: Locale; visual: keyof typeof import('@/lib/thermo-system-visuals').thermoSystemVisuals; altDe: string; altEn: string; captionDe: string; captionEn: string; zoomable?: boolean }) {
  const file = systemVisual(locale, visual);
  if (!file) return <div className="technical-visual-pending">{locale === 'de' ? 'EN_VISUAL_REQUIRED: englisches Prüfpfad-Visual fehlt im Assets-Ordner.' : 'EN_VISUAL_REQUIRED: English test-path visual is missing from the Assets folder.'}</div>;
  if (zoomable) return <LightboxFigure file={file} alt={locale === 'de' ? altDe : altEn} caption={locale === 'de' ? captionDe : captionEn} zoomLabel={locale === 'de' ? 'Vergrößern' : 'Enlarge'} closeLabel={locale === 'de' ? 'Schließen' : 'Close'} />;
  return <AssetFigure file={file} alt={locale === 'de' ? altDe : altEn} caption={locale === 'de' ? captionDe : captionEn} />;
}
