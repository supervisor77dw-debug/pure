import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { LightboxFigure } from '@/components/LightboxFigure';
import { EvidenceLegendPreview, FinalDecisionCta, HomeApplicationOverview, HomeCalculatorTeaser, KiwaEvidencePanel, PartnershipPanel, PilotProcess, ProductPortfolioMatrix } from '@/components/HomeExperienceSections';
import { englishHome as t } from '@/lib/locale-content';
import { isLocale, localePath, type Locale } from '@/lib/i18n';
import GermanHomePage from '@/app/page';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const english = params.locale === 'en';
  return {
    title: 'PURE Technology Platform',
    description: english ? 'Functional material technologies with a shared development, testing and documentation logic.' : 'Funktionale Beschichtungstechnologien mit gemeinsamer Entwicklungs-, Prüf- und Dokumentationslogik.',
    alternates: { canonical: english ? '/en' : '/de', languages: { de: '/de', en: '/en', 'x-default': '/de' } },
    openGraph: { title: 'PURE Technology Platform', description: english ? 'Functional material technologies with a shared development, testing and documentation logic.' : 'Funktionale Beschichtungstechnologien mit gemeinsamer Entwicklungs-, Prüf- und Dokumentationslogik.', locale: english ? 'en_GB' : 'de_DE' }
  };
}

export default function LocaleHomePage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'en';
  if (locale === 'de') {
    return <GermanHome />;
  }
  return <EnglishHome />;
}

function GermanHome() {
  return <GermanHomePage />;
}

function EnglishHome() {
  const principles = t.principles;
  return (
    <>
      <Hero eyebrow={t.hero.eyebrow} title={t.hero.title} subtitle={t.hero.subtitle} primaryCta={{ label: t.hero.primary, href: '#why-pure' }} secondaryCta={{ label: t.hero.secondary, href: localePath('en', 'products/pure-thermo') }} backgroundImage={{ file: 'transluzente_materialschichten_im_teal_licht.png', alt: 'Translucent functional material layers above a dark mineral substrate' }} className="hero--home" />
      <section className="trust-bar"><div className="container"><ul className="trust-bar__list">{t.trust.map((item) => <li className="trust-bar__item" key={item}>{item}</li>)}</ul></div></section>
      <section className="section section--compact"><div className="container"><div className="intent-panel"><div className="intent-panel__lead"><span className="section-heading__eyebrow">Project start</span><h2>What would you like to check?</h2><p>Choose the entry point that fits your building component, detail or evidence need.</p><div className="hero__ctas"><Link className="btn btn--primary" href={localePath('en', 'products/pure-thermo#u-wert-rechner')}>Calculate your component</Link></div></div><div className="intent-grid" aria-label="Thematic entry points">{[['Thermal improvement of a component', localePath('en', 'products/pure-thermo#u-wert-rechner')], ['Thermal bridge / detail', localePath('en', 'systems/pure-thermo-detail')], ['Interior application', localePath('en', 'systems/pure-thermo-interior')], ['Facade', localePath('en', 'systems/pure-thermo-exterior')], ['Thermo + fire protection', localePath('en', 'systems/pure-thermo-fire')], ['Technical evidence', localePath('en', 'evidence/EVD-PT-THERM-001')]].map(([label, href]) => <Link className="intent-card" href={href} key={label}>{label}</Link>)}</div></div></div></section>
      <HomeCalculatorTeaser locale="en" />
      <section className="section" id="why-pure"><div className="container"><div className="split-section"><div className="split-section__text"><span className="section-heading__eyebrow">{t.why.eyebrow}</span><h2>{t.why.title}</h2><p>{t.why.copy}</p></div><div className="split-section__media"><LightboxFigure file="Vierfelde Problemmatrix.png" alt="Four problem fields in conventional applications: low build-up height, complex geometry, detail areas and special requirements" caption="Orientation matrix: PURE addresses application fields where conventional systems reach constructive limits." zoomLabel="Enlarge" closeLabel="Close" /></div></div><div className="principle-grid" style={{ marginTop: 'var(--space-5)' }}>{principles.map(([title, copy], index) => <article className="principle-card" key={title}><span className="principle-card__index">0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
      <section className="section section--surface"><div className="container"><div className="section-heading section-heading--narrow"><span className="section-heading__eyebrow">{t.material.eyebrow}</span><h2>{t.material.title}</h2><p>{t.material.copy}</p></div><div className="material-story"><div className="material-story__visual"><LightboxFigure file="Aerogel Funktion.png" alt="Conceptual representation of heat transport influenced by a nanoporous aerogel structure" caption="Macro: material structure influences heat transport." zoomLabel="Enlarge" closeLabel="Close" /></div><div className="material-story__copy"><p className="lede">The relevant question is not only which material is used, but how its structure influences heat transport.</p><p>A nanoporous architecture can change effective transport within very thin layers. The resulting function must be assessed in its defined component and system context.</p></div></div></div></section>
      <HomeApplicationOverview locale="en" />
      <section className="section"><div className="container"><div className="thermo-spotlight"><div className="thermo-spotlight__media"><LightboxFigure file="Bauteilquerschnitt.png" alt="Component cross-section with a thin PURE THERMO functional layer" caption="PURE THERMO: the functional layer positioned in the component build-up." zoomLabel="Enlarge" closeLabel="Close" /></div><div className="thermo-spotlight__content"><span className="section-heading__eyebrow">{t.thermo.eyebrow}</span><h2>{t.thermo.title}</h2><p className="lede">What could PURE THERMO do for your building component?</p><p>{t.thermo.copy}</p><ul className="check-list"><li>Low build-up height</li><li>Surface application</li><li>Complex geometries</li><li>Existing-building details</li><li>Thermally relevant detail areas</li></ul><div className="hero__ctas"><Link className="btn btn--primary" href={localePath('en', 'products/pure-thermo')}>Explore Pure Thermo</Link><Link className="btn btn--secondary" href={localePath('en', 'products/pure-thermo#u-wert-rechner')}>Calculate U-value</Link></div></div></div></div></section>
      <ProductPortfolioMatrix locale="en" />
      <EvidenceLegendPreview locale="en" />
      <KiwaEvidencePanel locale="en" />
      <PilotProcess locale="en" />
      <PartnershipPanel locale="en" />
      <FinalDecisionCta locale="en" />
    </>
  );
}
