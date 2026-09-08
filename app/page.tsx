import { getContentByPath, extractListItems, extractSubsections } from '@/lib/content';
import { getAllProducts } from '@/lib/data';
import { Hero } from '@/components/Hero';
import { ProductHub } from '@/components/ProductHub';
import { ReferenceCard } from '@/components/ReferenceCard';
import { EvidenceBadge } from '@/components/EvidenceBadge';
import { AssetFigure } from '@/components/AssetFigure';
import { LightboxFigure } from '@/components/LightboxFigure';
import { assetSrc } from '@/lib/assets';
import type { EvidenceClass } from '@/lib/data';

export default function HomePage() {
  const content = getContentByPath('pages/home.de.md');
  const products = getAllProducts();

  const trustBar = extractListItems(content.getSection('Vertrauensleiste')?.html);
  const whyPure = extractSubsections(content.getSection('Technische Herausforderungen')?.html);
  const applicationAreas = extractListItems(content.getSection('Technologien entstehen aus konkreten Anwendungen')?.html);
  const evidenceItems = extractListItems(content.getSection('Nachweise statt pauschaler Versprechen')?.html);
  const referenceItems = extractListItems(content.getSection('Referenzprogramm')?.html);
  const partnerItems = extractListItems(content.getSection('Marktreife entsteht')?.html);
  const thermoFocusSection = content.getSection('Technologie im Fokus');

  return (
    <>
      <Hero
        eyebrow="PURE Technology Platform"
        title="Funktionale Beschichtungstechnologien für anspruchsvolle Anwendungen."
        subtitle="PURE verbindet spezialisierte Beschichtungstechnologien mit einer gemeinsamen Entwicklungs-, Prüf- und Dokumentationslogik. Für Gebäude, technische Anlagen, Wärme, Brand-, Oberflächen-, Wasser-, Holz- und Marineanwendungen."
        primaryCta={{ label: 'Technologien entdecken', href: '/produkte/pure-thermo' }}
        secondaryCta={{ label: 'Technische Nachweise', href: '/nachweise/EVD-PT-THERM-001' }}
        backgroundImage={{ file: 'Titelbild.png', alt: 'Applikation einer Pure-Beschichtung an einer modernen Gebäudefassade mit Bauteil-Detailansicht' }}
      />

      <section className="trust-bar">
        <div className="container">
          <ul className="trust-bar__list">
            {trustBar.map((item) => (
              <li className="trust-bar__item" key={item.label}>{item.label}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split-section">
            <div className="split-section__text">
              <span className="section-heading__eyebrow">Warum PURE?</span>
              <h2>Technische Herausforderungen lassen sich nicht immer mit mehr Material lösen.</h2>
              <p>
                Gerade bei Bestandsgebäuden, komplexen Geometrien und technischen Oberflächen entscheiden Aufbauhöhe,
                Verarbeitung, Funktion und Nachweisbarkeit darüber, ob eine Lösung praktisch einsetzbar ist.
              </p>
            </div>
            <div className="split-section__media">
              <LightboxFigure
                file="Vierfelde Problemmatrix.png"
                alt="Vier typische Problemfelder klassischer Wärme- und Dämmlösungen: begrenzte Aufbauhöhe, komplexe Geometrie, Schutzanforderungen, Betrieb im Bestand"
              />
            </div>
          </div>
          <div className="card-grid card-grid--3" style={{ marginTop: 'var(--space-5)' }}>
            {whyPure.map((item) => (
              <div className="application-card" key={item.heading}>
                <span className="application-card__name">{item.heading}</span>
                <p className="application-card__desc">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Wie funktioniert PURE?</span>
            <h2>Vom physikalischen Prinzip zur dünnen Funktionsschicht.</h2>
            <p>
              Zwei aufeinander aufbauende Visualisierungen zeigen, warum die nanoporöse Aerogel-Struktur den
              Wärmetransport innerhalb der Beschichtung verlangsamt.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <LightboxFigure
              file="Aerogel Funktion.png"
              alt="Funktionsprinzip von Aerogel im PURE Wärmesystem: eingeschränkte Molekülbewegung bremst den Wärmetransfer"
              caption="Schematische Darstellung des Funktionsprinzips – kein mikroskopisch maßstäblicher Nachweis."
            />
            <LightboxFigure
              file="nanoporäse Struktur.png"
              alt="Nanoporöse Funktionsstruktur als Grundlage der bauphysikalischen Wirkung von Pure Thermo"
              caption="Konzeptgrafik zu den bauphysikalischen Wirkfeldern – Aussagen sind system- und nachweisabhängig."
            />
          </div>
        </div>
      </section>

      <section className="photo-break">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetSrc('Hero2.png')}
          alt="Applikator trägt eine PURE-Beschichtung per Spritzverfahren auf eine Bestandsfassade auf"
          className="photo-break__img"
          loading="lazy"
        />
        <div className="photo-break__caption">
          Vom Labor zur Fassade: PURE-Technologien werden für die reale Anwendung an Bestands- und Detailflächen
          entwickelt.
        </div>
      </section>

      <section className="section section--surface" id="produkte">
        <div className="container">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Portfolio</span>
            <h2>Eine Plattform. Sieben Produktfamilien.</h2>
          </div>
          <ProductHub products={products} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Anwendungsbereiche</span>
            <h2>Technologien entstehen aus konkreten Anwendungen.</h2>
          </div>
          <div className="card-grid card-grid--3">
            {applicationAreas.map((item) => (
              <div className="application-card" key={item.label}>
                <span className="application-card__name">{item.label}</span>
                <p className="application-card__desc">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface" id="evidenz">
        <div className="container">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Evidenzsystem</span>
            <h2>Nachweise statt pauschaler Versprechen.</h2>
            <p>
              Nicht jede technische Aussage besitzt denselben Reifegrad. PURE trennt deshalb externe Prüfungen, interne
              Validierung, Berechnungen und Entwicklungsannahmen transparent voneinander.
            </p>
          </div>
          <div className="card-grid card-grid--3">
            {evidenceItems.map((item) => {
              const evidenceClass = item.label.trim().charAt(0) as EvidenceClass;
              return (
                <div className="evidence-card" key={item.label}>
                  <EvidenceBadge evidenceClass={evidenceClass} />
                  <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Technologie im Fokus</span>
          </div>
          {thermoFocusSection ? (
            <div className="prose" dangerouslySetInnerHTML={{ __html: thermoFocusSection.html }} />
          ) : null}
          <a className="btn btn--primary" href="/produkte/pure-thermo">Pure Thermo ansehen</a>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Referenzprogramm</span>
            <h2>Wirkung systematisch dokumentieren.</h2>
            <p>
              Ziel ist eine nachvollziehbare Dokumentation aus Ausgangszustand bzw. Planungsgrundlage, Systemaufbau,
              Messplan und zeitlich definierter Auswertung.
            </p>
          </div>
          <div className="card-grid card-grid--3">
            {referenceItems.map((item) => (
              <ReferenceCard key={item.label} name={item.label || item.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Partnerbereich</span>
            <h2>Marktreife entsteht im Zusammenspiel von Technologie, Prüfung und Anwendung.</h2>
          </div>
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', listStyle: 'none', padding: 0 }}>
            {partnerItems.map((item) => (
              <li className="pill" key={item.label || item.text}>{item.label || item.text}</li>
            ))}
          </ul>
          <div className="split-section" style={{ marginTop: 'var(--space-5)' }}>
            <div className="split-section__media" style={{ maxWidth: 480 }}>
              <AssetFigure
                file="Leuchtturm.png"
                alt="Leuchtturm Invest als Marktintegrator zwischen Technologieentwicklung, Prüfpartnern und Marktpartnern"
                caption="Leuchtturm Invest integriert Technologie-, Prüf- und Marktpartner in einer kontrollierten Struktur."
              />
            </div>
            <div className="split-section__text">
              <p>
                Markteinführung erfolgt priorisiert nach Regionen: zunächst DACH, danach das übrige Europa und
                Nordamerika, anschließend weitere internationale Märkte.
              </p>
              <AssetFigure
                file="globales Potential.png"
                alt="Marktpriorisierung von PURE: regionaler Rollout von DACH über Europa/Nordamerika bis international"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Technische Nachweise statt Marketingversprechen.</h2>
          <div className="hero__ctas" style={{ justifyContent: 'center' }}>
            <a className="btn btn--primary" href="/produkte/pure-thermo">Technologien entdecken</a>
            <a className="btn btn--secondary" style={{ color: 'var(--color-navy)', borderColor: 'var(--color-navy)' }} href="/nachweise/EVD-PT-THERM-001">
              Technische Nachweise
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
