import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getSystemById, getEvidenceById, getDocumentById, getOrganizationById } from '@/lib/data';
import { Breadcrumb } from '@/components/Breadcrumb';
import { EvidenceBadge } from '@/components/EvidenceBadge';
import { EvidenceCard } from '@/components/EvidenceCard';
import { LayerDiagram } from '@/components/LayerDiagram';

export const metadata: Metadata = { title: 'Pure Thermo Interior · PURE Technology Platform', description: 'Defined development route for thermal interior, existing-building and detail applications.' };

const STATUS_LABELS: Record<string, string> = { system_definition_and_test_program: 'System definition / test programme', conditional: 'conditional', public_with_limitation: 'public with limitation' };
const APPLICATIONS = ['Interior and existing-building walls', 'Cellars and cold interior surfaces', 'Reveals, connections and details'];
const SUBSTRATES = [['Concrete', 'intended', 'Define final pretreatment and adhesion test route.'], ['Mineral render', 'intended', 'Check substrate strength and compatibility.'], ['Masonry', 'intended', 'Object-specific preparation required.'], ['Gypsum / drywall', 'not generally released', 'Separate testing required.'], ['Wood', 'not part of this route', 'Separate system route required.'], ['Steel', 'not part of this route', 'Industrial / special route separately.']];

export default function EnglishInteriorPage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'en') notFound();
  const system = getSystemById('SYS-PT-INT-001');
  if (!system) return null;
  const evidence = getEvidenceById('EVD-PT-THERM-001');
  const document = getDocumentById('DOC-PT-KIWA-001');
  const organization = document?.organization_id ? getOrganizationById(document.organization_id) : undefined;
  return (
    <>
      <Breadcrumb items={[{ label: 'Home', href: '/en' }, { label: 'Systems' }, { label: 'Pure Thermo Interior' }]} />
      <section className="hero" style={{ paddingTop: 'var(--space-6)', paddingBottom: 'var(--space-5)' }}><div className="container"><p className="hero__eyebrow">System · Development route</p><h1>Pure Thermo Interior</h1><p className="hero__subtitle">Defined development route for thermal interior, existing-building and detail applications.</p><ul className="hero__meta" style={{ listStyle: 'none', padding: 0 }}><li className="hero__meta-item">System ID: {system.id}</li><li className="hero__meta-item">Version: {system.version}</li><li className="hero__meta-item">Status: {STATUS_LABELS[system.status.maturity] ?? system.status.maturity.replace(/_/g, ' ')}</li></ul><div style={{ marginTop: 'var(--space-3)' }}><EvidenceBadge evidenceClass={system.evidence_class} /></div></div></section>
      <div className="warning-panel container" role="note" style={{ marginTop: 'var(--space-5)' }}><span className="warning-panel__label">Important maturity note</span>This page describes a system definition and an ongoing test programme, not a completed building-authority approval.</div>
      <section className="section"><div className="container"><div className="section-heading"><h2>Application scope</h2></div><div className="card-grid" style={{ gridTemplateColumns: '1fr 1fr' }}><div><h3>Intended applications</h3><div className="card-grid card-grid--3">{APPLICATIONS.map((item) => <article className="application-card" key={item}><strong className="application-card__name">{item}</strong></article>)}</div></div><div><h3>Not generally released yet</h3><p style={{ color: 'var(--color-text-muted)' }}>Arbitrary organic substrates, wood, steel, gypsum / drywall systems without separate testing, and actively damp components are not generally released for this route.</p></div></div></div></section>
      <section className="section section--surface"><div className="container"><div className="section-heading"><h2>Layer build-up — working status</h2></div><LayerDiagram layers={system.layers ?? []} accent="var(--color-thermo)" /><p className="warning-panel" role="note" style={{ marginTop: 'var(--space-4)' }}><span className="warning-panel__label">Important</span>Layer thickness per spray pass is not automatically the released total system thickness.</p></div></section>
      <section className="section"><div className="container"><div className="section-heading"><h2>Substrate matrix — starting point</h2></div><div className="substrate-matrix"><table className="substrate-matrix__table technical-table"><thead><tr><th>Substrate</th><th>Status</th><th>Remark</th></tr></thead><tbody>{SUBSTRATES.map(([name, status, remark]) => <tr key={name}><td data-label="Substrate">{name}</td><td data-label="Status">{status}</td><td data-label="Remark">{remark}</td></tr>)}</tbody></table></div></div></section>
      <section className="section section--surface"><div className="container"><div className="section-heading"><h2>Existing technical basis</h2><p>An external core test exists for the product-side thermal value foundation. Assignment to the current Pure Thermo formulation is still being documented.</p><Link href="/en/products/pure-thermo#kennwerte">View Pure Thermo technical core values →</Link></div></div></section>
      <section className="section"><div className="container"><div className="section-heading"><h2>System tests still to be closed</h2></div><div className="prose"><ul><li>Clear final product / formulation assignment</li><li>Final system build-up</li><li>VOC / interior air</li><li>Adhesion on defined substrates</li><li>Water / moisture behaviour in the system</li><li>Hygrothermal assessment</li><li>Minimum fire behaviour</li><li>Object-specific mould / condensation assessment</li><li>Final technical data sheet</li><li>Application and quality-assurance guide</li></ul></div></div></section>
      <section className="section section--surface"><div className="container"><div className="section-heading"><h2>Application process</h2></div><div className="prose"><ol><li>Assess substrate and moisture cause.</li><li>Prepare the substrate.</li><li>Apply defined pretreatment / primer.</li><li>Apply Pure Thermo according to the released system build-up.</li><li>Document drying and layer thickness.</li><li>Use an optional finish only after system release.</li><li>Complete quality control and site documentation.</li></ol></div></div></section>
      <section className="section"><div className="container"><div className="section-heading"><h2>Quality assurance</h2></div><div className="prose"><p>Document object and component, substrate type and condition, moisture assessment, batch number, temperature, relative humidity, consumption, layer thickness, application date, photographs, applying contractor and release / acceptance.</p></div></div></section>
      <section className="section section--surface"><div className="container"><div className="section-heading"><h2>Technical limits</h2></div><div className="prose"><ul><li>No sealing against constructive or penetrating moisture.</li><li>No general energy-performance release.</li><li>No general substrate release.</li><li>No general mould-prevention claim.</li><li>No general funding claim.</li></ul></div></div></section>
      <section className="section"><div className="container"><div className="section-heading"><h2>Evidence</h2></div><div className="card-grid card-grid--3">{evidence ? <EvidenceCard evidence={evidence} href={`/en/evidence/${evidence.id}`} sourceLabel={organization?.name} /> : null}</div></div></section>
    </>
  );
}
