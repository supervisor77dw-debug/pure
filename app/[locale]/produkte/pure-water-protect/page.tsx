import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AssetFigure } from '@/components/AssetFigure';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PhotoParityHero } from '@/components/ProductParityHero';
import { getWaterProtectContent } from '@/lib/water-protect-content';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'PURE Water Protect | Marine Easy-to-Clean Surface Technology | PURE',
  description: 'Ultradünne Easy-to-clean-Oberflächentechnologie für definierte Marineanwendungen.'
};

function Heading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return <div className="section-heading section-heading--narrow"><span className="section-heading__eyebrow">{eyebrow}</span><h2>{title}</h2>{intro ? <p>{intro}</p> : null}</div>;
}

export default function GermanWaterProtectPage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'de') notFound();
  const t = getWaterProtectContent('de');

  return <>
    <Breadcrumb items={[{ label: 'Start', href: '/de' }, { label: t.name }]} />

    <PhotoParityHero variant="water" eyebrow={t.name} title={t.heroTitle} subtitle={t.heroSubtitle} primary={{ label: t.heroCta, href: '#technology' }} secondary={{ label: t.pilot, href: '#season' }} />

    <section className="section" id="challenge"><div className="container"><Heading eyebrow={t.challengeEyebrow} title={t.challengeTitle} intro={t.challengeCopy} /><div className="surface-protect-four-grid">{t.challenge.map((item) => <article className="surface-protect-card" key={item}><h3>{item}</h3></article>)}</div></div></section>

    <section className="section section--surface" id="technology"><div className="container"><Heading eyebrow={t.techEyebrow} title={t.techTitle} /><div className={styles.layerFlow}>{t.steps.map(([title, copy], index) => <article className={styles.layerStep} key={title}><span className={styles.layerIndex}>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><div className={styles.layerStatement}>{t.statement}</div></div></section>

    <section className="section"><div className="container"><Heading eyebrow={t.performanceEyebrow} title="Dokumentierte Performance-Basis" /><div className="water-protect-performance">{t.performance.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}</div></div></section>

    <section className="section section--surface" id="evidence"><div className="container"><Heading eyebrow={t.evidenceEyebrow} title={t.evidenceTitle} /><div className={styles.evidenceGrid}>{t.evidence.map(([title, status, copy]) => <article className={styles.evidenceCard} data-status={status === 'D' ? 'D' : 'B'} key={title}><strong>{title}</strong><span className={styles.evidenceStatus}>{status}</span><p>{copy}</p></article>)}</div></div></section>

    <section className="section" id="season"><div className="container"><Heading eyebrow={t.seasonEyebrow} title={t.seasonTitle} /><div className={styles.validationFlow}>{t.season.map(([title, copy], index) => <article className={styles.validationStep} key={title}><span className={styles.validationIndex}>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="water-protect-statement">{t.seasonStatement}</div></div></section>

    <section className="section section--surface"><div className="container"><Heading eyebrow="ANWENDUNGSLOGIK" title={t.applicationsTitle} /><div className="water-protect-application-list">{t.applications.map((item) => <span key={item}>{item}</span>)}</div><AssetFigure file="02_water_problem_hull.jpeg" alt="Illustratives Unterwasser-Kommunikationsvisual einer definierten Marineoberfläche" caption="Illustratives Problemvisual – keine dokumentierte Referenz und keine Antifouling-Erfolgssimulation." /></div></section>

    <section className="section"><div className="container"><Heading eyebrow={t.environmentEyebrow} title={t.environmentTitle} /><div className="fire-protect-columns"><article><h3>BIOZIDFREIE EASY-TO-CLEAN-POSITIONIERUNG</h3><ul>{t.environment.map((item) => <li key={item}>{item}</li>)}</ul></article><article><h3>OFFENE NACHWEISFELDER</h3><ul>{t.open.map((item) => <li key={item}>{item}</li>)}</ul></article></div></div></section>

    <section className="section section--surface"><div className="container"><Heading eyebrow="HYDRODYNAMICS" title={t.fuelTitle} intro={t.fuelCopy} /><ul className="water-protect-fuel">{t.fuelNeed.map((item) => <li key={item}>{item}</li>)}</ul></div></section>

    <section className="section"><div className="container"><Heading eyebrow={t.qaEyebrow} title={t.qaTitle} /><ol className="water-protect-qa">{t.qa.map((item) => <li key={item}>{item}</li>)}</ol></div></section>

    <section className="section section--surface"><div className="container"><Heading eyebrow={t.regEyebrow} title={t.regTitle} /><div className="fire-protect-regulatory">{t.reg.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="section"><div className="container"><Heading eyebrow="RESPONSIBLE CLAIMS" title={t.limitsTitle} /><div className="fire-protect-columns"><article><h3>DOKUMENTIERTE / VORHANDENE BASIS</h3><ul>{t.strengths.map((item) => <li key={item}>{item}</li>)}</ul></article><article><h3>NICHT PAUSCHAL ABLEITBAR</h3><ul>{t.limits.map((item) => <li key={item}>{item}</li>)}</ul></article></div></div></section>

    <section className="section section--surface"><div className="container"><Heading eyebrow="LIFECYCLE VALUE" title={t.economyTitle} /><div className="water-protect-application-list">{t.economy.map((item) => <span key={item}>{item}</span>)}</div><div className="final-cta"><h2>{t.finalTitle}</h2><p>{t.finalCopy}</p><div className="hero__ctas" style={{ justifyContent: 'center' }}><a className="btn btn--primary" href="#season">{t.project}</a><a className="btn btn--secondary btn--dark" href="#technology">{t.zone}</a></div></div></div></section>
  </>;
}
