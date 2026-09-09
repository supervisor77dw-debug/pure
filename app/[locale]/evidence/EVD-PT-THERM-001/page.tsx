import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getEvidenceById, getValueById, getOrganizationById, getDocumentById, getSystemById } from '@/lib/data';
import { Breadcrumb } from '@/components/Breadcrumb';
import { EvidenceBadge } from '@/components/EvidenceBadge';
import { EvidenceScope } from '@/components/EvidenceScope';
import { TechnicalTable } from '@/components/TechnicalTable';
import { DocumentCard } from '@/components/DocumentCard';
import { VersionHistory } from '@/components/VersionHistory';
import { RelatedContent } from '@/components/RelatedContent';

export const metadata: Metadata = {
  title: 'Evidence: Thermal conductivity THERM 4410 · PURE Technology Platform',
  description: 'External test evidence for the thermal conductivity of THERM 4410 under documented conditions.'
};

const RELATED_R_VALUE_IDS = ['VAL-PT-R-05MM-001', 'VAL-PT-R-10MM-001', 'VAL-PT-R-20MM-001', 'VAL-PT-R-30MM-001'];
const RELATED_SYSTEM_IDS = ['SYS-PT-INT-001', 'SYS-PT-EXT-001', 'SYS-PT-DET-001'];
const CONDITIONS = [
  ['Specimen thickness', '8.33 mm'],
  ['Wet bulk density', '232.6 kg/m³'],
  ['Dry bulk density', '227.8 kg/m³'],
  ['Moisture content', '2.12 %'],
  ['Heat flux density', '60.24 W/m²'],
  ['Thermal resistance R', '0.249 m²K/W'],
  ['Mean temperature', '10 °C'],
  ['Temperature difference', '15 K'],
  ['Test pressure', '1,000 Pa']
];

export default function EnglishEvidencePage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'en') notFound();
  const evidence = getEvidenceById('EVD-PT-THERM-001');
  if (!evidence) return null;
  const lambdaValue = getValueById('VAL-PT-LAMBDA-001');
  const organization = evidence.organization_id ? getOrganizationById(evidence.organization_id) : undefined;
  const document = evidence.document_id ? getDocumentById(evidence.document_id) : undefined;
  const relatedValues = [lambdaValue, ...RELATED_R_VALUE_IDS.map((id) => getValueById(id))].filter((value): value is NonNullable<typeof value> => Boolean(value));
  const relatedSystems = RELATED_SYSTEM_IDS.map((id) => getSystemById(id)).filter((system): system is NonNullable<typeof system> => Boolean(system));

  return (
    <>
      <Breadcrumb items={[{ label: 'Home', href: '/en' }, { label: 'Evidence' }, { label: 'THERM 4410 thermal conductivity' }]} />
      <section className="section" style={{ paddingBottom: 'var(--space-4)' }}>
        <div className="container">
          <EvidenceBadge evidenceClass={evidence.evidence_class} sourceLabel={organization?.name} />
          <h1 style={{ marginTop: 'var(--space-3)' }}>Determination of the thermal conductivity of THERM 4410</h1>
          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginTop: 'var(--space-4)' }}>
            <div><p className="technical-value__label">Standard</p><p>{evidence.standard?.designation}</p></div>
            <div><p className="technical-value__label">Laboratory</p><p>{organization ? `${organization.name}${organization.unit ? ` · ${organization.unit}` : ''}` : '—'}</p></div>
            <div><p className="technical-value__label">Report number</p><p>{evidence.report_number}</p></div>
            <div><p className="technical-value__label">Report date</p><p>{evidence.report_date} {evidence.test_period ? `· Test period ${evidence.test_period}` : ''}</p></div>
          </div>
        </div>
      </section>
      <section className="section section--surface" style={{ textAlign: 'center' }}><div className="container"><p className="technical-value__label">Central test result</p>{lambdaValue ? <p style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 700, color: 'var(--color-navy)', margin: 0 }}>{lambdaValue.symbol} = {lambdaValue.value} ± {lambdaValue.uncertainty} {lambdaValue.unit}</p> : null}<p style={{ color: 'var(--color-text-muted)' }}>Thermal conductivity at {String(lambdaValue?.conditions?.mean_temperature_c ?? '—')} °C mean temperature · Test subject: {evidence.tested_subject?.designation}</p></div></section>
      <section className="section"><div className="container"><div className="section-heading"><h2>Test conditions</h2></div><table className="technical-table"><thead><tr><th>Parameter</th><th>Value</th></tr></thead><tbody>{CONDITIONS.map(([label, value]) => <tr key={label}><td data-label="Parameter">{label}</td><td data-label="Value">{value}</td></tr>)}</tbody></table></div></section>
      <section className="section section--surface"><div className="container"><EvidenceScope proves={['Thermal conductivity of the tested THERM 4410 free film under the documented test conditions.']} doesNotProve={['General building energy savings', 'Fire classification', 'General KfW / BEG / GEG funding eligibility', 'Transferability to changed formulations', 'Transferability to arbitrary substrates', 'Release of complete Pure Thermo system build-ups']} /></div></section>
      <section className="section"><div className="container"><div className="warning-panel" role="alert"><span className="warning-panel__label">Product assignment — documentation pending</span>The test subject is identified as <strong>THERM 4410</strong> in the Kiwa report. Before using this value without limitation as an approved Pure Thermo product value, the identity and unambiguous formulation assignment to the current Pure Thermo version must be documented.</div></div></section>
      <section className="section section--surface"><div className="container"><div className="section-heading"><h2>Related values</h2><p>Calculated R-values are <strong>C</strong> evidence and are not additional measurements.</p></div><TechnicalTable values={relatedValues} /></div></section>
      <section className="section"><div className="container"><RelatedContent heading="Related systems" items={relatedSystems.map((system) => ({ title: system.name.de ?? system.id, description: system.public_summary_de, href: system.id === 'SYS-PT-INT-001' ? '/en/systems/pure-thermo-interior' : '/en/products/pure-thermo' }))} /></div></section>
      <section className="section section--surface"><div className="container"><div className="section-heading"><h2>Original document</h2></div><div className="card-grid card-grid--3">{document ? <DocumentCard document={document} organization={organization} /> : null}</div></div></section>
      <section className="section"><div className="container"><div className="section-heading"><h2>Change history</h2></div><VersionHistory entries={[{ date: '2025-06-10', text: 'Kiwa test report P000517940 created.' }, { date: '2026-09-08', text: 'Evidence record added to the PURE web data model.' }, { date: 'Open', text: 'Confirm THERM 4410 assignment to the current Pure Thermo version.' }]} /></div></section>
    </>
  );
}
