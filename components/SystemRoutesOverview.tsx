import Link from 'next/link';
import { AssetFigure } from './AssetFigure';
import { localePath, type Locale } from '@/lib/i18n';

const routes = [
  {
    key: 'interior',
    visual: 'Technische Gebäudedämmung im Schnittmodell.png',
    href: { de: 'systeme/pure-thermo-interior', en: 'systems/pure-thermo-interior' },
    status: { de: 'B · Systemdefinition / Prüfprogramm', en: 'B · System definition / test programme' },
    name: 'PURE THERMO INTERIOR',
    benefit: { de: 'Für Innenwände, Keller und kalte Oberflächen bei begrenzter Aufbauhöhe.', en: 'For interior walls, cellars and cold surfaces where build-up height is limited.' },
    application: { de: 'Innenräume, Bestandswände, Laibungen und Details.', en: 'Interior rooms, existing walls, reveals and details.' }
  },
  {
    key: 'exterior',
    visual: 'Witterungsbeständige Fassadendämmung mit PURE THERMO.png',
    href: { de: 'systeme/pure-thermo-exterior', en: 'systems/pure-thermo-exterior' },
    status: { de: 'D · Entwicklungsroute', en: 'D · development route' },
    name: 'PURE THERMO EXTERIOR',
    benefit: { de: 'Definierte Außenroute für Fassaden und witterungsbeanspruchte Bauteile.', en: 'Defined exterior route for facades and weather-exposed components.' },
    application: { de: 'Mineralische Fassaden, Bestand und begrenzte konstruktive Eingriffe.', en: 'Mineral facades, existing buildings and limited constructive intervention.' }
  },
  {
    key: 'detail',
    visual: 'Technische Fensterdämmung im Detail.png',
    href: { de: 'systeme/pure-thermo-detail', en: 'systems/pure-thermo-detail' },
    status: { de: 'C · berechnet / modelliert', en: 'C · calculated / modelled' },
    name: 'PURE THERMO DETAIL',
    benefit: { de: 'Für Laibungen, Stürze, Anschlüsse und geometrisch anspruchsvolle Wärmebrücken.', en: 'For reveals, lintels, junctions and geometrically demanding thermal bridges.' },
    application: { de: 'Fensterdetail, Deckenanschluss, Ecke, Nische und Boden-/Wandanschluss.', en: 'Window detail, ceiling junction, corner, niche and floor-wall junction.' }
  },
  {
    key: 'fire',
    visual: 'Wärme- und Brandschutz im System.png',
    href: { de: 'systeme/pure-thermo-fire', en: 'systems/pure-thermo-fire' },
    status: { de: 'D · Entwicklungsstatus', en: 'D · development status' },
    name: 'PURE THERMO + PURE FIRE',
    benefit: { de: 'Entwicklungsroute für einen kombinierten thermischen und brandschutztechnischen Systemaufbau.', en: 'Development route for a combined thermal and fire-protection system build-up.' },
    application: { de: 'Systemdefinition, Prüfpfad und Klassifizierung nur für konkret geprüfte Aufbauten.', en: 'System definition, test pathway and classification only for specifically tested build-ups.' }
  }
] as const;

export function SystemRoutesOverview({ locale }: { locale: Locale }) {
  return (
    <div className="system-routes-index">
      {routes.map((route) => (
        <article className="system-route-card" key={route.key}>
          <AssetFigure file={route.visual} alt={`${route.name} thumbnail`} variant="plain" />
          <div className="system-route-card__body">
            <span className="system-route-card__status">{route.status[locale]}</span>
            <h2>{route.name}</h2>
            <p>{route.benefit[locale]}</p>
            <small>{route.application[locale]}</small>
            <Link className="btn btn--primary" href={localePath(locale, route.href[locale])}>{locale === 'de' ? 'System ansehen' : 'View system'}</Link>
          </div>
        </article>
      ))}
    </div>
  );
}