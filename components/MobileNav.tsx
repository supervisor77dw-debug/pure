'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import type { Product } from '@/lib/data';
import { localizedCounterpart, localePath, productPath, productsIndexPath, type Locale, ui } from '@/lib/i18n';

export interface MobileNavProps {
  products: Product[];
  open: boolean;
  locale?: Locale;
  onClose: () => void;
}

export function MobileNav({ products, open, locale = 'de', onClose }: MobileNavProps) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname() || '/';
  const counterpartHref = localizedCounterpart(locale, pathname);
  const de = locale === 'de';

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab') {
        const focusable = drawerRef.current?.querySelectorAll<HTMLElement>('a, button, input, [tabindex]:not([tabindex="-1"])');
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    window.requestAnimationFrame(() => drawerRef.current?.querySelector<HTMLElement>('.mobile-nav__close')?.focus());
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;
  const toggle = (key: string) => setExpanded((current) => current === key ? null : key);
  const link = (href: string, children: React.ReactNode) => <Link href={href} onClick={onClose}>{children}</Link>;

  return <>
    <button className="mobile-nav__backdrop" type="button" aria-label={de ? 'Menü schließen' : 'Close menu'} onClick={onClose} />
    <aside className="mobile-nav" id="mobile-nav" ref={drawerRef} role="dialog" aria-modal="true" aria-label={de ? 'Mobile Navigation' : 'Mobile navigation'}>
      <div className="mobile-nav__topbar">
        <Link href={localePath(locale)} className="header__logo" onClick={onClose}>PURE<span>.</span></Link>
        <div className="mobile-nav__topbar-actions">
          <Link href={counterpartHref} onClick={onClose}>{locale === 'de' ? 'EN' : 'DE'}</Link>
          <button className="mobile-nav__close" type="button" aria-label={de ? 'Menü schließen' : 'Close menu'} onClick={onClose}>×</button>
        </div>
      </div>
      <div className="mobile-nav__scroll">
        <div className="mobile-nav__cta">{link(localePath(locale, de ? 'produkte/pure-thermo#u-wert-rechner' : 'products/pure-thermo#u-wert-rechner'), de ? 'Bauteil berechnen' : 'Calculate component')}</div>
        <div className="mobile-nav__primary">{link(localePath(locale, de ? 'systeme' : 'systems'), de ? 'Systeme' : 'Systems')}{link(localePath(locale, de ? 'nachweise' : 'evidence'), de ? 'Nachweise' : 'Evidence')}{link(localePath(locale, de ? 'projekt-anfrage' : 'project-request'), de ? 'Projekt starten' : 'Start a project')}</div>
        <div className="mobile-nav__group">
          <button className="mobile-nav__group-button" type="button" aria-expanded={expanded === 'products'} aria-controls="mobile-nav-products" onClick={() => toggle('products')}>{ui[locale].products}<span aria-hidden="true">⌄</span></button>
          {expanded === 'products' ? <div className="mobile-nav__panel" id="mobile-nav-products">{link(productsIndexPath(locale), de ? 'Alle Produkte' : 'All products')}{products.map((product) => { const href = productPath(locale, product.slug); return href ? link(href, product.name.de) : null; })}</div> : null}
        </div>
        <div className="mobile-nav__group">
          <button className="mobile-nav__group-button" type="button" aria-expanded={expanded === 'systems'} aria-controls="mobile-nav-systems" onClick={() => toggle('systems')}>{ui[locale].systems}<span aria-hidden="true">⌄</span></button>
          {expanded === 'systems' ? <div className="mobile-nav__panel" id="mobile-nav-systems">{link(localePath(locale, de ? 'systeme/pure-thermo-interior' : 'systems/pure-thermo-interior'), 'Pure Thermo Interior')}{link(localePath(locale, de ? 'systeme/pure-thermo-exterior' : 'systems/pure-thermo-exterior'), 'Pure Thermo Exterior')}{link(localePath(locale, de ? 'systeme/pure-thermo-detail' : 'systems/pure-thermo-detail'), 'Pure Thermo Detail')}{link(localePath(locale, de ? 'systeme/pure-thermo-fire' : 'systems/pure-thermo-fire'), 'Pure Thermo + Pure Fire')}</div> : null}
        </div>
        <div className="mobile-nav__group">
          <button className="mobile-nav__group-button" type="button" aria-expanded={expanded === 'evidence'} aria-controls="mobile-nav-evidence" onClick={() => toggle('evidence')}>{ui[locale].evidence}<span aria-hidden="true">⌄</span></button>
          {expanded === 'evidence' ? <div className="mobile-nav__panel" id="mobile-nav-evidence">{link(localePath(locale, de ? 'nachweise' : 'evidence'), de ? 'Prüfungen & Evidenz' : 'Testing & Evidence')}{link(localePath(locale, de ? 'nachweise/EVD-PT-THERM-001' : 'evidence/EVD-PT-THERM-001'), de ? 'Wärmeleitfähigkeit' : 'Thermal conductivity')}{link(localePath(locale, de ? 'produkte/pure-thermo#u-wert-rechner' : 'products/pure-thermo#u-wert-rechner'), de ? 'Berechnungen & Modelle' : 'Calculations & models')}</div> : null}
        </div>
      </div>
    </aside>
  </>;
}
