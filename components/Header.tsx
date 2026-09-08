'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Product } from '@/lib/data';
import { MegaMenu } from './MegaMenu';
import { MobileNav } from './MobileNav';

export function Header({ products }: { products: Product[] }) {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__bar">
        <Link href="/" className="header__logo">
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
              Produkte
            </button>
            <MegaMenu products={products} open={megaOpen} onClose={() => setMegaOpen(false)} />
          </div>
          <Link className="header__nav-button" href="/systeme/pure-thermo-interior">Systeme</Link>
          <Link className="header__nav-button" href="/nachweise/EVD-PT-THERM-001">Nachweise</Link>
        </nav>
        <div className="header__search" role="search">
          <label htmlFor="desktop-search" className="visually-hidden">Suche</label>
          <input id="desktop-search" type="search" placeholder="Suche" />
        </div>
        <button
          className="header__burger"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? 'Schließen' : 'Menü'}
        </button>
      </div>
      <MobileNav products={products} open={mobileOpen} />
    </header>
  );
}
