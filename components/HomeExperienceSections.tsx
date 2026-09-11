import Link from 'next/link';
import { EvidenceBadge } from './EvidenceBadge';
import { LightboxFigure } from './LightboxFigure';
import { AssetFigure } from './AssetFigure';
import { localePath, productPath, projectRequestPath, type Locale } from '@/lib/i18n';

type CopyPair = { de: string; en: string };

const products = [
  { slug: 'pure-thermo', name: 'PURE THERMO', category: { de: 'Thermische Funktionsschicht', en: 'Thermal functional layer' }, copy: { de: 'Dünne Beschichtung für Bauteile, Details und begrenzte Aufbauhöhen.', en: 'Thin coating for components, details and limited build-up heights.' }, asset: { de: 'Moderne Gebäudeisolierung im Querschnitt.png', en: 'Moderne Gebäudeisolierung im Querschnitt_eng.png' } },
  { slug: 'pure-liquid-heat', name: 'PURE LIQUID HEAT', category: { de: 'Elektrische Wärme', en: 'Electrical heat' }, copy: { de: 'Flächige elektrische Wärme als Material- und Modulroute.', en: 'Surface electrical heat as material and module route.' }, asset: { de: 'LH_CONCEPT_PureHeat_Prism_01.jpg', en: 'LH_CONCEPT_PureHeat_Prism_01.jpg' } },
  { slug: 'pure-floor-protect', name: 'PURE FLOOR PROTECT', category: { de: 'Bodenoberflächen', en: 'Floor surfaces' }, copy: { de: 'Oberflächenschutz für stark genutzte Bodenbereiche.', en: 'Surface protection for heavily used floor areas.' }, asset: { de: 'Sauberer Boden für starke Räume.png', en: 'Sauberer Boden für starke Räume.png' } },
  { slug: 'pure-fire-protect', name: 'PURE FIRE PROTECT', category: { de: 'Brandschutz', en: 'Fire protection' }, copy: { de: 'Brandschutzroute mit klarer Prüf- und Klassifizierungslogik.', en: 'Fire-protection route with clear testing and classification logic.' }, asset: { de: '01_fire_hero_wood_architecture.jpeg', en: '01_fire_hero_wood_architecture.jpeg' } },
  { slug: 'pure-surface-protect', name: 'PURE SURFACE PROTECT', category: { de: 'Oberflächenschutz', en: 'Surface protection' }, copy: { de: 'Schutzprinzip für Architektur-, Infrastruktur- und Industrieoberflächen.', en: 'Protection principle for architecture, infrastructure and industrial surfaces.' }, asset: { de: 'PURE Surface Protect am Flughafen Terminal.png', en: 'PURE Surface Protect am Flughafen Terminal.png' } },
  { slug: 'pure-water-protect', name: 'PURE WATER PROTECT', category: { de: 'Unterwasser / Marine', en: 'Underwater / marine' }, copy: { de: 'Easy-to-clean-Route für maritime und dauerhaft wasserberührte Oberflächen.', en: 'Easy-to-clean route for marine and water-exposed surfaces.' }, asset: { de: '01_water_hero_marine.jpeg', en: '01_water_hero_marine.jpeg' } },
  { slug: 'pure-wood-protect', name: 'PURE WOOD PROTECT', category: { de: 'Holzoberflächen', en: 'Wood surfaces' }, copy: { de: 'Schutzroute für Holzbauteile und sichtbare Holzoberflächen.', en: 'Protection route for timber components and visible wood surfaces.' }, asset: { de: '01_wood_asset_page01.jpeg', en: '01_wood_asset_page01.jpeg' } },
  { slug: 'pure-boat-protect', name: 'PURE BOAT PROTECT', category: { de: 'Yacht & Boot', en: 'Yacht & boat' }, copy: { de: 'Oberflächenroute für Yacht- und Bootsbereiche.', en: 'Surface route for yacht and boat areas.' }, asset: { de: '01_boat_asset_page01.jpeg', en: '01_boat_asset_page01.jpeg' } }
] as const;

const evidencePreview = [
  { title: { de: 'Wärmeleitfähigkeit / THERM 4410', en: 'Thermal conductivity / THERM 4410' }, evidence: 'A', source: { de: 'Kiwa GmbH / MPA Berlin-Brandenburg · DIN EN 12664', en: 'Kiwa GmbH / MPA Berlin-Brandenburg · DIN EN 12664' }, statement: { de: 'λ = 0,0335 W/(m·K) unter dokumentierten Prüfbedingungen.', en: 'λ = 0.0335 W/(m·K) under documented test conditions.' }, limit: { de: 'Prüfgegenstand THERM 4410; Zuordnung zur aktuellen Pure-Thermo-Version separat dokumentieren.', en: 'Test subject THERM 4410; assignment to the current Pure Thermo version is documented separately.' } },
  { title: { de: 'Wasserdampfdiffusion', en: 'Water vapour diffusion' }, evidence: 'A', source: { de: 'DIN EN ISO 7783-2 / DIN EN 1062-1', en: 'DIN EN ISO 7783-2 / DIN EN 1062-1' }, statement: { de: 'V = 25,6 g/(m²·d), sd = 0,76 m, V2 - mittel bei ca. 7-8 mm.', en: 'V = 25.6 g/(m²·d), sd = 0.76 m, V2 - medium at approx. 7-8 mm.' }, limit: { de: 'μ ca. 95-109 ist abgeleitet, nicht direkt gemessen.', en: 'μ approx. 95-109 is derived, not directly measured.' } },
  { title: { de: 'Wärmedurchlasswiderstand / U-Wert-Modell', en: 'Thermal resistance / U-value model' }, evidence: 'C', source: { de: 'Berechnetes Modell aus Schichtdicke und λ', en: 'Calculated model from layer thickness and λ' }, statement: { de: 'Bauteilbezogene Veränderung des U-Werts transparent berechenbar.', en: 'Component-level U-value change can be calculated transparently.' }, limit: { de: 'Keine pauschale Aussage zur Gebäudeenergieeinsparung.', en: 'No general statement on whole-building energy savings.' } },
  { title: { de: 'Interner Temperaturvergleich', en: 'Internal temperature comparison' }, evidence: 'B', source: { de: 'Interne Entwicklungsdokumentation', en: 'Internal development documentation' }, statement: { de: 'Temperaturvergleich als Entwicklungs- und Plausibilitätsbaustein.', en: 'Temperature comparison as development and plausibility evidence.' }, limit: { de: 'Kein Ersatz für objektbezogene bauphysikalische Bewertung.', en: 'Does not replace project-specific building-physics assessment.' } },
  { title: { de: 'PURE THERMO Brand-Einzelprüfung', en: 'PURE THERMO individual fire test' }, evidence: 'A', source: { de: 'Externe Einzelprüfung / definierter Prüfaufbau', en: 'External individual test / defined test build-up' }, statement: { de: 'Einzelprüfung gilt nur für den geprüften Aufbau.', en: 'Individual test applies only to the tested build-up.' }, limit: { de: 'Keine allgemeine Brandklasse ableiten.', en: 'Do not derive a general fire classification.' } },
  { title: { de: 'PURE FIRE SBI-Einzelprüfung', en: 'PURE FIRE individual SBI test' }, evidence: 'A', source: { de: 'Externe Einzelprüfung / definierter Prüfaufbau', en: 'External individual test / defined test build-up' }, statement: { de: 'SBI-Ergebnisse gehören zur geprüften Konfiguration.', en: 'SBI results belong to the tested configuration.' }, limit: { de: 'Nur geprüfter Aufbau; keine Übertragung auf Kombination.', en: 'Tested build-up only; no transfer to the combination.' } },
  { title: { de: 'PURE THERMO + PURE FIRE Prüfroute', en: 'PURE THERMO + PURE FIRE test route' }, evidence: 'D', source: { de: 'Systemdefinition → EN ISO 11925-2 → EN 13823 → EN 13501-1', en: 'System definition → EN ISO 11925-2 → EN 13823 → EN 13501-1' }, statement: { de: 'Kombinationsroute ist als Entwicklungs- und Validierungspfad angelegt.', en: 'Combination route is defined as development and validation path.' }, limit: { de: 'Keine Kombinationsklasse ohne vollständige Prüfung.', en: 'No combination class without complete testing.' } }
] as const;

const evidenceLegend: Array<{ evidence: 'A' | 'B' | 'C' | 'D'; label: CopyPair; text: CopyPair }> = [
  { evidence: 'A', label: { de: 'EXTERN GEPRÜFT', en: 'EXTERNALLY TESTED' }, text: { de: 'Dokumentierte Prüfung mit definiertem Prüfgegenstand.', en: 'Documented test with defined test subject.' } },
  { evidence: 'B', label: { de: 'INTERN DOKUMENTIERT', en: 'INTERNALLY DOCUMENTED' }, text: { de: 'Nachvollziehbare interne Validierung oder Systemdefinition.', en: 'Traceable internal validation or system definition.' } },
  { evidence: 'C', label: { de: 'MODELLIERT', en: 'MODELLED' }, text: { de: 'Berechnung mit transparenten Annahmen und Grenzen.', en: 'Calculation with transparent assumptions and limits.' } },
  { evidence: 'D', label: { de: 'ENTWICKLUNG', en: 'DEVELOPMENT' }, text: { de: 'Prüfpfad, Hypothese oder noch nicht freigegebener Aufbau.', en: 'Test path, hypothesis or not-yet-released build-up.' } }
];

export function HomeCalculatorTeaser({ locale }: { locale: Locale }) {
  const de = locale === 'de';
  const calculatorHref = localePath(locale, de ? 'produkte/pure-thermo#u-wert-rechner' : 'products/pure-thermo#u-wert-rechner');
  const evidenceHref = localePath(locale, de ? 'nachweise' : 'evidence');

  return (
    <section className="section section--surface" id={de ? 'bauteil-berechnen' : 'calculate-component'}>
      <div className="container">
        <div className="calculator-teaser">
          <div>
            <span className="section-heading__eyebrow">{de ? 'FÜR IHR BAUTEIL' : 'FOR YOUR COMPONENT'}</span>
            <h2>{de ? 'Was bewirkt PURE THERMO rechnerisch bei Ihrem Bauteil?' : 'What is the calculated effect of PURE THERMO on your building component?'}</h2>
            <p>{de ? 'Ausgangs-U-Wert eingeben, Schichtdicke wählen und die rechnerische Veränderung direkt ansehen.' : 'Enter the existing U-value, choose the layer thickness and view the calculated change directly.'}</p>
            <div className="hero__ctas">
              <Link className="btn btn--primary" href={calculatorHref}>{de ? 'Bauteil berechnen' : 'Calculate component'}</Link>
              <Link className="btn btn--secondary" href={evidenceHref}>{de ? 'Berechnungsgrundlage ansehen' : 'View calculation basis'}</Link>
            </div>
          </div>
          <div className="calculator-teaser__preview" aria-label={de ? 'Beispielhafte Modellrechnung' : 'Example model calculation'}>
            <EvidenceBadge evidenceClass="C" size="sm" />
            <span>{de ? 'Beispielhafte Modellrechnung' : 'Example model calculation'}</span>
            <div className="calculator-teaser__numbers"><strong>1,50</strong><b>↓</b><strong>1,05 <small>W/(m²K)</small></strong></div>
            <p>10 mm PURE THERMO</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeApplicationOverview({ locale }: { locale: Locale }) {
  const de = locale === 'de';
  return (
    <section className="section">
      <div className="container">
        <div className="split-section split-section--balanced">
          <div className="split-section__text">
            <span className="section-heading__eyebrow">{de ? 'Anwendungsebene' : 'Application level'}</span>
            <h2>{de ? 'Mehr als nur Dämmung.' : 'More than just insulation.'}</h2>
            <p>{de ? 'PURE THERMO wird dort interessant, wo Bestand, Detail, Fassade, Innenraum und technische Bereiche unterschiedliche Anforderungen an denselben Systemgedanken stellen.' : 'PURE THERMO becomes relevant where existing buildings, details, facades, interiors and technical areas place different requirements on the same system logic.'}</p>
            <ul className="check-list"><li>{de ? 'Bestand und begrenzte Aufbauhöhe' : 'Existing buildings and limited build-up height'}</li><li>{de ? 'Wärmebrücken und Anschlüsse' : 'Thermal bridges and junctions'}</li><li>{de ? 'Innen- und Außenrouten getrennt bewerten' : 'Assess interior and exterior routes separately'}</li></ul>
          </div>
          <div className="split-section__media">
            <LightboxFigure file={de ? 'Moderne Gebäudeisolierung im Querschnitt.png' : 'Moderne Gebäudeisolierung im Querschnitt_eng.png'} alt={de ? 'Gebäudequerschnitt mit PURE THERMO Anwendungsebenen' : 'Building section with PURE THERMO application levels'} caption={de ? 'Illustrative Anwendungsebene. Die konkrete Eignung wird über Produkt-, System- und Evidenzkontext bewertet.' : 'Illustrative application level. Specific suitability is assessed through product, system and evidence context.'} zoomLabel={de ? 'Vergrößern' : 'Enlarge'} closeLabel={de ? 'Schließen' : 'Close'} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductPortfolioMatrix({ locale }: { locale: Locale }) {
  const de = locale === 'de';
  return (
    <section className="section section--surface" id={de ? 'produkte' : 'portfolio'}>
      <div className="container">
        <div className="section-heading section-heading--narrow"><span className="section-heading__eyebrow">{de ? 'Portfolio' : 'Portfolio'}</span><h2>{de ? 'Eine Technologieplattform. Acht Funktionswelten.' : 'One technology platform. Eight functional worlds.'}</h2></div>
        <div className="portfolio-matrix">
          {products.map((product) => <Link className="portfolio-card" href={productPath(locale, product.slug) ?? localePath(locale)} key={product.slug}><AssetFigure file={product.asset[locale]} alt={product.name} variant="plain" /><span>{product.category[locale]}</span><h3>{product.name}</h3><p>{product.copy[locale]}</p></Link>)}
        </div>
      </div>
    </section>
  );
}

export function EvidenceLegendPreview({ locale }: { locale: Locale }) {
  const de = locale === 'de';
  const hubHref = localePath(locale, de ? 'nachweise' : 'evidence');
  const calculatorHref = localePath(locale, de ? 'produkte/pure-thermo#u-wert-rechner' : 'products/pure-thermo#u-wert-rechner');
  return (
    <section className="section section--surface" id={de ? 'evidenz' : 'evidence'}>
      <div className="container">
        <div className="section-heading section-heading--narrow"><span className="section-heading__eyebrow">{de ? 'Evidenz' : 'Evidence'}</span><h2>{de ? 'Wir unterscheiden Wissen von Annahmen.' : 'We separate evidence from assumptions.'}</h2><p>{de ? 'Technische Aussagen werden als wissenschaftliche Evidence-Legende geführt, nicht als Marketing-Sammelbegriff.' : 'Technical statements are handled as an evidence legend, not as a generic marketing label.'}</p></div>
        <div className="evidence-legend">{evidenceLegend.map((item) => <div className="evidence-legend__row" key={item.evidence}><EvidenceBadge evidenceClass={item.evidence} /><span></span><strong>{item.label[locale]}</strong><p>{item.text[locale]}</p></div>)}</div>
        <div className="evidence-preview"><div className="evidence-preview__heading"><h3>{de ? 'Evidence Preview' : 'Evidence preview'}</h3><Link href={hubHref}>{de ? 'Alle Prüfungen & Evidenz ansehen' : 'View all testing & evidence'}</Link></div><div className="evidence-preview__grid">{evidencePreview.map((item) => <article key={item.title.en}><EvidenceBadge evidenceClass={item.evidence as 'A' | 'B' | 'C' | 'D'} /><h4>{item.title[locale]}</h4><p><strong>{de ? 'Quelle:' : 'Source:'}</strong> {item.source[locale]}</p><p>{item.statement[locale]}</p><small>{item.limit[locale]}</small>{item.title.en.includes('U-value') ? <Link href={calculatorHref}>{de ? 'Details ansehen' : 'View details'}</Link> : <Link href={hubHref}>{de ? 'Details ansehen' : 'View details'}</Link>}</article>)}</div></div>
      </div>
    </section>
  );
}

export function KiwaEvidencePanel({ locale }: { locale: Locale }) {
  const de = locale === 'de';
  const href = localePath(locale, de ? 'nachweise/EVD-PT-THERM-001' : 'evidence/EVD-PT-THERM-001');
  return (
    <section className="section"><div className="container"><div className="kiwa-panel"><div className="kiwa-panel__value"><EvidenceBadge evidenceClass="A" /><strong>λ = {de ? '0,0335' : '0.0335'} <small>W/(m·K)</small></strong><span>{de ? 'Extern geprüfter Messwert' : 'Externally tested value'}</span></div><div className="kiwa-panel__meta"><h2>{de ? 'Prüfobjekt statt Werbeversprechen.' : 'Test object, not marketing shorthand.'}</h2><dl><div><dt>{de ? 'Institut' : 'Institute'}</dt><dd>Kiwa GmbH / MPA Berlin-Brandenburg</dd></div><div><dt>{de ? 'Norm' : 'Standard'}</dt><dd>DIN EN 12664</dd></div><div><dt>{de ? 'Prüfgegenstand' : 'Test subject'}</dt><dd>THERM 4410</dd></div><div><dt>Status</dt><dd>A · {de ? 'extern geprüft' : 'externally tested'}</dd></div></dl><p>{de ? 'Die formale Dokumentation der Zuordnung zur aktuellen PURE-Thermo-Version wird separat geführt.' : 'Formal assignment to the current PURE THERMO version is documented separately.'}</p><Link className="btn btn--primary" href={href}>{de ? 'Prüfgrundlage ansehen' : 'View test evidence'}</Link></div></div></div></section>
  );
}

export function PilotProcess({ locale }: { locale: Locale }) {
  const de = locale === 'de';
  const steps = de ? ['Ausgangslage', 'Systemdefinition', 'Applikation', 'Messung', 'Monitoring', 'Auswertung'] : ['Starting point', 'System definition', 'Application', 'Measurement', 'Monitoring', 'Evaluation'];
  const types = de ? ['Gebäude', 'Industrie', 'Sonderanwendung'] : ['Buildings', 'Industry', 'Special application'];
  return <section className="section section--surface"><div className="container"><div className="section-heading section-heading--narrow"><span className="section-heading__eyebrow">{de ? 'Pilot- und Referenzprogramm' : 'Pilot and reference programme'}</span><h2>{de ? 'Vom Projektfall zur auswertbaren Evidenz.' : 'From project case to evaluable evidence.'}</h2></div><div className="pilot-process">{steps.map((step, index) => <div className="pilot-process__step" key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></div>)}</div><div className="reference-grid reference-grid--compact">{types.map((type) => <div className="reference-card" key={type}><span className="reference-card__name">{type}</span></div>)}</div><div className="hero__ctas" style={{ marginTop: 'var(--space-4)' }}><Link className="btn btn--primary" href={projectRequestPath(locale)}>{de ? 'Pilotprojekt vorschlagen' : 'Propose pilot project'}</Link></div></div></section>;
}

export function PartnershipPanel({ locale }: { locale: Locale }) {
  const de = locale === 'de';
  const items = de ? [['Planung & Architektur', 'Planer', 'Systeminformationen und bauphysikalische Einordnung.', 'Unterlagen anfragen'], ['Industrie & Anwendung', 'Projektpartner', 'Integration, technische Anwendungen und Pilotierung.', 'Pilotroute klären'], ['Partnerschaft & Skalierung', 'Kooperation', 'Marktentwicklung und strukturierte Zusammenarbeit.', 'Kooperation prüfen']] : [['Planning & architecture', 'Planners', 'System information and building-physics context.', 'Request documents'], ['Industry & application', 'Project partners', 'Integration, technical applications and piloting.', 'Clarify pilot route'], ['Partnership & scaling', 'Cooperation', 'Market development and structured collaboration.', 'Check cooperation']];
  return <section className="section" id={de ? 'partnerschaft' : 'partnership'}><div className="container"><div className="section-heading section-heading--narrow"><span className="section-heading__eyebrow">{de ? 'Partnerschaft' : 'Partnership'}</span><h2>{de ? 'Die Zusammenarbeit beginnt mit der richtigen Frage.' : 'Collaboration starts with the right question.'}</h2></div><div className="partner-grid partner-grid--actions">{items.map(([title, audience, copy, action]) => <article className="partner-card" key={title}><span className="partner-card__icon" aria-hidden="true">{audience.slice(0, 2).toUpperCase()}</span><small>{audience}</small><h3>{title}</h3><p>{copy}</p><Link href={projectRequestPath(locale)}>{action}</Link></article>)}</div><div className="hero__ctas" style={{ justifyContent: 'center', marginTop: 'var(--space-4)' }}><Link className="btn btn--primary" href={projectRequestPath(locale)}>{de ? 'Projekt besprechen' : 'Discuss project'}</Link></div></div></section>;
}

export function FinalDecisionCta({ locale }: { locale: Locale }) {
  const de = locale === 'de';
  return <section className="section section--surface"><div className="container"><div className="final-cta"><p className="final-cta__lead">{de ? 'Verstehen. Berechnen. Prüfen. Besprechen.' : 'Understand. Calculate. Verify. Discuss.'}</p><h2>{de ? 'Sprechen Sie mit uns über Ihre Anwendung.' : 'Talk to us about your application.'}</h2><div className="decision-links"><Link href={localePath(locale, de ? 'produkte/pure-thermo#u-wert-rechner' : 'products/pure-thermo#u-wert-rechner')}>{de ? 'Bauteil berechnen' : 'Calculate component'}</Link><Link href={localePath(locale, de ? 'systeme' : 'systems')}>{de ? 'Systeme ansehen' : 'View systems'}</Link><Link href={localePath(locale, de ? 'nachweise' : 'evidence')}>{de ? 'Nachweise prüfen' : 'Check evidence'}</Link></div><div className="hero__ctas" style={{ justifyContent: 'center' }}><Link className="btn btn--primary" href={projectRequestPath(locale)}>{de ? 'Projekt besprechen' : 'Discuss project'}</Link></div></div></div></section>;
}
