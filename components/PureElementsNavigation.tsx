'use client';

import Link from 'next/link';
import { useState } from 'react';
import { localePath, productPath, type Locale } from '@/lib/i18n';
import { PureElementsMark, type PureElementsWorld } from './PureElementsMark';

const worlds: PureElementsWorld[] = ['pure', 'heat', 'thermo', 'fire', 'protect'];

export function PureElementsNavigation({ locale }: { locale: Locale }) {
  const de = locale === 'de';
  const [activeWorld, setActiveWorld] = useState<PureElementsWorld>('pure');
  const [protectOpen, setProtectOpen] = useState(false);
  const activate = (world: PureElementsWorld) => () => setActiveWorld(world);
  const productHref = (slug: string) => productPath(locale, slug) ?? localePath(locale);
  const protectProducts = [
    ['PURE SURFACE PROTECT', 'pure-surface-protect'],
    ['PURE WATER PROTECT', 'pure-water-protect'],
    ['PURE FLOOR PROTECT', 'pure-floor-protect'],
    ['PURE WOOD PROTECT', 'pure-wood-protect'],
    ['PURE BOAT PROTECT', 'pure-boat-protect']
  ] as const;

  return (
    <section className="section pure-elements" aria-labelledby="pure-elements-title">
      <div className="container pure-elements__layout">
        <div className="pure-elements__copy">
          <span className="section-heading__eyebrow">PURE ELEMENTS</span>
          <h2 id="pure-elements-title">{de ? 'Vier Funktionswelten. Eine Technologieplattform.' : 'Four functional worlds. One technology platform.'}</h2>
          <p>{de
            ? 'PURE ELEMENTS verbindet Wärme, thermische Funktion, Brandschutz und Oberflächenschutz in einer gemeinsamen Technologie- und Entwicklungsplattform. Der Leuchtturm steht für Orientierung – die vier Segmente für die funktionalen Technologiewelten der Plattform.'
            : 'PURE ELEMENTS connects heat, thermal function, fire protection and surface protection within one shared technology and development platform. The lighthouse represents orientation, while the four segments represent the platform’s functional technology worlds.'}</p>
        </div>

        <div className="pure-elements__identity">
          <div className="pure-elements__mark" aria-live="polite">
            {worlds.map((world) => (
              <PureElementsMark
                key={world}
                world={world}
                locale={locale}
                className={world === activeWorld ? 'is-active' : ''}
                priority={world === 'pure'}
                decorative={world !== activeWorld}
              />
            ))}
          </div>
          <strong>PURE ELEMENTS</strong>
          <span>{de ? 'Technologieplattform' : 'Technology Platform'}</span>
          <p>{de ? 'Die Elemente im Gleichgewicht für eine lebenswerte Welt.' : 'Elements in balance for a livable world.'}</p>
        </div>

        <div
          className="pure-elements__worlds"
          aria-label={de ? 'Funktionale Technologiewelten' : 'Functional technology worlds'}
          onMouseLeave={() => setActiveWorld('pure')}
          onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setActiveWorld('pure'); }}
        >
          <Link className="pure-elements__world" href={productHref('pure-liquid-heat')} onMouseEnter={activate('heat')} onFocus={activate('heat')}>
            <strong>HEAT</strong><span>PURE LIQUID HEAT</span>
          </Link>
          <Link className="pure-elements__world" href={productHref('pure-thermo')} onMouseEnter={activate('thermo')} onFocus={activate('thermo')}>
            <strong>THERMO</strong><span>PURE THERMO</span>
          </Link>
          <Link className="pure-elements__world" href={productHref('pure-fire-protect')} onMouseEnter={activate('fire')} onFocus={activate('fire')}>
            <strong>FIRE</strong><span>PURE FIRE PROTECT</span>
          </Link>
          <div className="pure-elements__protect" onMouseEnter={activate('protect')}>
            <button
              className="pure-elements__world"
              type="button"
              aria-expanded={protectOpen}
              aria-controls="pure-elements-protect-menu"
              onFocus={activate('protect')}
              onClick={() => setProtectOpen((open) => !open)}
              onKeyDown={(event) => { if (event.key === 'Escape') setProtectOpen(false); }}
            >
              <strong>PROTECT</strong><span>Surface · Water · Floor · Wood · Boat</span>
            </button>
            {protectOpen ? (
              <div className="pure-elements__protect-menu" id="pure-elements-protect-menu">
                {protectProducts.map(([label, slug]) => <Link href={productHref(slug)} key={slug}>{label}</Link>)}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}