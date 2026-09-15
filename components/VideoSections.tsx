'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Locale } from '@/lib/i18n';
import { EvidenceBadge } from './EvidenceBadge';
import { VideoMedia } from './VideoMedia';

type VideoItem = {
  src: string;
  poster: string;
  title: string;
  description: string;
  evidence?: 'B' | 'BD';
};

type ApplicationKind = 'thermo' | 'floor' | 'water';

const applicationVideos: Record<ApplicationKind, Record<Locale, VideoItem | null>> = {
  thermo: {
    de: {
      src: '/videos/thermo-application.mp4',
      poster: '/videos/posters/thermo-application.webp',
      title: 'PURE THERMO in Anwendung',
      description: 'Reale Anwendungs- und Entwicklungsaufnahmen. Systemwirkung und Freigabe hängen von Untergrund, Aufbau und Anwendung ab.'
    },
    en: {
      src: '/videos/thermo-application.mp4',
      poster: '/videos/posters/thermo-application.webp',
      title: 'PURE THERMO in application',
      description: 'Real application and development footage. System performance and release depend on the substrate, build-up and application.'
    }
  },
  floor: {
    de: null,
    en: {
      src: '/videos/floor-application-en.mp4',
      poster: '/videos/posters/floor-application-en.webp',
      title: 'PURE FLOOR PROTECT in a sports hall',
      description: 'Real footage of a sports hall, a contaminated surface and cleaning work. No durability or approval statement is derived from these scenes.'
    }
  },
  water: {
    de: {
      src: '/videos/water-application-de.mp4',
      poster: '/videos/posters/water-application-de.webp',
      title: 'PURE WATER PROTECT in maritimer Anwendung',
      description: 'Praxisaufnahmen aus maritimen Anwendungen. Gezeigte Beobachtungen gelten für die jeweiligen dokumentierten Anwendungen; Leistungs- und Umweltclaims werden separat evidenzbasiert bewertet.'
    },
    en: {
      src: '/videos/water-application-en.mp4',
      poster: '/videos/posters/water-application-en.webp',
      title: 'PURE WATER PROTECT in marine application',
      description: 'Practical footage from marine applications. Observations apply to the documented applications shown; performance and environmental claims are assessed separately against evidence.'
    }
  }
};

const surfaceVideos: Record<Locale, VideoItem[]> = {
  de: [
    {
      src: '/videos/surface-facade-application.mp4',
      poster: '/videos/posters/surface-facade-application.webp',
      title: 'Fassadenbeschichtung',
      description: 'Reale Applikationsaufnahme einer Fassadenoberfläche.',
      evidence: 'B'
    },
    {
      src: '/videos/surface-application-de.mp4',
      poster: '/videos/posters/surface-application-de.webp',
      title: 'Vorbereitung und Applikation',
      description: 'Reale Aufnahmen von Ausgangszustand, Reinigung, Vorbereitung und Applikation.',
      evidence: 'B'
    }
  ],
  en: [
    {
      src: '/videos/surface-facade-application.mp4',
      poster: '/videos/posters/surface-facade-application.webp',
      title: 'Facade coating',
      description: 'Real application footage on a facade surface.',
      evidence: 'B'
    },
    {
      src: '/videos/surface-application-en.mp4',
      poster: '/videos/posters/surface-application-en.webp',
      title: 'Preparation and application',
      description: 'Real footage showing initial condition, cleaning, preparation and application.',
      evidence: 'B'
    }
  ]
};

const fireVideos: Record<Locale, VideoItem[]> = {
  de: [
    {
      src: '/videos/fire-test-series.mp4',
      poster: '/videos/posters/fire-test-series.webp',
      title: 'Interne Testserie',
      description: 'Interne Entwicklungs- und Vergleichsversuche. Die gezeigten Versuche dokumentieren einzelne Prüf- und Entwicklungsaufbauten und ersetzen keine externe Brandklassifizierung.',
      evidence: 'B'
    },
    {
      src: '/videos/fire-comparison-test.mp4',
      poster: '/videos/posters/fire-comparison-test.webp',
      title: 'Vergleichsversuch',
      description: 'Interner Entwicklungsversuch. Die Beobachtungen gelten ausschließlich für den gezeigten Aufbau.',
      evidence: 'B'
    },
    {
      src: '/videos/fire-wood-test.mp4',
      poster: '/videos/posters/fire-wood-test.webp',
      title: 'Beflammung auf Holz',
      description: 'Interner Versuchsaufbau auf Holz. Ergebnisse gelten ausschließlich für den gezeigten Aufbau.',
      evidence: 'B'
    }
  ],
  en: [
    {
      src: '/videos/fire-test-series.mp4',
      poster: '/videos/posters/fire-test-series.webp',
      title: 'Internal test series',
      description: 'Internal development and comparative tests. The footage documents individual test and development setups and does not replace an external fire classification.',
      evidence: 'B'
    },
    {
      src: '/videos/fire-comparison-test.mp4',
      poster: '/videos/posters/fire-comparison-test.webp',
      title: 'Comparative test',
      description: 'Internal development test. Observations apply exclusively to the setup shown.',
      evidence: 'B'
    },
    {
      src: '/videos/fire-wood-test.mp4',
      poster: '/videos/posters/fire-wood-test.webp',
      title: 'Flame exposure on timber',
      description: 'Internal test setup on timber. Results apply exclusively to the setup shown.',
      evidence: 'B'
    }
  ]
};

function VideoBadge({ evidence, locale }: { evidence?: VideoItem['evidence']; locale: Locale }) {
  if (evidence === 'B') return <EvidenceBadge evidenceClass="B" locale={locale} size="sm" />;
  if (evidence === 'BD') return <span className="video-evidence-label">B/D · {locale === 'de' ? 'interner Entwicklungsversuch' : 'internal development test'}</span>;
  return null;
}

function VideoPlaylist({ items, locale }: { items: VideoItem[]; locale: Locale }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = items[selectedIndex];
  return (
    <div className="video-playlist">
      <VideoMedia
        key={selected.src}
        src={selected.src}
        poster={selected.poster}
        title={selected.title}
        description={selected.description}
        playLabel={`${locale === 'de' ? 'Video abspielen' : 'Play video'}: ${selected.title}`}
        badge={<VideoBadge evidence={selected.evidence} locale={locale} />}
        showBrandMark={false}
      />
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
        <div className="section-heading section-heading--narrow">
          <span className="section-heading__eyebrow">{locale === 'de' ? 'In Anwendung' : 'Application in practice'}</span>
          <h2>{video.title}</h2>
        </div>
        <VideoMedia {...video} playLabel={`${locale === 'de' ? 'Video abspielen' : 'Play video'}: ${video.title}`} showBrandMark={false} />
      </div>
    </section>
  );
}

export function SurfaceVideoSection({ locale }: { locale: Locale }) {
  return (
    <section className="section video-section">
      <div className="container">
        <div className="section-heading section-heading--narrow"><span className="section-heading__eyebrow">{locale === 'de' ? 'In Anwendung' : 'Application in practice'}</span><h2>{locale === 'de' ? 'Reale Oberflächenarbeit.' : 'Real surface work.'}</h2></div>
        <VideoPlaylist items={surfaceVideos[locale]} locale={locale} />
      </div>
    </section>
  );
}

export function FireEvidenceVideoSection({ locale }: { locale: Locale }) {
  return (
    <section className="section section--surface video-section">
      <div className="container">
        <div className="section-heading section-heading--narrow"><span className="section-heading__eyebrow">{locale === 'de' ? 'Interne Entwicklungs- und Vergleichsversuche' : 'Internal development and comparative tests'}</span><h2>{locale === 'de' ? 'Reale Versuchsaufbauten, klar begrenzte Aussage.' : 'Real test setups with a clearly limited scope.'}</h2></div>
        <VideoPlaylist items={fireVideos[locale]} locale={locale} />
      </div>
    </section>
  );
}

export function ThermoFireDevelopmentVideoSection({ locale }: { locale: Locale }) {
  const video: VideoItem = {
    src: '/videos/thermo-fire-development.mp4',
    poster: '/videos/posters/thermo-fire-development.webp',
    title: locale === 'de' ? 'Kombinierter Entwicklungsaufbau' : 'Combined development build-up',
    description: locale === 'de'
      ? 'Interner Entwicklungsversuch eines kombinierten Systemaufbaus. Für PURE THERMO + PURE FIRE liegt daraus keine formale Kombinationsklasse vor.'
      : 'Internal development test of a combined system build-up. This does not establish a formal combined classification for PURE THERMO + PURE FIRE.',
    evidence: 'BD'
  };
  return (
    <section className="section video-section">
      <div className="container">
        <div className="section-heading section-heading--narrow"><span className="section-heading__eyebrow">{locale === 'de' ? 'Interne Entwicklungs- und Vergleichsversuche' : 'Internal development and comparative tests'}</span><h2>{video.title}</h2></div>
        <VideoMedia {...video} playLabel={`${locale === 'de' ? 'Video abspielen' : 'Play video'}: ${video.title}`} badge={<VideoBadge evidence="BD" locale={locale} />} showBrandMark={false} />
      </div>
    </section>
  );
}