import type { Locale } from './i18n';
import { localizedCounterpart, pathWithoutLocale } from './i18n';

type SeoEntry = { title: string; description: string; image?: string };
type LocalizedSeoEntry = Record<Locale, SeoEntry>;

const seoByRoute: Record<string, LocalizedSeoEntry> = {
  '/': {
    de: { title: 'PURE PARTS Technology Platform | Funktionale Materialtechnologien', description: 'Funktionale Beschichtungs- und Materialtechnologien mit klarer Entwicklungs-, Prüf- und Dokumentationslogik.', image: 'transluzente_materialschichten_im_teal_licht.png' },
    en: { title: 'PURE PARTS Technology Platform | Functional Material Technologies', description: 'Functional coating and material technologies with clear development, testing and documentation logic.', image: 'transluzente_materialschichten_im_teal_licht.png' }
  },
  '/produkte': {
    de: { title: 'PURE Produktfamilien | Technology Platform', description: 'Acht funktionale Material- und Beschichtungstechnologien für thermische, elektrische und schützende Anwendungen.' },
    en: { title: 'PURE Product Families | Technology Platform', description: 'Eight functional material and coating technologies for thermal, electrical and protective applications.' }
  },
  '/produkte/pure-thermo': {
    de: { title: 'PURE THERMO | Thermische Funktionsbeschichtung | PURE', description: 'Dünne thermische Funktionsbeschichtung für definierte Bauteile, Details und Systemanwendungen.', image: 'Architektonischer Wandschichtquerschnitt.png' },
    en: { title: 'PURE THERMO | Thermal Functional Coating | PURE', description: 'Thin thermal functional coating technology for defined components, details and system applications.', image: 'Architektonischer Wandschichtquerschnitt.png' }
  },
  '/pure-liquid-heat': {
    de: { title: 'PURE LIQUID HEAT | Elektrische Flächenwärme | PURE', description: 'Elektrische Widerstandserwärmung als funktionale Schicht für definierte Platten, Produkte und Module.', image: 'Glühende Schichtheizplatte im Querschnitt.png' },
    en: { title: 'PURE LIQUID HEAT | Electrical Surface Heating | PURE', description: 'Electrical resistance heating as a functional layer for defined panels, products and modules.', image: 'Glühende Schichtheizplatte im Querschnitt.png' }
  },
  '/produkte/pure-surface-protect': {
    de: { title: 'PURE SURFACE PROTECT | Transparenter Oberflächenschutz | PURE', description: 'Ultradünne transparente Schutztechnologie für definierte Architektur-, Infrastruktur- und Industrieoberflächen.', image: 'Taufrische Glasfassade im Abendlicht.png' },
    en: { title: 'PURE SURFACE PROTECT | Transparent Surface Protection | PURE', description: 'Ultra-thin transparent protection technology for defined architectural, infrastructure and industrial surfaces.', image: 'Taufrische Glasfassade im Abendlicht.png' }
  },
  '/produkte/pure-floor-protect': {
    de: { title: 'PURE FLOOR PROTECT | Funktionaler Bodenschutz | PURE', description: 'Dünne funktionale Schutztechnologie für definierte, stark genutzte Bodenoberflächen.', image: 'Cinematic Bodennaht mit Wassertropfen.png' },
    en: { title: 'PURE FLOOR PROTECT | Functional Floor Protection | PURE', description: 'Thin functional protection technology for defined, heavily used floor surfaces.', image: 'Cinematic Bodennaht mit Wassertropfen.png' }
  },
  '/produkte/pure-fire-protect': {
    de: { title: 'PURE FIRE PROTECT | Funktionaler Brandschutz | PURE', description: 'Transparente Brandschutztechnologie für definierte und konkret geprüfte Systemaufbauten.', image: 'Feuer trifft auf Schutzschicht.png' },
    en: { title: 'PURE FIRE PROTECT | Functional Fire Protection | PURE', description: 'Transparent fire-protection technology for defined and specifically tested system build-ups.', image: 'Feuer trifft auf Schutzschicht.png' }
  },
  '/produkte/pure-water-protect': {
    de: { title: 'PURE WATER PROTECT | Marine Easy-to-Clean-Technologie | PURE', description: 'Easy-to-clean-Oberflächentechnologie für definierte Marine- und Unterwasseranwendungen.', image: 'Unterwasseransicht einer Yacht im Sonnenlicht.png' },
    en: { title: 'PURE WATER PROTECT | Marine Easy-to-Clean Technology | PURE', description: 'Easy-to-clean surface technology for defined marine and underwater applications.', image: 'Unterwasseransicht einer Yacht im Sonnenlicht.png' }
  },
  '/produkte/pure-wood-protect': {
    de: { title: 'PURE WOOD PROTECT | Holzoberflächenschutz | PURE', description: 'Transparente Schutztechnologie für definierte sichtbare Holzoberflächen und Holzbauteile.', image: 'Holzpflege im goldenen Abendlicht.png' },
    en: { title: 'PURE WOOD PROTECT | Timber Surface Protection | PURE', description: 'Transparent protection technology for defined visible timber surfaces and components.', image: 'Holzpflege im goldenen Abendlicht.png' }
  },
  '/produkte/pure-boat-protect': {
    de: { title: 'PURE BOAT PROTECT | Yacht- und Bootsoberflächen | PURE', description: 'Zonen- und materialbezogene Oberflächenschutzroute für definierte Yacht- und Bootsbereiche.', image: 'Luxusyacht im goldenen Hafenlicht.png' },
    en: { title: 'PURE BOAT PROTECT | Yacht and Boat Surfaces | PURE', description: 'Zone- and substrate-specific surface protection route for defined yacht and boat areas.', image: 'Luxusyacht im goldenen Hafenlicht.png' }
  },
  '/systeme': {
    de: { title: 'Anwendungen | PURE PARTS Technology Platform', description: 'Einsatzbereiche für PURE Technologien: Innenraum, Fassade, Wärmebrücken, elektrische Flächenwärme, Brandschutz und kombinierte Funktionen mit unterschiedlichen Entwicklungs- und Nachweisständen.' },
    en: { title: 'Applications | PURE PARTS Technology Platform', description: 'Use cases for PURE technologies: interiors, facades, thermal bridges, electric surface heating, fire protection and combined functions with different development and evidence stages.' }
  },
  '/systeme/pure-thermo-interior': {
    de: { title: 'Innenraum | PURE THERMO Anwendung | PURE', description: 'Definierte Entwicklungsroute für thermisch relevante Innen-, Bestands- und Detailanwendungen.' },
    en: { title: 'Interior | PURE THERMO Application | PURE', description: 'Defined development route for thermally relevant interior, existing-building and detail applications.' }
  },
  '/systeme/pure-thermo-exterior': {
    de: { title: 'Fassade | PURE THERMO Anwendung | PURE', description: 'Entwicklungsroute für mineralische Außenuntergründe und witterungsbeanspruchte Bauteile.' },
    en: { title: 'Facade | PURE THERMO Application | PURE', description: 'Development route for mineral exterior substrates and weather-exposed components.' }
  },
  '/systeme/pure-thermo-detail': {
    de: { title: 'Wärmebrücken & Details | PURE THERMO Anwendung | PURE', description: 'Anwendung von PURE THERMO für Laibungen, Stürze, Anschlüsse und geometrisch anspruchsvolle Wärmebrücken.' },
    en: { title: 'Thermal bridges & details | PURE THERMO Application | PURE', description: 'PURE THERMO application for reveals, lintels, junctions and geometrically demanding thermal bridges.' }
  },
  '/systeme/pure-thermo-fire': {
    de: { title: 'Kombinierte Funktionen | PURE THERMO + PURE FIRE | Entwicklungsroute | PURE', description: 'Entwicklungsroute für thermische Funktion und Brandschutz im definierten Gesamtaufbau. Vollständige Kombinationsprüfung offen.' },
    en: { title: 'Combined functions | PURE THERMO + PURE FIRE | Development Route | PURE', description: 'Development route combining thermal function and fire protection in a defined system build-up. Complete combination testing pending.' }
  },
  '/nachweise': {
    de: { title: 'Prüfungen und Evidenz | PURE PARTS Technology Platform', description: 'Externe Prüfungen, interne Dokumentation, Modellrechnungen und Entwicklungsstatus klar nach A bis D getrennt.' },
    en: { title: 'Testing and Evidence | PURE PARTS Technology Platform', description: 'External testing, internal documentation, model calculations and development status clearly separated from A to D.' }
  },
  '/nachweise/EVD-PT-THERM-001': {
    de: { title: 'THERM 4410 Wärmeleitfähigkeit | Nachweis | PURE', description: 'Kiwa-Prüfung der Wärmeleitfähigkeit von THERM 4410 nach DIN EN 12664 mit dokumentierter Produktzuordnungsgrenze.' },
    en: { title: 'THERM 4410 Thermal Conductivity | Evidence | PURE', description: 'Kiwa thermal-conductivity test of THERM 4410 to DIN EN 12664 with a documented product-assignment boundary.' }
  },
  '/projekt-anfrage': {
    de: { title: 'Technische Projektbewertung anfragen | PURE', description: 'Bauteil, Anwendung und gewünschten Prüfschritt für eine technische Projektbewertung beschreiben.' },
    en: { title: 'Request Technical Project Assessment | PURE', description: 'Describe the component, application and desired validation step for a technical project assessment.' }
  },
  '/impressum': {
    de: { title: 'Impressum | PURE PARTS Technology Platform', description: 'Anbieterkennzeichnung und rechtliche Angaben der PURE PARTS Technology Platform.' },
    en: { title: 'Imprint | PURE PARTS Technology Platform', description: 'Provider identification and legal information for the PURE PARTS Technology Platform.' }
  },
  '/datenschutz': {
    de: { title: 'Datenschutz | PURE PARTS Technology Platform', description: 'Datenschutzhinweise der PURE PARTS Technology Platform.' },
    en: { title: 'Privacy | PURE PARTS Technology Platform', description: 'Privacy information for the PURE PARTS Technology Platform.' }
  }
};

export function getRouteSeo(pathname: string, locale: Locale): SeoEntry {
  const germanPath = locale === 'de' ? pathname : localizedCounterpart(locale, pathname);
  const routeKey = pathWithoutLocale(germanPath);
  return seoByRoute[routeKey]?.[locale] ?? seoByRoute['/'][locale];
}