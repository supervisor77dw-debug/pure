import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { LightboxFigure } from '@/components/LightboxFigure';
import { EvidenceLegendPreview, FinalDecisionCta, HomeApplicationOverview, HomeCalculatorTeaser, KiwaEvidencePanel, PartnershipPanel, PilotProcess, ProductPortfolioMatrix } from '@/components/HomeExperienceSections';
import { localePath, type Locale } from '@/lib/i18n';
import { headers } from 'next/headers';
import { isLocale } from '@/lib/i18n';

export default function HomePage() {
  const headerLocale = headers().get('x-pure-locale') || 'de';
  const locale: Locale = isLocale(headerLocale) ? headerLocale : 'de';
  const deLink = (path: string) => localePath(locale, path);

  return (
    <>
      <Hero
        eyebrow="FUNCTIONAL MATERIAL TECHNOLOGY"
        title="Funktionale Beschichtungen, die Oberflächen neue Eigenschaften geben."
        subtitle="Dünne, applizierbare Materialsysteme für thermische Isolation, elektrische Wärme, Brand- und Oberflächenschutz – entwickelt für Anwendungen, bei denen konventionelle Systeme konstruktiv an ihre Grenzen stoßen."
        primaryCta={{ label: 'Technologie entdecken', href: '#why-pure' }}
        secondaryCta={{ label: 'Pure Thermo ansehen', href: '/produkte/pure-thermo' }}
        backgroundImage={{ file: 'Hero2.png', alt: 'Person appliziert eine funktionale Beschichtung auf eine Gebäudefassade' }}
      />

      <section className="trust-bar">
        <div className="container">
          <ul className="trust-bar__list">
            <li className="trust-bar__item">Dünne Funktionsschichten</li>
            <li className="trust-bar__item">Technischer Nachweis</li>
            <li className="trust-bar__item">Bestands- & Detailanwendungen</li>
            <li className="trust-bar__item">Material- und Systemdenken</li>
          </ul>
        </div>
      </section>

      <section className="section section--compact">
        <div className="container">
          <div className="intent-panel">
            <div className="intent-panel__lead">
              <span className="section-heading__eyebrow">Projektstart</span>
              <h2>Was möchten Sie prüfen?</h2>
              <p>Wählen Sie den Einstieg, der zu Ihrem Bauteil, Detail oder Nachweisbedarf passt.</p>
              <div className="hero__ctas">
                <Link className="btn btn--primary" href={deLink('produkte/pure-thermo#u-wert-rechner')}>Bauteil berechnen</Link>
              </div>
            </div>
            <div className="intent-grid" aria-label="Thematische Einstiege">
              {[
                ['Thermische Verbesserung eines Bauteils', deLink('produkte/pure-thermo#u-wert-rechner')],
                ['Wärmebrücke / Detail', deLink('systeme/pure-thermo-detail')],
                ['Innenanwendung', deLink('systeme/pure-thermo-interior')],
                ['Fassade', deLink('systeme/pure-thermo-exterior')],
                ['Thermo + Brandschutz', deLink('systeme/pure-thermo-fire')],
                ['Technische Nachweise', deLink('nachweise/EVD-PT-THERM-001')]
              ].map(([label, href]) => <Link className="intent-card" href={href} key={label}>{label}</Link>)}
            </div>
          </div>
        </div>
      </section>

      <HomeCalculatorTeaser locale="de" />

      <section className="section" id="why-pure">
        <div className="container">
          <div className="split-section">
            <div className="split-section__text">
              <span className="section-heading__eyebrow">Warum PURE?</span>
              <h2>Mehr Funktion. Weniger Eingriff.</h2>
              <p>
                In Bereichen mit begrenztem Bauraum, komplexen Geometrien und sensiblen Oberflächen entscheidet oft
                nicht die Masse des Materials, sondern die gezielte Funktionsintegration.
              </p>
            </div>
            <div className="split-section__media">
              <LightboxFigure
                file="Vierfelde Problemmatrix.png"
                alt="Vier Problemfelder klassischer Einsatzgebiete: geringe Aufbauhöhe, komplexe Geometrie, Detailbereiche und Sonderanforderungen"
                caption="Orientierende Problemmatrix: PURE adressiert Einsatzfelder, in denen klassische Systeme konstruktiv an Grenzen stoßen."
              />
            </div>
          </div>

          <div className="principle-grid" style={{ marginTop: 'var(--space-5)' }}>
            <article className="principle-card">
              <span className="principle-card__index">01</span>
              <h3>Geringe Aufbauhöhe</h3>
              <p>Funktionale Schichten können dort wirksam werden, wo klassische Systeme baulich oder konstruktiv an ihre Grenzen stoßen.</p>
            </article>
            <article className="principle-card">
              <span className="principle-card__index">02</span>
              <h3>Funktionale Oberflächen</h3>
              <p>PURE adressiert thermische, brand- und oberflächenbezogene Anforderungen direkt auf der Bauteilschicht.</p>
            </article>
            <article className="principle-card">
              <span className="principle-card__index">03</span>
              <h3>Integrierbare Technologie</h3>
              <p>Materialsysteme werden für reale Anwendungsszenarien entwickelt, nicht nur als Laborkonzepte isoliert von der Praxis.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-heading section-heading--narrow">
            <span className="section-heading__eyebrow">Wie PURE funktioniert</span>
            <h2>Die Funktion beginnt im Material.</h2>
            <p>
              Bei Oberflächen mit geringer Schichtdicke kann die Mikrostruktur entscheidend dafür sein, wie Wärme transportiert wird.
            </p>
          </div>

          <div className="material-story">
            <div className="material-story__visual">
              <LightboxFigure
                file="Aerogel Funktion.png"
                alt="Konzeptuelle Darstellung der Wärmetransportbremsung durch eine nanoporöse Aerogelstruktur"
                caption="Makro: Wärmetransport wird durch die Materialstruktur beeinflusst."
              />
            </div>
            <div className="material-story__copy">
              <p className="lede">
                Die entscheidende Frage ist nicht nur, welches Material eingesetzt wird, sondern wie die Struktur den Wärmetransport beeinflusst.
              </p>
              <p>
                Eine nanoporöse Architektur kann den effektiven Transport innerhalb sehr dünner Schichten deutlich verändern. Dadurch wird ein funktionales Verhalten möglich, das mit herkömmlichen Systemen an räumlichen oder konstruktiven Grenzen oft nicht erreichbar ist.
              </p>
            </div>
          </div>

        </div>
      </section>

      <HomeApplicationOverview locale="de" />

      <section className="section">
        <div className="container">
          <div className="thermo-spotlight">
            <div className="thermo-spotlight__media">
              <LightboxFigure
                file="Bauteilquerschnitt.png"
                alt="Bauteilquerschnitt mit einer dünnen PURE-THERMO-Funktionsschicht auf dem Untergrund"
                caption="PURE THERMO – die Funktionsschicht liegt gezielt im Bauteilaufbau."
              />
            </div>
            <div className="thermo-spotlight__content">
              <span className="section-heading__eyebrow">PURE THERMO</span>
              <h2>Thermische Funktion dort, wo Bauraum zum entscheidenden Faktor wird.</h2>
              <p className="lede">Was könnte PURE THERMO bei Ihrem Bauteil bewirken?</p>
              <p>
                PURE THERMO ist die derzeit am weitesten entwickelte Produktfamilie der Plattform und zeigt, wie funktionale Materialsysteme an bestehenden Bauteilen und in Detailbereichen wirksam werden können.
              </p>
              <ul className="check-list">
                <li>Geringe Aufbauhöhe</li>
                <li>Flächige Anwendung</li>
                <li>Komplexe Geometrien</li>
                <li>Bestandsdetails</li>
                <li>Thermisch relevante Detailbereiche</li>
              </ul>
              <div className="hero__ctas" style={{ marginTop: 'var(--space-4)' }}>
                <a className="btn btn--primary" href={deLink('produkte/pure-thermo')}>Pure Thermo im Detail</a>
                <a className="btn btn--secondary" href={deLink('produkte/pure-thermo#u-wert-rechner')}>U-Wert berechnen</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductPortfolioMatrix locale="de" />

      <EvidenceLegendPreview locale="de" />
      <KiwaEvidencePanel locale="de" />

      <PilotProcess locale="de" />
      <PartnershipPanel locale="de" />
      <FinalDecisionCta locale="de" />
    </>
  );
}
