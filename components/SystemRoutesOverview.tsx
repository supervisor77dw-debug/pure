import Link from 'next/link';
import { LightboxFigure } from './LightboxFigure';
import { localePath, type Locale } from '@/lib/i18n';

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
          <LightboxFigure file={route.visual} alt={`${route.name} ${locale === 'de' ? 'Systemvisual' : 'system visual'}`} caption={route.benefit[locale]} zoomLabel={locale === 'de' ? 'Vergrößern' : 'Enlarge'} closeLabel={locale === 'de' ? 'Schließen' : 'Close'} />
          <div className="system-route-card__body">
            <span className="system-route-card__status">{route.status[locale]}</span>
            <h2>{route.name}</h2>
            <p>{route.benefit[locale]}</p>
            <ul>{route.applications[locale].map((item) => <li key={item}>{item}</li>)}</ul>
            <small><strong>{locale === 'de' ? 'Systemprinzip:' : 'System principle:'}</strong> {route.principle[locale]}</small>
            <small><strong>{locale === 'de' ? 'Grenze:' : 'Limit:'}</strong> {route.limit[locale]}</small>
            <Link className="btn btn--primary" href={localePath(locale, route.href[locale])}>{locale === 'de' ? 'System ansehen' : 'View system'}</Link>
          </div>
        </article>
      ))}
    </div>
  );
}