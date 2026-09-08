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
}

export function Hero({ eyebrow, title, subtitle, primaryCta, secondaryCta, metaItems, backgroundImage }: HeroProps) {
  return (
    <section className={`hero${backgroundImage ? ' hero--photo' : ''}`}>
      {backgroundImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={assetSrc(backgroundImage.file)} alt={backgroundImage.alt} className="hero--photo__bg" />
      ) : null}
      <div className="container">
        {eyebrow ? <p className="hero__eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {subtitle ? <p className="hero__subtitle">{subtitle}</p> : null}
        {(primaryCta || secondaryCta) && (
          <div className="hero__ctas">
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
