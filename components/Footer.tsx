import Link from 'next/link';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <h4>PURE Technology Platform</h4>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem' }}>
              Funktionale Beschichtungstechnologien mit gemeinsamer Entwicklungs-, Prüf- und Dokumentationslogik.
            </p>
          </div>
          <div>
            <h4>Technologie</h4>
            <ul>
              <li><Link href="/produkte/pure-thermo">Pure Thermo</Link></li>
              <li><Link href="/systeme/pure-thermo-interior">Pure Thermo Interior</Link></li>
            </ul>
          </div>
          <div>
            <h4>Nachweise</h4>
            <ul>
              <li><Link href="/nachweise/EVD-PT-THERM-001">Wärmeleitfähigkeit THERM 4410</Link></li>
            </ul>
          </div>
          <div>
            <h4>Kontakt</h4>
            <ul>
              <li><Link href="/produkte/pure-thermo">Projekt besprechen</Link></li>
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
