import type { Metadata } from 'next';
import Link from 'next/link';
import { getContentByPath, extractListItems, extractSubsections, stripEditorialNotes, beforeFirstHeading } from '@/lib/content';
import {
  getProductBySlug,
  getSystemsByProduct,
  getValueById,
  getEvidenceByProduct,
  getDocumentById,
  getOrganizationById
} from '@/lib/data';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SystemCard } from '@/components/SystemCard';
import { TechnicalValue } from '@/components/TechnicalValue';
import { EvidenceCard } from '@/components/EvidenceCard';
import { EvidenceBadge } from '@/components/EvidenceBadge';
import { DocumentCard } from '@/components/DocumentCard';
import { LightboxFigure } from '@/components/LightboxFigure';
import { assetSrc } from '@/lib/assets';
import { TechnicalVisual } from '@/components/TechnicalVisual';
import { headers } from 'next/headers';
import { isLocale } from '@/lib/i18n';
import { PureThermoUValueCalculator } from '@/components/PureThermoUValueCalculator';

export const metadata: Metadata = { title: 'Pure Thermo · PURE Technology Platform' };

const CORE_VALUE_IDS = [
  'VAL-PT-LAMBDA-001',
  'VAL-PT-V-001',
  'VAL-PT-SD-001',
  'VAL-PT-MU-001',
  'VAL-PT-CONSUMPTION-001',
  'VAL-PT-SPRAY-LAYER-001',
  'VAL-PT-R-05MM-001',
  'VAL-PT-R-10MM-001',
  'VAL-PT-R-20MM-001',
  'VAL-PT-R-30MM-001'
];

const SYSTEM_HREFS: Record<string, string> = {
  'SYS-PT-INT-001': '/systeme/pure-thermo-interior',
  'SYS-PT-EXT-001': '/systeme/pure-thermo-exterior',
  'SYS-PT-DET-001': '/systeme/pure-thermo-detail',
  'SYS-PT-FIRE-001': '/systeme/pure-thermo-fire'
};

const EVIDENCE_GROUPS = [
  { evidenceClass: 'A' as const, title: 'A – EXTERN GEPRÜFT' },
  { evidenceClass: 'B' as const, title: 'B – INTERN DOKUMENTIERT' },
  { evidenceClass: 'C' as const, title: 'C – BERECHNET / MODELLIERT' }
];

export default function PureThermoPage() {
  const locale = isLocale(headers().get('x-pure-locale') || '') ? (headers().get('x-pure-locale') as 'de' | 'en') : 'de';
  const product = getProductBySlug('pure-thermo');
  if (!product) return null;

  const content = getContentByPath('products/pure-thermo.de.md');
  const notUniversalSection = content.getSection('Nicht als Universalersatz');
  const notUniversalIntro = beforeFirstHeading(notUniversalSection?.html);
  const applicationFields = extractListItems(notUniversalSection?.html);

  const materialSection = content.getSection('Materialarchitektur');
  const materialHtml = stripEditorialNotes(materialSection?.html);

  const lambdaValue = getValueById('VAL-PT-LAMBDA-001');
  const values = CORE_VALUE_IDS.map((id) => getValueById(id)).filter((v): v is NonNullable<typeof v> => Boolean(v));

  const systems = getSystemsByProduct(product.id);
  const evidenceRecords = getEvidenceByProduct(product.id);
  const kiwaDoc = getDocumentById('DOC-PT-KIWA-001');
  const kiwaOrg = kiwaDoc?.organization_id ? getOrganizationById(kiwaDoc.organization_id) : undefined;

  const limitsSection = content.getSection('Technische Grenzen');
  const faqSection = content.getSection('FAQ');
  const faqItems = extractSubsections(faqSection?.html);

  return (
    <>
      <Breadcrumb items={[{ label: 'Start', href: '/' }, { label: 'Produkte' }, { label: 'Pure Thermo' }]} />

      <section className="hero" style={{ paddingTop: 'var(--space-6)', paddingBottom: 'var(--space-5)' }}>
        <div className="container">
          <p className="hero__eyebrow">PURE THERMO</p>
          <h1>Thermische Funktion bei minimaler Aufbauhöhe.</h1>
          <p className="hero__subtitle">
            Eine dünn applizierbare Beschichtungstechnologie für thermisch relevante Bauteilbereiche, komplexe Geometrien und Anwendungen mit begrenztem Bauraum.
          </p>
          <div className="hero__ctas">
            <Link className="btn btn--primary" href="#systemaufbau">Systemaufbau ansehen</Link>
            <Link className="btn btn--secondary" href="/nachweise/EVD-PT-THERM-001">Technische Nachweise</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading section-heading--narrow">
            <span className="section-heading__eyebrow">DIE HERAUSFORDERUNG</span>
            <h2>Wenn Bauraum zur technischen Grenze wird.</h2>
          </div>
          <div className="problem-grid">
            <div className="problem-card">
              <h3>Begrenzte Aufbauhöhe</h3>
              <p>Konventionelle Systeme stoßen dort an bauliche Grenzen, wo ein zusätzlicher Aufbau nicht realisierbar ist.</p>
            </div>
            <div className="problem-card">
              <h3>Komplexe Geometrien</h3>
              <p>Detailbereiche und Anschlüsse lassen sich nicht immer mit einer herkömmlichen Einbaulösung adressieren.</p>
            </div>
            <div className="problem-card">
              <h3>Bestandsanschlüsse</h3>
              <p>Nachträgliche Lösungen müssen dort funktionieren, wo vorhandene Elemente, Bauteilgrenzen und Konstruktionen bereits festliegen.</p>
            </div>
            <div className="problem-card">
              <h3>Lokale thermische Hotspots</h3>
              <p>Bei bestimmten Detailproblemen kann ergänzend zur Gesamtmaßnahme eine gezielte lokale thermische Behandlung sinnvoll sein.</p>
            </div>
            <div className="problem-card">
              <h3>Schwer zugängliche Bereiche</h3>
              <p>Einzelne Flächen oder Detailbereiche können ohne aufwendige Baumaßnahmen nicht mit klassischen Systemen gelöst werden.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-heading section-heading--narrow">
            <span className="section-heading__eyebrow">Wo wird es eingesetzt?</span>
            <h2>Thermische Funktion an den kritischen Stellen.</h2>
          </div>
          <div className="card-grid card-grid--3">
            {applicationFields.map((item) => (
              <div className="application-card" key={item.label}>
                <span className="application-card__name">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="systemaufbau">
        <div className="container">
          <div className="section-heading section-heading--narrow">
            <span className="section-heading__eyebrow">Systemaufbau</span>
            <h2>Vom Bauteil zur funktionalen Schicht.</h2>
          </div>
          <div className="split-section split-section--balanced">
            <div className="split-section__media">
              <LightboxFigure
                file="Bauteilquerschnitt.png"
                alt="Bauteilquerschnitt mit einer dünnen funktionalen Pure-Thermo-Schicht auf dem Substrat"
                caption="Untergrund → PURE THERMO Funktionsschicht → definierte Systemlage(n)"
              />
            </div>
            <div className="split-section__text">
              <p>
                Die thermische Wirkung entsteht im Zusammenspiel von Substrat, applizierter Funktionsschicht und dem konkreten Bauteilaufbau.
              </p>
              <p>
                PURE THERMO ist nicht als generische Vollwärmedämmung konzipiert, sondern als gezielte Funktionsschicht für thermisch relevante Bereiche mit begrenztem Raum und komplexen Randbedingungen.
              </p>
              <LightboxFigure
                file="pure Thermo Basic.png"
                alt="PURE THERMO Basic als Schichtsystem in der praktischen Anwendung"
                caption="Detailhafte Systemdarstellung für den technischen Einblick."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-heading section-heading--narrow">
            <span className="section-heading__eyebrow">Wie funktioniert das Material?</span>
            <h2>Das Materialprinzip lässt sich in wenigen Schritten erklären.</h2>
          </div>
          <div className="material-story">
            <div className="material-story__visual">
              <LightboxFigure
                file="Aerogel Funktion.png"
                alt="Funktionales Prinzip: Aerogel-Struktur beeinflusst den Wärmetransport innerhalb der dünnen Schicht"
                caption="Makro: Die Materialstruktur beeinflusst den Wärmetransport."
              />
            </div>
            <div className="material-story__copy">
              <p className="lede">
                Der relevante Effekt entsteht durch die Struktur der Schicht – nicht durch eine große Materialmasse.
              </p>
              <p>
                Innerhalb der nanoporösen Architektur wird der Wärmetransport innerhalb der Funktionsschicht reduziert. Dadurch kann eine sehr dünne Beschichtung für bestimmte thermische Einsatzbereiche wirksam werden. Die konkrete Wirkung ist stets im jeweiligen Bauteil- und Systemkontext zu bewerten.
              </p>
            </div>
          </div>
          <div className="material-detail" style={{ marginTop: 'var(--space-5)' }}>
            <div className="material-detail__image">
              <LightboxFigure
                file="Materialstruktur.png"
                alt="Detailansicht der nanoporösen Materialstruktur von Pure Thermo"
                caption="Materialstruktur als Grundlage der thermischen Funktion."
              />
            </div>
            <div className="material-detail__text">
              <h3>Technisch sauber formuliert</h3>
              <p>
                PURE THERMO ist eine Material- und Beschichtungstechnologie für definierte thermische Funktionsbereiche. Die Wirkung wird in einem klaren Systemkontext bewertet – nicht als allgemeine Ersatzlösung für jeden Aufbau.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading section-heading--narrow">
            <span className="section-heading__eyebrow">Anwendungsfelder</span>
            <h2>Typische Einsatzbereiche und Systemkontexte.</h2>
          </div>
          <div className="application-journey">
            <article className="journey-card">
              <div className="journey-card__body">
                <h3>Bestand</h3>
                <p>Bauteile mit begrenztem Bauraum oder vorhandenen Randbedingungen.</p>
              </div>
            </article>
            <article className="journey-card">
              <div className="journey-card__body">
                <h3>Detailbereiche</h3>
                <p>Anschlüsse, Laibungen und komplexe Übergänge.</p>
              </div>
            </article>
            <article className="journey-card">
              <div className="journey-card__body">
                <h3>Komplexe Geometrien</h3>
                <p>Funktionsbereiche mit unregelmäßiger Oberfläche und systemischer Einbindung.</p>
              </div>
            </article>
            <article className="journey-card">
              <div className="journey-card__body">
                <h3>Technische Oberflächen</h3>
                <p>Thermisch relevante Bereiche mit konkreter Prüf- und Systemlogik.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-heading section-heading--narrow">
            <span className="section-heading__eyebrow">Anwendungsübersicht</span>
            <h2>Mehr als nur Dämmung.</h2>
          </div>
          <TechnicalVisual
            locale={locale}
            visual="overview"
            altDe="Illustrative Übersicht möglicher PURE-THERMO-Anwendungssituationen in einem Gebäudeschnitt."
            altEn="Illustrative overview of potential PURE THERMO application scenarios in a building section."
            captionDe="Illustrative Übersicht möglicher Anwendungssituationen. Die technische Eignung und der konkrete Systemaufbau sind anwendungs- und objektspezifisch zu prüfen."
            captionEn="Illustrative overview of potential application scenarios. Technical suitability and the specific system build-up must be assessed for each application and project."
            zoomable
          />
        </div>
      </section>

      <section className="section section--surface" id="kennwerte">
        <div className="container">
          <div className="section-heading section-heading--narrow">
            <span className="section-heading__eyebrow">Technische Kernwerte</span>
            <h2>Die wesentlichen Kennwerte als echte Produktdaten.</h2>
          </div>
          <div className="warning-panel" role="alert">
            <span className="warning-panel__label">Prüfstatus</span>
            Der externe Prüfbericht bezieht sich auf THERM 4410. Die formale Dokumentation der Zuordnung zur aktuellen PURE-Thermo-Version wird separat geführt.
          </div>
          <div className="technical-value-groups">
            {EVIDENCE_GROUPS.map((group) => {
              const groupValues = values.filter((value) => value.evidence_class === group.evidenceClass);
              if (!groupValues.length) return null;
              return (
                <section className="technical-value-group" key={group.evidenceClass} aria-labelledby={`values-${group.evidenceClass}`}>
                  <div className="technical-value-group__heading">
                    <h3 id={`values-${group.evidenceClass}`}>{group.title}</h3>
                    <EvidenceBadge evidenceClass={group.evidenceClass} />
                  </div>
                  <div className="technical-value-grid">
                    {groupValues.map((value) => (
                      <TechnicalValue key={value.id} value={value} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
          <PureThermoUValueCalculator locale={locale} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="proof-panel">
            <div className="proof-panel__header">
              <span className="section-heading__eyebrow">Extern geprüft</span>
              <h2>λ = 0,0335 W/(m·K)</h2>
            </div>
            <div className="proof-panel__meta">
              <span>Kiwa GmbH / MPA Berlin-Brandenburg</span>
              <span>DIN EN 12664</span>
            </div>
            <p>
              Der Nachweis für THERM 4410 wurde unter dokumentierten Prüfbedingungen nach DIN EN 12664 ermittelt. Wesentliche Grenzen liegen in der Zuordnung des Prüfgegenstands zur aktuellen Pure-Thermo-Version und in der Übertragbarkeit auf andere Systemaufbauten.
            </p>
            <div className="hero__ctas">
              <Link className="btn btn--primary" href="/nachweise/EVD-PT-THERM-001">Technische Nachweise</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-heading section-heading--narrow">
            <span className="section-heading__eyebrow">Systemrouten</span>
            <h2>PURE THERMO als Basis für definierte Systemweiterentwicklung.</h2>
          </div>
          <div className="system-routes">
            <div className="system-routes__root">
              <span className="section-heading__eyebrow">Basistechnologie</span>
              <h3>PURE THERMO</h3>
              <p>Gemeinsame thermische Funktionsbasis für definierte System- und Anwendungsrouten.</p>
            </div>
            <div className="system-routes__children">
              {systems.map((system) => (
                <SystemCard key={system.id} system={system} href={SYSTEM_HREFS[system.id]} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading section-heading--narrow">
            <span className="section-heading__eyebrow">Wo PURE THERMO sinnvoll ist – und wo nicht</span>
            <h2>Die Grenzen sind Teil der fachlichen Seriosität.</h2>
          </div>
          {limitsSection ? (
            <div className="limits-grid">
              <div className="limits-panel limits-panel--strengths">
                <h3>Wo PURE THERMO seine Stärke ausspielt</h3>
                <ul>
                  <li>begrenzte Aufbauhöhe</li>
                  <li>Detailbereiche</li>
                  <li>komplexe Geometrien</li>
                  <li>lokale thermische Funktionen</li>
                  <li>Bestandsanschlüsse</li>
                </ul>
              </div>
              <div className="limits-panel limits-panel--caution">
                <h3>Was daraus nicht pauschal abgeleitet werden kann</h3>
                <div className="prose" dangerouslySetInnerHTML={{ __html: limitsSection.html }} />
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-heading section-heading--narrow">
            <span className="section-heading__eyebrow">Wirtschaftlichkeit</span>
            <h2>Über die reine Materialbetrachtung hinaus.</h2>
          </div>
          <LightboxFigure
            file="TCO Logik.png"
            alt="TCO-Logik von Pure Thermo mit Material-, Montage-, Betriebs- und Lebenszyklusbetrachtung"
            caption="Wirtschaftlichkeit kann sich aus Material, Montage, Eingriffstiefe und Lebenszyklus zusammensetzen – qualitative Logik, soweit keine belastbare Projektkalkulation vorliegt."
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading section-heading--narrow">
            <span className="section-heading__eyebrow">FAQ</span>
            <h2>Häufige Fragen zu PURE THERMO.</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            {faqItems.map((item) => (
              <details key={item.heading} style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-3)' }}>
                <summary style={{ fontWeight: 600, cursor: 'pointer', color: 'var(--color-navy)' }}>{item.heading}</summary>
                <p style={{ marginTop: 'var(--space-2)', color: 'var(--color-text-muted)' }}>{item.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="final-cta">
            <p className="final-cta__lead">Prüfen wir, ob PURE THERMO für Ihr Bauteil sinnvoll ist.</p>
            <h2>Projekt besprechen</h2>
            <div className="hero__ctas" style={{ justifyContent: 'center' }}>
              <Link className="btn btn--primary" href="/de/projekt-anfrage">Projekt besprechen</Link>
              <Link className="btn btn--secondary" href="/nachweise/EVD-PT-THERM-001">Technische Unterlagen ansehen</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
