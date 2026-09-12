import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AssetFigure } from '@/components/AssetFigure';
import { Breadcrumb } from '@/components/Breadcrumb';
import { LightboxFigure } from '@/components/LightboxFigure';
import { PhotoParityHero } from '@/components/ProductParityHero';
import { getWoodProtectContent } from '@/lib/wood-protect-content';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'PURE Wood Protect | Transparenter Holzoberflächenschutz | PURE',
  description: 'Dünne transparente Oberflächentechnologie für sichtbares Holz und objektspezifische Validierung.'
};

function Heading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return <div className="section-heading section-heading--narrow"><span className="section-heading__eyebrow">{eyebrow}</span><h2>{title}</h2>{intro ? <p>{intro}</p> : null}</div>;
}

const challengeCopy = [
  'UV, Regen und Temperaturwechsel verändern Farbe und Oberfläche.',
  'Feuchteaufnahme hängt stark von Holzart, Aufbau und Exposition ab.',
  'Schmutz und biologische Beläge beeinflussen Pflege und Erscheinungsbild.',
  'Pflegeintervalle und Nachbehandlung müssen objektspezifisch geplant werden.'
];

const applicationContexts = [
  ['aussen', 'AUSSENEXPOSITION'],
  ['aussen', 'AUSSENEXPOSITION'],
  ['aussen', 'AUSSENEXPOSITION'],
  ['innen', 'INNENRAUM'],
  ['maritim', 'MARITIME NUTZUNG'],
  ['aussen', 'AUSSENEXPOSITION']
] as const;

export default function GermanWoodProtectPage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'de') notFound();
  const t = getWoodProtectContent('de');

  return <>
    <Breadcrumb items={[{ label: 'Start', href: '/de' }, { label: t.name }]} />

    <PhotoParityHero variant="wood" eyebrow={t.name} title={t.heroTitle} subtitle={t.heroSubtitle} primary={{ label: t.heroCta, href: '#technology' }} secondary={{ label: t.testCta, href: '#test-area' }} />

    <section className="section section--surface"><div className="container"><Heading eyebrow={t.relationEyebrow} title={t.relationTitle} intro={t.relationCopy} /><div className="floor-protect-relation"><strong>PURE SURFACE PROTECT</strong><span>↓</span><strong>PURE WOOD PROTECT</strong></div></div></section>

    <section className="section" id="challenge"><div className="container"><Heading eyebrow={t.challengeEyebrow} title={t.challengeTitle} intro={t.challengeCopy} /><div className="wood-protect-card-grid wood-protect-card-grid--four">{t.challenge.map((title, index) => <article className="wood-protect-card" key={title}><span aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{challengeCopy[index]}</p></article>)}</div><p className="surface-protect-statement">{t.statement}</p></div></section>

    <section className="section section--surface" id="technology"><div className="container"><Heading eyebrow={t.techEyebrow} title={t.techTitle} /><div className={styles.engineeringPanel}><div className={styles.layerFlow}>{t.steps.map(([title, copy], index) => <article className={styles.layerStep} key={title}><span className={styles.layerIndex}>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div><div className={styles.materialRule}>{t.rule}</div></div></section>

    <section className="section" id="applications"><div className="container"><Heading eyebrow="APPLICATIONS" title={t.applicationsTitle} /><div className={styles.applicationGrid}>{t.applications.map(([title, copy], index) => <article className={styles.applicationCard} data-context={applicationContexts[index][0]} key={title}><span className={styles.applicationContext}>{applicationContexts[index][1]}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><LightboxFigure file="02_wood_asset_page19.jpeg" alt="Illustratives Holzoberflächen-Kommunikationsvisual" caption="Illustratives Kommunikationsvisual – keine reale Referenz." zoomLabel="Bild öffnen" closeLabel="Schließen" /></div></section>

    <section className="section section--surface" id="test-area"><div className="container"><Heading eyebrow={t.evidenceEyebrow} title={t.evidenceTitle} intro={t.speciesNote} /><div className={styles.species}>{t.species.map((item) => <span key={item}>{item}</span>)}</div><div className={styles.testGrid}>{t.test.map(([title, copy], index) => <article className={styles.testCard} key={title}><span className={styles.layerIndex}>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="section"><div className="container"><Heading eyebrow={t.weatherEyebrow} title={t.weatherTitle} /><ul className={styles.weatherList}>{t.weather.map((item) => <li key={item}>{item}</li>)}</ul><div className={styles.validationFlow}>{t.qa.map(([title, copy], index) => <article className={styles.validationStep} key={title}><span className={styles.validationIndex}>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="section section--surface"><div className="container"><Heading eyebrow="REGULATORY" title={t.regTitle} /><div className="fire-protect-regulatory">{t.reg.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="section"><div className="container"><Heading eyebrow="LIFECYCLE VALUE" title={t.lifecycleTitle} /><div className="surface-protect-lifecycle">{t.lifecycle.map((item) => <span key={item}>{item}</span>)}</div><div className="fire-protect-columns"><article><h3>DOKUMENTIERTE / PLAUSIBLE BASIS</h3><ul>{t.strengths.map((item) => <li key={item}>{item}</li>)}</ul></article><article><h3>NICHT PAUSCHAL ABLEITBAR</h3><ul>{t.limits.map((item) => <li key={item}>{item}</li>)}</ul></article></div></div></section>

    <section className="section section--surface"><div className="container"><div className="final-cta"><h2>{t.finalTitle}</h2><p>{t.finalCopy}</p><a className="btn btn--primary" href="#test-area">{t.project}</a></div></div></section>
  </>;
}
