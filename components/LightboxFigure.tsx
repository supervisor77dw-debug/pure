'use client';

import { useEffect, useRef, useState } from 'react';
import { assetSrc } from '@/lib/assets';

export interface LightboxFigureProps {
  file: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  zoomLabel?: string;
  closeLabel?: string;
}

// For graphics with dense small print: tap/click to open an enlarged overlay view (mobile-friendly).
export function LightboxFigure({ file, alt, caption, priority = false, zoomLabel = 'Vergrößern', closeLabel = 'Schließen' }: LightboxFigureProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const src = assetSrc(file);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <figure className="asset-figure asset-figure--zoomable">
        <button
          ref={triggerRef}
          type="button"
          className="asset-figure__zoom-trigger"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-label={`${zoomLabel}: ${alt}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} className="asset-figure__img" />
          <span className="asset-figure__zoom-hint">{zoomLabel}</span>
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
          <button ref={closeRef} type="button" className="lightbox__close" aria-label={closeLabel} onClick={() => setOpen(false)}>
            ✕
          </button>
          <div className="lightbox__figure" onClick={(event) => event.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} className="lightbox__img" />
            {caption ? <p className="lightbox__caption">{caption}</p> : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
