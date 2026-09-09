import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { EvidenceBadge } from '@/components/EvidenceBadge';

export const metadata: Metadata = {
  title: 'Pure Liquid Heat · PURE Technology Platform'
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

function HeatSurfaceVisual() {
  return (
    <div className="liquid-heat-visual" aria-label="Schematic representation of a controlled electric heating surface">
      <div className="liquid-heat-visual__surface">
        <span className="liquid-heat-visual__line liquid-heat-visual__line--one" />
        <span className="liquid-heat-visual__line liquid-heat-visual__line--two" />
        <span className="liquid-heat-visual__line liquid-heat-visual__line--three" />
        <span className="liquid-heat-visual__glow" />
      </div>
      <div className="liquid-heat-visual__legend">
        <span>DEFINED SURFACE</span>
        <span>CONTROLLED HEAT</span>
      </div>
    </div>
  );
}

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
  return (
    <>
      <Breadcrumb items={[{ label: 'Start', href: '/' }, { label: 'Pure Liquid Heat' }]} />

      <section className="hero liquid-heat-hero">
        <div className="container liquid-heat-hero__grid">
          <div>
            <p className="hero__eyebrow">PURE TECHNOLOGY PLATFORM</p>
            <h1>PURE LIQUID HEAT</h1>
            <p className="hero__subtitle">An electric functional layer for integrated heating systems.</p>
            <p className="liquid-heat-hero__copy">Heating becomes a surface function — integrated into defined panels, products and design objects instead of added as a separate heater.</p>
            <div className="hero__ctas">
              <Link className="btn btn--primary" href="#applications">Explore applications</Link>
              <Link className="btn btn--secondary" href="#evidence">Technical evidence</Link>
            </div>
          </div>
          <HeatSurfaceVisual />
        </div>
      </section>

      <section className="section" id="why-surface-heat">
        <div className="container">
          <SectionHeading
            eyebrow="THE PROBLEM"
            title="WHY INTEGRATED SURFACE HEAT?"
            intro="Conventional heating technology is often added to a space or product as separate hardware. PURE LIQUID HEAT explores another route: integrating the heating function directly into defined surfaces and components."
          />
          <div className="liquid-heat-four-grid">
            {[
              ['LESS VISIBLE HARDWARE', 'Heating functionality can be integrated into panels, furniture and objects instead of added as a separate visible heater.'],
              ['SURFACE-BASED HEAT', 'Heat is generated across a functional surface rather than only at a point-shaped heating element.'],
              ['FLEXIBLE INTEGRATION', 'Thin functional layers allow heating concepts to follow product and design geometry more closely.'],
              ['ZONED CONTROL', 'Defined heating zones can be controlled individually according to the application.']
            ].map(([title, copy]) => (
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
          <SectionHeading eyebrow="THE PRINCIPLE" title="HOW DOES PURE LIQUID HEAT WORK?" />
          <div className="liquid-heat-flow" aria-label="Electrical energy to controlled thermal output">
            {['ELECTRICAL ENERGY', 'CONDUCTIVE FUNCTIONAL COATING', 'ELECTRICAL RESISTANCE HEATING', 'SURFACE HEAT', 'CONTROLLED THERMAL OUTPUT'].map((step, index) => (
              <div className="liquid-heat-flow__step" key={step}>
                <span className="liquid-heat-flow__number">0{index + 1}</span>
                <strong>{step}</strong>
                {index < 4 ? <span className="liquid-heat-flow__arrow" aria-hidden="true">↓</span> : null}
              </div>
            ))}
          </div>
          <div className="liquid-heat-copy-grid">
            <div>
              <p>PURE LIQUID HEAT uses a conductive functional coating. Electrical current flows through the defined conductive layer and electrical resistance converts the supplied energy into heat.</p>
              <p>Copper conductors, coating resistance, geometry and system control determine the thermal behaviour of the finished heating module.</p>
              <p>The result is a thin, electrically activated heating surface that can be integrated into defined products and components.</p>
            </div>
            <aside className="engineering-note">
              <strong>ENGINEERING NOTE</strong>
              <p>PURE LIQUID HEAT does not create additional energy. Like other electric resistance heating technologies, electrical energy is converted into heat. Its development potential lies in how that heat can be distributed, integrated and controlled within an application.</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section" id="system-architecture">
        <div className="container">
          <SectionHeading eyebrow="SYSTEM ARCHITECTURE" title="FROM COATING TO HEATING SYSTEM" intro="The functional coating is only one part of the complete system." />
          <div className="system-flow">
            <article><span>01</span><h3>SUBSTRATE</h3><p>GFB / GFK / Vermiculite</p></article>
            <article><span>02</span><h3>LIQUID HEAT FUNCTIONAL COATING</h3><p>Direct application to the defined substrate. No primer layer.</p></article>
            <article><span>03</span><h3>CONTACTING + CONTROL + SAFETY</h3><p>Electrical contacting, temperature sensing, thermal protection and system control.</p></article>
            <article><span>04</span><h3>OPTIONAL PROTECTIVE LAYER</h3><p>Only where required by moisture, outdoor exposure, cleaning or mechanical load.</p></article>
          </div>
        </div>
      </section>

      <section className="section section--surface" id="difference">
        <div className="container">
          <SectionHeading eyebrow="THE DESIGN LOGIC" title="HEAT AS A FUNCTION OF THE SURFACE" />
          <div className="liquid-heat-four-grid">
            {[
              ['LOW THERMAL MASS', 'The thin functional heating layer can react quickly compared with systems that first have to heat large masses.'],
              ['DESIGN INTEGRATION', 'Heating functionality can disappear into panels, furniture and technical products.'],
              ['FLAT HEAT DISTRIBUTION', 'The active layer enables surface-based heat generation across a defined module.'],
              ['CONTROLLABLE ZONES', 'Temperature sensors, control electronics and separate zones can adapt heat delivery to the application.']
            ].map(([title, copy]) => (
              <article className="liquid-heat-card liquid-heat-card--accent" key={title}><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
          <p className="liquid-heat-principle">The value is not a new law of physics. It is a different way of designing where and how electrical heat is delivered.</p>
        </div>
      </section>

      <section className="section" id="applications">
        <div className="container">
          <SectionHeading eyebrow="APPLICATION WORLDS" title="WHERE CAN SURFACE HEAT BECOME USEFUL?" />
          <div className="application-worlds">
            {applications.map((application) => (
              <article className="application-world" key={application.title}>
                <h3>{application.title}</h3>
                <p>{application.copy}</p>
                <ul>{application.examples.map((example) => <li key={example}>{example}</li>)}</ul>
                {application.note ? <p className="application-world__note">{application.note}</p> : null}
                {application.title === 'OUTDOOR & HOSPITALITY' ? <span className="concept-label">CONCEPTS / DEVELOPMENT</span> : null}
              </article>
            ))}
          </div>
          <div className="liquid-heat-feature">
            <span className="concept-label">DEVELOPMENT CONCEPT</span>
            <h3>HEATED SEATING</h3>
            <p>Instead of heating an entire outdoor area, heating functionality can be integrated close to the user — for hospitality, public spaces and premium winter environments.</p>
          </div>
        </div>
      </section>

      <section className="section section--surface" id="evidence">
        <div className="container">
          <SectionHeading eyebrow="EVIDENCE" title="WHAT DO WE KNOW TODAY?" />
          <article className="liquid-heat-evidence">
            <div className="liquid-heat-evidence__header">
              <EvidenceBadge evidenceClass="B" />
              <span>INTERNAL FIELD REFERENCE</span>
            </div>
            <h3>GFB panel · Portugal · winter-season operation</h3>
            <p>An internally documented GFB panel was used continuously as a heating element during a winter season in Portugal. According to the available internal observations, the approximately 90 °C surface temperature and electrical power draw remained stable during the observed operating period.</p>
            <div className="liquid-heat-evidence__meaning">
              <div><strong>WHAT THIS MEANS</strong><p>The observation provides useful practical evidence of stable operation in this specific configuration.</p></div>
              <div><strong>WHAT IT DOES NOT MEAN</strong><p>It is not yet an independent long-term certification or a transferable lifetime guarantee for every PURE LIQUID HEAT system.</p></div>
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="validation">
        <div className="container">
          <SectionHeading eyebrow="EVIDENCE PHILOSOPHY" title="VALIDATION IN PROGRESS" intro="Defined engineering questions are part of developing a reliable heating system." />
          <div className="validation-list">{validationItems.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="section section--surface" id="boundaries">
        <div className="container">
          <SectionHeading eyebrow="TRANSPARENT SCOPE" title="CAPABILITIES — AND CLEAR BOUNDARIES" />
          <div className="capability-grid">
            <article><h3>WHAT THE TECHNOLOGY ENABLES</h3><ul>{capabilities.map((item) => <li key={item}>{item}</li>)}</ul></article>
            <article><h3>WHAT WE DO NOT CLAIM</h3><ul>{boundaries.map((item) => <li key={item}>{item}</li>)}</ul></article>
          </div>
        </div>
      </section>

      <section className="section" id="complete-system">
        <div className="container">
          <SectionHeading eyebrow="SAFETY & MARKET ACCESS" title="THE COMPLETE SYSTEM MATTERS" />
          <div className="safety-chain">{['SUBSTRATE', 'HEATING LAYER', 'CONTACTS', 'CONTROL', 'PROTECTION', 'APPLICATION'].map((item, index) => <span key={item}><strong>{item}</strong>{index < 5 ? <b aria-hidden="true">→</b> : null}</span>)}</div>
          <p className="section-copy-narrow">Electrical and regulatory assessment applies to the complete end system, not to the coating in isolation.</p>
          <p className="section-copy-narrow">Depending on the final product and market, electrical safety, EMC, temperature limitation, environmental protection, fire behaviour and other requirements may need to be evaluated.</p>
        </div>
      </section>

      <section className="section section--surface" id="work-with-pure">
        <div className="container">
          <SectionHeading eyebrow="WORK WITH PURE" title="DEVELOP THE NEXT HEATING APPLICATION WITH PURE" />
          <div className="liquid-heat-four-grid liquid-heat-four-grid--three">
            {[
              ['PILOT PROJECT', 'Develop and measure a defined Liquid Heat demonstrator under controlled operating conditions.'],
              ['OEM INTEGRATION', 'Integrate the functional heating layer into a product or component with a defined engineering and QA specification.'],
              ['TESTING & VALIDATION', 'Work with PURE on electrical, thermal, environmental and long-term validation of a defined system.']
            ].map(([title, copy]) => <article className="liquid-heat-card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
          <div className="hero__ctas"><Link className="btn btn--primary" href="#work-with-pure">START A LIQUID HEAT PROJECT</Link><Link className="btn btn--secondary btn--dark" href="#evidence">VIEW TECHNICAL EVIDENCE</Link></div>
        </div>
      </section>
    </>
  );
}
