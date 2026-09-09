'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Product } from '@/lib/data';

export interface MobileNavProps {
  products: Product[];
  open: boolean;
}

const LINKED_SLUGS: Record<string, string> = {
  'pure-thermo': '/produkte/pure-thermo',
  'pure-liquid-heat': '/pure-liquid-heat'
};

export function MobileNav({ products, open }: MobileNavProps) {
  const [expanded, setExpanded] = useState<string | null>('produkte');
  if (!open) return null;

  const toggle = (key: string) => setExpanded((cur) => (cur === key ? null : key));

  return (
    <div className="mobile-nav" id="mobile-nav">
      <div className="mobile-nav__search">
        <label htmlFor="mobile-search" className="visually-hidden">Suche</label>
        <input id="mobile-search" type="search" placeholder="Suche (Produkte, Systeme, Nachweise)" />
      </div>
      <div className="mobile-nav__group">
        <button
          className="mobile-nav__group-button"
          aria-expanded={expanded === 'produkte'}
          aria-controls="mobile-nav-produkte"
          onClick={() => toggle('produkte')}
        >
          Produkte
        </button>
        {expanded === 'produkte' && (
          <div className="mobile-nav__panel" id="mobile-nav-produkte">
            {products.map((product) => {
              const href = LINKED_SLUGS[product.slug];
              return href ? (
                <Link key={product.id} href={href}>{product.name.de}</Link>
              ) : (
                <span key={product.id} style={{ color: 'var(--color-text-muted)' }}>
                  {product.name.de} · Seite in Vorbereitung
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
          Systeme
        </button>
        {expanded === 'systeme' && (
          <div className="mobile-nav__panel" id="mobile-nav-systeme">
            <Link href="/systeme/pure-thermo-interior">Pure Thermo Interior</Link>
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
          Nachweise
        </button>
        {expanded === 'nachweise' && (
          <div className="mobile-nav__panel" id="mobile-nav-nachweise">
            <Link href="/nachweise/EVD-PT-THERM-001">Wärmeleitfähigkeit THERM 4410</Link>
          </div>
        )}
      </div>
    </div>
  );
}
