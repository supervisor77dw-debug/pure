import Image from 'next/image';
import type { CSSProperties, ReactNode } from 'react';
import { assetSrc } from '@/lib/assets';

export type ProductMotionVariant = 'thermo' | 'liquidHeat' | 'fire' | 'surface' | 'water' | 'floor' | 'wood' | 'boat';

export interface ProductHeroAmbientProps {
  variant: ProductMotionVariant;
  poster: string;
  posterAlt?: string;
  motionEnabled?: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export function ProductHeroAmbient({
  variant,
  poster,
  posterAlt = '',
  motionEnabled = false,
  className = '',
  style,
  children
}: ProductHeroAmbientProps) {
  return (
    <section style={style} className={`hero product-hero-ambient product-hero-ambient--${variant}${motionEnabled ? ' is-motion-enabled' : ''} ${className}`.trim()}>
      <div className="product-hero-ambient__poster">
        <Image src={assetSrc(poster)} alt={posterAlt} fill priority sizes="100vw" />
      </div>
      <div className="product-hero-ambient__gradient" aria-hidden="true" />
      <div className="product-hero-ambient__effect" aria-hidden="true">
        <span className="product-hero-ambient__effect-line" />
        <span className="product-hero-ambient__effect-glow" />
        <span className="product-hero-ambient__effect-barrier" />
      </div>
      <div className="product-hero-ambient__content">{children}</div>
    </section>
  );
}
