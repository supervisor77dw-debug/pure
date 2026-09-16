'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Locale } from '@/lib/i18n';
import { VideoMedia } from './VideoMedia';

type VideoItem = {
  src: string;
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
      poster: '/videos/posters/thermo-application.webp',
      eyebrow: 'IN ANWENDUNG',
      title: 'Vom Material zur applizierten Funktionsschicht',
      intro: 'Das Video zeigt historische Entwicklungs- und Applikationsaufnahmen von PURE-THERMO-Beschichtungen. Sichtbar werden Materialauftrag, unterschiedliche Oberflächen und frühe Demonstratoren.',
      whatYouSee: ['Verarbeitung und Materialauftrag', 'unterschiedliche Oberflächen', 'frühe technische Demonstratoren'],
      interpretation: 'Die Aufnahmen zeigen reale Entwicklungs- und Anwendungspraxis. Konkrete thermische Leistungswerte ergeben sich daraus jedoch nicht automatisch.',
      limitation: 'Das Video belegt keine pauschale Energieeinsparung, keine generelle Schimmelvermeidung, keine universelle Dämmwirkung und keine allgemeine Brandklasse.',
      evidence: 'B',
      evidenceLabel: 'B · interne Entwicklungsdokumentation'
    },
    en: {
      src: '/videos/thermo-application.mp4',
      poster: '/videos/posters/thermo-application.webp',
      eyebrow: 'APPLICATION IN PRACTICE',
      title: 'From material to applied functional layer',
      intro: 'The footage shows historical development and application work with PURE THERMO coatings, including material application, different surfaces and early demonstrators.',
      whatYouSee: ['processing and material application', 'different surfaces', 'early technical demonstrators'],
      interpretation: 'The footage documents real application and development work. It does not by itself establish specific thermal performance values.',
      limitation: 'The video does not demonstrate generic energy savings, universal mould prevention, universal insulation performance or a general fire classification.',
      evidence: 'B',
      evidenceLabel: 'B · internal development documentation'
    }
  },
  floor: {
    de: null,
    en: {
      src: '/videos/floor-application-en.mp4',
      poster: '/videos/posters/floor-application-en.webp',
      eyebrow: 'APPLICATION IN PRACTICE',
      title: 'Sports-floor treatment workflow',
      intro: 'This footage documents a practical floor-treatment workflow in a sports environment. It shows the initial surface condition, preparation and cleaning, application and the resulting appearance.',
      whatYouSee: ['initial surface condition', 'preparation and cleaning', 'application', 'resulting appearance'],
      interpretation: 'The footage demonstrates a real application workflow and complements the technical description of the floor system.',
      limitation: 'The video is not a universal durability, slip-resistance or regulatory certification.',
      evidence: 'B',
      evidenceLabel: 'B · documented application',
      chapters: [{ time: 0, label: 'Initial condition' }, { time: 12, label: 'Preparation' }, { time: 24, label: 'Application' }, { time: 36, label: 'Result' }]
    }
  },
  water: {
    de: {
      src: '/videos/water-application-de.mp4',
      poster: '/videos/posters/water-application-de.webp',
      eyebrow: 'MARITIME PRAXIS',
      title: 'Praxisbeobachtung an maritimen Oberflächen',
      intro: 'Das Video zeigt reale maritime Anwendungs- und Reinigungssituationen. Im Mittelpunkt steht die Beobachtung, wie behandelte Oberflächen unter realen Einsatzbedingungen gereinigt und bewertet werden können.',
      whatYouSee: ['Rumpf- und Unterwasserbereiche', 'Ablagerungen beziehungsweise Bewuchs', 'mechanische beziehungsweise wasserbasierte Reinigung', 'Zustand der behandelten Oberflächen'],
      interpretation: 'Die Aufnahmen liefern praktische Beobachtungen zur Oberflächenreinigung und zum Verhalten im maritimen Umfeld.',
      limitation: 'Die Aufnahmen belegen keine universelle Bewuchsfreiheit, keine generelle Antifouling-Wirkung und keine garantierte Kraftstoff- oder Geschwindigkeitsverbesserung.',
      evidence: 'B',
      evidenceLabel: 'B · Praxis- und Anwendungsdokumentation',
      chapters: [{ time: 0, label: 'Maritimer Kontext' }, { time: 10, label: 'Oberflächenzustand' }, { time: 20, label: 'Reinigung' }, { time: 30, label: 'Anwendung' }, { time: 40, label: 'Beobachtung' }],
      link: { href: '#limits', label: 'Warum wir bewusst nicht von Antifouling sprechen' }
    },
    en: {
      src: '/videos/water-application-en.mp4',
      poster: '/videos/posters/water-application-en.webp',
      eyebrow: 'MARITIME APPLICATION',
      title: 'Practical observation on marine surfaces',
      intro: 'The footage shows real marine application and cleaning situations. The focus is on how treated surfaces can be cleaned and observed under practical operating conditions.',
      whatYouSee: ['hull and underwater areas', 'deposits and marine growth', 'cleaning processes', 'condition of treated surfaces'],
      interpretation: 'The footage provides practical observations on surface cleaning and behaviour in a marine environment.',
      limitation: 'The footage does not demonstrate universal fouling prevention, a generic antifouling effect, or guaranteed fuel-consumption or speed improvements.',
      evidence: 'B',
      evidenceLabel: 'B · practical application documentation',
      chapters: [{ time: 0, label: 'Marine context' }, { time: 10, label: 'Surface condition' }, { time: 20, label: 'Cleaning' }, { time: 30, label: 'Application' }, { time: 40, label: 'Observation' }],
      link: { href: '#limits', label: 'Why we deliberately do not call this antifouling' }
    }
  }
};

const surfaceVideos: Record<Locale, VideoItem[]> = {
  de: [
    {
      src: '/videos/surface-facade-application.mp4',
      poster: '/videos/posters/surface-facade-application.webp',
      eyebrow: 'IN ANWENDUNG',
      title: 'Reale Applikation auf einer Fassadenoberfläche',
      intro: 'Die Aufnahme zeigt eine praktische Oberflächenapplikation im Fassadenbereich. Entscheidend sind dabei nicht nur der Materialauftrag, sondern auch Untergrundzustand, Reinigung, Vorbereitung und gewünschtes Oberflächenbild.',
      whatYouSee: ['Zustand des Ausgangsuntergrunds', 'Vorbereitung der Oberfläche', 'Materialauftrag', 'optisches Ergebnis der Anwendung'],
      interpretation: 'Das Video dokumentiert einen realen Applikationsablauf und ergänzt die technische Systembeschreibung um praktische Anwendungserfahrung.',
      limitation: 'Aus der Aufnahme allein lassen sich keine universelle Lebensdauer, UV-Beständigkeit oder Schutzwirkung für andere Untergründe ableiten.',
      evidence: 'B',
      evidenceLabel: 'B · dokumentierte Anwendung'
    },
    {
      src: '/videos/surface-application-de.mp4',
      poster: '/videos/posters/surface-application-de.webp',
      eyebrow: 'IN ANWENDUNG',
      title: 'Vom Ausgangszustand zum sichtbaren Ergebnis',
      intro: 'Das Video zeigt einen vollständigen praktischen Ablauf von der Ausgangsoberfläche über Reinigung und Vorbereitung bis zur Beschichtung und dem sichtbaren Ergebnis.',
      whatYouSee: ['Ausgangszustand', 'Reinigung und Vorbereitung', 'Applikation', 'sichtbares Ergebnis'],
      interpretation: 'Die Aufnahme dokumentiert den konkreten Prozess und macht die einzelnen Arbeitsschritte nachvollziehbar.',
      limitation: 'Die Aufnahme dokumentiert den konkreten Anwendungsfall und stellt keine allgemeine Leistungs- oder Lebensdauergarantie dar.',
      evidence: 'B',
      evidenceLabel: 'B · dokumentierte Anwendung',
      chapters: [{ time: 0, label: 'Ausgangszustand' }, { time: 15, label: 'Reinigung' }, { time: 30, label: 'Applikation' }, { time: 50, label: 'Ergebnis' }]
    }
  ],
  en: [
    {
      src: '/videos/surface-facade-application.mp4',
      poster: '/videos/posters/surface-facade-application.webp',
      eyebrow: 'APPLICATION IN PRACTICE',
      title: 'Real application on a facade surface',
      intro: 'The footage shows a practical application on a facade surface. The process depends not only on material application, but also on substrate condition, cleaning, preparation and the intended surface appearance.',
      whatYouSee: ['initial substrate condition', 'surface preparation', 'material application', 'visual result of the application'],
      interpretation: 'The video documents a real application workflow and complements the technical system description with practical experience.',
      limitation: 'The footage alone does not establish universal service life, UV resistance or protection performance for other substrates.',
      evidence: 'B',
      evidenceLabel: 'B · documented application'
    },
    {
      src: '/videos/surface-application-en.mp4',
      poster: '/videos/posters/surface-application-en.webp',
      eyebrow: 'APPLICATION IN PRACTICE',
      title: 'From initial condition to visible result',
      intro: 'The footage shows a complete practical workflow from the initial surface through cleaning and preparation to coating and the visible result.',
      whatYouSee: ['initial condition', 'cleaning and preparation', 'application', 'visible result'],
      interpretation: 'The footage documents the specific process and makes the individual work stages transparent.',
      limitation: 'The footage documents the specific application and does not constitute a general performance or service-life guarantee.',
      evidence: 'B',
      evidenceLabel: 'B · documented application',
      chapters: [{ time: 0, label: 'Initial condition' }, { time: 15, label: 'Cleaning' }, { time: 30, label: 'Application' }, { time: 50, label: 'Result' }]
    }
  ]
};

const fireVideos: Record<Locale, VideoItem[]> = {
  de: [
    {
      src: '/videos/fire-test-series.mp4',
      poster: '/videos/posters/fire-test-series.webp',
      eyebrow: 'INTERNE ENTWICKLUNGS- UND VERGLEICHSVERSUCHE',
      title: 'Direkte Flammenbelastung unterschiedlicher Prüfaufbauten',
      intro: 'Die Aufnahmen zeigen mehrere interne Entwicklungs- und Vergleichsversuche mit unterschiedlichen Substraten und Prüfaufbauten. Beobachtet wird, wie die jeweiligen beschichteten Oberflächen während und nach direkter Flammenbelastung reagieren.',
      whatYouSee: ['direkte Beflammung definierter Prüfkörper', 'unterschiedliche Materialien und Aufbauvarianten', 'Reaktion der Oberfläche während der Belastung', 'Zustand nach Ende der Beflammung'],
      interpretation: 'Die Versuche dienen der technischen Orientierung und der Vorbereitung definierter Prüfaufbauten. Sie dokumentieren reale Entwicklungsarbeit, ersetzen aber keine externe Brandklassifizierung.',
      limitation: 'Die Ergebnisse gelten ausschließlich für die jeweils gezeigten Aufbauten und dürfen nicht auf andere Substrate, Schichtdicken oder Systeme übertragen werden.',
      evidence: 'B',
      evidenceLabel: 'B · intern dokumentiert',
      chapters: [{ time: 0, label: 'Versuchsaufbau' }, { time: 12, label: 'Flammenbelastung' }, { time: 28, label: 'Oberflächenreaktion' }, { time: 42, label: 'Zustand nach Belastung' }]
    },
    {
      src: '/videos/fire-comparison-test.mp4',
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
      poster: '/videos/posters/fire-wood-test.webp',
      eyebrow: 'INTERNE ENTWICKLUNGS- UND VERGLEICHSVERSUCHE',
      title: 'Interner Beflammungsversuch auf Holz',
      intro: 'Der Versuch zeigt das Verhalten eines beschichteten Holzaufbaus unter direkter Flammenbelastung. Dokumentiert werden die Reaktion der Oberfläche während der Beflammung sowie der Zustand nach Entfernung der Flamme.',
      whatYouSee: ['direkter Flammenkontakt', 'Reaktion des beschichteten Holzaufbaus', 'Verhalten nach Entfernen der Flamme'],
      interpretation: 'Die Aufnahme dokumentiert einen einzelnen internen Entwicklungsaufbau unter den gezeigten Bedingungen.',
      limitation: 'Der Versuch stellt keine allgemeine Brandklassifizierung für Holz oder andere Holzsysteme dar.',
      evidence: 'B',
      evidenceLabel: 'B · intern dokumentiert'
    }
  ],
  en: [
    {
      src: '/videos/fire-test-series.mp4',
      poster: '/videos/posters/fire-test-series.webp',
      eyebrow: 'INTERNAL DEVELOPMENT AND COMPARATIVE TESTS',
      title: 'Direct flame exposure of different test assemblies',
      intro: 'The footage shows several internal development and comparative tests using different substrates and test assemblies. The objective is to observe how the coated surfaces respond during and after direct flame exposure.',
      whatYouSee: ['direct flame exposure of defined test specimens', 'different materials and assembly variants', 'surface response during exposure', 'condition after flame removal'],
      interpretation: 'These tests support technical orientation and the preparation of defined validation setups. They document real development work but do not replace an external fire classification.',
      limitation: 'The observations apply only to the specific assemblies shown and must not be transferred to other substrates, coating thicknesses or systems.',
      evidence: 'B',
      evidenceLabel: 'B · internally documented',
      chapters: [{ time: 0, label: 'Test setup' }, { time: 12, label: 'Flame exposure' }, { time: 28, label: 'Surface response' }, { time: 42, label: 'Condition after exposure' }]
    },
    {
      src: '/videos/fire-comparison-test.mp4',
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
      poster: '/videos/posters/fire-wood-test.webp',
      eyebrow: 'INTERNAL DEVELOPMENT AND COMPARATIVE TESTS',
      title: 'Internal flame-exposure test on wood',
      intro: 'The test shows the behaviour of a coated wood assembly under direct flame exposure. It documents the surface response during exposure and the condition after the flame is removed.',
      whatYouSee: ['direct flame contact', 'response of the coated wood assembly', 'behaviour after flame removal'],
      interpretation: 'The footage documents one internal development assembly under the conditions shown.',
      limitation: 'This test does not represent a general fire classification for wood or other timber systems.',
      evidence: 'B',
      evidenceLabel: 'B · internally documented'
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