import { getAllProducts } from '@/lib/data';
import { Hero } from '@/components/Hero';
import { ProductHub } from '@/components/ProductHub';
import { AssetFigure } from '@/components/AssetFigure';
import { LightboxFigure } from '@/components/LightboxFigure';

export default function HomePage() {
  const products = getAllProducts();

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
              <p>Materialsysteme werden für reale Anwendungsszenarien entwickelt, nicht nur als Laborkoncepter isoliert von der Praxis.</p>
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

          <div className="material-detail">
            <div className="material-detail__image">
              <AssetFigure
                file="Materialstruktur.png"
                alt="Materialstruktur mit poröser Aerogelarchitektur als Grundlage der thermischen Funktion"
              />
            </div>
            <div className="material-detail__text">
              <h3>Warum wenige Millimeter relevant sein können</h3>
              <p>
                Die Wirkung entsteht nicht durch eine große Schichtdicke, sondern durch die gezielte Kombination aus poröser Struktur, Matrix und funktionaler Anbindung an das Bauteil.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="thermo-spotlight">
            <div className="thermo-spotlight__media">
              <AssetFigure
                file="Materialstrukturansicht.png"
                alt="Materialstrukturansicht mit dünner funktionaler Schicht und der Integration in ein bestehendes Bauteil"
                caption="PURE THERMO – Schichtdicke minimal, Funktion gezielt am Bauteil positioniert."
              />
            </div>
            <div className="thermo-spotlight__content">
              <span className="section-heading__eyebrow">PURE THERMO</span>
              <h2>Thermische Funktion dort, wo Bauraum zum entscheidenden Faktor wird.</h2>
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
                <a className="btn btn--primary" href="/produkte/pure-thermo">Pure Thermo im Detail</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface" id="produkte">
        <div className="container">
          <div className="section-heading section-heading--narrow">
            <span className="section-heading__eyebrow">Portfolio</span>
            <h2>Eine Technologieplattform. Mehrere Funktionswelten.</h2>
          </div>
          <ProductHub products={products} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading section-heading--narrow">
            <span className="section-heading__eyebrow">Anwendung</span>
            <h2>Vom Material zum Gebäude.</h2>
          </div>
          <div className="application-journey">
            <article className="journey-card journey-card--photo">
              <img src="/assets/Hero2.png" alt="Applikation einer funktionalen Beschichtung an einer Fassade" loading="lazy" />
              <div className="journey-card__body">
                <h3>Bestand</h3>
                <p>Bauteile mit begrenztem Bauraum.</p>
              </div>
            </article>
            <article className="journey-card">
              <div className="journey-card__body">
                <h3>Detailbereiche</h3>
                <p>Anschlüsse und komplexe Geometrien.</p>
              </div>
            </article>
            <article className="journey-card">
              <div className="journey-card__body">
                <h3>Technische Anlagen</h3>
                <p>Funktionale Oberflächen und Sonderanwendungen.</p>
              </div>
            </article>
            <article className="journey-card">
              <div className="journey-card__body">
                <h3>Architektur</h3>
                <p>Integration mit geringer konstruktiver Eingriffstiefe.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--surface" id="evidenz">
        <div className="container">
          <div className="section-heading section-heading--narrow">
            <span className="section-heading__eyebrow">Evidenz</span>
            <h2>Wir unterscheiden Wissen von Annahmen.</h2>
            <p>Technische Aussagen werden bei PURE nach ihrer Nachweisqualität gekennzeichnet.</p>
          </div>

          <div className="evidence-grid">
            <div className="evidence-card evidence-card--a">
              <span className="evidence-badge evidence-badge--A"><span className="evidence-badge__letter">A</span> <span>Extern geprüft</span></span>
              <p>Ergebnisse aus dokumentierten Prüfungen mit klar definiertem Rahmen und Prüfgegenstand.</p>
            </div>
            <div className="evidence-card evidence-card--b">
              <span className="evidence-badge evidence-badge--B"><span className="evidence-badge__letter">B</span> <span>Intern dokumentiert</span></span>
              <p>Nachvollziehbare interne Validierung, Prüfungen und systemische Ableitung.</p>
            </div>
            <div className="evidence-card evidence-card--c">
              <span className="evidence-badge evidence-badge--C"><span className="evidence-badge__letter">C</span> <span>Berechnet / modelliert</span></span>
              <p>Transparentes Rechenmodell mit nachvollziehbaren Annahmen und Grenzen.</p>
            </div>
            <div className="evidence-card evidence-card--d">
              <span className="evidence-badge evidence-badge--D"><span className="evidence-badge__letter">D</span> <span>Entwicklungsstatus</span></span>
              <p>Vorläufige Hypothese, Prüfpfad oder definierter Entwicklungsstatus – kein fertiger Leistungsclaim.</p>
            </div>
          </div>
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
              Prüfgegenstand THERM 4410. Die formale Dokumentation der Zuordnung zur aktuellen PURE-Thermo-Version wird separat geführt.
            </p>
            <div className="hero__ctas">
              <a className="btn btn--primary" href="/nachweise/EVD-PT-THERM-001">Prüfgrundlage ansehen</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-heading section-heading--narrow">
            <span className="section-heading__eyebrow">Pilot- und Referenzprogramm</span>
            <h2>PURE baut ein strukturiertes Mess- und Referenzprogramm mit ausgewählten Projekt- und Anwendungspartnern auf.</h2>
          </div>
          <div className="reference-grid">
            <div className="reference-card">
              <span className="reference-card__name">Gebäude</span>
            </div>
            <div className="reference-card">
              <span className="reference-card__name">Industrie</span>
            </div>
            <div className="reference-card">
              <span className="reference-card__name">Sonderanwendungen</span>
            </div>
          </div>
          <div className="hero__ctas" style={{ marginTop: 'var(--space-4)' }}>
            <a className="btn btn--primary" href="/produkte/pure-thermo">Pilotprojekt vorschlagen</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading section-heading--narrow">
            <span className="section-heading__eyebrow">Partnerschaft</span>
            <h2>Die Zusammenarbeit beginnt mit der richtigen Frage.</h2>
          </div>

          <div className="partner-grid">
            <article className="partner-card">
              <h3>Architekten &amp; Planer</h3>
              <p>Systeminformationen und bauphysikalische Einordnung.</p>
              <a href="/produkte/pure-thermo">Anfragen</a>
            </article>
            <article className="partner-card">
              <h3>Industriepartner</h3>
              <p>Integration und technische Anwendungen.</p>
              <a href="/produkte/pure-thermo">Kontakt aufnehmen</a>
            </article>
            <article className="partner-card">
              <h3>Pilotpartner</h3>
              <p>Anwendung testen und dokumentieren.</p>
              <a href="/nachweise/EVD-PT-THERM-001">Prüfgrundlage ansehen</a>
            </article>
            <article className="partner-card">
              <h3>Vertriebs- &amp; Skalierungspartner</h3>
              <p>Marktentwicklung und Kooperation.</p>
              <a href="/produkte/pure-thermo">Projekt besprechen</a>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="final-cta">
            <p className="final-cta__lead">Wo konventionelle Systeme an konstruktive Grenzen stoßen, beginnt der interessante Teil.</p>
            <h2>Sprechen Sie mit uns über Ihre Anwendung.</h2>
            <div className="hero__ctas" style={{ justifyContent: 'center' }}>
              <a className="btn btn--primary" href="/produkte/pure-thermo">Projekt besprechen</a>
              <a className="btn btn--secondary" href="/nachweise/EVD-PT-THERM-001">Technische Unterlagen</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
