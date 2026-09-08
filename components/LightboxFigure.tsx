'use client';

import { useState } from 'react';
import { assetSrc } from '@/lib/assets';

export interface LightboxFigureProps {
  file: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}

// For graphics with dense small print: tap/click to open an enlarged overlay view (mobile-friendly).
export function LightboxFigure({ file, alt, caption, priority = false }: LightboxFigureProps) {
  const [open, setOpen] = useState(false);
  const src = assetSrc(file);

  return (
    <>
      <figure className="asset-figure asset-figure--zoomable">
        <button
          type="button"
          className="asset-figure__zoom-trigger"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} className="asset-figure__img" />
          <span className="asset-figure__zoom-hint">Vergrößern</span>
        </button>
        {caption ? <figcaption className="asset-figure__caption">{caption}</figcaption> : null}
      </figure>
      {open ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
        >
          <button type="button" className="lightbox__close" aria-label="Schließen" onClick={() => setOpen(false)}>
            ✕
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="lightbox__img" onClick={(e) => e.stopPropagation()} />
        </div>
      ) : null}
    </>
  );
}
