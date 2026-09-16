import Image from 'next/image';
import { headers } from 'next/headers';
import type { CSSProperties, ReactNode } from 'react';
import { assetSrc } from '@/lib/assets';
import { isLocale, type Locale } from '@/lib/i18n';
import { PureElementsMark, type PureElementsWorld } from './PureElementsMark';

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
  const headerLocale = headers().get('x-pure-locale') || 'en';
  const locale: Locale = isLocale(headerLocale) ? headerLocale : 'en';
  const world: PureElementsWorld = variant === 'liquidHeat' ? 'heat' : variant === 'thermo' ? 'thermo' : variant === 'fire' ? 'fire' : 'protect';
  return (
    <section style={style} className={`hero product-hero-ambient product-hero-ambient--${variant} ${className}`.trim()}>
      <div className="product-hero-ambient__image">
        <Image src={assetSrc(image)} alt={imageAlt} fill priority fetchPriority="high" sizes="100vw" />
      </div>
      <div className="product-hero-ambient__gradient" aria-hidden="true" />
      <PureElementsMark world={world} locale={locale} className="product-family-mark" />
      <div className="product-hero-ambient__content">{children}</div>
    </section>
  );
}
