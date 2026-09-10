'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import type { Product } from '@/lib/data';
import { MegaMenu } from './MegaMenu';
import { MobileNav } from './MobileNav';
import { isLocale, localizedCounterpart, localePath, pathWithoutLocale, productsIndexPath, type Locale, ui } from '@/lib/i18n';

const systemItems = {
  de: [
    ['Pure Thermo Interior', 'Innenräume & Bestandswände', 'systeme/pure-thermo-interior'],
    ['Pure Thermo Exterior', 'Fassaden & Außenbereiche', 'systeme/pure-thermo-exterior'],
    ['Pure Thermo Detail', 'Wärmebrücken & Anschlüsse', 'systeme/pure-thermo-detail'],
    ['Pure Thermo + Pure Fire', 'Thermische + brandschutztechnische Systemroute', 'systeme/pure-thermo-fire']
  ],
  en: [
    ['Pure Thermo Interior', 'Interior spaces & existing walls', 'systems/pure-thermo-interior'],
    ['Pure Thermo Exterior', 'Facades & exterior areas', 'systems/pure-thermo-exterior'],
    ['Pure Thermo Detail', 'Thermal bridges & junctions', 'systems/pure-thermo-detail'],
    ['Pure Thermo + Pure Fire', 'Thermal + fire-protection system route', 'systems/pure-thermo-fire']
  ]
} as const;

const evidenceItems = {
  de: [
    ['Wärmeleitfähigkeit', 'Extern geprüfter THERM 4410 Prüfwert', 'nachweise/EVD-PT-THERM-001'],
    ['Wasserdampfdiffusion', 'V, sd und abgeleiteter μ-Wert', 'nachweise'],
    ['Brandverhalten', 'Einzelprüfung und Kombinationsroute getrennt', 'nachweise'],
    ['Berechnungen & Modelle', 'U-Wert-Modellrechnung mit Grenzen', 'produkte/pure-thermo#u-wert-rechner'],
    ['Prüf- und Entwicklungsstatus', 'A-D-System im Überblick', 'nachweise']
  ],
  en: [
    ['Thermal conductivity', 'Externally tested THERM 4410 value', 'evidence/EVD-PT-THERM-001'],
    ['Water vapour diffusion', 'V, sd and derived μ value', 'evidence'],
    ['Fire behaviour', 'Individual tests and combination route separated', 'evidence'],
    ['Calculations & models', 'U-value model calculation with limits', 'products/pure-thermo#u-wert-rechner'],
    ['Testing & development status', 'A-D system overview', 'evidence']
  ]
} as const;

export function Header({ products, locale = 'de' }: { products: Product[]; locale?: Locale }) {
  const [megaOpen, setMegaOpen] = useState(false);
  const [systemsOpen, setSystemsOpen] = useState(false);
  const [evidenceOpen, setEvidenceOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
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
        <nav className="header__nav" aria-label={ui[currentLocale].navigation}>
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
          <div className="header__nav-item" onMouseEnter={() => setSystemsOpen(true)} onMouseLeave={() => setSystemsOpen(false)}>
            <Link className="header__nav-button" href={currentLocale === 'en' ? localePath('en', 'systems') : localePath('de', 'systeme')} aria-haspopup="true" aria-expanded={systemsOpen}>{ui[currentLocale].systems}</Link>
            {systemsOpen ? <div className="mega-menu" role="menu" aria-label={ui[currentLocale].systems}>{systemItems[currentLocale].map(([name, description, href]) => <Link key={href} className="mega-menu__item" role="menuitem" href={localePath(currentLocale, href)}><span className="mega-menu__item-name">{name}</span><span className="mega-menu__item-status">{description}</span></Link>)}</div> : null}
          </div>
          <div className="header__nav-item" onMouseEnter={() => setEvidenceOpen(true)} onMouseLeave={() => setEvidenceOpen(false)}>
            <Link className="header__nav-button" href={currentLocale === 'en' ? localePath('en', 'evidence') : localePath('de', 'nachweise')} aria-haspopup="true" aria-expanded={evidenceOpen}>{ui[currentLocale].evidence}</Link>
            {evidenceOpen ? <div className="mega-menu" role="menu" aria-label={ui[currentLocale].evidence}>{evidenceItems[currentLocale].map(([name, description, href]) => <Link key={name} className="mega-menu__item" role="menuitem" href={localePath(currentLocale, href)}><span className="mega-menu__item-name">{name}</span><span className="mega-menu__item-status">{description}</span></Link>)}</div> : null}
          </div>
        </nav>
        <div className={`header__search-compact${searchOpen ? ' is-open' : ''}`} role="search">
          <button className="header__search-button" type="button" aria-label={ui[currentLocale].search} title={ui[currentLocale].search} aria-expanded={searchOpen} aria-controls="desktop-search-panel" onClick={() => setSearchOpen((value) => !value)}>⌕</button>
          {searchOpen ? <div className="header__search-panel" id="desktop-search-panel"><label htmlFor="desktop-search" className="visually-hidden">{ui[currentLocale].search}</label><input id="desktop-search" type="search" placeholder={ui[currentLocale].searchPlaceholder} autoFocus /></div> : null}
        </div>
        <Link className="header__utility-cta" href={currentLocale === 'en' ? localePath('en', 'products/pure-thermo#u-wert-rechner') : localePath('de', 'produkte/pure-thermo#u-wert-rechner')}>
          {currentLocale === 'en' ? 'Calculate component' : 'Bauteil berechnen'}
        </Link>
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
