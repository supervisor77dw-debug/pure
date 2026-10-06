import type { Locale } from './i18n';

interface ApplicationNavigationItem {
  key: string;
  systemId?: string;
  name: Record<Locale, string>;
  description: Record<Locale, string>;
  path: Record<Locale, string>;
}

export const applicationNavigation: ApplicationNavigationItem[] = [
  {
    key: 'interior',
    systemId: 'SYS-PT-INT-001',
    name: { de: 'Innenraum', en: 'Interior' },
    description: { de: 'PURE THERMO – thermische Verbesserung bei geringer Aufbauhöhe', en: 'PURE THERMO – thermal improvement at low build-up height' },
    path: { de: 'systeme/pure-thermo-interior', en: 'systems/pure-thermo-interior' }
  },
  {
    key: 'exterior',
    systemId: 'SYS-PT-EXT-001',
    name: { de: 'Fassade', en: 'Facade' },
    description: { de: 'PURE THERMO – thermische Funktionsschicht im Außenbereich; Entwicklungsroute', en: 'PURE THERMO – exterior thermal functional layer; development route' },
    path: { de: 'systeme/pure-thermo-exterior', en: 'systems/pure-thermo-exterior' }
  },
  {
    key: 'detail',
    systemId: 'SYS-PT-DET-001',
    name: { de: 'Wärmebrücken & Details', en: 'Thermal bridges & details' },
    description: { de: 'PURE THERMO – Anschlüsse, komplexe Geometrien und begrenzter Bauraum', en: 'PURE THERMO – junctions, complex geometries and limited space' },
    path: { de: 'systeme/pure-thermo-detail', en: 'systems/pure-thermo-detail' }
  },
  {
    key: 'heat',
    name: { de: 'Elektrische Flächenwärme', en: 'Electric surface heating' },
    description: { de: 'Anwendung von PURE LIQUID HEAT – Entwicklung und Validierung', en: 'PURE LIQUID HEAT application – development and validation' },
    path: { de: 'pure-liquid-heat', en: 'products/pure-liquid-heat' }
  },
  {
    key: 'fire-protection',
    name: { de: 'Brandschutz', en: 'Fire protection' },
    description: { de: 'Anwendung von PURE FIRE PROTECT – Nachweise nur im geprüften Aufbau', en: 'PURE FIRE PROTECT application – evidence limited to the tested build-up' },
    path: { de: 'produkte/pure-fire-protect', en: 'products/pure-fire-protect' }
  },
  {
    key: 'fire',
    systemId: 'SYS-PT-FIRE-001',
    name: { de: 'Kombinierte Funktionen', en: 'Combined functions' },
    description: { de: 'PURE THERMO + PURE FIRE – D · Entwicklungsstatus; vollständige Kombinationsprüfung offen', en: 'PURE THERMO + PURE FIRE – D · development status; complete combination testing pending' },
    path: { de: 'systeme/pure-thermo-fire', en: 'systems/pure-thermo-fire' }
  }
];
