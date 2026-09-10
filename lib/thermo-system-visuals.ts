import type { Locale } from './i18n';

export const thermoSystemVisuals = {
  platform: { de: 'Mehr Schutz, mehr Möglichkeiten.png', en: 'Wärme- und Brandschutz im System.png' },
  testPath: { de: 'Sicherheit Schicht für Schicht Systemprüfung.png', en: 'Wärme- und Brandschutzsystem im Überblick.png' },
  detail: { de: 'Technische Fensterdämmung im Detail.png', en: 'Wärmedämmung im Fensterdetail – PURE THERMO.png' },
  exterior: { de: 'Witterungsbeständige Fassadendämmung mit PURE THERMO.png', en: 'Fassadendämmung Schutz und Effizienz.png' },
  thermalBridge: { de: 'PURE THERMO Wärmebrücken clever lösen.png', en: 'Technische Wärmedämmung im Detail.png' },
  overview: { de: 'Technische Gebäudedämmung im Schnittmodell.png', en: 'Moderne Gebäudeisolierung im Querschnitt_eng.png' }
} as const;

export function systemVisual(locale: Locale, key: keyof typeof thermoSystemVisuals) {
  return thermoSystemVisuals[key][locale];
}
