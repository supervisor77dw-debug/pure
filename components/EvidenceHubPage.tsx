import Link from 'next/link';
import { EvidenceBadge } from './EvidenceBadge';
import { Breadcrumb } from './Breadcrumb';
import { localePath, type Locale } from '@/lib/i18n';

export function EvidenceHubPage({ locale }: { locale: Locale }) {
  const de = locale === 'de';
  const evidenceDetailHref = localePath(locale, de ? 'nachweise/EVD-PT-THERM-001' : 'evidence/EVD-PT-THERM-001');
  const calculatorHref = localePath(locale, de ? 'produkte/pure-thermo#u-wert-rechner' : 'products/pure-thermo#u-wert-rechner');

  return (
    <>
      <Breadcrumb items={[{ label: de ? 'Start' : 'Home', href: localePath(locale) }, { label: de ? 'Prüfungen & Evidenz' : 'Testing & Evidence' }]} />
      <section className="section" style={{ paddingBottom: 'var(--space-4)' }}>
        <div className="container">
          <div className="section-heading section-heading--narrow">
            <span className="section-heading__eyebrow">{de ? 'NACHWEISE' : 'EVIDENCE'}</span>
            <h1>{de ? 'Prüfungen & Evidenz' : 'Testing & Evidence'}</h1>
            <p>{de ? 'PURE trennt externe Prüfung, interne Dokumentation, Modellrechnung und Entwicklungsstatus klar voneinander.' : 'PURE separates external testing, internal documentation, model calculation and development status clearly.'}</p>
          </div>
          <div className="evidence-grid">
            {(['A', 'B', 'C', 'D'] as const).map((evidenceClass) => <div className="evidence-card" key={evidenceClass}><EvidenceBadge evidenceClass={evidenceClass} /><p>{de ? evidenceCopyDe[evidenceClass] : evidenceCopyEn[evidenceClass]}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section section--surface"><div className="container"><div className="section-heading section-heading--narrow"><span className="section-heading__eyebrow">{de ? 'Werte & Prüfpfade' : 'Values & test paths'}</span><h2>{de ? 'Nicht nur Lambda.' : 'More than lambda.'}</h2><p>{de ? 'Der Hub bereitet die wichtigsten Evidenzbereiche für Produkt- und Systembewertungen vor.' : 'The hub prepares the key evidence areas for product and system assessment.'}</p></div><div className="evidence-topic-grid">
        <article><EvidenceBadge evidenceClass="A" /><h3>{de ? 'Wärmeleitfähigkeit' : 'Thermal conductivity'}</h3><p>λ = 0.0335 W/(m·K). {de ? 'Externer Kiwa / MPA-Nachweis für THERM 4410 unter dokumentierten Prüfbedingungen.' : 'External Kiwa / MPA evidence for THERM 4410 under documented test conditions.'}</p><Link href={evidenceDetailHref}>{de ? 'Prüfgrundlage ansehen' : 'View evidence'}</Link></article>
        <article><EvidenceBadge evidenceClass="A" /><h3>{de ? 'Wasserdampfdiffusion' : 'Water vapour diffusion'}</h3><p>V = 25.6 g/(m²·d), sd = 0.76 m {de ? 'bei ca. 7-8 mm Prüfschicht, V2 - mittel nach DIN EN 1062-1.' : 'at approx. 7-8 mm test layer, V2 - medium according to DIN EN 1062-1.'}</p><p><strong>μ:</strong> {de ? 'ca. 95-109 nur als abgeleiteter Wert, nicht als direkte Messung.' : 'approx. 95-109 as derived value only, not a direct measurement.'}</p></article>
        <article><EvidenceBadge evidenceClass="C" /><h3>{de ? 'U-Wert Modellrechnung' : 'U-value model calculation'}</h3><p>{de ? 'Bauteil-U-Wert ist nicht gleich Gebäudeenergieeinsparung. Die Modellrechnung zeigt nur die behandelte Bauteilfläche.' : 'Component U-value is not the same as whole-building energy savings. The model covers only the treated component area.'}</p><Link href={calculatorHref}>{de ? 'U-Wert selbst berechnen' : 'Calculate U-value'}</Link></article>
        <article><EvidenceBadge evidenceClass="D" /><h3>{de ? 'Brandverhalten' : 'Fire behaviour'}</h3><p>{de ? 'Separate Bereiche für PURE THERMO Einzelprüfung, PURE FIRE Einzelprüfung und PURE THERMO + PURE FIRE Kombinationsroute. Einzelwerte werden nicht zu einer Kombinationsklasse zusammengezogen.' : 'Separate areas for PURE THERMO individual testing, PURE FIRE individual testing and the PURE THERMO + PURE FIRE combination route. Individual tests are not merged into a combination class.'}</p></article>
      </div></div></section>

      <section className="section"><div className="container"><div className="proof-panel"><div className="proof-panel__header"><span className="section-heading__eyebrow">{de ? 'Nächster Schritt' : 'Next step'}</span><h2>{de ? 'Technische Unterlagen ansehen oder Projekt bewerten lassen.' : 'View technical documents or request project assessment.'}</h2></div><p>{de ? 'Bei konkreten Bauteilen entscheidet der Systemkontext: Untergrund, Feuchte, Schichtaufbau, Finish und Anwendungsgrenze.' : 'For real components, the system context is decisive: substrate, moisture, layer build-up, finish and application limit.'}</p><div className="hero__ctas"><Link className="btn btn--primary" href={evidenceDetailHref}>{de ? 'Technische Unterlagen ansehen' : 'View technical documents'}</Link><Link className="btn btn--secondary" href={calculatorHref}>{de ? 'Bauteil berechnen' : 'Calculate component'}</Link></div></div></div></section>
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
