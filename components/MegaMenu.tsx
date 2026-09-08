import Link from 'next/link';
import type { Product } from '@/lib/data';

export interface MegaMenuProps {
  products: Product[];
  open: boolean;
  onClose: () => void;
}

const LINKED_SLUGS: Record<string, string> = {
  'pure-thermo': '/produkte/pure-thermo'
};

// Product family dropdown. Only families with a released page are clickable;
// Pure Protect T730 is excluded by construction since it never enters getAllProducts().
export function MegaMenu({ products, open }: MegaMenuProps) {
  if (!open) return null;
  return (
    <div className="mega-menu" role="menu" aria-label="Produktfamilien">
      {products.map((product) => {
        const href = LINKED_SLUGS[product.slug];
        return href ? (
          <Link key={product.id} className="mega-menu__item" role="menuitem" href={href}>
            <span className="mega-menu__item-name">{product.name.de}</span>
            <span className="mega-menu__item-status">Technologie ansehen</span>
          </Link>
        ) : (
          <span key={product.id} className="mega-menu__item" data-disabled="true" role="menuitem" aria-disabled="true">
            <span className="mega-menu__item-name">{product.name.de}</span>
            <span className="mega-menu__item-status">Seite in Vorbereitung</span>
          </span>
        );
      })}
    </div>
  );
}
