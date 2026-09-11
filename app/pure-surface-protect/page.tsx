import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { isLocale } from '@/lib/i18n';
import { getSurfaceProtectContent, type SurfaceProtectLocale } from '@/lib/surface-protect-content';
import { Breadcrumb } from '@/components/Breadcrumb';
import { AssetFigure } from '@/components/AssetFigure';
import { LightboxFigure } from '@/components/LightboxFigure';
import { EvidenceBadge } from '@/components/EvidenceBadge';
import { productVisuals, visualFor } from '@/lib/product-visuals';
import { surfaceReferenceFlags } from '@/lib/surface-reference-flags';
import { ProductHeroAmbient } from '@/components/ProductHeroAmbient';

export const metadata: Metadata = {
  title: 'PURE Surface Protect | Transparent Surface Protection | PURE',
  description: 'Ultra-thin transparent functional coating for defined façade, metal, glass and high-value surface applications.'
};

function SurfaceDiagram({ locale }: { locale: SurfaceProtectLocale }) {
  return <div className="surface-protect-diagram" aria-label={locale === 'de' ? 'Technische Darstellung von Substrat, Hybridmatrix und Oberflächenbarriere' : 'Technical illustration of substrate, hybrid matrix and surface barrier'}>
    <div className="surface-protect-diagram__layer surface-protect-diagram__layer--contaminants"><span>WATER / DIRT / PIGMENTS</span></div>
    <div className="surface-protect-diagram__layer surface-protect-diagram__layer--matrix"><span>ULTRA-THIN HYBRID MATRIX</span></div>
    <div className="surface-protect-diagram__layer surface-protect-diagram__layer--substrate"><span>SUBSTRATE</span></div>
  </div>;
}

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return <div className="section-heading section-heading--narrow"><span className="section-heading__eyebrow">{eyebrow}</span><h2>{title}</h2>{intro ? <p>{intro}</p> : null}</div>;
}

function surfaceEvidenceClass(status: string): 'B' | 'D' {
  return status === 'D' ? 'D' : 'B';
}

const challengeCopy = {
  de: ['UV, Feuchte und Temperaturwechsel verändern Oberflächen über Zeit.', 'Schmutz und Beläge beeinflussen Optik und Reinigungsaufwand.', 'Abrieb und Chemie können behandelte und unbehandelte Oberflächen belasten.', 'Pflege, Sanierung und Sperrzeiten bestimmen den wirtschaftlichen Kontext.'],
  en: ['UV, moisture and temperature changes affect surfaces over time.', 'Dirt and deposits influence appearance and cleaning effort.', 'Abrasion and chemicals can stress treated and untreated surfaces.', 'Maintenance, refurbishment and downtime shape the economic context.']
} as const;

export default function PureSurfaceProtectPage() {
  const headerLocale = headers().get('x-pure-locale') || 'en';
  const locale: SurfaceProtectLocale = isLocale(headerLocale) ? headerLocale : 'en';
  const t = getSurfaceProtectContent(locale);
  const asset = (de: string, en: string) => locale === 'de' ? de : en;
  const uaeAltOne = asset('Reale UAE-Anwendungsreferenz an einer Marmor-Fassade eines Bankgebäudes', 'Real-world UAE application reference on the marble façade of a bank building');
  const uaeAltTwo = asset('Zweite Aufnahme der UAE-Marmorfassade', 'Second view of the UAE marble façade');
  const evidenceCards = t.evidence.map(([value, status, copy]) => (
    <article key={value}>
      <strong>{value}</strong>
      <EvidenceBadge evidenceClass={surfaceEvidenceClass(status)} />
      <p>{copy}</p>
    </article>
  ));
  const { showLanuvReference, showUaeReference } = surfaceReferenceFlags;

  return <>
    <Breadcrumb items={[{ label: 'Start', href: locale === 'de' ? '/de' : '/en' }, { label: t.name }]} />
    <ProductHeroAmbient variant="surface" motionEnabled className="surface-protect-hero">
      <div className="container surface-protect-hero__grid"><div><p className="hero__eyebrow">{t.name}</p><h1>{t.heroTitle}</h1><p className="hero__subtitle">{t.heroSubtitle}</p><div className="surface-protect-facts">{t.heroFacts.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}</div><div className="hero__ctas"><a className="btn btn--primary" href="#technology">{t.heroCta}</a><a className="btn btn--secondary" href="#evidence">{t.referencesCta}</a></div></div><AssetFigure file="01_hero_facade_source_1.jpeg" alt={asset('PURE SURFACE PROTECT Technologievisual für eine Fassadenoberfläche', 'PURE SURFACE PROTECT technology visual for a façade surface')} caption={t.heroCaption} priority /></div>
    </ProductHeroAmbient>

    <section className="section" id="challenge"><div className="container"><SectionHeading eyebrow={t.challengeEyebrow} title={t.challengeTitle} intro={t.challengeCopy} /><div className="surface-protect-four-grid">{t.challengeCards.map(([title], index) => <article className="surface-protect-card surface-protect-card--icon" key={title}><span aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{challengeCopy[locale][index]}</p></article>)}</div><p className="surface-protect-statement">{t.challengeStatement}</p></div></section>

    <section className="section section--surface" id="technology"><div className="container"><SectionHeading eyebrow={t.techEyebrow} title={t.techTitle} /><div className="surface-protect-tech-grid"><div><LightboxFigure file={visualFor(productVisuals.surfaceProtect.technology, locale)} alt={asset('Illustratives Technologieprinzip für reine Oberflächen: Substrat, dünne Hybridmatrix und Oberflächenbarriere', 'Illustrative technology principle for clean surfaces: substrate, thin hybrid matrix and surface barrier')} caption={asset('Technologieprinzip / illustrative Kommunikationsgrafik – keine maßstäbliche technische Zeichnung.', 'Technology principle / illustrative communication visual — not a scaled technical drawing.')} zoomLabel={locale === 'de' ? 'Vergrößern' : 'Enlarge'} closeLabel={locale === 'de' ? 'Schließen' : 'Close'} /></div><div className="surface-protect-steps">{t.steps.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></div></section>

    <section className="section" id="applications"><div className="container"><SectionHeading eyebrow={t.applicationsEyebrow} title={t.applicationsTitle} /><div className="surface-protect-application-features"><article className="surface-application-feature"><LightboxFigure file={visualFor(productVisuals.surfaceProtect.architecture, locale)} alt={asset('PURE SURFACE PROTECT – illustratives Anwendungskonzept für moderne Architektur und Fassaden', 'PURE SURFACE PROTECT – illustrative application concept for modern architecture and facades')} caption={asset('Illustratives Anwendungskonzept.', 'Illustrative application concept.')} zoomLabel={locale === 'de' ? 'Vergrößern' : 'Enlarge'} closeLabel={locale === 'de' ? 'Schließen' : 'Close'} /><div><h3>{t.applications[0][0]}</h3><p>{t.applications[0][1]}</p></div></article><article className="surface-application-feature"><LightboxFigure file={visualFor(productVisuals.surfaceProtect.infrastructure, locale)} alt={asset('Illustratives Anwendungsvisual einer modernen Terminalarchitektur im Morgenlicht', 'Illustrative application visual of modern terminal architecture in morning light')} caption={asset('Illustratives Anwendungskonzept – keine dokumentierte PURE-Referenz.', 'Illustrative application concept — not a documented PURE reference.')} zoomLabel={locale === 'de' ? 'Vergrößern' : 'Enlarge'} closeLabel={locale === 'de' ? 'Schließen' : 'Close'} /><div><h3>{t.applications[1][0]}</h3><p>{t.applications[1][1]}</p></div></article><article className="surface-application-feature"><LightboxFigure file={visualFor(productVisuals.surfaceProtect.industry, locale)} alt={asset('Illustratives Anwendungsvisual einer hochwertigen Edelstahl- und Industrieoberfläche', 'Illustrative application visual of a high-quality stainless-steel industrial surface')} caption={asset('Illustratives Anwendungskonzept – keine dokumentierte PURE-Referenz.', 'Illustrative application concept — not a documented PURE reference.')} zoomLabel={locale === 'de' ? 'Vergrößern' : 'Enlarge'} closeLabel={locale === 'de' ? 'Schließen' : 'Close'} /><div><h3>{t.applications[2][0]}</h3><p>{t.applications[2][1]}</p></div></article><article className="surface-application-feature"><LightboxFigure file={visualFor(productVisuals.surfaceProtect.heritage, locale)} alt={asset('PURE SURFACE PROTECT – illustratives Anwendungskonzept für historische und hochwertige Oberflächen', 'PURE SURFACE PROTECT – illustrative application concept for historic and high-value surfaces')} caption={asset('Illustratives Anwendungskonzept.', 'Illustrative application concept.')} zoomLabel={locale === 'de' ? 'Vergrößern' : 'Enlarge'} closeLabel={locale === 'de' ? 'Schließen' : 'Close'} /><div><h3>{t.applications[3][0]}</h3><p>{t.applications[3][1]}</p></div></article></div></div></section>

    <section className="section section--surface" id="evidence"><div className="container"><SectionHeading eyebrow={t.evidenceEyebrow} title={t.evidenceTitle} /><div className="surface-protect-case"><div><span className="concept-label">REAL-WORLD EVIDENCE</span><h3>{t.uaeTitle}</h3><p>{t.uaeCopy}</p><ul>{t.uaePoints.map((point) => <li key={point}>{point}</li>)}</ul><p className="surface-protect-note">{t.uaeNote}</p></div><div className="surface-protect-case-images"><AssetFigure file="02_uae_case_1.jpeg" alt={uaeAltOne} /><AssetFigure file="02_uae_case_2.jpeg" alt={uaeAltTwo} /></div></div><div className="surface-protect-lanuv"><div><span className="concept-label">PROJECT REFERENCE</span><h3>LANUV ESSEN</h3><h4>{t.lanuvTitle}</h4><p>{t.lanuvNote}</p></div><div className="surface-protect-facts surface-protect-facts--light">{t.lanuvFacts.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}</div></div><div className="surface-protect-evidence-grid">{evidenceCards}</div></div></section>

    <section className="section" id="quality"><div className="container"><SectionHeading eyebrow={t.qaEyebrow} title={t.qaTitle} /><div className="surface-protect-qa">{t.qa.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="surface-protect-statement">{t.qaStatement}</p></div></section>

    <section className="section section--surface" id="lifecycle"><div className="container"><SectionHeading eyebrow={t.lifecycleEyebrow} title={t.lifecycleTitle} intro={t.lifecycleIntro} /><div className="surface-protect-lifecycle">{t.lifecycleFactors.map((factor) => <span key={factor}>{factor}</span>)}</div><p className="surface-protect-note">Context figures remain application- and project-dependent: 70–90 m²/L · 5,000 m² LANUV reference scale · 4 days / 4 people. No automatic cost saving is calculated from these figures.</p></div></section>

    <section className="section" id="limits"><div className="container"><SectionHeading eyebrow={t.limitsEyebrow} title={t.limitsTitle} /><div className="surface-protect-limits"><article><h3>{locale === 'de' ? 'DOKUMENTIERTE / PLAUSIBLE STÄRKEN' : 'DOCUMENTED / PLAUSIBLE STRENGTHS'}</h3><ul>{t.strengths.map((item) => <li key={item}>{item}</li>)}</ul></article><article><h3>{locale === 'de' ? 'NICHT PAUSCHAL ABLEITBAR' : 'NOT GENERALLY DERIVABLE'}</h3><ul>{t.limits.map((item) => <li key={item}>{item}</li>)}</ul></article></div><div className="surface-protect-regulatory"><strong>{t.regulatoryEyebrow}</strong><p>{t.regulatory}</p></div></div></section>

    <section className="section section--surface"><div className="container"><div className="final-cta"><h2>{t.finalTitle}</h2><p>{t.finalCopy}</p><div className="hero__ctas" style={{ justifyContent: 'center' }}><a className="btn btn--primary" href="#quality">{t.project}</a><a className="btn btn--secondary btn--dark" href="#challenge">{t.test}</a></div></div></div></section>
  </>;
}
