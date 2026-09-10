'use client';

import { useState } from 'react';
import { EvidenceBadge } from './EvidenceBadge';
import type { Locale } from '@/lib/i18n';

const LAMBDA = 0.035;
const THICKNESS_MAX = 30;
const CHART_WIDTH = 640;
const CHART_HEIGHT = 260;
const CHART_PADDING = { top: 20, right: 24, bottom: 42, left: 58 };

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function formatNumber(value: number, locale: Locale, digits = 3) {
  return new Intl.NumberFormat(locale === 'de' ? 'de-DE' : 'en-US', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  }).format(value);
}

function parseNumber(value: string, locale: Locale) {
  const normalized = locale === 'de' ? value.replace(',', '.') : value;
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

export function PureThermoUValueCalculator({ locale }: { locale: Locale }) {
  const english = locale === 'en';
  const [existingU, setExistingU] = useState(1.5);
  const [thicknessMm, setThicknessMm] = useState(10);

  const thicknessM = thicknessMm / 1000;
  const rPure = thicknessM / LAMBDA;
  const rExisting = 1 / existingU;
  const newU = 1 / (rExisting + rPure);
  const reduction = ((existingU - newU) / existingU) * 100;

  const chartLeft = CHART_PADDING.left;
  const chartRight = CHART_WIDTH - CHART_PADDING.right;
  const chartTop = CHART_PADDING.top;
  const chartBottom = CHART_HEIGHT - CHART_PADDING.bottom;
  const chartMax = existingU;
  const chartMin = 1 / (1 / existingU + (THICKNESS_MAX / 1000) / LAMBDA);
  const x = (thickness: number) => chartLeft + (thickness / THICKNESS_MAX) * (chartRight - chartLeft);
  const y = (value: number) => chartTop + ((value - chartMin) / (chartMax - chartMin || 1)) * (chartBottom - chartTop);
  const chartPoints = Array.from({ length: 31 }, (_, thickness) => {
    const calculatedU = 1 / (1 / existingU + (thickness / 1000) / LAMBDA);
    return `${x(thickness)},${y(calculatedU)}`;
  }).join(' ');

  const setExistingFromInput = (value: string) => {
    const parsed = parseNumber(value, locale);
    if (parsed !== null) setExistingU(clamp(parsed, 0.1, 5));
  };
  const setThicknessFromInput = (value: string) => {
    const parsed = parseNumber(value, locale);
    if (parsed !== null) setThicknessMm(clamp(parsed, 0, THICKNESS_MAX));
  };

  const labels = english
    ? {
        eyebrow: 'CALCULATED BUILDING-PHYSICS MODEL',
        title: 'What is the calculated thermal effect of PURE THERMO on your building component?',
        intro: 'Enter the existing U-value and the desired PURE THERMO layer thickness. The calculator shows the additional thermal resistance and the calculated U-value of the treated building component.',
        existing: 'Existing U-value of the building component',
        thickness: 'PURE THERMO layer thickness',
        basis: 'Calculation basis λ = 0.035 W/(m·K)',
        resultR: 'Additional thermal resistance R PURE THERMO',
        resultExisting: 'Existing U-value',
        resultNew: 'Calculated new U-value',
        resultReduction: 'Calculated U-value reduction of the treated building component',
        disclaimerTitle: 'Model calculation – Evidence status C',
        disclaimer: 'This calculation shows the mathematical change in the thermal transmittance of the treated building component based on the values entered. It does not constitute a general statement on whole-building energy savings, funding eligibility or regulatory compliance. The actual system build-up must be assessed for each project.',
        kiwa: 'The external Kiwa test value of 0.0335 W/(m·K) refers to THERM 4410. Formal assignment to the current PURE THERMO version is documented separately.',
        axisX: 'PURE THERMO layer thickness (mm)',
        axisY: 'Calculated U-value (W/(m²K))'
      }
    : {
        eyebrow: 'BERECHNETES BAUPHYSIKALISCHES MODELL',
        title: 'Was bewirkt PURE THERMO rechnerisch an Ihrem Bauteil?',
        intro: 'Geben Sie den bestehenden U-Wert und die gewünschte PURE-THERMO-Schichtdicke ein. Der Rechner zeigt den zusätzlichen Wärmedurchlasswiderstand sowie den rechnerisch veränderten U-Wert der behandelten Bauteilfläche.',
        existing: 'Ausgangs-U-Wert des Bauteils',
        thickness: 'PURE-THERMO-Schichtdicke',
        basis: 'Berechnungsgrundlage λ = 0,035 W/(m·K)',
        resultR: 'Zusätzlicher Wärmedurchlasswiderstand R PURE THERMO',
        resultExisting: 'Ausgangs-U-Wert',
        resultNew: 'Neuer rechnerischer U-Wert',
        resultReduction: 'Rechnerische U-Wert-Reduktion der behandelten Bauteilfläche',
        disclaimerTitle: 'Modellrechnung – Evidenzstatus C',
        disclaimer: 'Die Berechnung zeigt die rechnerische Veränderung des Wärmedurchgangskoeffizienten der behandelten Bauteilfläche auf Basis der eingegebenen Werte. Sie stellt keine pauschale Aussage zur Energieeinsparung eines Gebäudes, keine Förderbestätigung und keinen bauaufsichtlichen Nachweis dar. Der tatsächliche Systemaufbau ist objektspezifisch zu bewerten.',
        kiwa: 'Der externe Kiwa-Prüfwert von 0,0335 W/(m·K) bezieht sich auf THERM 4410. Die formale Zuordnung zur aktuellen PURE-THERMO-Version wird separat dokumentiert.',
        axisX: 'PURE-THERMO-Schichtdicke (mm)',
        axisY: 'Rechnerischer U-Wert (W/(m²K))'
      };

  return (
    <section className="section section--surface pure-thermo-calculator" id="u-wert-rechner">
      <div className="container">
        <div className="section-heading section-heading--narrow">
          <span className="section-heading__eyebrow">{labels.eyebrow}</span>
          <h2>{labels.title}</h2>
          <p>{labels.intro}</p>
        </div>
        <div className="pure-thermo-calculator__layout">
          <div className="pure-thermo-calculator__inputs">
            <div className="pure-thermo-calculator__model-basis">
              <EvidenceBadge evidenceClass="C" />
              <span>{labels.basis}</span>
            </div>
            <label className="pure-thermo-calculator__field">
              <span>{labels.existing}</span>
              <div className="pure-thermo-calculator__control">
                <input type="number" min="0.1" max="5" step="0.01" value={existingU} onChange={(event) => setExistingFromInput(event.target.value)} inputMode="decimal" aria-label={labels.existing} />
                <span>W/(m²K)</span>
              </div>
              <input className="pure-thermo-calculator__range" type="range" min="0.1" max="5" step="0.01" value={existingU} onChange={(event) => setExistingU(Number(event.target.value))} aria-label={labels.existing} />
            </label>
            <label className="pure-thermo-calculator__field">
              <span>{labels.thickness}</span>
              <div className="pure-thermo-calculator__control">
                <input type="number" min="0" max="30" step="1" value={thicknessMm} onChange={(event) => setThicknessFromInput(event.target.value)} inputMode="numeric" aria-label={labels.thickness} />
                <span>mm</span>
              </div>
              <input className="pure-thermo-calculator__range" type="range" min="0" max="30" step="1" value={thicknessMm} onChange={(event) => setThicknessMm(Number(event.target.value))} aria-label={labels.thickness} />
            </label>
            <div className="pure-thermo-calculator__quick-selects" aria-label={labels.thickness}>
              {[5, 10, 15, 20, 30].map((value) => <button type="button" className={value === thicknessMm ? 'is-active' : ''} key={value} onClick={() => setThicknessMm(value)}>{value} mm</button>)}
            </div>
          </div>
          <div className="pure-thermo-calculator__results">
            <div className="pure-thermo-calculator__result-grid">
              <div><span>{labels.resultR}</span><strong>{formatNumber(rPure, locale)} <small>m²K/W</small></strong></div>
              <div><span>{labels.resultExisting}</span><strong>{formatNumber(existingU, locale)} <small>W/(m²K)</small></strong></div>
              <div><span>{labels.resultNew}</span><strong>{formatNumber(newU, locale)} <small>W/(m²K)</small></strong></div>
              <div><span>{labels.resultReduction}</span><strong>{formatNumber(reduction, locale, 1)} <small>%</small></strong></div>
            </div>
            <div className="pure-thermo-calculator__chart-wrap">
              <svg className="pure-thermo-calculator__chart" viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`} role="img" aria-label={labels.axisY}>
                <line x1={chartLeft} y1={chartBottom} x2={chartRight} y2={chartBottom} className="pure-thermo-calculator__axis" />
                <line x1={chartLeft} y1={chartTop} x2={chartLeft} y2={chartBottom} className="pure-thermo-calculator__axis" />
                <polyline points={chartPoints} className="pure-thermo-calculator__curve" />
                <circle cx={x(thicknessMm)} cy={y(newU)} r="6" className="pure-thermo-calculator__marker" />
                <text x={CHART_WIDTH / 2} y={CHART_HEIGHT - 8} textAnchor="middle">{labels.axisX}</text>
                <text x="14" y={CHART_HEIGHT / 2} textAnchor="middle" transform={`rotate(-90 14 ${CHART_HEIGHT / 2})`}>{labels.axisY}</text>
              </svg>
            </div>
          </div>
        </div>
        <div className="pure-thermo-calculator__disclaimer">
          <strong>{labels.disclaimerTitle}</strong>
          <p>{labels.disclaimer}</p>
          <p>{labels.kiwa}</p>
        </div>
      </div>
    </section>
  );
}
