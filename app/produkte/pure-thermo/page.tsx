import type { Metadata } from 'next';
import Link from 'next/link';
import { getContentByPath, extractListItems, extractSubsections, stripEditorialNotes, beforeFirstHeading } from '@/lib/content';
import {
  getProductBySlug,
  getSystemsByProduct,
  getValueById,
  getEvidenceByProduct,
  getDocumentById,
  getOrganizationById,
  getMarketById
} from '@/lib/data';
import { Breadcrumb } from '@/components/Breadcrumb';
import { MaturityBadge } from '@/components/MaturityBadge';
import { MarketBadge } from '@/components/MarketBadge';
import { SystemCard } from '@/components/SystemCard';
import { TechnicalValue } from '@/components/TechnicalValue';
import { EvidenceCard } from '@/components/EvidenceCard';
import { DocumentCard } from '@/components/DocumentCard';

export const metadata: Metadata = { title: 'Pure Thermo · PURE Technology Platform' };

const CORE_VALUE_IDS = [
  'VAL-PT-LAMBDA-001',
  'VAL-PT-V-001',
  'VAL-PT-SD-001',
  'VAL-PT-MU-001',
  'VAL-PT-CONSUMPTION-001',
  'VAL-PT-SPRAY-LAYER-001',
  'VAL-PT-R-05MM-001',
  'VAL-PT-R-10MM-001',
  'VAL-PT-R-20MM-001',
  'VAL-PT-R-30MM-001'
];

const SYSTEM_HREFS: Record<string, string> = {
  'SYS-PT-INT-001': '/systeme/pure-thermo-interior'
};

export default function PureThermoPage() {
  const product = getProductBySlug('pure-thermo');
  if (!product) return null;

  const content = getContentByPath('products/pure-thermo.de.md');
  const positioningSection = content.getSection('Thermische Funktionsbeschichtung');
  const statusSubsections = extractSubsections(positioningSection?.html);
  const technicalStatus = statusSubsections.find((s) => s.heading === 'Technischer Status');
  const marketStatus = statusSubsections.find((s) => s.heading === 'Marktstatus');

  const notUniversalSection = content.getSection('Nicht als Universalersatz');
  const notUniversalIntro = beforeFirstHeading(notUniversalSection?.html);
  const applicationFields = extractListItems(notUniversalSection?.html);

  const materialSection = content.getSection('Materialarchitektur');
  const materialHtml = stripEditorialNotes(materialSection?.html);

  const lambdaValue = getValueById('VAL-PT-LAMBDA-001');
  const values = CORE_VALUE_IDS.map((id) => getValueById(id)).filter((v): v is NonNullable<typeof v> => Boolean(v));

  const systems = getSystemsByProduct(product.id);
  const evidenceRecords = getEvidenceByProduct(product.id);
  const kiwaDoc = getDocumentById('DOC-PT-KIWA-001');
  const kiwaOrg = kiwaDoc?.organization_id ? getOrganizationById(kiwaDoc.organization_id) : undefined;

  const provenSection = content.getSection('Was ist bereits nachgewiesen');
  const limitsSection = content.getSection('Technische Grenzen');
  const faqSection = content.getSection('FAQ');
  const faqItems = extractSubsections(faqSection?.html);

  return (
    <>
      <Breadcrumb items={[{ label: 'Start', href: '/' }, { label: 'Produkte' }, { label: 'Pure Thermo' }]} />

      <section className="hero" style={{ paddingTop: 'var(--space-6)', paddingBottom: 'var(--space-5)' }}>
        <div className="container">
          <p className="hero__eyebrow">Produkt</p>
          <h1>Pure Thermo</h1>
          <p className="hero__subtitle">
            Thermische Funktionsbeschichtung für anspruchsvolle Bestands-, Detail- und Sonderanwendungen.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.75)' }}>
            geringe Aufbauhöhe · spritzbare Verarbeitung · bauphysikalisch bewertbar
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div>
              <h3>Technischer Status</h3>
              {technicalStatus ? <MaturityBadge label={technicalStatus.text} /> : null}
            </div>
            <div>
              <h3>Marktstatus</h3>
              {marketStatus ? <MaturityBadge label={marketStatus.text} /> : null}
              <div style={{ marginTop: 'var(--space-2)' }}>
                {product.market_priority?.map((id) => {
                  const market = getMarketById(id);
                  return market ? <MarketBadge key={id} market={market} /> : null;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-heading">
            <h2>Nicht als Universalersatz – sondern dort, wo geringe Aufbauhöhe entscheidend wird.</h2>
            <div className="prose" dangerouslySetInnerHTML={{ __html: notUniversalIntro }} />
          </div>
          <h3>Typische Anwendungsfelder</h3>
          <div className="card-grid card-grid--3">
            {applicationFields.map((item) => (
              <div className="application-card" key={item.label}>
                <span className="application-card__name">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Materialarchitektur für eine dünne thermische Funktionsschicht.</h2>
            <div className="prose" dangerouslySetInnerHTML={{ __html: materialHtml }} />
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-heading">
            <h2>Systemrouten</h2>
          </div>
          <div className="card-grid card-grid--3">
            {systems.map((system) => (
              <SystemCard key={system.id} system={system} href={SYSTEM_HREFS[system.id]} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="kennwerte">
        <div className="container">
          <div className="section-heading">
            <h2>Technische Kernwerte</h2>
          </div>
          {lambdaValue?.product_mapping?.warning_de ? (
            <div className="warning-panel" role="alert">
              <span className="warning-panel__label">Produktzuordnungswarnung THERM 4410</span>
              Für THERM 4410 wurde λ = 0,0335 ± 0,0003 W/(m·K) extern geprüft. Die eindeutige Zuordnung zur aktuellen
              Pure-Thermo-Rezeptur wird noch dokumentiert.
            </div>
          ) : null}
          <div className="technical-value-grid">
            {values.map((value) => (
              <TechnicalValue key={value.id} value={value} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-heading">
            <h2>Evidenz- und Nachweisstatus</h2>
          </div>
          <div className="card-grid card-grid--3">
            {evidenceRecords.map((evidence) => (
              <EvidenceCard
                key={evidence.id}
                evidence={evidence}
                href={`/nachweise/${evidence.id}`}
                sourceLabel={evidence.organization_id ? getOrganizationById(evidence.organization_id)?.name : undefined}
              />
            ))}
          </div>
          {provenSection ? (
            <div className="prose" style={{ marginTop: 'var(--space-4)' }} dangerouslySetInnerHTML={{ __html: provenSection.html }} />
          ) : null}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Technische Grenzen</h2>
          </div>
          {limitsSection ? <div className="prose" dangerouslySetInnerHTML={{ __html: limitsSection.html }} /> : null}
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-heading">
            <h2>Referenzprogramm</h2>
            <p>Referenzprogramm im Aufbau.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Downloads</h2>
          </div>
          <div className="card-grid card-grid--3">
            {kiwaDoc ? <DocumentCard document={kiwaDoc} organization={kiwaOrg} /> : null}
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-heading">
            <h2>FAQ</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            {faqItems.map((item) => (
              <details key={item.heading} style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-3)' }}>
                <summary style={{ fontWeight: 600, cursor: 'pointer', color: 'var(--color-navy)' }}>{item.heading}</summary>
                <p style={{ marginTop: 'var(--space-2)' }}>{item.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Link href="/nachweise/EVD-PT-THERM-001">Zum Nachweis: Wärmeleitfähigkeit THERM 4410 →</Link>
        </div>
      </section>
    </>
  );
}
