'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { localePath, projectRequestPath, type Locale } from '@/lib/i18n';
import { PureElementsMark } from './PureElementsMark';
import { applicationNavigation } from '@/lib/application-navigation';

export function Footer({ locale = 'de' }: { locale?: Locale }) {
  const pathname = usePathname() || '/';
  const routeLocale = pathname.split('/')[1];
  const currentLocale: Locale = routeLocale === 'en' || routeLocale === 'de' ? routeLocale : locale;
  const isEnglish = currentLocale === 'en';
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Link href={localePath(currentLocale)} className="footer__logo" aria-label={isEnglish ? 'PURE PARTS home' : 'PURE PARTS Startseite'}>
              <PureElementsMark world="pure" locale={currentLocale} />
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem' }}>
              {isEnglish ? 'Functional coating technologies with a shared development, testing and documentation logic.' : 'Funktionale Beschichtungstechnologien mit gemeinsamer Entwicklungs-, Prüf- und Dokumentationslogik.'}
            </p>
          </div>
          <div>
            <h4>{isEnglish ? 'Products' : 'Produkte'}</h4>
            <ul>
              <li><Link href={isEnglish ? localePath('en', 'products/pure-thermo') : localePath('de', 'produkte/pure-thermo')}>PURE THERMO</Link></li>
              <li><Link href={isEnglish ? localePath('en', 'products/pure-liquid-heat') : localePath('de', 'pure-liquid-heat')}>PURE LIQUID HEAT</Link></li>
              <li><Link href={isEnglish ? localePath('en', 'products/pure-floor-protect') : localePath('de', 'produkte/pure-floor-protect')}>PURE FLOOR PROTECT</Link></li>
              <li><Link href={isEnglish ? localePath('en', 'products/pure-fire-protect') : localePath('de', 'produkte/pure-fire-protect')}>PURE FIRE PROTECT</Link></li>
              <li><Link href={isEnglish ? localePath('en', 'products/pure-surface-protect') : localePath('de', 'produkte/pure-surface-protect')}>PURE SURFACE PROTECT</Link></li>
              <li><Link href={isEnglish ? localePath('en', 'products/pure-water-protect') : localePath('de', 'produkte/pure-water-protect')}>PURE WATER PROTECT</Link></li>
              <li><Link href={isEnglish ? localePath('en', 'products/pure-wood-protect') : localePath('de', 'produkte/pure-wood-protect')}>PURE WOOD PROTECT</Link></li>
              <li><Link href={isEnglish ? localePath('en', 'products/pure-boat-protect') : localePath('de', 'produkte/pure-boat-protect')}>PURE BOAT PROTECT</Link></li>
            </ul>
          </div>
          <div>
            <h4>{isEnglish ? 'Applications' : 'Anwendungen'}</h4>
            <ul>
              {applicationNavigation.map((item) => <li key={item.key}><Link href={localePath(currentLocale, item.path[currentLocale])}>{item.name[currentLocale]}{item.key === 'fire' ? (isEnglish ? ' · Development' : ' · Entwicklung') : ''}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4>{isEnglish ? 'Evidence' : 'Nachweise'}</h4>
            <ul>
              <li><Link href={isEnglish ? localePath('en', 'evidence') : localePath('de', 'nachweise')}>{isEnglish ? 'Testing & Evidence' : 'Prüfungen & Evidenz'}</Link></li>
              <li><Link href={isEnglish ? localePath('en', 'evidence/EVD-PT-THERM-001') : localePath('de', 'nachweise/EVD-PT-THERM-001')}>{isEnglish ? 'Thermal conductivity THERM 4410' : 'Wärmeleitfähigkeit THERM 4410'}</Link></li>
              <li><Link href={isEnglish ? localePath('en', 'products/pure-thermo#u-wert-rechner') : localePath('de', 'produkte/pure-thermo#u-wert-rechner')}>{isEnglish ? 'Calculations & models' : 'Berechnungen & Modelle'}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{isEnglish ? 'Contact' : 'Kontakt'}</h4>
            <ul>
              <li><Link href={projectRequestPath(currentLocale)}>{isEnglish ? 'Discuss a project' : 'Projekt besprechen'}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{isEnglish ? 'Legal' : 'Rechtliches'}</h4>
            <ul>
              <li><Link href={localePath(currentLocale, isEnglish ? 'imprint' : 'impressum')}>{isEnglish ? 'Imprint' : 'Impressum'}</Link></li>
              <li><Link href={localePath(currentLocale, isEnglish ? 'privacy' : 'datenschutz')}>{isEnglish ? 'Privacy' : 'Datenschutz'}</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          © {new Date().getFullYear()} PURE PARTS Technology Platform
        </div>
      </div>
    </footer>
  );
}
