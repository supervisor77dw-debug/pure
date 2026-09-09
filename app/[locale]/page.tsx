import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { AssetFigure } from '@/components/AssetFigure';
import { LightboxFigure } from '@/components/LightboxFigure';
import { EvidenceBadge } from '@/components/EvidenceBadge';
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
  return <GermanHomePage locale="de" />;
}

function EnglishHome() {
  const principles = t.principles;
  const groups = t.partnership.groups;
  return (
    <>
      <Hero eyebrow={t.hero.eyebrow} title={t.hero.title} subtitle={t.hero.subtitle} primaryCta={{ label: t.hero.primary, href: '#why-pure' }} secondaryCta={{ label: t.hero.secondary, href: localePath('en', 'products/pure-thermo') }} backgroundImage={{ file: 'Hero2.png', alt: 'Person applying a functional coating to a building facade' }} />
      <section className="trust-bar"><div className="container"><ul className="trust-bar__list">{t.trust.map((item) => <li className="trust-bar__item" key={item}>{item}</li>)}</ul></div></section>
      <section className="section" id="why-pure"><div className="container"><div className="split-section"><div className="split-section__text"><span className="section-heading__eyebrow">{t.why.eyebrow}</span><h2>{t.why.title}</h2><p>{t.why.copy}</p></div><div className="split-section__media"><LightboxFigure file="Vierfelde Problemmatrix.png" alt="Four problem fields in conventional applications: low build-up height, complex geometry, detail areas and special requirements" /></div></div><div className="principle-grid" style={{ marginTop: 'var(--space-5)' }}>{principles.map(([title, copy], index) => <article className="principle-card" key={title}><span className="principle-card__index">0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
      <section className="section section--surface"><div className="container"><div className="section-heading section-heading--narrow"><span className="section-heading__eyebrow">{t.material.eyebrow}</span><h2>{t.material.title}</h2><p>{t.material.copy}</p></div><div className="material-story"><div className="material-story__visual"><LightboxFigure file="Aerogel Funktion.png" alt="Conceptual representation of heat transport influenced by a nanoporous aerogel structure" caption="Macro: material structure influences heat transport." /></div><div className="material-story__copy"><p className="lede">The relevant question is not only which material is used, but how its structure influences heat transport.</p><p>A nanoporous architecture can change effective transport within very thin layers. The resulting function must be assessed in its defined component and system context.</p></div></div></div></section>
      <section className="section"><div className="container"><div className="thermo-spotlight"><div className="thermo-spotlight__media"><AssetFigure file="Bauteilquerschnitt.png" alt="Component cross-section with a thin PURE THERMO functional layer" caption="PURE THERMO: the functional layer positioned in the component build-up." /></div><div className="thermo-spotlight__content"><span className="section-heading__eyebrow">{t.thermo.eyebrow}</span><h2>{t.thermo.title}</h2><p>{t.thermo.copy}</p><ul className="check-list"><li>Low build-up height</li><li>Surface application</li><li>Complex geometries</li><li>Existing-building details</li><li>Thermally relevant detail areas</li></ul><div className="hero__ctas"><Link className="btn btn--primary" href={localePath('en', 'products/pure-thermo')}>Explore Pure Thermo</Link></div></div></div></div></section>
      <section className="section section--surface" id="portfolio"><div className="container"><div className="section-heading section-heading--narrow"><span className="section-heading__eyebrow">{t.portfolio.eyebrow}</span><h2>{t.portfolio.title}</h2></div><div className="product-pipeline">{['PURE LIQUID HEAT', 'PURE FIRE PROTECT', 'PURE SURFACE PROTECT', 'PURE WATER PROTECT', 'PURE WOOD PROTECT', 'PURE BOAT PROTECT'].map((name, index) => index === 0 ? <Link className="product-pipeline__item" href={localePath('en', 'products/pure-liquid-heat')} key={name}>{name}</Link> : <div className="product-pipeline__item" key={name}>{name}</div>)}</div><p className="product-pipeline__note">{t.portfolio.note}</p></div></section>
      <section className="section"><div className="container"><div className="section-heading section-heading--narrow"><span className="section-heading__eyebrow">{t.application.eyebrow}</span><h2>{t.application.title}</h2></div><div className="application-journey"><article className="journey-card journey-card--photo"><img src="/assets/Hero2.png" alt="Application of a functional coating on a facade" loading="lazy" /><div className="journey-card__body"><h3>Existing buildings</h3><p>Components with limited build-up space.</p></div></article>{[['Detail areas', 'Connections and complex geometries.'], ['Technical systems', 'Functional surfaces and special applications.'], ['Architecture', 'Integration with limited constructive intervention.']].map(([title, copy]) => <article className="journey-card" key={title}><div className="journey-card__body"><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>
      <section className="section section--surface" id="evidence"><div className="container"><div className="section-heading section-heading--narrow"><span className="section-heading__eyebrow">{t.evidence.eyebrow}</span><h2>{t.evidence.title}</h2><p>{t.evidence.copy}</p></div><div className="evidence-grid">{[['A', 'Externally tested', 'Results from documented tests with a defined scope and subject.'], ['B', 'Internally documented', 'Traceable internal validation, testing and system derivation.'], ['C', 'Calculated / modelled', 'Transparent models with stated assumptions and limits.'], ['D', 'Development status', 'A defined development status, not a finished performance claim.']].map(([letter, title, copy]) => <div className="evidence-card" key={letter}><EvidenceBadge evidenceClass={letter as 'A' | 'B' | 'C' | 'D'} /><p>{title}: {copy}</p></div>)}</div></div></section>
      <section className="section"><div className="container"><div className="proof-panel"><div className="proof-panel__header"><span className="section-heading__eyebrow">{t.proof.eyebrow}</span><h2>{t.proof.value}</h2></div><div className="proof-panel__meta"><span>{t.proof.meta}</span></div><p>{t.proof.copy}</p><div className="hero__ctas"><Link className="btn btn--primary" href={localePath('en', 'evidence/EVD-PT-THERM-001')}>{t.proof.cta}</Link></div></div></div></section>
      <section className="section section--surface"><div className="container"><div className="section-heading section-heading--narrow"><span className="section-heading__eyebrow">{t.partners.eyebrow}</span><h2>{t.partners.title}</h2></div><div className="reference-grid">{t.partners.categories.map((item) => <div className="reference-card" key={item}><span className="reference-card__name">{item}</span></div>)}</div><div className="hero__ctas"><a className="btn btn--primary" href="#partnership">{t.partners.cta}</a></div></div></section>
      <section className="section" id="partnership"><div className="container"><div className="section-heading section-heading--narrow"><span className="section-heading__eyebrow">{t.partnership.eyebrow}</span><h2>{t.partnership.title}</h2></div><div className="partner-grid">{groups.map(([title, copy]) => <article className="partner-card" key={title}><h3>{title}</h3><p>{copy}</p><Link href={localePath('en', 'products/pure-thermo')}>Discuss</Link></article>)}</div></div></section>
      <section className="section section--surface"><div className="container"><div className="final-cta"><p className="final-cta__lead">{t.final.lead}</p><h2>{t.final.title}</h2><div className="hero__ctas" style={{ justifyContent: 'center' }}><Link className="btn btn--primary" href={localePath('en', 'products/pure-thermo')}>{t.final.primary}</Link><Link className="btn btn--secondary btn--dark" href={localePath('en', 'evidence/EVD-PT-THERM-001')}>{t.final.secondary}</Link></div></div></div></section>
    </>
  );
}
