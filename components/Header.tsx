'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import type { Product } from '@/lib/data';
import { MegaMenu } from './MegaMenu';
import { MobileNav } from './MobileNav';
import { alternateLocale, localizedCounterpart, localePath, type Locale, ui } from '@/lib/i18n';

export function Header({ products, locale = 'de' }: { products: Product[]; locale?: Locale }) {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname() || '/';

  return (
    <header className="header">
      <div className="container header__bar">
        <Link href={localePath(locale)} className="header__logo">
          PURE<span>.</span> Technology Platform
        </Link>
        <nav className="header__nav" aria-label="Hauptnavigation">
          <div
            className="header__nav-item"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button
              className="header__nav-button"
              aria-haspopup="true"
              aria-expanded={megaOpen}
              onClick={() => setMegaOpen((v) => !v)}
            >
              {ui[locale].products}
            </button>
            <MegaMenu products={products} open={megaOpen} onClose={() => setMegaOpen(false)} locale={locale} />
          </div>
          <Link className="header__nav-button" href={locale === 'en' ? localePath('en', 'systems/pure-thermo-interior') : localePath('de', 'systeme/pure-thermo-interior')}>{ui[locale].systems}</Link>
          <Link className="header__nav-button" href={locale === 'en' ? localePath('en', 'evidence/EVD-PT-THERM-001') : localePath('de', 'nachweise/EVD-PT-THERM-001')}>{ui[locale].evidence}</Link>
        </nav>
        <div className="header__search" role="search">
          <label htmlFor="desktop-search" className="visually-hidden">{ui[locale].search}</label>
          <input id="desktop-search" type="search" placeholder={ui[locale].search} />
        </div>
        <Link className="language-switcher" href={localizedCounterpart(locale, pathname)} aria-label={ui[locale].switchLabel}>
          {locale.toUpperCase()} <span aria-hidden="true">|</span> {alternateLocale(locale).toUpperCase()}
        </Link>
        <button
          className="header__burger"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? ui[locale].close : ui[locale].menu}
        </button>
      </div>
      <MobileNav products={products} open={mobileOpen} locale={locale} />
    </header>
  );
}
