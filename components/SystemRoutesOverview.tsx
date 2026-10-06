import Link from 'next/link';
import { LightboxFigure } from './LightboxFigure';
import { localePath, type Locale } from '@/lib/i18n';
import { applicationNavigation } from '@/lib/application-navigation';

const routes = [
  {
    key: 'interior',
    visual: 'Technische Gebäudedämmung im Schnittmodell.png',
    href: { de: 'systeme/pure-thermo-interior', en: 'systems/pure-thermo-interior' },
    status: { de: 'B · Systemdefinition / Prüfprogramm', en: 'B · System definition / test programme' },
    name: 'PURE THERMO INTERIOR',
    benefit: { de: 'Für Innenwände, Keller und kalte Oberflächen bei begrenzter Aufbauhöhe.', en: 'For interior walls, cellars and cold surfaces where build-up height is limited.' },
    applications: { de: ['Innenwand', 'Keller', 'Laibung', 'kalte Oberfläche'], en: ['Interior wall', 'Cellar', 'Reveal', 'cold surface'] },
    principle: { de: 'Untergrund → Primer → PURE THERMO → optionaler Finish.', en: 'Substrate → primer → PURE THERMO → optional finish.' },
    limit: { de: 'Keine pauschale Schimmelfreiheit; Feuchte und Tauwasser objektspezifisch bewerten.', en: 'No general mould-free claim; moisture and condensation require project assessment.' }
  },
  {
    key: 'exterior',
    visual: 'Witterungsbeständige Fassadendämmung mit PURE THERMO.png',
    href: { de: 'systeme/pure-thermo-exterior', en: 'systems/pure-thermo-exterior' },
    status: { de: 'D · Entwicklungsroute', en: 'D · development route' },
    name: 'PURE THERMO EXTERIOR',
    benefit: { de: 'Definierte Außenroute für Fassaden und witterungsbeanspruchte Bauteile.', en: 'Defined exterior route for facades and weather-exposed components.' },
    applications: { de: ['Fassade', 'mineralischer Untergrund', 'Bestand', 'Außendetail'], en: ['Facade', 'mineral substrate', 'existing building', 'exterior detail'] },
    principle: { de: 'Untergrund → Primer → PURE THERMO → Schutz-/Decklage → Finish.', en: 'Substrate → primer → PURE THERMO → protective layer → finish.' },
    limit: { de: 'Witterungsleistung erst nach Systemvalidierung kommunizieren.', en: 'Weather performance only after system validation.' }
  },
  {
    key: 'detail',
    visual: 'Technische Fensterdämmung im Detail.png',
    href: { de: 'systeme/pure-thermo-detail', en: 'systems/pure-thermo-detail' },
    status: { de: 'C · berechnet / modelliert', en: 'C · calculated / modelled' },
    name: 'PURE THERMO DETAIL',
    benefit: { de: 'Für Laibungen, Stürze, Anschlüsse und geometrisch anspruchsvolle Wärmebrücken.', en: 'For reveals, lintels, junctions and geometrically demanding thermal bridges.' },
    applications: { de: ['Fensterlaibung', 'Sturz', 'Ecke', 'Boden-/Wandanschluss'], en: ['Window reveal', 'Lintel', 'Corner', 'floor-wall junction'] },
    principle: { de: 'Lokale Funktionsschicht für kritische Anschlussbereiche.', en: 'Local functional layer for critical junction areas.' },
    limit: { de: 'Jedes Detail braucht eigene bauphysikalische Randbedingungen.', en: 'Each detail needs its own building-physics boundary conditions.' }
  },
  {
    key: 'heat',
    visual: 'LH_CONCEPT_PureHeat_Prism_01.jpg',
    href: { de: 'pure-liquid-heat', en: 'products/pure-liquid-heat' },
    status: { de: 'Interne Entwicklung · externe Geräteprüfung und Serienfreigabe offen', en: 'Internal development · external device testing and series release pending' },
    name: 'PURE LIQUID HEAT',
    benefit: { de: 'Elektrische Flächenwärme für definierte Paneele, Produkte und Designobjekte.', en: 'Electric surface heating for defined panels, products and design objects.' },
    applications: { de: ['Innenraum & Design', 'Outdoor & Hospitality', 'OEM-Integration', 'technische Heizflächen'], en: ['Interior & design', 'Outdoor & hospitality', 'OEM integration', 'technical heating surfaces'] },
    principle: { de: 'Funktionsschicht mit definierter Kontaktierung, Regelung und Sicherheitstechnik.', en: 'Functional layer with defined contacting, control and safety architecture.' },
    limit: { de: 'Entwicklungskonzepte sind keine freigegebenen Serienprodukte; jede Anwendung benötigt eigene Validierung.', en: 'Development concepts are not released series products; each application requires its own validation.' }
  },
  {
    key: 'fire-protection',
    visual: '01_fire_hero_wood_architecture.jpeg',
    href: { de: 'produkte/pure-fire-protect', en: 'products/pure-fire-protect' },
    status: { de: 'Einzelprüfung · nur im dokumentierten Prüfaufbau', en: 'Individual test · limited to the documented test build-up' },
    name: 'PURE FIRE PROTECT',
    benefit: { de: 'Brandschutz als Anwendung von PURE FIRE PROTECT in definierten Aufbauten.', en: 'Fire protection as an application of PURE FIRE PROTECT in defined build-ups.' },
    applications: { de: ['definierte Untergründe', 'sichtbare Materialien', 'anwendungsspezifische Prüfaufbauten'], en: ['defined substrates', 'visible materials', 'application-specific test build-ups'] },
    principle: { de: 'Beschichtung und Untergrund gemeinsam im konkreten Prüfaufbau bewerten.', en: 'Assess coating and substrate together in the specific test build-up.' },
    limit: { de: 'Keine allgemeine Brandklasse und keine Übertragung einer Einzelprüfung auf PURE THERMO + PURE FIRE.', en: 'No general fire classification and no transfer of an individual test to PURE THERMO + PURE FIRE.' }
  },
  {
    key: 'fire',
    visual: 'Wärme- und Brandschutz im System.png',
    href: { de: 'systeme/pure-thermo-fire', en: 'systems/pure-thermo-fire' },
    status: { de: 'D · Entwicklungsstatus', en: 'D · development status' },
    name: 'PURE THERMO + PURE FIRE',
    benefit: { de: 'Entwicklungsroute für einen kombinierten thermischen und brandschutztechnischen Systemaufbau.', en: 'Development route for a combined thermal and fire-protection system build-up.' },
    applications: { de: ['Systemdefinition', 'Prüfmuster', 'SBI-Pfad', 'Klassifizierung'], en: ['System definition', 'test specimen', 'SBI path', 'classification'] },
    principle: { de: 'Untergrund → Primer → PURE THERMO → PURE FIRE → Finish.', en: 'Substrate → primer → PURE THERMO → PURE FIRE → finish.' },
    limit: { de: 'Keine Kombinationsklasse ohne vollständige Kombinationsprüfung.', en: 'No combination class without complete combination testing.' }
  }
] as const;

export function SystemRoutesOverview({ locale }: { locale: Locale }) {
  return (
    <div className="system-routes-index">
      {routes.map((route) => (
        <article className="system-route-card" key={route.key}>
          <LightboxFigure file={route.visual} alt={`${route.name} ${locale === 'de' ? 'Anwendungsvisual' : 'application visual'}`} caption={route.benefit[locale]} zoomLabel={locale === 'de' ? 'Vergrößern' : 'Enlarge'} closeLabel={locale === 'de' ? 'Schließen' : 'Close'} />
          <div className="system-route-card__body">
            <span className="system-route-card__status">{route.status[locale]}</span>
            <h2>{applicationNavigation.find((item) => item.key === route.key)?.name[locale] ?? route.name}</h2>
            <p>{route.name}</p>
            <p>{route.benefit[locale]}</p>
            <ul>{route.applications[locale].map((item) => <li key={item}>{item}</li>)}</ul>
            <small><strong>{locale === 'de' ? 'Systemprinzip:' : 'System principle:'}</strong> {route.principle[locale]}</small>
            <small><strong>{locale === 'de' ? 'Grenze:' : 'Limit:'}</strong> {route.limit[locale]}</small>
            <Link className="btn btn--primary" href={localePath(locale, route.href[locale])}>{locale === 'de' ? 'Anwendung ansehen' : 'View application'}</Link>
          </div>
        </article>
      ))}
    </div>
  );
}