'use client';

import { useRef, useState, type CSSProperties } from 'react';
import Image from 'next/image';

type BrandMarkPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export type VideoMediaProps = {
  src: string;
  poster: string;
  title: string;
  playLabel: string;
  chapters?: ReadonlyArray<{ time: number; label: string }>;
  chaptersLabel?: string;
  brandMarkSrc?: string;
  brandMarkPosition?: BrandMarkPosition;
  brandMarkOpacity?: number;
  showBrandMark?: boolean;
};

type BrandMarkStyle = CSSProperties & { '--brand-mark-opacity': number };

export function VideoMedia({
  src,
  poster,
  title,
  playLabel,
  chapters,
  chaptersLabel,
  brandMarkSrc,
  brandMarkPosition = 'top-right',
  brandMarkOpacity = 0.8,
  showBrandMark = false
}: VideoMediaProps) {
  const [activated, setActivated] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activate = () => {
    setActivated(true);
    requestAnimationFrame(() => void videoRef.current?.play());
  };

  const seekTo = (time: number) => {
    if (!activated) setActivated(true);
    requestAnimationFrame(() => {
      if (!videoRef.current) return;
      videoRef.current.currentTime = time;
      void videoRef.current.play();
    });
  };

  return (
    <figure className="video-media">
      <div className="video-media__frame">
        {activated ? (
          <video ref={videoRef} className="video-media__video" controls playsInline preload="metadata" poster={poster} aria-label={title}>
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <button className="video-media__trigger" type="button" onClick={activate} aria-label={playLabel}>
            <Image className="video-media__poster" src={poster} alt="" fill sizes="(max-width: 1024px) 100vw, 980px" />
            <span className="video-media__play" aria-hidden="true" />
            <span className="video-media__play-label">{playLabel}</span>
          </button>
        )}
        {showBrandMark && brandMarkSrc ? (
          <Image
            className={`video-media__brand video-media__brand--${brandMarkPosition}`}
            src={brandMarkSrc}
            alt=""
            width={130}
            height={65}
            style={{ '--brand-mark-opacity': brandMarkOpacity } as BrandMarkStyle}
          />
        ) : null}
      </div>
      {chapters?.length ? (
        <figcaption className="video-media__chapters" aria-label={chaptersLabel}>
          {chapters.map((chapter) => (
            <button key={`${chapter.time}-${chapter.label}`} type="button" onClick={() => seekTo(chapter.time)}>
              <time dateTime={`PT${chapter.time}S`}>{`${Math.floor(chapter.time / 60).toString().padStart(2, '0')}:${(chapter.time % 60).toString().padStart(2, '0')}`}</time>
              <span>{chapter.label}</span>
            </button>
          ))}
        </figcaption>
      ) : null}
    </figure>
  );
}