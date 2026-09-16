'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Locale } from '@/lib/i18n';
import { VideoMedia } from './VideoMedia';

type VideoItem = {
  src: string;
  duration: number;
  poster: string;
  eyebrow: string;
  title: string;
  intro: string;
  whatYouSee: readonly string[];
  interpretation?: string;
  limitation: string;
  evidence: 'B' | 'BD';
  evidenceLabel: string;
  chapters?: ReadonlyArray<{ time: number; label: string }>;
  link?: { href: string; label: string };
};

type ApplicationKind = 'thermo' | 'floor' | 'water';

const applicationVideos: Record<ApplicationKind, Record<Locale, VideoItem | null>> = {
  thermo: {
    de: {
      src: '/videos/thermo-application.mp4',
      duration: 32,
      poster: '/videos/posters/thermo-application.webp',
      eyebrow: 'IN ANWENDUNG',
      title: 'Historische Demonstrations- und Versuchsszenen',
      intro: 'Der Webcut zeigt eine historische Oberflächen- und Wärmedemonstration sowie einen separaten Brennerversuch an einem beschichteten Demonstrator. Ein Materialauftrag ist in diesem Clip nicht zu sehen.',
      whatYouSee: ['Demonstrator auf einer beheizten Platte', 'manuelle Prüfung der Oberfläche', 'Vorbereitung eines Brennerversuchs', 'direkte Flamme am Demonstrator'],
      interpretation: 'Die Aufnahmen dokumentieren historische Demonstrations- und Versuchssituationen. Konkrete thermische Leistungswerte ergeben sich daraus nicht automatisch.',
      limitation: 'Das Video belegt keine pauschale Energieeinsparung, keine generelle Schimmelvermeidung, keine universelle Dämmwirkung und keine allgemeine Brandklasse.',
      evidence: 'B',
      evidenceLabel: 'B · interne Entwicklungsdokumentation'
    },
    en: {
      src: '/videos/thermo-application.mp4',
      duration: 32,
      poster: '/videos/posters/thermo-application.webp',
      eyebrow: 'APPLICATION IN PRACTICE',
      title: 'Historical demonstration and test scenes',
      intro: 'The webcut shows a historical surface and heat demonstration followed by a separate burner test on a coated demonstrator. Material application is not shown in this clip.',
      whatYouSee: ['demonstrator on a heated plate', 'manual surface check', 'preparation of a burner test', 'direct flame on the demonstrator'],
      interpretation: 'The footage documents historical demonstration and test situations. It does not by itself establish specific thermal performance values.',
      limitation: 'The video does not demonstrate generic energy savings, universal mould prevention, universal insulation performance or a general fire classification.',
      evidence: 'B',
      evidenceLabel: 'B · internal development documentation'
    }
  },
  floor: {
    de: null,
    en: {
      src: '/videos/floor-application-en.mp4',
      duration: 45,
      poster: '/videos/posters/floor-application-en.webp',
      eyebrow: 'APPLICATION IN PRACTICE',
      title: 'Sports-floor condition and cleaning sequence',
      intro: 'The webcut shows a sports-floor environment, the marked floor before treatment, mechanical cleaning and a labelled view after treatment. The coating application itself is not shown.',
      whatYouSee: ['sports-floor context', 'surface marked as before treatment', 'mechanical floor cleaning', 'surface marked as after treatment'],
      interpretation: 'The footage documents the condition and cleaning stages of a real floor project; it does not visually document the application step.',
      limitation: 'The video is not a universal durability, slip-resistance or regulatory certification.',
      evidence: 'B',
      evidenceLabel: 'B · documented application',
      chapters: [{ time: 0, label: 'Sports-floor context' }, { time: 11.72, label: 'Condition before treatment' }, { time: 18.84, label: 'Mechanical cleaning' }, { time: 36.24, label: 'Condition after treatment' }]
    }
  },
  water: {
    de: {
      src: '/videos/water-application-de.mp4',
      duration: 50.05,
      poster: '/videos/posters/water-application-de.webp',
      eyebrow: 'MARITIME PRAXIS',
      title: 'Praxisbeobachtung an maritimen Oberflächen',
      intro: 'Der Webcut zeigt einen Bootsrumpf nach vier Monaten im Rhein, sichtbare Ablagerungen beziehungsweise Bewuchs, die Reinigung mit Bürste und Wasserstrahl sowie den danach sichtbaren Rumpfbereich.',
      whatYouSee: ['Einordnung des Praxistests', 'bewachsener Unterwasserbereich', 'Reinigung mit Bürste und Wasserstrahl', 'gereinigter Rumpfbereich'],
      interpretation: 'Die Aufnahmen liefern praktische Beobachtungen zur Oberflächenreinigung und zum Verhalten im maritimen Umfeld.',
      limitation: 'Die Aufnahmen belegen keine universelle Bewuchsfreiheit, keine generelle Antifouling-Wirkung und keine garantierte Kraftstoff- oder Geschwindigkeitsverbesserung.',
      evidence: 'B',
      evidenceLabel: 'B · Praxis- und Anwendungsdokumentation',
      chapters: [{ time: 0, label: 'Einordnung des Praxistests' }, { time: 10.01, label: 'Bewachsener Unterwasserbereich' }, { time: 20.02, label: 'Reinigung mit Bürste' }, { time: 30.03, label: 'Reinigung mit Wasserstrahl' }, { time: 40.04, label: 'Gereinigter Rumpfbereich' }],
      link: { href: '#limits', label: 'Warum wir bewusst nicht von Antifouling sprechen' }
    },
    en: {
      src: '/videos/water-application-en.mp4',
      duration: 50.017,
      poster: '/videos/posters/water-application-en.webp',
      eyebrow: 'MARITIME APPLICATION',
      title: 'Practical observation on marine surfaces',
      intro: 'The webcut shows deposits and marine growth on hull and drive areas, water-jet and brush cleaning, and a final treated-versus-untreated surface comparison. It does not show the coating application.',
      whatYouSee: ['deposits and marine growth', 'water-jet cleaning', 'manual brush cleaning', 'treated-versus-untreated comparison'],
      interpretation: 'The footage provides practical observations on surface cleaning and behaviour in a marine environment.',
      limitation: 'The footage does not demonstrate universal fouling prevention, a generic antifouling effect, or guaranteed fuel-consumption or speed improvements.',
      evidence: 'B',
      evidenceLabel: 'B · practical application documentation',
      chapters: [{ time: 0, label: 'Hull surface condition' }, { time: 10.01, label: 'Marine growth' }, { time: 19.987, label: 'Drive-area condition' }, { time: 29.997, label: 'Water-jet cleaning' }, { time: 40.007, label: 'Treated / untreated comparison' }],
      link: { href: '#limits', label: 'Why we deliberately do not call this antifouling' }
    }
  }
};

const surfaceVideos: Record<Locale, VideoItem[]> = {
  de: [
    {
      src: '/videos/surface-facade-application.mp4',
      duration: 32,
      poster: '/videos/posters/surface-facade-application.webp',
      eyebrow: 'IN ANWENDUNG',
      title: 'Reale Applikation auf einer Fassadenoberfläche',
      intro: 'Die Aufnahme zeigt die Reinigung und Behandlung einer realen Fassadenfläche. Sichtbar sind der verschmutzte Untergrund, die manuelle Bearbeitung und der Arbeitsfortschritt an der Gebäudefassade.',
      whatYouSee: ['verschmutzte Fassadenfläche', 'manuelle Oberflächenreinigung', 'Bearbeitung einzelner Fassadenfelder', 'Arbeitsfortschritt am Gebäude'],
      interpretation: 'Das Video dokumentiert einen realen Applikationsablauf und ergänzt die technische Systembeschreibung um praktische Anwendungserfahrung.',
      limitation: 'Aus der Aufnahme allein lassen sich keine universelle Lebensdauer, UV-Beständigkeit oder Schutzwirkung für andere Untergründe ableiten.',
      evidence: 'B',
      evidenceLabel: 'B · dokumentierte Anwendung'
    },
    {
      src: '/videos/surface-application-de.mp4',
      duration: 74.909,
      poster: '/videos/posters/surface-application-de.webp',
      eyebrow: 'IN ANWENDUNG',
      title: 'Reinigung und Beschichtung eines Rollladens',
      intro: 'Der Webcut zeigt die Ausgangssituation am Rollladen, die maschinelle Vorreinigung, die Materialvorbereitung und den manuellen Auftrag. Ein separates Endergebnis nach der Trocknung wird nicht gezeigt.',
      whatYouSee: ['Ausgangssituation am Rollladen', 'maschinelle Vorreinigung', 'Material- und Werkzeugvorbereitung', 'manueller Beschichtungsauftrag', 'eingeblendete Trocknungszeiten'],
      interpretation: 'Die Aufnahme dokumentiert Vorbereitung und Auftrag in diesem konkreten Anwendungsfall.',
      limitation: 'Die Aufnahme dokumentiert den konkreten Anwendungsfall und stellt keine allgemeine Leistungs- oder Lebensdauergarantie dar.',
      evidence: 'B',
      evidenceLabel: 'B · dokumentierte Anwendung',
      chapters: [{ time: 0, label: 'Ausgangssituation' }, { time: 9.977, label: 'Vorreinigung' }, { time: 39.94, label: 'Materialvorbereitung' }, { time: 47.25, label: 'Beschichtungsauftrag' }, { time: 64.932, label: 'Trocknungszeiten' }]
    }
  ],
  en: [
    {
      src: '/videos/surface-facade-application.mp4',
      duration: 32,
      poster: '/videos/posters/surface-facade-application.webp',
      eyebrow: 'APPLICATION IN PRACTICE',
      title: 'Real application on a facade surface',
      intro: 'The footage shows cleaning and treatment work on a real facade surface. The soiled substrate, manual surface work and progress across the building facade are visible.',
      whatYouSee: ['soiled facade surface', 'manual surface cleaning', 'work on individual facade panels', 'progress across the building'],
      interpretation: 'The video documents a real application workflow and complements the technical system description with practical experience.',
      limitation: 'The footage alone does not establish universal service life, UV resistance or protection performance for other substrates.',
      evidence: 'B',
      evidenceLabel: 'B · documented application'
    },
    {
      src: '/videos/surface-application-en.mp4',
      duration: 74.909,
      poster: '/videos/posters/surface-application-en.webp',
      eyebrow: 'APPLICATION IN PRACTICE',
      title: 'Cleaning and coating a shutter',
      intro: 'The webcut shows the initial shutter condition, mechanical pre-cleaning, material preparation and manual application. It does not show a separate final result after drying.',
      whatYouSee: ['initial shutter condition', 'mechanical pre-cleaning', 'material and tool preparation', 'manual coating application', 'displayed drying times'],
      interpretation: 'The footage documents preparation and application in this specific case.',
      limitation: 'The footage documents the specific application and does not constitute a general performance or service-life guarantee.',
      evidence: 'B',
      evidenceLabel: 'B · documented application',
      chapters: [{ time: 0, label: 'Initial situation' }, { time: 9.977, label: 'Pre-cleaning' }, { time: 39.94, label: 'Material preparation' }, { time: 47.25, label: 'Coating application' }, { time: 64.932, label: 'Drying times' }]
    }
  ]
};

const fireVideos: Record<Locale, VideoItem[]> = {
  de: [
    {
      src: '/videos/fire-test-series.mp4',
      duration: 46.013,
      poster: '/videos/posters/fire-test-series.webp',
      eyebrow: 'INTERNE ENTWICKLUNGS- UND VERGLEICHSVERSUCHE',
      title: 'Direkte Flammenbelastung unterschiedlicher Prüfaufbauten',
      intro: 'Der Webcut zeigt drei interne Versuchssequenzen mit Karton, Holz und Stroh. In allen drei Sequenzen ist die direkte Flammenbelastung sichtbar; die letzte Sequenz endet bei fortgesetzter Belastung.',
      whatYouSee: ['Karton unter direkter Flammenbelastung', 'Holz unter direkter Flammenbelastung', 'Stroh unter direkter Flammenbelastung'],
      interpretation: 'Die Versuche dienen der technischen Orientierung und der Vorbereitung definierter Prüfaufbauten. Sie dokumentieren reale Entwicklungsarbeit, ersetzen aber keine externe Brandklassifizierung.',
      limitation: 'Die Ergebnisse gelten ausschließlich für die jeweils gezeigten Aufbauten und dürfen nicht auf andere Substrate, Schichtdicken oder Systeme übertragen werden.',
      evidence: 'B',
      evidenceLabel: 'B · intern dokumentiert',
      chapters: [{ time: 0, label: 'Karton unter Flammenbelastung' }, { time: 10.01, label: 'Holz unter Flammenbelastung' }, { time: 22.189, label: 'Stroh unter Flammenbelastung' }]
    },
    {
      src: '/videos/fire-comparison-test.mp4',
      duration: 25,
      poster: '/videos/posters/fire-comparison-test.webp',
      eyebrow: 'INTERNE ENTWICKLUNGS- UND VERGLEICHSVERSUCHE',
      title: 'Interner Vergleichsversuch unter Flammenbelastung',
      intro: 'Die Aufnahme zeigt einen internen Vergleichsaufbau unter direkter Flammenbelastung. Dokumentiert werden die sichtbare Reaktion während des Versuchs und der Zustand des gezeigten Prüfkörpers.',
      whatYouSee: ['definierter interner Versuchsaufbau', 'direkte Flammenbelastung', 'sichtbare Reaktion des Prüfkörpers'],
      interpretation: 'Der Versuch unterstützt die technische Orientierung innerhalb der Entwicklungsarbeit.',
      limitation: 'Keine externe Klassifizierung; die Beobachtungen gelten nur für den gezeigten Versuchsaufbau.',
      evidence: 'B',
      evidenceLabel: 'B · interner Entwicklungsversuch'
    },
    {
      src: '/videos/fire-wood-test.mp4',
      duration: 120.721,
      poster: '/videos/posters/fire-wood-test.webp',
      eyebrow: 'INTERNE ENTWICKLUNGS- UND VERGLEICHSVERSUCHE',
      title: 'Interner Beflammungsversuch auf Holz',
      intro: 'Der verlängerte Webcut zeigt den Holzaufbau während einer ersten Brandphase, den sichtbaren Zustand ohne Flamme, eine zweite Brennerbelastung und eine abschließende Detailansicht der beanspruchten Oberfläche.',
      whatYouSee: ['erste Brandphase am Holzaufbau', 'Zustand ohne sichtbare Flamme', 'zweite direkte Brennerbelastung', 'Detailansicht nach der zweiten Belastung'],
      interpretation: 'Die Aufnahme dokumentiert einen einzelnen internen Entwicklungsaufbau unter den gezeigten Bedingungen.',
      limitation: 'Der Versuch stellt keine allgemeine Brandklassifizierung für Holz oder andere Holzsysteme dar.',
      evidence: 'B',
      evidenceLabel: 'B · intern dokumentiert',
      chapters: [{ time: 0, label: 'Erste Brandphase' }, { time: 46.046, label: 'Zustand ohne sichtbare Flamme' }, { time: 50, label: 'Zweite Brennerbelastung' }, { time: 110, label: 'Detailansicht danach' }]
    }
  ],
  en: [
    {
      src: '/videos/fire-test-series.mp4',
      duration: 46.013,
      poster: '/videos/posters/fire-test-series.webp',
      eyebrow: 'INTERNAL DEVELOPMENT AND COMPARATIVE TESTS',
      title: 'Direct flame exposure of different test assemblies',
      intro: 'The webcut shows three internal test sequences using cardboard, wood and straw. Direct flame exposure remains visible in all three sequences, and the final sequence ends while exposure is still in progress.',
      whatYouSee: ['cardboard under direct flame exposure', 'wood under direct flame exposure', 'straw under direct flame exposure'],
      interpretation: 'These tests support technical orientation and the preparation of defined validation setups. They document real development work but do not replace an external fire classification.',
      limitation: 'The observations apply only to the specific assemblies shown and must not be transferred to other substrates, coating thicknesses or systems.',
      evidence: 'B',
      evidenceLabel: 'B · internally documented',
      chapters: [{ time: 0, label: 'Cardboard under flame exposure' }, { time: 10.01, label: 'Wood under flame exposure' }, { time: 22.189, label: 'Straw under flame exposure' }]
    },
    {
      src: '/videos/fire-comparison-test.mp4',
      duration: 25,
      poster: '/videos/posters/fire-comparison-test.webp',
      eyebrow: 'INTERNAL DEVELOPMENT AND COMPARATIVE TESTS',
      title: 'Internal comparative test under flame exposure',
      intro: 'The footage shows an internal comparative setup under direct flame exposure. It documents the visible response during the test and the condition of the specimen shown.',
      whatYouSee: ['defined internal test setup', 'direct flame exposure', 'visible response of the specimen'],
      interpretation: 'The test supports technical orientation within the development process.',
      limitation: 'This is not an external classification; observations apply only to the test setup shown.',
      evidence: 'B',
      evidenceLabel: 'B · internal development test'
    },
    {
      src: '/videos/fire-wood-test.mp4',
      duration: 120.721,
      poster: '/videos/posters/fire-wood-test.webp',
      eyebrow: 'INTERNAL DEVELOPMENT AND COMPARATIVE TESTS',
      title: 'Internal flame-exposure test on wood',
      intro: 'The extended webcut shows the wood assembly during an initial burning phase, its visible condition without flame, a second direct torch exposure and a final detail view of the exposed surface.',
      whatYouSee: ['initial burning phase on the wood assembly', 'condition without visible flame', 'second direct torch exposure', 'detail view after the second exposure'],
      interpretation: 'The footage documents one internal development assembly under the conditions shown.',
      limitation: 'This test does not represent a general fire classification for wood or other timber systems.',
      evidence: 'B',
      evidenceLabel: 'B · internally documented',
      chapters: [{ time: 0, label: 'Initial burning phase' }, { time: 46.046, label: 'Condition without visible flame' }, { time: 50, label: 'Second torch exposure' }, { time: 110, label: 'Detail view afterwards' }]
    }
  ]
};

function ContextualVideo({ video, locale }: { video: VideoItem; locale: Locale }) {
  return (
    <article className="video-context">
      <header className="video-context__header">
        <span className="section-heading__eyebrow">{video.eyebrow}</span>
        <h2>{video.title}</h2>
        <p>{video.intro}</p>
      </header>
      <VideoMedia
        src={video.src}
        duration={video.duration}
        poster={video.poster}
        title={video.title}
        playLabel={`${locale === 'de' ? 'Video abspielen' : 'Play video'}: ${video.title}`}
        chapters={video.chapters}
        chaptersLabel={locale === 'de' ? 'Videokapitel' : 'Video chapters'}
        showBrandMark={false}
      />
      <div className="video-context__details">
        <span className={`video-evidence-label video-evidence-label--${video.evidence.toLowerCase()}`}>{video.evidenceLabel}</span>
        <section className="video-context__observations">
          <h3>{locale === 'de' ? 'Was Sie sehen' : 'What you see'}</h3>
          <ul>{video.whatYouSee.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        {video.interpretation ? (
          <aside className="video-context__interpretation">
            <h3>{locale === 'de' ? 'Einordnung' : 'Interpretation'}</h3>
            <p>{video.interpretation}</p>
          </aside>
        ) : null}
        <aside className="video-context__limitation">
          <h3>{locale === 'de' ? 'Aussagegrenze' : 'Limitation'}</h3>
          <p>{video.limitation}</p>
        </aside>
        {video.link ? <a className="video-context__link" href={video.link.href}>{video.link.label}</a> : null}
      </div>
    </article>
  );
}

function VideoPlaylist({ items, locale }: { items: VideoItem[]; locale: Locale }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = items[selectedIndex];
  return (
    <div className="video-playlist">
      <ContextualVideo key={selected.src} video={selected} locale={locale} />
      <div className="video-playlist__items" aria-label={locale === 'de' ? 'Videos auswählen' : 'Choose video'}>
        {items.map((item, index) => (
          <button key={item.src} type="button" className="video-playlist__item" aria-pressed={index === selectedIndex} onClick={() => setSelectedIndex(index)}>
            <Image src={item.poster} alt="" width={320} height={180} sizes="(max-width: 600px) 50vw, 320px" />
            <span>{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function ApplicationVideoSection({ locale, kind }: { locale: Locale; kind: ApplicationKind }) {
  const video = applicationVideos[kind][locale];
  if (!video) return null;
  return (
    <section className="section video-section">
      <div className="container">
        <ContextualVideo video={video} locale={locale} />
      </div>
    </section>
  );
}

export function SurfaceVideoSection({ locale }: { locale: Locale }) {
  return (
    <section className="section video-section">
      <div className="container">
        <VideoPlaylist items={surfaceVideos[locale]} locale={locale} />
      </div>
    </section>
  );
}

export function FireEvidenceVideoSection({ locale }: { locale: Locale }) {
  return (
    <section className="section section--surface video-section">
      <div className="container">
        <VideoPlaylist items={fireVideos[locale]} locale={locale} />
      </div>
    </section>
  );
}

export function ThermoFireDevelopmentVideoSection({ locale }: { locale: Locale }) {
  const video: VideoItem = {
    src: '/videos/thermo-fire-development.mp4',
    duration: 39.99,
    poster: '/videos/posters/thermo-fire-development.webp',
    eyebrow: locale === 'de' ? 'ENTWICKLUNGSROUTE' : 'DEVELOPMENT ROUTE',
    title: locale === 'de' ? 'Kombinierter Thermo-/Fire-Aufbau unter Flammenbelastung' : 'Combined Thermo / Fire development assembly under flame exposure',
    intro: locale === 'de'
      ? 'Dieser interne Entwicklungsversuch zeigt einen kombinierten Aufbau aus thermischer Funktionsschicht und zusätzlicher Brandschutzroute unter direkter Flammenbelastung. Ziel solcher Versuche ist zunächst die technische Orientierung für einen später exakt definierten Prüfaufbau.'
      : 'This internal development test shows a combined assembly comprising a thermal functional layer and an additional fire-protection route under direct flame exposure. Such tests initially provide technical orientation for a precisely defined future validation setup.',
    whatYouSee: locale === 'de'
      ? ['kombinierter Aufbau', 'direkte thermische Belastung', 'Verhalten während der Beflammung', 'Zustand nach Belastung']
      : ['combined assembly', 'direct thermal exposure', 'behaviour during flame exposure', 'condition after exposure'],
    interpretation: locale === 'de'
      ? 'Einzel- und Entwicklungsversuche helfen bei der Systemdefinition, ersetzen aber nicht den vollständigen Prüf- und Klassifizierungsweg.'
      : 'Individual and development tests support system definition but do not replace the complete testing and classification pathway.',
    limitation: locale === 'de'
      ? 'Aus diesem Versuch ergibt sich keine Euroklasse und keine formale Brandklassifizierung des kombinierten Systems.'
      : 'This test does not establish a Euroclass or formal fire classification for the combined system.',
    evidence: 'BD',
    evidenceLabel: locale === 'de' ? 'B/D · interner Entwicklungsversuch' : 'B/D · internal development test',
    chapters: locale === 'de'
      ? [{ time: 0, label: 'Direkte Flammenbelastung' }, { time: 14.998, label: 'Untersuchung nach Belastung' }]
      : [{ time: 0, label: 'Direct flame exposure' }, { time: 14.998, label: 'Inspection after exposure' }],
    link: { href: '#validation-path', label: locale === 'de' ? 'Zum vorgesehenen Prüfpfad' : 'View the intended validation pathway' }
  };
  return (
    <section className="section video-section">
      <div className="container">
        <ContextualVideo video={video} locale={locale} />
      </div>
    </section>
  );
}