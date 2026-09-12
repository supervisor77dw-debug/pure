import Image from 'next/image';
import Link from 'next/link';
import { assetSrc } from '@/lib/assets';
import { ProductHeroAmbient } from './ProductHeroAmbient';
import styles from './ProductParityHero.module.css';

type HeroLink = { label: string; href: string };
type PhotoVariant = 'water' | 'wood' | 'boat';
type HeroFact = { value: string; label: string; note?: string };

interface ProductHeroCopy {
  eyebrow: string;
  title: string;
  subtitle: string;
  primary: HeroLink;
  secondary: HeroLink;
}

const photoHeroConfig: Record<PhotoVariant, { image: string; alt: string }> = {
  water: {
    image: 'Unterwasseransicht einer Yacht im Sonnenlicht.png',
    alt: 'Defined underwater hull surface with light reflections in the water'
  },
  wood: {
    image: 'Nasse Holzterrasse im Abendlicht.png',
    alt: 'High-quality natural timber surface with visible grain and water droplets in warm evening light'
  },
  boat: {
    image: 'Luxusyacht im goldenen Abendlicht.png',
    alt: 'Visible premium yacht surfaces with teak deck, coating and metal in warm evening light'
  }
};

function HeroActions({ primary, secondary }: Pick<ProductHeroCopy, 'primary' | 'secondary'>) {
  return <div className="hero__ctas"><Link className="btn btn--primary" href={primary.href}>{primary.label}</Link><Link className="btn btn--secondary" href={secondary.href}>{secondary.label}</Link></div>;
}

export function ThermoParityHero({ eyebrow, title, subtitle, primary, secondary }: ProductHeroCopy) {
  return <ProductHeroAmbient variant="thermo" className="pure-thermo-hero" image="transluzente Beschichtung auf rauem Beton.png" imageAlt="Translucent functional coating on a rough mineral surface"><div className="container"><p className="hero__eyebrow">{eyebrow}</p><h1>{title}</h1><p className="hero__subtitle">{subtitle}</p><HeroActions primary={primary} secondary={secondary} /></div></ProductHeroAmbient>;
}

export function PhotoParityHero({ variant, eyebrow, title, subtitle, primary, secondary, facts }: ProductHeroCopy & { variant: PhotoVariant; facts?: HeroFact[] }) {
  const config = photoHeroConfig[variant];
  return <section className={`hero ${styles.photoHero} ${styles[variant]}`}>
    <Image className={styles.image} src={assetSrc(config.image)} alt={config.alt} fill priority fetchPriority="high" sizes="100vw" />
    <div className={styles.shade} aria-hidden="true" />
    <div className="container"><div className={styles.content}><p className="hero__eyebrow">{eyebrow}</p><h1>{title}</h1><p className="hero__subtitle">{subtitle}</p>{facts ? <div className={styles.facts}>{facts.map((fact) => <div className={styles.fact} key={fact.value}><strong>{fact.value}</strong><span>{fact.label}</span>{fact.note ? <small>{fact.note}</small> : null}</div>)}</div> : null}<HeroActions primary={primary} secondary={secondary} /></div></div>
  </section>;
}

export type { HeroFact, ProductHeroCopy };
