'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import type { Product } from '@/lib/data';
import { MegaMenu } from './MegaMenu';
import { MobileNav } from './MobileNav';
import { isLocale, localizedCounterpart, localePath, pathWithoutLocale, productsIndexPath, type Locale, ui } from '@/lib/i18n';

export function Header({ products, locale = 'de' }: { products: Product[]; locale?: Locale }) {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname() || '/';
  const routeLocale = pathname.split('/')[1];
  const currentLocale: Locale = isLocale(routeLocale) ? routeLocale : locale;
  const counterpartHref = localizedCounterpart(currentLocale, pathname);
  const currentHref = localePath(currentLocale, pathWithoutLocale(pathname));

  return (
    <header className="header">
      <div className="container header__bar">
        <Link href={localePath(currentLocale)} className="header__logo">
          PURE<span>.</span> Technology Platform
        </Link>
        <nav className="header__nav" aria-label="Hauptnavigation">
          <div
            className="header__nav-item"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <Link
              className="header__nav-button"
              href={productsIndexPath(currentLocale)}
              aria-haspopup="true"
              aria-expanded={megaOpen}
            >
              {ui[currentLocale].products}
            </Link>
            <MegaMenu products={products} open={megaOpen} onClose={() => setMegaOpen(false)} locale={currentLocale} />
          </div>
          <Link className="header__nav-button" href={currentLocale === 'en' ? localePath('en', 'systems/pure-thermo-interior') : localePath('de', 'systeme/pure-thermo-interior')}>{ui[currentLocale].systems}</Link>
          <Link className="header__nav-button" href={currentLocale === 'en' ? localePath('en', 'evidence/EVD-PT-THERM-001') : localePath('de', 'nachweise/EVD-PT-THERM-001')}>{ui[currentLocale].evidence}</Link>
        </nav>
        <div className="header__search" role="search">
          <label htmlFor="desktop-search" className="visually-hidden">{ui[currentLocale].search}</label>
          <input id="desktop-search" type="search" placeholder={ui[currentLocale].search} />
        </div>
        <div className="language-switcher" aria-label={ui[currentLocale].switchLabel}>
          {currentLocale === 'de' ? <span className="language-switcher__active" aria-current="page">DE</span> : <Link href={counterpartHref}>DE</Link>}
          <span aria-hidden="true">|</span>
          {currentLocale === 'en' ? <span className="language-switcher__active" aria-current="page">EN</span> : <Link href={counterpartHref}>EN</Link>}
        </div>
        <button
          className="header__burger"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? ui[currentLocale].close : ui[currentLocale].menu}
        </button>
      </div>
      <MobileNav products={products} open={mobileOpen} locale={currentLocale} />
    </header>
  );
}
