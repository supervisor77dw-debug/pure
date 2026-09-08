import Link from 'next/link';
import type { Product } from '@/lib/data';

export interface ProductCardProps {
  product: Product;
  href?: string;
}

const ACCENT_COLORS: Record<string, string> = {
  thermo: 'var(--color-thermo)'
};

// Public product family tile. Only products with a built page receive a real link;
// the rest surface their honest content_status instead of an invented description.
export function ProductCard({ product, href }: ProductCardProps) {
  const accent = product.accent_token ? ACCENT_COLORS[product.accent_token] : undefined;
  const isPlaceholder = product.content_status === 'placeholder_until_product_review';
  return (
    <div
      className={`product-card${href ? ' product-card--linked' : ''}`}
      style={accent ? ({ '--card-accent': accent } as React.CSSProperties) : undefined}
    >
      <h3 className="product-card__name">
        {href ? <Link href={href}>{product.name.de}</Link> : product.name.de}
      </h3>
      <p className="product-card__desc">{product.short_description.de}</p>
      <span className="product-card__status">
        {isPlaceholder ? 'Seite in Vorbereitung' : href ? 'Technologie ansehen' : 'Übersicht folgt'}
      </span>
    </div>
  );
}
