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
    },
    architecture: {
      de: 'Zeitlose Oberflächen für moderne Architektur.png',
      en: 'Moderne Architektur am Flussufer.png'
    },
    heritage: {
      de: 'Architektur bewahren, Zukunft gestalten.png',
      en: 'Hochwertiger Schutz für historische Fassaden.png'
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
  },
  liquidHeat: {
    outdoorHospitality: {
      de: 'Wärme für außen – ganzjährig.png',
      en: 'Ganzjähriger Komfort auf der Terrasse.png'
    },
    pyramidDemonstrator: 'liquid_heat_pyramid_demonstrator.jpg'
  },
  fireProtect: {
    mechanism: 'fire_protect_mechanism.jpg'
  }
} as const;

export function visualFor<T extends Record<Locale, string>>(visual: T, locale: Locale): string {
  return visual[locale];
}
