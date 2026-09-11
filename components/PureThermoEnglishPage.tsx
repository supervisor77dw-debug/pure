import Link from 'next/link';
import { LightboxFigure } from './LightboxFigure';
import { PureThermoUValueCalculator } from './PureThermoUValueCalculator';
import { ProductHeroAmbient } from './ProductHeroAmbient';

export function PureThermoEnglishPage() {
  return (
    <>
      <ProductHeroAmbient variant="thermo" motionEnabled className="pure-thermo-hero" style={{ paddingTop: 'var(--space-6)', paddingBottom: 'var(--space-5)' }}>
        <div className="container">
          <p className="hero__eyebrow">PURE THERMO</p>
          <h1>Thermal function at minimal build-up height.</h1>
          <p className="hero__subtitle">A thin, applicable coating technology for thermally relevant component areas, complex geometries and applications with limited installation space.</p>
          <div className="hero__ctas"><Link className="btn btn--primary" href="#u-wert-rechner">Explore the calculation model</Link><Link className="btn btn--secondary" href="/en/evidence/EVD-PT-THERM-001">Technical evidence</Link></div>
        </div>
      </ProductHeroAmbient>
      <section className="section">
        <div className="container">
          <LightboxFigure
            file="Moderne Gebäudeisolierung im Querschnitt_eng.png"
            alt="PURE THERMO application overview for facade, roof, balcony, ceiling, floor, base areas and interior spaces"
            caption="Application overview: PURE THERMO for thermally relevant building areas with project-specific system assessment."
            zoomLabel="Enlarge"
            closeLabel="Close"
            priority
          />
        </div>
      </section>
      <PureThermoUValueCalculator locale="en" />
      <section className="section"><div className="container"><div className="warning-panel"><span className="warning-panel__label">EN_TRANSLATION_PENDING</span>The complete English Pure Thermo product narrative is under technical review. The calculation model above is available with its defined assumptions and limitations.</div></div></section>
    </>
  );
}
