'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Product } from '@/lib/data';
import { localePath, productPath, productsIndexPath, type Locale, ui } from '@/lib/i18n';

export interface MobileNavProps {
  products: Product[];
  open: boolean;
  locale?: Locale;
}

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
              const href = productPath(locale, product.slug);
              return href ? (
                <Link key={product.id} href={href}>{product.name.de}</Link>
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
