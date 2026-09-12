'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import type { Product } from '@/lib/data';
import { MegaMenu } from './MegaMenu';
import { MobileNav } from './MobileNav';
import { isLocale, localizedCounterpart, localePath, productPath, productsIndexPath, type Locale, ui } from '@/lib/i18n';

const productDescriptions: Record<string, Record<Locale, string>> = {
  'pure-thermo': { de: 'Thermische Funktionsschicht', en: 'Thermal functional layer' },
  'pure-liquid-heat': { de: 'Elektrische Wärme', en: 'Electrical heat' },
  'pure-floor-protect': { de: 'Bodenoberflächen', en: 'Floor surfaces' },
  'pure-fire-protect': { de: 'Brandschutz', en: 'Fire protection' },
  'pure-surface-protect': { de: 'Oberflächenschutz', en: 'Surface protection' },
  'pure-water-protect': { de: 'Unterwasser / Marine', en: 'Underwater / marine' },
  'pure-wood-protect': { de: 'Holzoberflächen', en: 'Wood surfaces' },
  'pure-boat-protect': { de: 'Yacht- und Bootsoberflächen', en: 'Yacht and boat surfaces' }
};

const systemItems = {
  de: [
    ['PURE THERMO INTERIOR', 'Innenräume & Bestandswände', 'systeme/pure-thermo-interior'],
    ['PURE THERMO EXTERIOR', 'Fassaden & Außenbereiche', 'systeme/pure-thermo-exterior'],
    ['PURE THERMO DETAIL', 'Wärmebrücken & Anschlüsse', 'systeme/pure-thermo-detail'],
    ['PURE THERMO + PURE FIRE', 'Thermische + brandschutztechnische Systemroute', 'systeme/pure-thermo-fire']
  ],
  en: [
    ['PURE THERMO INTERIOR', 'Interior spaces & existing walls', 'systems/pure-thermo-interior'],
    ['PURE THERMO EXTERIOR', 'Facades & exterior areas', 'systems/pure-thermo-exterior'],
    ['PURE THERMO DETAIL', 'Thermal bridges & junctions', 'systems/pure-thermo-detail'],
    ['PURE THERMO + PURE FIRE', 'Thermal + fire-protection system route', 'systems/pure-thermo-fire']
  ]
} as const;

const evidenceItems = {
  de: [
    ['Wärmeleitfähigkeit', 'Extern geprüfter THERM 4410 Prüfwert', 'nachweise/EVD-PT-THERM-001'],
    ['Wasserdampfdiffusion', 'V, sd und abgeleiteter μ-Wert', 'nachweise#water-vapor-diffusion'],
    ['Brandverhalten', 'Einzelprüfung und Kombinationsroute getrennt', 'nachweise#fire-behavior'],
    ['Berechnungen & Modelle', 'U-Wert-Modellrechnung mit Grenzen', 'produkte/pure-thermo#u-wert-rechner'],
    ['Prüf- und Entwicklungsstatus', 'A-D-System im Überblick', 'nachweise#pruef-und-entwicklungsstatus']
  ],
  en: [
    ['Thermal conductivity', 'Externally tested THERM 4410 value', 'evidence/EVD-PT-THERM-001'],
    ['Water vapour diffusion', 'V, sd and derived μ value', 'evidence#water-vapor-diffusion'],
    ['Fire behaviour', 'Individual tests and combination route separated', 'evidence#fire-behavior'],
    ['Calculations & models', 'U-value model calculation with limits', 'products/pure-thermo#u-wert-rechner'],
    ['Testing & development status', 'A-D system overview', 'evidence#testing-and-development-status']
  ]
} as const;

export function Header({ products, locale = 'de' }: { products: Product[]; locale?: Locale }) {
  const [megaOpen, setMegaOpen] = useState(false);
  const [systemsOpen, setSystemsOpen] = useState(false);
  const [evidenceOpen, setEvidenceOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname() || '/';
  const routeLocale = pathname.split('/')[1];
  const currentLocale: Locale = isLocale(routeLocale) ? routeLocale : locale;
  const counterpartHref = localizedCounterpart(currentLocale, pathname);
  const searchItems = [
    ...products.flatMap((product) => {
      const href = productPath(currentLocale, product.slug);
      return href ? [{ label: product.name[currentLocale] ?? product.name.de, description: productDescriptions[product.slug]?.[currentLocale] ?? '', href }] : [];
    }),
    ...systemItems[currentLocale].map(([label, description, href]) => ({ label, description, href: localePath(currentLocale, href) })),
    ...evidenceItems[currentLocale].map(([label, description, href]) => ({ label, description, href: localePath(currentLocale, href) }))
  ];
  const normalizedQuery = searchQuery.trim().toLocaleLowerCase(currentLocale);
  const searchResults = normalizedQuery ? searchItems.filter((item) => `${item.label} ${item.description}`.toLocaleLowerCase(currentLocale).includes(normalizedQuery)).slice(0, 8) : [];

  useEffect(() => {
    if (!mobileOpen) {
      burgerRef.current?.focus();
      return;
    }
    const scrollY = window.scrollY;
    const previous = { position: document.body.style.position, top: document.body.style.top, width: document.body.style.width };
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    return () => {
      document.body.style.position = previous.position;
      document.body.style.top = previous.top;
      document.body.style.width = previous.width;
      window.scrollTo(0, scrollY);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 12);
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__bar">
        <Link href={localePath(currentLocale)} className="header__logo">
          PURE<span>.</span> Technology Platform
        </Link>
        <nav className="header__nav" aria-label={ui[currentLocale].navigation}>
          <div
            className="header__nav-item"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
            onFocus={() => setMegaOpen(true)}
            onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setMegaOpen(false); }}
          >
            <Link
              className="header__nav-button"
              href={productsIndexPath(currentLocale)}
              aria-haspopup="menu"
              aria-expanded={megaOpen}
              aria-controls="products-mega-menu"
            >
              {ui[currentLocale].products}
            </Link>
            <MegaMenu products={products} open={megaOpen} onClose={() => setMegaOpen(false)} locale={currentLocale} id="products-mega-menu" />
          </div>
          <div className="header__nav-item" onMouseEnter={() => setSystemsOpen(true)} onMouseLeave={() => setSystemsOpen(false)} onFocus={() => setSystemsOpen(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setSystemsOpen(false); }}>
            <Link className="header__nav-button" href={currentLocale === 'en' ? localePath('en', 'systems') : localePath('de', 'systeme')} aria-haspopup="menu" aria-expanded={systemsOpen} aria-controls="systems-mega-menu">{ui[currentLocale].systems}</Link>
            {systemsOpen ? <div className="mega-menu" id="systems-mega-menu" role="menu" aria-label={ui[currentLocale].systems}>{systemItems[currentLocale].map(([name, description, href]) => <Link key={href} className="mega-menu__item" role="menuitem" href={localePath(currentLocale, href)} onClick={() => setSystemsOpen(false)}><span className="mega-menu__item-name">{name}</span><span className="mega-menu__item-status">{description}</span></Link>)}</div> : null}
          </div>
          <div className="header__nav-item" onMouseEnter={() => setEvidenceOpen(true)} onMouseLeave={() => setEvidenceOpen(false)} onFocus={() => setEvidenceOpen(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setEvidenceOpen(false); }}>
            <Link className="header__nav-button" href={currentLocale === 'en' ? localePath('en', 'evidence') : localePath('de', 'nachweise')} aria-haspopup="menu" aria-expanded={evidenceOpen} aria-controls="evidence-mega-menu">{ui[currentLocale].evidence}</Link>
            {evidenceOpen ? <div className="mega-menu" id="evidence-mega-menu" role="menu" aria-label={ui[currentLocale].evidence}>{evidenceItems[currentLocale].map(([name, description, href]) => <Link key={name} className="mega-menu__item" role="menuitem" href={localePath(currentLocale, href)} onClick={() => setEvidenceOpen(false)}><span className="mega-menu__item-name">{name}</span><span className="mega-menu__item-status">{description}</span></Link>)}</div> : null}
          </div>
        </nav>
        <div className={`header__search-compact${searchOpen ? ' is-open' : ''}`} role="search">
          <button className="header__search-button" type="button" aria-label={ui[currentLocale].search} title={ui[currentLocale].search} aria-expanded={searchOpen} aria-controls="desktop-search-panel" onClick={() => setSearchOpen((value) => !value)}>⌕</button>
          {searchOpen ? <div className="header__search-panel" id="desktop-search-panel"><label htmlFor="desktop-search" className="visually-hidden">{ui[currentLocale].search}</label><input id="desktop-search" type="search" placeholder={ui[currentLocale].searchPlaceholder} value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} onKeyDown={(event) => { if (event.key === 'Escape') setSearchOpen(false); }} aria-controls="desktop-search-results" autoFocus /><ul className="header__search-results" id="desktop-search-results" aria-live="polite">{searchResults.map((item) => <li key={item.href}><Link href={item.href} onClick={() => { setSearchOpen(false); setSearchQuery(''); }}><strong>{item.label}</strong><span>{item.description}</span></Link></li>)}{normalizedQuery && searchResults.length === 0 ? <li className="header__search-empty">{currentLocale === 'de' ? 'Keine passenden Inhalte.' : 'No matching content.'}</li> : null}</ul></div> : null}
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
          ref={burgerRef}
          className="header__burger"
          type="button"
          aria-label={mobileOpen ? (currentLocale === 'en' ? 'Close menu' : 'Menü schließen') : (currentLocale === 'en' ? 'Open menu' : 'Menü öffnen')}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span aria-hidden="true"><i /><i /><i /></span>
        </button>
      </div>
      <MobileNav products={products} open={mobileOpen} locale={currentLocale} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
