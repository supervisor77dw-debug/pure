import Link from 'next/link';
import type { Product } from '@/lib/data';
import { productPath, type Locale, ui } from '@/lib/i18n';

const productDescriptions: Record<string, { de: string; en: string }> = {
  'pure-thermo': { de: 'Thermische Funktionsschicht', en: 'Thermal functional layer' },
  'pure-liquid-heat': { de: 'Elektrische Wärme', en: 'Electrical heat' },
  'pure-floor-protect': { de: 'Bodenoberflächen', en: 'Floor surfaces' },
  'pure-fire-protect': { de: 'Brandschutz', en: 'Fire protection' },
  'pure-surface-protect': { de: 'Oberflächenschutz', en: 'Surface protection' },
  'pure-water-protect': { de: 'Unterwasser / Marine', en: 'Underwater / marine' },
  'pure-wood-protect': { de: 'Holzoberflächen', en: 'Wood surfaces' },
  'pure-boat-protect': { de: 'Yacht- und Bootsoberflächen', en: 'Yacht and boat surfaces' }
};

export interface MegaMenuProps {
  products: Product[];
  open: boolean;
  onClose: () => void;
  locale?: Locale;
  id?: string;
}

// Product family dropdown. Only families with a released page are clickable;
// Pure Protect T730 is excluded by construction since it never enters getAllProducts().
export function MegaMenu({ products, open, locale = 'de', id }: MegaMenuProps) {
  if (!open) return null;
  return (
    <div className="mega-menu" id={id} role="menu" aria-label={locale === 'de' ? 'Produktfamilien' : 'Product families'}>
      {products.map((product) => {
        const href = productPath(locale, product.slug);
        return href ? (
          <Link key={product.id} className="mega-menu__item" role="menuitem" href={href}>
            <span className="mega-menu__item-name">{product.name.de}</span>
            <span className="mega-menu__item-status">{productDescriptions[product.slug]?.[locale] ?? (locale === 'en' ? 'Explore technology' : 'Technologie ansehen')}</span>
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
