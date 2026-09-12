import Link from 'next/link';
import { EvidenceBadge } from './EvidenceBadge';
import { Breadcrumb } from './Breadcrumb';
import { localePath, type Locale } from '@/lib/i18n';
import { projectRequestPath } from '@/lib/i18n';

export function EvidenceHubPage({ locale }: { locale: Locale }) {
  const de = locale === 'de';
  const evidenceDetailHref = localePath(locale, de ? 'nachweise/EVD-PT-THERM-001' : 'evidence/EVD-PT-THERM-001');
  const calculatorHref = localePath(locale, de ? 'produkte/pure-thermo#u-wert-rechner' : 'products/pure-thermo#u-wert-rechner');
  const fireRouteHref = localePath(locale, de ? 'systeme/pure-thermo-fire' : 'systems/pure-thermo-fire');

  return (
    <>
      <Breadcrumb items={[{ label: de ? 'Start' : 'Home', href: localePath(locale) }, { label: de ? 'Prüfungen & Evidenz' : 'Testing & Evidence' }]} />
      <section id={de ? 'pruef-und-entwicklungsstatus' : 'testing-and-development-status'} className="section evidence-hub-hero evidence-anchor" style={{ paddingBottom: 'var(--space-4)' }}>
        <div className="container">
          <div className="section-heading section-heading--narrow">
            <span className="section-heading__eyebrow">{de ? 'NACHWEISE' : 'EVIDENCE'}</span>
            <h1>{de ? 'Prüfungen & Evidenz' : 'Testing & Evidence'}</h1>
            <p>{de ? 'PURE trennt externe Prüfung, interne Dokumentation, Modellrechnung und Entwicklungsstatus klar voneinander.' : 'PURE separates external testing, internal documentation, model calculation and development status clearly.'}</p>
          </div>
          <div className="evidence-grid">
            {(['A', 'B', 'C', 'D'] as const).map((evidenceClass) => <div className="evidence-card" key={evidenceClass}><EvidenceBadge evidenceClass={evidenceClass} locale={locale} /><p>{de ? evidenceCopyDe[evidenceClass] : evidenceCopyEn[evidenceClass]}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section evidence-dossier-section"><div className="container"><div className="section-heading section-heading--narrow"><span className="section-heading__eyebrow">{de ? 'FLAGSHIP-DOSSIER' : 'FLAGSHIP DOSSIER'}</span><h2>{de ? 'Kiwa / THERM 4410' : 'Kiwa / THERM 4410'}</h2><p>{de ? 'Extern geprüfter Prüfgegenstand mit klarer Produktzuordnungsgrenze.' : 'Externally tested specimen with a clear product-assignment boundary.'}</p></div><div className="evidence-dossier evidence-dossier--featured"><div className="evidence-dossier__lead"><EvidenceBadge evidenceClass="A" locale={locale} /><strong>λ = {de ? '0,0335' : '0.0335'} ± {de ? '0,0003' : '0.0003'} <small>W/(m·K)</small></strong><span>{de ? 'THERM 4410 · 8,33 mm · R 0,249 m²K/W' : 'THERM 4410 · 8.33 mm · R 0.249 m²K/W'}</span></div><dl className="evidence-dossier__facts"><div><dt>{de ? 'Institut' : 'Institute'}</dt><dd>Kiwa GmbH / MPA Berlin-Brandenburg</dd></div><div><dt>{de ? 'Bericht' : 'Report'}</dt><dd>P000517940 · 2025-06-10</dd></div><div><dt>{de ? 'Norm' : 'Standard'}</dt><dd>DIN EN 12664:2001-05</dd></div><div><dt>{de ? 'Status' : 'Status'}</dt><dd>A · {de ? 'extern geprüft' : 'externally tested'}</dd></div></dl><div className="evidence-dossier__caveat"><strong>{de ? 'Produktzuordnung offen' : 'Product assignment pending'}</strong><p>{de ? 'Der geprüfte Prüfgegenstand ist THERM 4410. Die formale Zuordnung zur aktuellen PURE-THERMO-Rezeptur muss vor uneingeschränkter Produktkommunikation dokumentiert werden.' : 'The tested specimen is THERM 4410. Formal mapping to the current PURE THERMO formulation must be documented before unrestricted product communication.'}</p></div></div></div></section>

      <section className="section section--surface"><div className="container"><div className="evidence-dossier-grid"><article id={de ? 'wasserdampfdiffusion' : 'water-vapour-diffusion'} className="evidence-dossier evidence-anchor"><EvidenceBadge evidenceClass="A" locale={locale} /><h3>{de ? 'Wasserdampf / Bauphysik' : 'Water vapour / building physics'}</h3><div className="evidence-dossier__metrics"><strong>V = 25.6 <small>g/(m²·d)</small></strong><strong>sd = 0.76 <small>m</small></strong><strong>V2 <small>/ medium</small></strong><strong>μ ≈ 95–109 <small>{de ? 'abgeleitet' : 'derived'}</small></strong></div><p>{de ? 'Geprüft an PureThermo-Musterplatten bei ca. 7–8 mm. Der μ-Wert ist aus sd und Schichtdicke abgeleitet und nicht direkt gemessen.' : 'Tested on PureThermo sample plates at approximately 7–8 mm. The μ value is derived from sd and layer thickness and was not measured directly.'}</p><small>{de ? 'Finale Rezeptur- und Systemzuordnung für die jeweilige Produktversion bestätigen.' : 'Final formulation and system mapping must be confirmed for the respective product version.'}</small></article><article id={de ? 'brandverhalten' : 'fire-behaviour'} className="evidence-dossier evidence-anchor"><EvidenceBadge evidenceClass="A" locale={locale} /><h3>{de ? 'Feuer: Einzelprüfung und SBI-Pfad' : 'Fire: individual evidence and SBI pathway'}</h3><div className="evidence-dossier__split"><div><strong>{de ? 'Kleinflamme' : 'Small flame'}</strong><p>{de ? 'Flammenhöhe ca. 50–60 mm · 150-mm-Marke nicht erreicht · kein Nachbrennen · keine brennenden Tropfen im geprüften Aufbau.' : 'Flame height approx. 50–60 mm · 150 mm mark not reached · no afterflame · no burning droplets in the tested setup.'}</p></div><div><strong>{de ? 'Indikativer SBI' : 'Indicative SBI'}</strong><p>FIGRA 885 / 950 W/s · THR600s 8.13 / 9.70 MJ</p><small>{de ? 'Keine allgemeine Brandklasse ableiten.' : 'Do not derive a general fire classification.'}</small></div></div></article></div></div></section>

      <section className="section section--surface"><div className="container"><div className="section-heading section-heading--narrow"><span className="section-heading__eyebrow">{de ? 'Werte & Prüfpfade' : 'Values & test paths'}</span><h2>{de ? 'Nicht nur Lambda.' : 'More than lambda.'}</h2><p>{de ? 'Der Hub bereitet die wichtigsten Evidenzbereiche für Produkt- und Systembewertungen vor.' : 'The hub prepares the key evidence areas for product and system assessment.'}</p></div><div className="evidence-card-list">
        <EvidenceHubCard locale={locale} badge="A" title={{ de: 'Wärmeleitfähigkeit / THERM 4410', en: 'Thermal conductivity / THERM 4410' }} source="Kiwa GmbH / MPA Berlin-Brandenburg · DIN EN 12664" statement={de ? 'λ = 0,0335 W/(m·K) unter dokumentierten Prüfbedingungen.' : 'λ = 0.0335 W/(m·K) under documented test conditions.'} limit={de ? 'Prüfgegenstand THERM 4410; formale Zuordnung zur aktuellen Pure-Thermo-Version separat dokumentieren.' : 'Test subject THERM 4410; formal assignment to the current Pure Thermo version is documented separately.'} href={evidenceDetailHref} />
        <EvidenceHubCard locale={locale} badge="A" title={{ de: 'Wasserdampfdiffusion', en: 'Water vapour diffusion' }} source="DIN EN ISO 7783-2 · DIN EN 1062-1" statement={de ? 'V = 25,6 g/(m²·d), sd = 0,76 m, V2 - mittel bei ca. 7-8 mm Prüfschicht.' : 'V = 25.6 g/(m²·d), sd = 0.76 m, V2 - medium at approx. 7-8 mm test layer.'} limit={de ? 'Gemessen an PureThermo-Musterplatten; finale Rezeptur- und Systemzuordnung ist zu bestätigen. μ ca. 95-109 ist abgeleitet, nicht direkt gemessen.' : 'Measured on PureThermo sample plates; final formulation and system assignment must be confirmed. μ approx. 95-109 is derived, not directly measured.'} href={evidenceDetailHref} />
        <EvidenceHubCard locale={locale} badge="C" title={{ de: 'Wärmedurchlasswiderstand / U-Wert-Modellrechnung', en: 'Thermal resistance / U-value model calculation' }} source={de ? 'Rechenmodell aus Schichtdicke und λ' : 'Calculation model from layer thickness and λ'} statement={de ? 'Interaktiver Rechner für den rechnerischen Bauteil-U-Wert der behandelten Fläche.' : 'Interactive calculator for the calculated component U-value of the treated area.'} limit={de ? 'Bauteil-U-Wert ist nicht Gebäudeenergieeinsparung.' : 'Component U-value is not whole-building energy savings.'} href={calculatorHref} chart />
        <EvidenceHubCard locale={locale} badge="B" title={{ de: 'Interner Temperaturvergleich', en: 'Internal temperature comparison' }} source={de ? 'Interne Entwicklungsdokumentation' : 'Internal development documentation'} statement={de ? 'Temperaturvergleich als dokumentierter Entwicklungs- und Plausibilitätsbaustein.' : 'Temperature comparison as documented development and plausibility evidence.'} limit={de ? 'Kein Ersatz für objektspezifische bauphysikalische Bewertung.' : 'Does not replace project-specific building-physics assessment.'} href={evidenceDetailHref} />
        <EvidenceHubCard locale={locale} badge="A" title={{ de: 'PURE THERMO Brand-Einzelprüfung', en: 'PURE THERMO individual fire test' }} source={de ? 'Externe Einzelprüfung / definierter Prüfaufbau' : 'External individual test / defined test build-up'} statement={de ? 'Einzelprüfung gilt nur für den geprüften Aufbau.' : 'Individual test applies only to the tested build-up.'} limit={de ? 'Keine allgemeine Brandklasse ableiten.' : 'Do not derive a general fire classification.'} href={fireRouteHref} />
        <EvidenceHubCard locale={locale} badge="A" title={{ de: 'PURE FIRE SBI-Einzelprüfung', en: 'PURE FIRE individual SBI test' }} source={de ? 'Externe Einzelprüfung / definierter Prüfaufbau' : 'External individual test / defined test build-up'} statement={de ? 'SBI-Ergebnisse gehören zur geprüften Konfiguration.' : 'SBI results belong to the tested configuration.'} limit={de ? 'Nur geprüfter Aufbau; keine Übertragung auf Kombination.' : 'Tested build-up only; no transfer to the combination.'} href={fireRouteHref} />
        <EvidenceHubCard locale={locale} badge="D" title={{ de: 'PURE THERMO + PURE FIRE Prüfroute', en: 'PURE THERMO + PURE FIRE test route' }} source="Systemdefinition → EN ISO 11925-2 → EN 13823 / SBI → EN 13501-1" statement={de ? 'Kombinationsroute als Entwicklungs- und Validierungspfad.' : 'Combination route as development and validation path.'} limit={de ? 'Keine Kombinationsklasse ohne vollständige Systemprüfung und Klassifizierung.' : 'No combination class without complete system testing and classification.'} href={fireRouteHref} />
      </div></div></section>

      <section className="section"><div className="container"><div className="proof-panel"><div className="proof-panel__header"><span className="section-heading__eyebrow">{de ? 'Nächster Schritt' : 'Next step'}</span><h2>{de ? 'Technische Unterlagen ansehen oder Projekt bewerten lassen.' : 'View technical documents or request project assessment.'}</h2></div><p>{de ? 'Bei konkreten Bauteilen entscheidet der Systemkontext: Untergrund, Feuchte, Schichtaufbau, Finish und Anwendungsgrenze.' : 'For real components, the system context is decisive: substrate, moisture, layer build-up, finish and application limit.'}</p><div className="hero__ctas"><Link className="btn btn--primary" href={projectRequestPath(locale)}>{de ? 'Technische Projektbewertung anfragen' : 'Request technical project assessment'}</Link><Link className="btn btn--secondary" href={calculatorHref}>{de ? 'Bauteil berechnen' : 'Calculate component'}</Link></div></div></div></section>
    </>
  );
}

const evidenceCopyDe = {
  A: 'Extern geprüfte Ergebnisse mit definiertem Prüfgegenstand und dokumentierten Bedingungen.',
  B: 'Intern dokumentierte Validierung, Systemdefinition oder nachvollziehbare Entwicklungsdaten.',
  C: 'Berechnete oder modellierte Werte mit transparenten Annahmen und Grenzen.',
  D: 'Entwicklungsstatus, geplanter Prüfpfad oder technische Hypothese ohne fertigen Leistungsclaim.'
};

const evidenceCopyEn = {
  A: 'Externally tested results with a defined test subject and documented conditions.',
  B: 'Internally documented validation, system definition or traceable development data.',
  C: 'Calculated or modelled values with transparent assumptions and limits.',
  D: 'Development status, planned test path or technical hypothesis without a finished performance claim.'
};

function EvidenceHubCard({ locale, badge, title, source, statement, limit, href, chart = false }: { locale: Locale; badge: 'A' | 'B' | 'C' | 'D'; title: { de: string; en: string }; source: string; statement: string; limit: string; href: string; chart?: boolean }) {
  const de = locale === 'de';
  return (
    <article className="evidence-hub-card">
      <EvidenceBadge evidenceClass={badge} locale={locale} />
      <div>
        <h3>{title[locale]}</h3>
        <p><strong>{de ? 'Quelle / Prüfgrundlage:' : 'Source / test basis:'}</strong> {source}</p>
        <p>{statement}</p>
        <small>{de ? 'Aussagegrenze:' : 'Limit:'} {limit}</small>
        <Link href={href}>{de ? 'Details ansehen' : 'View details'}</Link>
      </div>
      {chart ? <svg className="evidence-hub-card__chart" viewBox="0 0 220 96" role="img" aria-label={de ? 'Liniengrafik Schichtdicke zu U-Wert' : 'Line chart layer thickness to U-value'}><line x1="12" y1="78" x2="208" y2="78" /><line x1="12" y1="14" x2="12" y2="78" /><polyline points="18,20 60,38 102,52 144,64 196,72" /><circle cx="102" cy="52" r="4" /><text x="110" y="30">10 mm</text><text x="110" y="45">1.05 W/(m²K)</text></svg> : null}
    </article>
  );
}
