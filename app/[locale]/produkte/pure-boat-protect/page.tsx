import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PhotoParityHero } from '@/components/ProductParityHero';
import { SurfaceCard } from '@/components/SurfaceCard';
import { getBoatProtectContent } from '@/lib/boat-protect-content';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'PURE Boat Protect | Premium Oberflächenschutz für Yachten | PURE',
  description: 'Dünne flexible Oberflächenschutztechnologie für hochwertige Yachtoberflächen und zonenspezifische Validierung.'
};

function Heading({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return <div className="section-heading section-heading--narrow">{eyebrow ? <span className="section-heading__eyebrow">{eyebrow}</span> : null}<h2>{title}</h2>{intro ? <p>{intro}</p> : null}</div>;
}

const zoneMaterials = ['TEAK · DECK', 'KUNSTSTOFF', 'LEDER', 'METALL', 'BETRIEB', 'PREMIUMOBERFLÄCHEN'];
const exposureSurfaces = ['salt', 'uv', 'abrasion', 'organic'] as const;
const zoneSurfaces = ['teak', 'polymer', 'leather', 'metal', 'traffic', 'finish'] as const;
const compatibilitySurfaces = ['teak', 'joint', 'polymer', 'leather', 'metal', 'finish'] as const;
const exposureAssets = ['Nasse Bootswand mit Tau und Wassertropfen.png', 'Sonnenfunkeln auf der Luxusyacht.png', 'Abgenutztes Yachtdeck im Sonnenlicht.png', 'Bewachsener Yacht-Rumpf am Wasserline.png'] as const;
const zoneAssets = ['Premium Teak-Yachtdeck mit dunklen Fugen.png', 'Abstrakte Graphitstruktur mit sanften Rillen.png', 'Leder Yacht.png', 'Polierter Edelstahlbeschlag im Sonnenuntergang.png', 'Charterflotte.png', 'Luxusyacht.png'] as const;
const compatibilityAssets = ['Premium Teak-Yachtdeck mit dunklen Fugen.png', 'Makellose Yachtdeck-Details im Sonnenlicht.png', 'Abstrakte Graphitstruktur mit sanften Rillen.png', 'Leder Yacht.png', 'Polierter Edelstahlbeschlag im Sonnenuntergang.png', 'Glänzende Yacht mit Chromzierleiste.png'] as const;

export default function GermanBoatProtectPage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'de') notFound();
  const t = getBoatProtectContent('de');

  return <>
    <Breadcrumb items={[{ label: 'Start', href: '/de' }, { label: t.name }]} />

    <PhotoParityHero variant="boat" eyebrow={t.name} title={t.heroTitle} subtitle={t.heroSubtitle} primary={{ label: t.heroCta, href: '#technology' }} secondary={{ label: t.zoneCta, href: '#test-area' }} facts={[{ value: 'bis zu 90 m²/L', label: 'B · laut Marine-Unterlagen' }, { value: 'bis zu 3 Jahre', label: 'B · laut Marine-Unterlagen', note: 'abhängig von Nutzung und Exposition' }]} />

    <section className="section"><div className="container"><Heading eyebrow={t.challengeEyebrow} title={t.challengeTitle} intro={t.challengeCopy} /><div className="surface-protect-four-grid">{t.challenge.map((item, index) => <SurfaceCard className="surface-protect-card" surface={exposureSurfaces[index]} backgroundAsset={exposureAssets[index]} key={item}><h3>{item}</h3></SurfaceCard>)}</div><p className="surface-protect-statement">{t.statement}</p></div></section>

    <section className="section section--surface" id="technology"><div className="container"><Heading eyebrow={t.techEyebrow} title={t.techTitle} /><div className={styles.engineeringRail}><div className={styles.engineeringFlow}>{t.steps.map(([title, copy], index) => <article className={styles.engineeringStep} key={title}><span className={styles.stepIndex}>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div><div className={styles.engineeringRule}>{t.rule}</div></div></section>

    <section className="section" id="zones"><div className="container"><Heading eyebrow="YACHT ZONES" title={t.zonesTitle} /><div className={styles.zoneWorld}>{t.zones.map(([title, copy], index) => <SurfaceCard className={styles.zone} surface={zoneSurfaces[index]} backgroundAsset={zoneAssets[index]} key={title}><span className={styles.zoneMaterial}>{zoneMaterials[index]}</span><h3>{title}</h3><p>{copy}</p></SurfaceCard>)}</div></div></section>

    <section className="section section--surface" id="test-area"><div className="container"><Heading eyebrow={t.compatEyebrow} title={t.compatTitle} /><div className={styles.compatGrid}>{t.compat.map(([title, copy], index) => <SurfaceCard className={styles.compatibility} surface={compatibilitySurfaces[index]} backgroundAsset={compatibilityAssets[index]} key={title}><h3>{title}</h3><p>{copy}</p></SurfaceCard>)}</div><p className={styles.compatibilityNote}>{t.sika}</p></div></section>

    <section className="section"><div className="container"><Heading eyebrow={t.performanceEyebrow} title="Dokumentierte Performance-Basis" /><div className={styles.evidenceGrid}>{t.performance.map(([title, copy]) => <article className={styles.evidenceCard} data-status={title === 'UV / Salzschutz' ? 'D' : 'B'} key={title}><strong>{title}</strong><span>{copy.split(' · ')[0]}</span><p>{copy.split(' · ').slice(1).join(' · ')}</p></article>)}</div></div></section>

    <section className="section section--surface"><div className="container"><Heading eyebrow={t.qaEyebrow} title={t.qaTitle} /><ol className="boat-protect-qa">{t.qa.map((item) => <li key={item}>{item}</li>)}</ol><p className="surface-protect-statement">{t.qaStatement}</p></div></section>

    <section className="section"><div className="container"><Heading title={t.marineTitle} /><div className={styles.marineConcept}>{t.marineRoutes.map(([title, copy], index) => <article className={styles.marineRoute} data-route={index === 0 ? 'boat' : index === 1 ? 'water' : 'thermo'} key={title}><div><span className={styles.routeLevel}>{index === 0 ? 'OBERHALB DER WASSERLINIE' : index === 1 ? 'UNTERWASSERFLÄCHEN' : 'TECHNISCHE ROUTE'}</span><strong>{title}</strong></div><p>{copy}</p></article>)}</div></div></section>

    <section className="section section--surface"><div className="container"><Heading title={t.lifecycleTitle} /><div className="surface-protect-lifecycle">{t.lifecycle.map((item) => <span key={item}>{item}</span>)}</div><div className="fire-protect-warning"><h3>{t.charterTitle}</h3><p>{t.charterCopy}</p></div></div></section>

    <section className="section"><div className="container"><Heading title={t.limitsTitle} /><div className="fire-protect-columns"><article><h3>DOKUMENTIERTE / PLAUSIBLE BASIS</h3><ul>{t.strengths.map((item) => <li key={item}>{item}</li>)}</ul></article><article><h3>NICHT PAUSCHAL ABLEITBAR</h3><ul>{t.limits.map((item) => <li key={item}>{item}</li>)}</ul></article></div></div></section>

    <section className="section section--surface"><div className="container"><div className="final-cta"><h2>{t.finalTitle}</h2><p>{t.finalCopy}</p><a className="btn btn--primary" href="#test-area">{t.project}</a></div></div></section>
  </>;
}
