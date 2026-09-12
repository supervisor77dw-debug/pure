import type { CSSProperties, ReactNode } from 'react';
import { assetSrc } from '@/lib/assets';
import { productMotionAssets, type ProductMotionAssetSet, type ProductMotionVariant } from '@/lib/product-motion-assets';

export interface ProductHeroAmbientProps {
  variant: ProductMotionVariant;
  poster?: string;
  posterAlt?: string;
  assets?: ProductMotionAssetSet;
  motionEnabled?: boolean;
  videoEnabled?: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  materialOverlay?: ReactNode;
  svgLayer?: ReactNode;
}

function mediaPath(path: string | undefined): string | undefined {
  return path ? (path.startsWith('/') ? path : assetSrc(path)) : undefined;
}

export function ProductHeroAmbient({
  variant,
  poster,
  posterAlt = '',
  assets = productMotionAssets[variant] ?? { variant },
  motionEnabled = false,
  videoEnabled = true,
  className = '',
  style,
  children,
  materialOverlay,
  svgLayer
}: ProductHeroAmbientProps) {
  const webm = mediaPath(assets?.desktopWebm);
  const mp4 = mediaPath(assets?.desktopMp4);
  const explicitPoster = mediaPath(poster);
  const desktopPoster = explicitPoster || mediaPath(assets?.poster);
  const mobilePoster = explicitPoster || mediaPath(assets?.mobilePoster);
  const hasVideo = motionEnabled && videoEnabled && Boolean(webm || mp4);
  const hasSvg = motionEnabled && Boolean(assets?.svgLayer || svgLayer);

  return (
    <section style={style} className={`hero product-hero-ambient product-hero-ambient--${variant}${motionEnabled ? ' is-motion-enabled' : ''}${hasVideo ? ' has-video' : ''} ${className}`.trim()}>
      {desktopPoster || mobilePoster ? (
        // eslint-disable-next-line @next/next/no-img-element
        <picture className="product-hero-ambient__poster">
          {mobilePoster ? <source media="(max-width: 768px)" srcSet={mobilePoster} /> : null}
          <img src={desktopPoster || mobilePoster} alt={posterAlt} aria-hidden={posterAlt ? undefined : true} />
        </picture>
      ) : null}
      <div className="product-hero-ambient__gradient" aria-hidden="true" />
      {hasSvg ? (
        <div className="product-hero-ambient__svg" aria-hidden="true">
          {svgLayer || <span className="product-hero-ambient__svg-asset" style={{ backgroundImage: `url(${mediaPath(assets?.svgLayer)})` }} />}
        </div>
      ) : null}
      {hasVideo ? (
        <video className="product-hero-ambient__video" autoPlay muted loop playsInline poster={desktopPoster} preload="metadata" aria-hidden="true">
          {webm ? <source media="(min-width: 769px)" src={webm} type="video/webm" /> : null}
          {mp4 ? <source media="(min-width: 769px)" src={mp4} type="video/mp4" /> : null}
        </video>
      ) : null}
      <div className="product-hero-ambient__effect" aria-hidden="true">
        <span className="product-hero-ambient__effect-line" />
        <span className="product-hero-ambient__effect-glow" />
        <span className="product-hero-ambient__effect-barrier" />
      </div>
      <div className="product-hero-ambient__material" aria-hidden="true">{materialOverlay}</div>
      <div className="product-hero-ambient__content">{children}</div>
    </section>
  );
}
