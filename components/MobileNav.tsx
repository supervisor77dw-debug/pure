'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Product } from '@/lib/data';
import { localePath, productsIndexPath, type Locale, ui } from '@/lib/i18n';

export interface MobileNavProps {
  products: Product[];
  open: boolean;
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

export function MobileNav({ products, open, locale = 'de' }: MobileNavProps) {
  const [expanded, setExpanded] = useState<string | null>('produkte');
  if (!open) return null;

  const toggle = (key: string) => setExpanded((cur) => (cur === key ? null : key));

  return (
    <div className="mobile-nav" id="mobile-nav">
      <div className="mobile-nav__search">
        <label htmlFor="mobile-search" className="visually-hidden">Suche</label>
        <input id="mobile-search" type="search" placeholder={ui[locale].searchPlaceholder} />
      </div>
      <div className="mobile-nav__group">
        <button
          className="mobile-nav__group-button"
          aria-expanded={expanded === 'produkte'}
          aria-controls="mobile-nav-produkte"
          onClick={() => toggle('produkte')}
        >
          {ui[locale].products}
        </button>
        {expanded === 'produkte' && (
          <div className="mobile-nav__panel" id="mobile-nav-produkte">
            <Link href={productsIndexPath(locale)}>{locale === 'en' ? 'All products' : 'Alle Produkte'}</Link>
            {products.map((product) => {
              const href = LINKED_SLUGS[product.slug];
              const localizedHref = href ? localePath(locale, locale === 'en' ? href.replace('/produkte/', 'products/').replace('/pure-liquid-heat', 'products/pure-liquid-heat').replace('/pure-surface-protect', 'products/pure-surface-protect').replace('/pure-floor-protect', 'products/pure-floor-protect').replace('/pure-fire-protect', 'products/pure-fire-protect').replace('/pure-water-protect', 'products/pure-water-protect').replace('/pure-wood-protect', 'products/pure-wood-protect').replace('/pure-boat-protect', 'products/pure-boat-protect') : href.replace(/^\//, '')) : undefined;
              return href ? (
                <Link key={product.id} href={localizedHref || href}>{product.name.de}</Link>
              ) : (
                <span key={product.id} style={{ color: 'var(--color-text-muted)' }}>
                  {product.name.de} · {ui[locale].pendingTitle}
                </span>
              );
            })}
          </div>
        )}
      </div>
      <div className="mobile-nav__group">
        <button
          className="mobile-nav__group-button"
          aria-expanded={expanded === 'systeme'}
          aria-controls="mobile-nav-systeme"
          onClick={() => toggle('systeme')}
        >
          {ui[locale].systems}
        </button>
        {expanded === 'systeme' && (
          <div className="mobile-nav__panel" id="mobile-nav-systeme">
            <Link href={locale === 'en' ? localePath('en', 'systems/pure-thermo-interior') : localePath('de', 'systeme/pure-thermo-interior')}>Pure Thermo Interior</Link>
          </div>
        )}
      </div>
      <div className="mobile-nav__group">
        <button
          className="mobile-nav__group-button"
          aria-expanded={expanded === 'nachweise'}
          aria-controls="mobile-nav-nachweise"
          onClick={() => toggle('nachweise')}
        >
          {ui[locale].evidence}
        </button>
        {expanded === 'nachweise' && (
          <div className="mobile-nav__panel" id="mobile-nav-nachweise">
            <Link href={locale === 'en' ? localePath('en', 'evidence/EVD-PT-THERM-001') : localePath('de', 'nachweise/EVD-PT-THERM-001')}>{locale === 'en' ? 'Thermal conductivity THERM 4410' : 'Wärmeleitfähigkeit THERM 4410'}</Link>
          </div>
        )}
      </div>
    </div>
  );
}
