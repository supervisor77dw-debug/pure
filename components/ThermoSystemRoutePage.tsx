import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { localePath } from '@/lib/i18n';
import { projectRequestPath } from '@/lib/i18n';
import { TechnicalVisual } from './TechnicalVisual';
import { Breadcrumb } from './Breadcrumb';
import { EvidenceBadge } from './EvidenceBadge';
import { SystemLayerStack } from './SystemLayerStack';
import { SurfaceCard } from './SurfaceCard';

const routeContent = {
  detail: {
    evidence: 'C',
    visual: 'detail',
    secondaryVisual: 'thermalBridge',
    de: {
      name: 'PURE THERMO DETAIL',
      title: 'Wenn wenige Millimeter entscheiden.',
      subtitle: 'Systemroute für Laibungen, Stürze, Anschlüsse und geometrisch anspruchsvolle Wärmebrücken.',
      problem: 'Gerade Details scheitern selten an der Grundfläche, sondern an wenigen Millimetern Aufbauhöhe, komplizierten Übergängen oder bereits festgelegten Anschlüssen.',
      route: 'PURE THERMO DETAIL bündelt Anwendungen, bei denen eine dünne thermische Funktionsschicht lokal in einen bestehenden oder geplanten Detailaufbau integriert wird.',
      build: ['Untergrund', 'Primer', 'PURE THERMO', 'optionaler Finish'],
      applications: ['Fensterlaibung', 'Sturz', 'Deckenanschluss', 'Ecke', 'Nische', 'Boden-/Wandanschluss', 'geometrisch komplexe Bereiche'],
      applicationCopy: ['Lokale Funktionsschicht für kritische Fensterdetails.', 'Detailbereich mit begrenztem Bauraum und klaren Randbedingungen.', 'Anschlusszone mit objektspezifischer Tauwasserbewertung.', 'Geometrischer Übergang mit lokalem thermischem Risiko.', 'Kleine Fläche mit hoher Detailrelevanz.', 'Übergang mit konstruktiver und bauphysikalischer Kopplung.', 'Bereiche, die klassische Plattenlösungen nicht sauber erreichen.'],
      technical: ['λ / R über dokumentierte Produktwerte und Modellrechnung bewerten', 'sd / Feuchte im Detailaufbau objektspezifisch prüfen', 'Haftzug und Untergrundvorbereitung festlegen', 'Schimmel-/Tauwasserbewertung für Randbedingungen durchführen'],
      open: ['keine pauschale Lösung für jedes Wärmebrückendetail', 'objektspezifische hygrothermische Bewertung erforderlich', 'Systemdicke und Finish müssen zum Detail passen'],
      cta: 'Ihr Detail berechnen',
      projectCta: 'Technische Projektbewertung anfragen',
      caption: 'Illustrative Detailroute. Tatsächliche Temperaturen und Bauteilwerte hängen vom Aufbau und den Randbedingungen ab.'
    },
    en: {
      name: 'PURE THERMO DETAIL',
      title: 'When a few millimetres matter.',
      subtitle: 'System route for reveals, lintels, junctions and geometrically demanding thermal bridges.',
      problem: 'Detail areas often fail because of a few millimetres of build-up height, complex transitions or fixed existing junctions.',
      route: 'PURE THERMO DETAIL groups applications where a thin thermal functional layer is locally integrated into an existing or planned detail build-up.',
      build: ['Substrate', 'Primer', 'PURE THERMO', 'optional finish'],
      applications: ['Window reveal', 'Lintel', 'Ceiling junction', 'Corner', 'Niche', 'Floor-wall junction', 'geometrically complex areas'],
      applicationCopy: ['Local functional layer for critical window details.', 'Detail area with limited build-up height and defined boundary conditions.', 'Junction zone requiring project-specific condensation assessment.', 'Geometric transition with local thermal risk.', 'Small area with high detail relevance.', 'Transition with constructive and building-physics coupling.', 'Areas that conventional board systems cannot address cleanly.'],
      technical: ['Assess lambda / R using documented product values and model calculation', 'Check sd / moisture in the detail build-up for each project', 'Define adhesion and substrate preparation', 'Run mould / condensation assessment for boundary conditions'],
      open: ['no universal solution for every thermal-bridge detail', 'project-specific hygrothermal assessment required', 'system thickness and finish must fit the detail'],
      cta: 'Calculate your detail',
      projectCta: 'Request technical project assessment',
      caption: 'Illustrative detail route. Actual temperatures and component values depend on build-up and boundary conditions.'
    }
  },
  exterior: {
    evidence: 'D',
    visual: 'exterior',
    de: {
      name: 'PURE THERMO EXTERIOR',
      title: 'Definierte Außenroute für Fassaden und Bestand.',
      subtitle: 'Entwicklungsroute für mineralische Außenuntergründe und witterungsbeanspruchte Bauteile mit begrenzten konstruktiven Eingriffen.',
      problem: 'Außenbauteile benötigen nicht nur thermische Funktion, sondern auch Schutz gegen Witterung, Wasseraufnahme, UV, Frost-Tau-Wechsel und Alterung.',
      route: 'PURE THERMO EXTERIOR beschreibt einen Systempfad, in dem die thermische Funktionsschicht durch Schutz-/Decklage und Finish in einen Außenaufbau eingebunden wird.',
      build: ['Untergrund', 'Primer', 'PURE THERMO', 'Schutz-/Decklage', 'Finish'],
      applications: ['Fassaden', 'mineralische Untergründe', 'Bestandsflächen', 'Bauteile mit begrenztem Eingriff', 'lokale Außen-Details'],
      applicationCopy: ['Thermische Funktionsschicht innerhalb eines definierten Fassadensystems.', 'Systemaufbau auf geeigneten Beton-, Mauerwerks- und Putzoberflächen.', 'Für ausgewählte Sanierungssituationen mit begrenzter Eingriffstiefe.', 'Route für Bauteile, bei denen der konstruktive Eingriff begrenzt bleiben muss.', 'Lokale Anschlüsse und geometrisch anspruchsvolle Außenbereiche.'],
      technical: ['Schlagregen prüfen', 'UV- und Alterungsbeständigkeit prüfen', 'Frost-Tau-Wechsel validieren', 'Wasseraufnahme bewerten', 'Haftung und Untergrundfestigkeit nachweisen'],
      open: ['keine geprüfte Universalbeständigkeit behaupten', 'Decklage und Finish müssen als System validiert werden', 'Exposition und Untergrund sind projektspezifisch zu bewerten'],
      cta: 'Projekt prüfen lassen',
      projectCta: 'Technische Projektbewertung anfragen',
      caption: 'Illustrative Außenroute. Witterungsbeständigkeit und Systemfreigabe hängen vom geprüften Gesamtaufbau ab.'
    },
    en: {
      name: 'PURE THERMO EXTERIOR',
      title: 'Defined exterior route for facades and existing buildings.',
      subtitle: 'Development route for mineral exterior substrates and weather-exposed components with limited constructive intervention.',
      problem: 'Exterior components require not only thermal function but also protection against weathering, water uptake, UV, freeze-thaw cycling and ageing.',
      route: 'PURE THERMO EXTERIOR describes a system path where the thermal functional layer is embedded in an exterior build-up with a protective layer and finish.',
      build: ['Substrate', 'Primer', 'PURE THERMO', 'protective / cover layer', 'finish'],
      applications: ['Facades', 'mineral substrates', 'existing surfaces', 'components with limited intervention', 'local exterior details'],
      applicationCopy: ['Thermal functional layer within a defined facade system.', 'System build-up on suitable concrete, masonry and render surfaces.', 'For selected retrofit situations with limited intervention depth.', 'Route for components where constructive intervention must remain limited.', 'Local junctions and geometrically demanding exterior areas.'],
      technical: ['Test driving rain resistance', 'Test UV and ageing resistance', 'Validate freeze-thaw behaviour', 'Assess water uptake', 'Verify adhesion and substrate strength'],
      open: ['no claim of tested universal durability', 'cover layer and finish must be validated as a system', 'exposure and substrate require project-specific assessment'],
      cta: 'Request project check',
      projectCta: 'Request technical project assessment',
      caption: 'Illustrative exterior route. Weather resistance and system release depend on the tested complete build-up.'
    }
  },
  fire: {
    evidence: 'D',
    visual: 'platform',
    secondaryVisual: 'testPath',
    de: {
      name: 'PURE THERMO + PURE FIRE',
      title: 'Thermische Funktion und Brandschutz nur als geprüfter Systemaufbau.',
      subtitle: 'Entwicklungsroute für einen kombinierten thermischen und brandschutztechnischen Systemaufbau.',
      problem: 'Brandverhalten entsteht nicht aus der Addition einzelner Materialaussagen. Entscheidend ist der konkret geprüfte Aufbau.',
      route: 'Diese Route definiert einen möglichen Kombinationsaufbau und den geplanten Prüfpfad. Sie behauptet keine Kombinationsklasse.',
      build: ['Untergrund', 'Primer', 'PURE THERMO', 'PURE FIRE', 'Finish'],
      applications: ['Systemdefinition', 'Bauteile mit thermischer und brandschutztechnischer Zielsetzung', 'Prüfmuster', 'Klassifizierbare Gesamtaufbauten'],
      applicationCopy: ['Der konkrete Aufbau wird vor jeder Klassifizierung definiert.', 'Thermische und brandschutztechnische Ziele werden nicht additiv behauptet.', 'Prüfmuster bilden nur den geprüften Aufbau ab.', 'Eine Klassifizierung entsteht erst nach vollständiger Systemprüfung.'],
      technical: ['Systemdefinition erstellen', 'EN ISO 11925-2 prüfen', 'EN 13823 / SBI prüfen', 'EN 13501-1 Klassifizierung nur nach Gesamtprüfung ableiten'],
      open: ['D - Entwicklungsstatus', 'keine Kombinationsklasse kommunizieren', 'Einzelprüfungen nicht zu einer Systemklasse zusammenziehen', 'kritische Ergebnisse vollständig dokumentieren'],
      cta: 'Prüfpfad ansehen',
      projectCta: 'Technische Projektbewertung anfragen',
      caption: 'Illustrative Kombinationsroute. Eine Brandklasse gilt nur für den konkret geprüften und klassifizierten Aufbau.'
    },
    en: {
      name: 'PURE THERMO + PURE FIRE',
      title: 'Thermal function and fire protection only as a tested system build-up.',
      subtitle: 'Development route for a combined thermal and fire-protection system build-up.',
      problem: 'Fire behaviour is not created by adding isolated material statements. The specifically tested build-up is decisive.',
      route: 'This route defines a possible combined build-up and planned test path. It does not claim a combination classification.',
      build: ['Substrate', 'Primer', 'PURE THERMO', 'PURE FIRE', 'finish'],
      applications: ['System definition', 'components with thermal and fire-protection targets', 'test specimens', 'classifiable complete build-ups'],
      applicationCopy: ['The specific build-up is defined before any classification.', 'Thermal and fire-protection targets are not claimed additively.', 'Test specimens represent only the tested build-up.', 'Classification emerges only after complete system testing.'],
      technical: ['Define system configuration', 'Test EN ISO 11925-2', 'Test EN 13823 / SBI', 'Derive EN 13501-1 classification only after complete-system testing'],
      open: ['D - development status', 'do not communicate a combination class', 'do not merge individual tests into a system class', 'document critical results completely'],
      cta: 'View test path',
      projectCta: 'Request technical project assessment',
      caption: 'Illustrative combination route. A fire classification applies only to the specifically tested and classified build-up.'
    }
  }
} as const;

type RouteKey = keyof typeof routeContent;
type VisualKey = keyof typeof import('@/lib/thermo-system-visuals').thermoSystemVisuals;

const routeApplicationVisuals: Partial<Record<RouteKey, ReadonlyArray<{ asset: string; position: string }>>> = {
  detail: [
    { asset: 'Detaillierter Fensteranschluss mit Dämmfassade.png', position: 'center' },
    { asset: 'Detaillierter Fensteranschluss mit Dämmfassade.png', position: '70% center' },
    { asset: 'Heller, aufgeräumter Kellerraum.png', position: 'center top' },
    { asset: 'Heller, aufgeräumter Kellerraum.png', position: 'left center' },
    { asset: 'Heller, aufgeräumter Kellerraum.png', position: 'right center' },
    { asset: 'Detaillierter Fensteranschluss mit Dämmfassade.png', position: '30% center' },
    { asset: 'Ornate Pariser Jugendstilfassade im Sonnenlicht.png', position: 'center' }
  ],
  exterior: [
    { asset: 'Moderne Fassade mit Seeblick.png', position: 'center' },
    { asset: 'Verwitterte Steinfassade im Sonnenlicht.png', position: 'center' },
    { asset: 'Ornate Pariser Jugendstilfassade im Sonnenlicht.png', position: 'center' },
    { asset: 'Detaillierter Fensteranschluss mit Dämmfassade.png', position: '35% center' },
    { asset: 'Detaillierter Fensteranschluss mit Dämmfassade.png', position: '75% center' }
  ]
};

export function ThermoSystemRoutePage({ locale, route }: { locale: Locale; route: RouteKey }) {
  const config = routeContent[route];
  const copy = config[locale];
  const calculatorHref = localePath(locale, locale === 'de' ? 'produkte/pure-thermo#u-wert-rechner' : 'products/pure-thermo#u-wert-rechner');
  const evidenceHref = localePath(locale, locale === 'de' ? 'nachweise/EVD-PT-THERM-001' : 'evidence/EVD-PT-THERM-001');

  return (
    <>
      <Breadcrumb items={[{ label: locale === 'de' ? 'Start' : 'Home', href: localePath(locale) }, { label: locale === 'de' ? 'Systemrouten' : 'System Routes' }, { label: copy.name }]} />
      <section className="hero system-route-hero" style={{ paddingTop: 'var(--space-6)', paddingBottom: 'var(--space-5)' }}>
        <div className="container">
          <p className="hero__eyebrow">{locale === 'de' ? 'SYSTEMROUTE' : 'SYSTEM ROUTE'}</p>
          <h1>{copy.title}</h1>
          <p className="hero__subtitle">{copy.subtitle}</p>
          <div className="hero__ctas">
            <Link className="btn btn--primary" href={route === 'detail' ? calculatorHref : '#projektbewertung'}>{copy.cta}</Link>
            <Link className="btn btn--secondary" href={evidenceHref}>{locale === 'de' ? 'Technische Nachweise ansehen' : 'View technical evidence'}</Link>
          </div>
          <div style={{ marginTop: 'var(--space-3)' }}><EvidenceBadge evidenceClass={config.evidence as 'A' | 'B' | 'C' | 'D'} locale={locale} /></div>
        </div>
      </section>

      <section className="section"><div className="container"><div className="split-section"><div className="split-section__text"><span className="section-heading__eyebrow">{locale === 'de' ? 'Problem' : 'Problem'}</span><h2>{locale === 'de' ? 'Warum diese Route eigenständig bewertet wird.' : 'Why this route needs its own assessment.'}</h2><p>{copy.problem}</p><p>{copy.route}</p></div><div className="split-section__media"><TechnicalVisual locale={locale} visual={config.visual as VisualKey} altDe={copy.name} altEn={copy.name} captionDe={copy.caption} captionEn={copy.caption} zoomable /></div></div></div></section>

      <section className="section section--surface"><div className="container"><div className="section-heading section-heading--narrow"><span className="section-heading__eyebrow">{locale === 'de' ? 'Systemaufbau' : 'System build-up'}</span><h2>{locale === 'de' ? 'Vom Untergrund zum definierten Aufbau.' : 'From substrate to defined build-up.'}</h2></div><SystemLayerStack layers={copy.build} locale={locale} label={copy.name} /></div></section>

      <section className="section"><div className="container"><div className="section-heading section-heading--narrow"><span className="section-heading__eyebrow">{locale === 'de' ? 'Anwendungen' : 'Applications'}</span><h2>{locale === 'de' ? 'Typische Einsatzfelder.' : 'Typical application fields.'}</h2></div><div className="route-application-grid">{copy.applications.map((item, index) => { const visual = routeApplicationVisuals[route]?.[index]; return visual ? <SurfaceCard className="route-application-card system-context-card" surface={`system-${route}`} backgroundAsset={visual.asset} backgroundPosition={visual.position} key={item}><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><h3>{item}</h3><p>{copy.applicationCopy[index]}</p></SurfaceCard> : <article className="route-application-card" key={item}><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><h3>{item}</h3><p>{copy.applicationCopy[index]}</p></article>; })}</div></div></section>

      <section className="section section--surface"><div className="container"><div className="split-section"><div className="split-section__text"><span className="section-heading__eyebrow">{locale === 'de' ? 'Technische Bewertung' : 'Technical assessment'}</span><h2>{locale === 'de' ? 'Die Leistung entsteht im geprüften Systemkontext.' : 'Performance is created in the assessed system context.'}</h2><ul className="check-list">{copy.technical.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="warning-panel" role="note"><span className="warning-panel__label">{locale === 'de' ? 'Offene Prüfungen / Grenzen' : 'Open tests / limits'}</span><ul>{copy.open.map((item) => <li key={item}>{item}</li>)}</ul></div></div></div></section>

      {route === 'fire' ? <section className="section"><div className="container"><div className="system-fire-evidence"><article><span className="section-heading__eyebrow">{locale === 'de' ? 'VERFÜGBARE EINZELNACHWEISE' : 'AVAILABLE INDIVIDUAL EVIDENCE'}</span><h2>{locale === 'de' ? 'Einzelprüfungen bleiben Einzelprüfungen.' : 'Individual tests remain individual tests.'}</h2><ul><li>PURE THERMO · {locale === 'de' ? 'externe Einzelprüfung' : 'individual external test'}</li><li>PURE FIRE · {locale === 'de' ? 'separate SBI-Einzelprüfung' : 'separate SBI individual test'}</li><li>{locale === 'de' ? 'Gilt jeweils nur für den dokumentierten Prüfaufbau.' : 'Each applies only to the documented tested build-up.'}</li></ul></article><article className="system-fire-evidence__pending"><span className="section-heading__eyebrow">{locale === 'de' ? 'KOMBINIERTE SYSTEMVALIDIERUNG' : 'COMBINED SYSTEM VALIDATION'}</span><EvidenceBadge evidenceClass="D" locale={locale} /><h2>{locale === 'de' ? 'Prüfpfad, nicht Klassifizierung.' : 'Validation pathway, not classification.'}</h2><div className="validation-path">{['System definition', 'EN ISO 11925-2', 'EN 13823 / SBI', 'EN 13501-1 classification'].map((step, index) => <div key={step}><span>0{index + 1}</span><strong>{locale === 'de' ? ['Systemdefinition', 'EN ISO 11925-2', 'EN 13823 / SBI', 'EN 13501-1 Klassifizierung'][index] : step}</strong></div>)}</div><p>{locale === 'de' ? 'Der letzte Schritt bleibt offen, bis der vollständige Kombinationsaufbau geprüft und klassifiziert wurde.' : 'The final step remains open until the complete combination build-up has been tested and classified.'}</p></article></div></div></section> : null}

      {'secondaryVisual' in config ? <section className="section"><div className="container"><TechnicalVisual locale={locale} visual={config.secondaryVisual as VisualKey} altDe={copy.name} altEn={copy.name} captionDe={copy.caption} captionEn={copy.caption} zoomable /></div></section> : null}

      <section className="section section--surface" id="projektbewertung"><div className="container"><div className="final-cta"><p className="final-cta__lead">{locale === 'de' ? 'Passt PURE THERMO zu Ihrem Projekt?' : 'Is PURE THERMO suitable for your project?'}</p><h2>{copy.projectCta}</h2><div className="hero__ctas" style={{ justifyContent: 'center' }}><Link className="btn btn--primary" href={projectRequestPath(locale)}>{copy.projectCta}</Link>{route === 'detail' ? <Link className="btn btn--secondary btn--dark" href={calculatorHref}>{copy.cta}</Link> : null}</div></div></div></section>
    </>
  );
}
