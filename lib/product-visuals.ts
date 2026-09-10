import type { Locale } from './i18n';

export const productVisuals = {
  surfaceProtect: {
    technology: {
      de: 'Technologieprinzip für reine Oberflächen.png',
      en: 'Technologieprinzip des Oberflächenschutzes.png'
    },
    infrastructure: {
      de: 'Moderne Terminalarchitektur im Morgenlicht.png',
      en: 'PURE Surface Protect am Flughafen Terminal.png'
    },
    industry: {
      de: 'Hochglanz-Edelstahl für effiziente Industrieanlagen.png',
      en: 'Industrielle Edelstahloberflächen mit Schutztechnologie.png'
    }
  },
  floorProtect: {
    technology: {
      de: 'Funktionsprinzip des Bodenschutzes.png',
      en: 'Infografik Schutzschicht für Böden.png'
    },
    sports: {
      de: 'Sporthallenboden Vorher und Nachher.png',
      en: 'VorherNachher Sauberer Sporthallenboden.png'
    },
    publicBuildings: {
      de: 'Sauberer Boden für starke Räume.png',
      en: 'Hochglanzboden im modernen Schulflur.png'
    }
  }
} as const;

export function visualFor<T extends Record<Locale, string>>(visual: T, locale: Locale): string {
  return visual[locale];
}
