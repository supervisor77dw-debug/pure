import Link from 'next/link';
import type { Product } from '@/lib/data';
import { localePath, type Locale, ui } from '@/lib/i18n';

export interface MegaMenuProps {
  products: Product[];
  open: boolean;
  onClose: () => void;
  locale?: Locale;
}

const LINKED_SLUGS: Record<string, string> = {
  'pure-thermo': '/produkte/pure-thermo',
  'pure-liquid-heat': '/pure-liquid-heat',
  'pure-surface-protect': '/pure-surface-protect',
  'pure-floor-protect': '/pure-floor-protect'
  ,'pure-fire-protect': '/pure-fire-protect'
  ,'pure-water-protect': '/pure-water-protect'
  ,'pure-wood-protect': '/pure-wood-protect'
  ,'pure-boat-protect': '/pure-boat-protect'
};

// Product family dropdown. Only families with a released page are clickable;
// Pure Protect T730 is excluded by construction since it never enters getAllProducts().
export function MegaMenu({ products, open, locale = 'de' }: MegaMenuProps) {
  if (!open) return null;
  return (
    <div className="mega-menu" role="menu" aria-label="Produktfamilien">
      {products.map((product) => {
        const href = LINKED_SLUGS[product.slug];
        const localizedHref = href ? localePath(locale, locale === 'en' ? href.replace('/produkte/', 'products/').replace('/pure-liquid-heat', 'products/pure-liquid-heat').replace('/pure-surface-protect', 'products/pure-surface-protect').replace('/pure-floor-protect', 'products/pure-floor-protect').replace('/pure-fire-protect', 'products/pure-fire-protect').replace('/pure-water-protect', 'products/pure-water-protect').replace('/pure-wood-protect', 'products/pure-wood-protect').replace('/pure-boat-protect', 'products/pure-boat-protect') : href.replace(/^\//, '')) : undefined;
        return href ? (
          <Link key={product.id} className="mega-menu__item" role="menuitem" href={localizedHref || href}>
            <span className="mega-menu__item-name">{product.name.de}</span>
            <span className="mega-menu__item-status">{locale === 'en' ? 'Explore technology' : 'Technologie ansehen'}</span>
          </Link>
        ) : (
          <span key={product.id} className="mega-menu__item" data-disabled="true" role="menuitem" aria-disabled="true">
            <span className="mega-menu__item-name">{product.name.de}</span>
            <span className="mega-menu__item-status">{ui[locale].pendingTitle}</span>
          </span>
        );
      })}
    </div>
  );
}
