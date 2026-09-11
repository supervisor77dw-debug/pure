import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { EvidenceBadge } from '@/components/EvidenceBadge';
import { AssetFigure } from '@/components/AssetFigure';
import { LightboxFigure } from '@/components/LightboxFigure';
import { getLiquidHeatContent, type LiquidHeatLocale } from '@/lib/liquid-heat-content';
import { headers } from 'next/headers';
import { isLocale } from '@/lib/i18n';
import { productVisuals, visualFor } from '@/lib/product-visuals';
import { ProductHeroAmbient } from '@/components/ProductHeroAmbient';

export const metadata: Metadata = {
  title: 'Pure Liquid Heat · PURE Technology Platform',
  description: 'An electric functional layer for integrated heating systems.'
};

const applications = [
  {
    title: 'OUTDOOR & HOSPITALITY',
    copy: 'Integrated heating concepts for terraces, hotels, gastronomy and premium outdoor environments, placing warmth close to the user while reducing visible heating hardware.',
    examples: ['pyramid heating concepts', 'HotCube concepts', 'heated lounge modules', 'heated seating', 'table-integrated heating concepts']
  },
  {
    title: 'INTERIOR & DESIGN',
    copy: 'Wall, panel and furniture concepts can combine design surfaces with integrated electrical heat.',
    examples: ['wall panels', 'furniture modules', 'decorative heating surfaces', 'defined comfort zones']
  },
  {
    title: 'OEM INTEGRATION',
    copy: 'PURE LIQUID HEAT can be developed as a functional heating module within a defined OEM product architecture.',
    examples: ['product panels', 'enclosures', 'furniture', 'technical modules', 'custom heating surfaces'],
    note: 'Every OEM application requires its own defined substrate, contacting, electrical architecture, thermal limits and validation programme.'
  },
  {
    title: 'FROST & TECHNICAL HEATING',
    copy: 'Surface heating can also be developed for anti-condensation, frost protection and controlled temperature maintenance in technical components.',
    examples: ['electronics enclosures', 'sensor boxes', 'technical containers', 'defined temperature-maintenance modules']
  }
];

const validationItems = [
  ['LONG-TERM STABILITY', 'Extended operating hours and thermal cycling.'],
  ['ELECTRICAL SAFETY', 'Complete system testing including contacts, control and fault conditions.'],
  ['MOISTURE & OUTDOOR EXPOSURE', 'Protective layers, electrical isolation and application-specific environmental testing.'],
  ['SERIES REPRODUCIBILITY', 'Defined coating resistance, contacting, process control and quality assurance.'],
  ['SYSTEM PERFORMANCE', 'Voltage, current, power density, surface temperature and warm-up behaviour must be specified for each defined system configuration.']
];

const capabilities = [
  'integrated electric surface heating',
  'thin functional heating layers',
  'individually controlled heating zones',
  'application-dependent low-voltage architectures',
  'integration into defined panels and products',
  'design-oriented heating concepts'
];

const boundaries = [
  'no efficiency above 100%',
  'no universal percentage energy saving',
  'no universal substrate compatibility',
  'no generic CE certification for the coating alone',
  'no generic IP rating for all systems',
  'no transfer of one prototype value to every application',
  'no universal replacement for every building heating system'
];

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="section-heading section-heading--narrow">
      <span className="section-heading__eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

export default function PureLiquidHeatPage() {
  const headerLocale = headers().get('x-pure-locale') || 'en';
  const locale: LiquidHeatLocale = isLocale(headerLocale) ? headerLocale : 'en';
  const content = getLiquidHeatContent(locale);
  return (
    <>
      <Breadcrumb items={[{ label: locale === 'de' ? 'Start' : 'Start', href: locale === 'de' ? '/de' : '/en' }, { label: content.breadcrumb }]} />

      <ProductHeroAmbient variant="liquidHeat" motionEnabled className="liquid-heat-hero">
        <div className="container liquid-heat-hero__grid">
          <div>
            <p className="hero__eyebrow">{content.eyebrow}</p>
            <h1>{content.heroTitle}</h1>
            <p className="hero__subtitle">{content.heroSubtitle}</p>
            <p className="liquid-heat-hero__copy">{content.heroCopy}</p>
            <div className="hero__ctas">
              <Link className="btn btn--primary" href="#applications">{content.explore}</Link>
              <Link className="btn btn--secondary" href="#evidence">{content.evidenceCta}</Link>
            </div>
          </div>
          <AssetFigure
            file={productVisuals.liquidHeat.pyramidDemonstrator}
            alt="PURE LIQUID HEAT pyramid heating development concept in a hospitality setting"
            status="DEVELOPMENT CONCEPT"
            caption={locale === 'de' ? 'Outdoor-Hospitality-Demonstrator. Ca. 30 V / ca. 1.100 W gehören zum beschriebenen Prototyp; IP44 ist ein Entwicklungsziel, keine Zertifizierung.' : 'Outdoor hospitality demonstrator. Approx. 30 V / approx. 1.1 kW belong to the described prototype; IP44 is a development target, not certification.'}
            priority
          />
        </div>
      </ProductHeroAmbient>

      <section className="section" id="why-surface-heat">
        <div className="container">
          <SectionHeading
            eyebrow={content.whyEyebrow}
            title={content.whyTitle}
            intro={content.whyIntro}
          />
          <div className="liquid-heat-four-grid">
            {content.whyCards.map(([title, copy]) => (
              <article className="liquid-heat-card" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface" id="how-it-works">
        <div className="container">
          <SectionHeading eyebrow={content.principleEyebrow} title={content.principleTitle} />
          <div className="liquid-heat-flow" aria-label={content.flowAria}>
            {content.flow.map((step, index) => (
              <div className="liquid-heat-flow__step" key={step}>
                <span className="liquid-heat-flow__icon" aria-hidden="true">{['⚡', '▧', 'Ω', '≈', '⌁'][index]}</span>
                <span className="liquid-heat-flow__number">0{index + 1}</span>
                <strong>{step}</strong>
                {index < 4 ? <span className="liquid-heat-flow__arrow" aria-hidden="true">↓</span> : null}
              </div>
            ))}
          </div>
          <div className="liquid-heat-copy-grid">
            <div>
              {content.mechanism.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <aside className="engineering-note">
              <strong>{content.engineering}</strong>
              <p>{content.engineeringCopy}</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section" id="system-architecture">
        <div className="container">
          <SectionHeading eyebrow={content.architectureEyebrow} title={content.architectureTitle} intro={content.architectureIntro} />
          <div className="system-flow">
            {content.architecture.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section section--surface" id="internal-development">
        <div className="container">
          <SectionHeading
            eyebrow={content.physicalEyebrow}
            title={content.physicalTitle}
            intro={content.physicalIntro}
          />
          <p className="liquid-heat-gallery-label">{content.galleryLabel}</p>
          <div className="liquid-heat-gallery">
            <AssetFigure file="LH_REAL_Freestanding_Panel_01.jpg" alt={locale === 'de' ? 'Internes freistehendes PURE-LIQUID-HEAT-Prototypenpanel' : 'Internal PURE LIQUID HEAT freestanding prototype panel'} status="INTERNAL PROTOTYPE" caption={content.galleryCaptions[0]} />
            <AssetFigure file="LH_REAL_Freestanding_Panel_Side_01.jpg" alt={locale === 'de' ? 'Seitenansicht eines internen PURE-LIQUID-HEAT-Prototypenpanels' : 'Side view of an internal PURE LIQUID HEAT freestanding prototype panel'} status="INTERNAL PROTOTYPE" caption={content.galleryCaptions[1]} />
            <AssetFigure file="LH_REAL_LED_Design_Panel_01.jpg" alt={locale === 'de' ? 'Internes PURE-LIQUID-HEAT-Designpanel mit LED- und Perforationsfläche' : 'Internal PURE LIQUID HEAT LED and perforated design panel'} status="INTERNAL PROTOTYPE" caption={content.galleryCaptions[2]} />
          </div>
        </div>
      </section>

      <section className="section section--surface" id="difference">
        <div className="container">
          <SectionHeading eyebrow={content.designEyebrow} title={content.designTitle} />
          <div className="liquid-heat-four-grid">
            {content.designCards.map(([title, copy]) => (
              <article className="liquid-heat-card liquid-heat-card--accent" key={title}><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
          <p className="liquid-heat-principle">{content.designPrinciple}</p>
        </div>
      </section>

      <section className="section" id="applications">
        <div className="container">
          <SectionHeading eyebrow={content.applicationsEyebrow} title={content.applicationsTitle} />
          <div className="liquid-heat-application-features">
            <article className="liquid-heat-application-feature">
              <LightboxFigure file={visualFor(productVisuals.liquidHeat.outdoorHospitality, locale)} alt={locale === 'de' ? 'PURE LIQUID HEAT Anwendungskonzept für Außenbereich und Hospitality' : 'PURE LIQUID HEAT application concept for outdoor and hospitality'} caption={locale === 'de' ? 'Illustratives Anwendungskonzept. Outdoor-Eignung, Schutzaufbau und elektrische Auslegung werden für den jeweiligen Systemaufbau definiert.' : 'Illustrative application concept. Outdoor suitability, protective build-up and electrical configuration are defined for the specific system.'} zoomLabel={locale === 'de' ? 'Vergrößern' : 'Enlarge'} closeLabel={locale === 'de' ? 'Schließen' : 'Close'} />
              <ApplicationWorld application={content.applications[0]} label={content.conceptWorld} />
            </article>
            <article className="liquid-heat-application-feature">
              <AssetFigure file="LH_REAL_LED_Design_Panel_01.jpg" alt={locale === 'de' ? 'Internes PURE-LIQUID-HEAT-Designpanel als Interior- und Designstudie' : 'Internal PURE LIQUID HEAT design panel as interior and design study'} status="INTERNAL PROTOTYPE" caption={content.galleryCaptions[2]} />
              <ApplicationWorld application={content.applications[1]} />
            </article>
            <article className="liquid-heat-application-feature">
              <AssetFigure file="LH_REAL_Freestanding_Panel_01.jpg" alt={locale === 'de' ? 'Internes PURE-LIQUID-HEAT-Prototypenpanel für Modulintegration' : 'Internal PURE LIQUID HEAT prototype panel for module integration'} status="INTERNAL PROTOTYPE" caption={content.galleryCaptions[0]} />
              <ApplicationWorld application={content.applications[2]} />
            </article>
          </div>
          <div className="application-worlds application-worlds--compact">
            <ApplicationWorld application={content.applications[3]} />
          </div>
          <div className="liquid-heat-feature">
            <span className="concept-label">{content.concept}</span>
            <h3>{content.heatedSeating}</h3>
            <p>{content.heatedSeatingCopy}</p>
            <AssetFigure file="LH_CONCEPT_Heated_Bench_2Seat_System_01.jpg" alt={locale === 'de' ? 'Entwicklungskonzept für beheizte PURE-LIQUID-HEAT-Sitzmöbel' : 'PURE LIQUID HEAT heated seating development concept'} status="DEVELOPMENT CONCEPT" caption={content.heatedSeatingCaption} />
          </div>
          <div className="liquid-heat-prism">
            <div>
              <span className="concept-label">{content.concept}</span>
              <h3>{content.prism}</h3>
              <p>{content.prismCopy}</p>
              <p className="liquid-heat-prism__status">{content.prismStatus}</p>
            </div>
            <AssetFigure file="LH_CONCEPT_PureHeat_Prism_01.jpg" alt={locale === 'de' ? 'PUREHEAT-PRISM-Entwicklungskonzept für tischintegrierte Heizung' : 'PUREHEAT Prism table-integrated heating development concept'} status="DEVELOPMENT CONCEPT" />
          </div>
          <div className="liquid-heat-variants" aria-label={content.variantsAria}>
            {[
              ['LH_CONCEPT_PureHeat_Facet_01.jpg', content.facet],
              ['LH_CONCEPT_PureHeat_Petal_01.jpg', content.petal]
            ].map(([file, title]) => (
              <div key={file}>
                <AssetFigure file={file} alt={`${title} PURE LIQUID HEAT ${content.concept.toLowerCase()}`} status="DEVELOPMENT CONCEPT" />
                <h3>{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface" id="evidence">
        <div className="container">
          <SectionHeading eyebrow={content.evidenceEyebrow} title={content.evidenceTitle} />
          <article className="liquid-heat-evidence">
            <div className="liquid-heat-evidence__header">
              <EvidenceBadge evidenceClass="B" />
              <span>{content.fieldReference}</span>
            </div>
            <h3>{content.fieldTitle}</h3>
            <p>{content.fieldCopy}</p>
            <div className="liquid-heat-evidence__meaning">
              <div><strong>{content.means}</strong><p>{content.meansCopy}</p></div>
              <div><strong>{content.notMeans}</strong><p>{content.notMeansCopy}</p></div>
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="validation">
        <div className="container">
          <SectionHeading eyebrow={content.validationEyebrow} title={content.validationTitle} intro={content.validationIntro} />
          <div className="validation-list">{content.validation.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="section section--surface" id="boundaries">
        <div className="container">
          <SectionHeading eyebrow={content.boundariesEyebrow} title={content.boundariesTitle} />
          <div className="capability-grid">
            <article><h3>{content.enables}</h3><ul>{content.capabilities.map((item) => <li key={item}>{item}</li>)}</ul></article>
            <article><h3>{content.claims}</h3><ul>{content.boundaries.map((item) => <li key={item}>{item}</li>)}</ul></article>
          </div>
        </div>
      </section>

      <section className="section" id="complete-system">
        <div className="container">
          <SectionHeading eyebrow={content.safetyEyebrow} title={content.safetyTitle} />
          <div className="safety-chain">{content.chain.map((item, index) => <span key={item}><strong>{item}</strong>{index < 5 ? <b aria-hidden="true">→</b> : null}</span>)}</div>
          <p className="section-copy-narrow">{content.safetyCopy1}</p>
          <p className="section-copy-narrow">{content.safetyCopy2}</p>
        </div>
      </section>

      <section className="section section--surface" id="work-with-pure">
        <div className="container">
          <SectionHeading eyebrow={content.workEyebrow} title={content.workTitle} />
          <div className="liquid-heat-four-grid liquid-heat-four-grid--three">
            {content.work.map(([title, copy]) => <article className="liquid-heat-card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
          <div className="hero__ctas"><Link className="btn btn--primary" href="#work-with-pure">{content.start}</Link><Link className="btn btn--secondary btn--dark" href="#evidence">{content.viewEvidence}</Link></div>
        </div>
      </section>
    </>
  );
}

function ApplicationWorld({ application, label }: { application: { title: string; copy: string; examples: readonly string[]; note?: string }; label?: string }) {
  return (
    <div className="application-world application-world--plain">
      <h3>{application.title}</h3>
      <p>{application.copy}</p>
      <ul>{application.examples.map((example) => <li key={example}>{example}</li>)}</ul>
      {application.note ? <p className="application-world__note">{application.note}</p> : null}
      {label ? <span className="concept-label">{label}</span> : null}
    </div>
  );
}
