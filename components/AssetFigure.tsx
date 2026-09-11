import { assetSrc } from '@/lib/assets';
import { productMotionAssets } from '@/lib/product-motion-assets';

export interface AssetFigureProps {
  file: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  variant?: 'default' | 'plain';
  status?: 'INTERNAL PROTOTYPE' | 'DEVELOPMENT CONCEPT' | 'BRANDING CONCEPT';
}

// Consistent frame (radius/shadow/background) for all presentation-deck graphics reused on the site.
// Aspect ratio is never forced — width:100%/height:auto keeps the original proportions intact.
export function AssetFigure({ file, alt, caption, priority = false, variant = 'default', status }: AssetFigureProps) {
  const waterHeroMedia = priority && file === '01_water_hero_marine.jpeg' ? productMotionAssets.water : undefined;
  return (
    <figure className={`asset-figure${variant === 'plain' ? ' asset-figure--plain' : ''}${waterHeroMedia ? ' asset-figure--motion-media' : ''}`}>
      {waterHeroMedia ? <video className="asset-figure__motion-media" autoPlay muted loop playsInline preload="metadata" poster={waterHeroMedia.poster} aria-hidden="true"><source media="(min-width: 769px)" src={waterHeroMedia.desktopWebm} type="video/webm" /><source media="(min-width: 769px)" src={waterHeroMedia.desktopMp4} type="video/mp4" /></video> : null}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assetSrc(file)}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        className="asset-figure__img"
      />
      {status ? <span className="asset-figure__status">{status}</span> : null}
      {caption ? <figcaption className="asset-figure__caption">{caption}</figcaption> : null}
    </figure>
  );
}
