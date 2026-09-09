import Link from 'next/link';
import { localePath, type Locale } from '@/lib/i18n';

export function Footer({ locale = 'de' }: { locale?: Locale }) {
  const isEnglish = locale === 'en';
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
            <h4>{isEnglish ? 'Technology' : 'Technologie'}</h4>
            <ul>
              <li><Link href={isEnglish ? localePath('en', 'products/pure-thermo') : localePath('de', 'produkte/pure-thermo')}>Pure Thermo</Link></li>
              <li><Link href={isEnglish ? localePath('en', 'systems/pure-thermo-interior') : localePath('de', 'systeme/pure-thermo-interior')}>Pure Thermo Interior</Link></li>
            </ul>
          </div>
          <div>
            <h4>{isEnglish ? 'Evidence' : 'Nachweise'}</h4>
            <ul>
              <li><Link href={isEnglish ? localePath('en', 'evidence/EVD-PT-THERM-001') : localePath('de', 'nachweise/EVD-PT-THERM-001')}>{isEnglish ? 'Thermal conductivity THERM 4410' : 'Wärmeleitfähigkeit THERM 4410'}</Link></li>
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
