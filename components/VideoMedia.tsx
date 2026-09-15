'use client';

import { useRef, useState, type CSSProperties, type ReactNode } from 'react';
import Image from 'next/image';

type BrandMarkPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export type VideoMediaProps = {
  src: string;
  poster: string;
  title: string;
  description: string;
  playLabel: string;
  badge?: ReactNode;
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
  description,
  playLabel,
  badge,
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
      <figcaption className="video-media__caption">
        <span>{title}</span>
        {badge}
        <p>{description}</p>
      </figcaption>
    </figure>
  );
}