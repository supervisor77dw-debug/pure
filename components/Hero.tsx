import Image from 'next/image';
import Link from 'next/link';
import { assetSrc } from '@/lib/assets';

export interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  metaItems?: string[];
  backgroundImage?: { file: string; alt: string };
  className?: string;
}

export function Hero({ eyebrow, title, subtitle, primaryCta, secondaryCta, metaItems, backgroundImage, className = '' }: HeroProps) {
  return (
    <section className={`hero${backgroundImage ? ' hero--photo' : ''}${className ? ` ${className}` : ''}`}>
      {backgroundImage ? (
        <Image src={assetSrc(backgroundImage.file)} alt={backgroundImage.alt} className="hero--photo__bg" fill priority fetchPriority="high" sizes="100vw" />
      ) : null}
      <div className="container">
        {eyebrow ? <p className="hero__eyebrow hero__reveal hero__reveal--1">{eyebrow}</p> : null}
        <h1 className="hero__reveal hero__reveal--2">{title}</h1>
        {subtitle ? <p className="hero__subtitle hero__reveal hero__reveal--3">{subtitle}</p> : null}
        {(primaryCta || secondaryCta) && (
          <div className="hero__ctas hero__reveal hero__reveal--4">
            {primaryCta ? (
              <Link className="btn btn--primary" href={primaryCta.href}>
                {primaryCta.label}
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link className="btn btn--secondary" href={secondaryCta.href}>
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        )}
        {metaItems && metaItems.length > 0 ? (
          <ul className="hero__meta" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {metaItems.map((m) => (
              <li className="hero__meta-item" key={m}>{m}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
