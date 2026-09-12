import Link from 'next/link';
import { LightboxFigure } from './LightboxFigure';
import { PureThermoUValueCalculator } from './PureThermoUValueCalculator';
import { ThermoParityHero } from './ProductParityHero';

export function PureThermoEnglishPage() {
  return (
    <>
      <ThermoParityHero eyebrow="PURE THERMO" title="Thermal function at minimal build-up height." subtitle="A thin, applicable coating technology for thermally relevant component areas, complex geometries and applications with limited installation space." primary={{ label: 'Explore the calculation model', href: '#u-wert-rechner' }} secondary={{ label: 'Technical evidence', href: '/en/evidence/EVD-PT-THERM-001' }} />
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
