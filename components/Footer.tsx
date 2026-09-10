'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { localePath, type Locale } from '@/lib/i18n';

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
            <h4>PURE Technology Platform</h4>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem' }}>
              {isEnglish ? 'Functional coating technologies with a shared development, testing and documentation logic.' : 'Funktionale Beschichtungstechnologien mit gemeinsamer Entwicklungs-, Prüf- und Dokumentationslogik.'}
            </p>
          </div>
          <div>
            <h4>{isEnglish ? 'Products' : 'Produkte'}</h4>
            <ul>
              <li><Link href={isEnglish ? localePath('en', 'products/pure-thermo') : localePath('de', 'produkte/pure-thermo')}>Pure Thermo</Link></li>
              <li><Link href={isEnglish ? localePath('en', 'products/pure-liquid-heat') : localePath('de', 'pure-liquid-heat')}>Pure Liquid Heat</Link></li>
              <li><Link href={isEnglish ? localePath('en', 'products/pure-surface-protect') : localePath('de', 'produkte/pure-surface-protect')}>Pure Surface Protect</Link></li>
            </ul>
          </div>
          <div>
            <h4>{isEnglish ? 'Systems' : 'Systeme'}</h4>
            <ul>
              <li><Link href={isEnglish ? localePath('en', 'systems/pure-thermo-interior') : localePath('de', 'systeme/pure-thermo-interior')}>Pure Thermo Interior</Link></li>
              <li><Link href={isEnglish ? localePath('en', 'systems/pure-thermo-exterior') : localePath('de', 'systeme/pure-thermo-exterior')}>Pure Thermo Exterior</Link></li>
              <li><Link href={isEnglish ? localePath('en', 'systems/pure-thermo-detail') : localePath('de', 'systeme/pure-thermo-detail')}>Pure Thermo Detail</Link></li>
              <li><Link href={isEnglish ? localePath('en', 'systems/pure-thermo-fire') : localePath('de', 'systeme/pure-thermo-fire')}>Pure Thermo + Pure Fire</Link></li>
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
              <li><Link href={isEnglish ? localePath('en', 'products/pure-thermo') : localePath('de', 'produkte/pure-thermo')}>{isEnglish ? 'Discuss a project' : 'Projekt besprechen'}</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          © {new Date().getFullYear()} PURE Technology Platform
        </div>
      </div>
    </footer>
  );
}
