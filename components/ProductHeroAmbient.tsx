import Image from 'next/image';
import type { CSSProperties, ReactNode } from 'react';
import { assetSrc } from '@/lib/assets';

export type ProductHeroVariant = 'thermo' | 'liquidHeat' | 'fire' | 'surface' | 'water' | 'floor' | 'wood' | 'boat';

export interface ProductHeroAmbientProps {
  variant: ProductHeroVariant;
  image: string;
  imageAlt?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export function ProductHeroAmbient({
  variant,
  image,
  imageAlt = '',
  className = '',
  style,
  children
}: ProductHeroAmbientProps) {
  return (
    <section style={style} className={`hero product-hero-ambient product-hero-ambient--${variant} ${className}`.trim()}>
      <div className="product-hero-ambient__image">
        <Image src={assetSrc(image)} alt={imageAlt} fill priority fetchPriority="high" sizes="100vw" />
      </div>
      <div className="product-hero-ambient__gradient" aria-hidden="true" />
      <div className="product-hero-ambient__content">{children}</div>
    </section>
  );
}
