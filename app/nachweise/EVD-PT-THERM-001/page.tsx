import type { Metadata } from 'next';
import {
  getContentByPath,
  extractTableRows
} from '@/lib/content';
import {
  getEvidenceById,
  getValueById,
  getOrganizationById,
  getDocumentById,
  getSystemById
} from '@/lib/data';
import { Breadcrumb } from '@/components/Breadcrumb';
import { EvidenceBadge } from '@/components/EvidenceBadge';
import { EvidenceScope } from '@/components/EvidenceScope';
import { TechnicalTable } from '@/components/TechnicalTable';
import { DocumentCard } from '@/components/DocumentCard';
import { VersionHistory, parseChangelogHtml } from '@/components/VersionHistory';
import { RelatedContent } from '@/components/RelatedContent';

export const metadata: Metadata = { title: 'Nachweis: Wärmeleitfähigkeit THERM 4410 · PURE Technology Platform' };

const RELATED_R_VALUE_IDS = ['VAL-PT-R-05MM-001', 'VAL-PT-R-10MM-001', 'VAL-PT-R-20MM-001', 'VAL-PT-R-30MM-001'];
const RELATED_SYSTEM_IDS = ['SYS-PT-INT-001', 'SYS-PT-EXT-001', 'SYS-PT-DET-001'];

export default function EvidencePage() {
  const evidence = getEvidenceById('EVD-PT-THERM-001');
  if (!evidence) return null;

  const content = getContentByPath('evidence/EVD-PT-THERM-001.de.md');
  const conditionRows = extractTableRows(content.getSection('Prüfbedingungen')?.html);
  const changelog = parseChangelogHtml(content.getSection('Änderungshistorie')?.html ?? '');

  const lambdaValue = getValueById('VAL-PT-LAMBDA-001');
  const organization = evidence.organization_id ? getOrganizationById(evidence.organization_id) : undefined;
  const document = evidence.document_id ? getDocumentById(evidence.document_id) : undefined;

  const relatedValues = [lambdaValue, ...RELATED_R_VALUE_IDS.map((id) => getValueById(id))].filter(
    (v): v is NonNullable<typeof v> => Boolean(v)
  );
  const relatedSystems = RELATED_SYSTEM_IDS.map((id) => getSystemById(id)).filter(
    (s): s is NonNullable<typeof s> => Boolean(s)
  );

  return (
    <>
      <Breadcrumb items={[{ label: 'Start', href: '/de' }, { label: 'Nachweise' }, { label: 'THERM 4410 Wärmeleitfähigkeit' }]} />

      <section className="section" style={{ paddingBottom: 'var(--space-4)' }}>
        <div className="container">
          <EvidenceBadge evidenceClass={evidence.evidence_class} sourceLabel={organization?.name} />
          <h1 style={{ marginTop: 'var(--space-3)' }}>{evidence.title.de}</h1>
          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginTop: 'var(--space-4)' }}>
            <div>
              <p className="technical-value__label">Norm</p>
              <p>{evidence.standard?.designation}</p>
            </div>
            <div>
              <p className="technical-value__label">Institut</p>
              <p>{organization ? `${organization.name}${organization.unit ? ` · ${organization.unit}` : ''}` : '—'}</p>
            </div>
            <div>
              <p className="technical-value__label">Prüfberichtnummer</p>
              <p>{evidence.report_number}</p>
            </div>
            <div>
              <p className="technical-value__label">Berichtsdatum</p>
              <p>{evidence.report_date} {evidence.test_period ? `· Prüfzeitraum ${evidence.test_period}` : ''}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface" style={{ textAlign: 'center' }}>
        <div className="container">
          <p className="technical-value__label">Zentrales Prüfergebnis</p>
          {lambdaValue ? (
            <p style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 700, color: 'var(--color-navy)', margin: 0 }}>
              {lambdaValue.symbol} = {lambdaValue.value} ± {lambdaValue.uncertainty} {lambdaValue.unit}
            </p>
          ) : null}
          <p style={{ color: 'var(--color-text-muted)' }}>
            Wärmeleitfähigkeit bei {String(lambdaValue?.conditions?.mean_temperature_c ?? '—')} °C Mitteltemperatur ·
            Prüfgegenstand: {evidence.tested_subject?.designation}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Prüfbedingungen</h2>
          </div>
          <table className="technical-table">
            <thead>
              <tr><th scope="col">Kennwert</th><th scope="col">Wert</th></tr>
            </thead>
            <tbody>
              {conditionRows.map((row) => (
                <tr key={row[0]}>
                  <td data-label="Kennwert">{row[0]}</td>
                  <td data-label="Wert">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <EvidenceScope
            proves={evidence.scope?.proves_de ?? []}
            doesNotProve={evidence.scope?.does_not_automatically_prove_de ?? []}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="warning-panel" role="alert">
            <span className="warning-panel__label">Produktzuordnung — noch zu dokumentieren</span>
            Der Prüfgegenstand wird im Kiwa-Bericht als <strong>THERM 4410</strong> bezeichnet. Vor uneingeschränkter
            Verwendung des Kennwertes als freigegebener Pure-Thermo-Produktkennwert muss die Identität bzw.
            eindeutige Rezepturzuordnung zur aktuellen Pure-Thermo-Version dokumentiert werden.
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-heading">
            <h2>Verknüpfte Kennwerte</h2>
            <p>Berechnete R-Werte sind <strong>C</strong>-Evidenz und keine zusätzlichen Messwerte.</p>
          </div>
          <TechnicalTable values={relatedValues} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <RelatedContent
            heading="Verknüpfte Systeme"
            items={relatedSystems.map((s) => ({
              title: s.name.de ?? s.id,
              description: s.public_summary_de,
              href: s.id === 'SYS-PT-INT-001' ? '/de/systeme/pure-thermo-interior' : '/de/produkte/pure-thermo'
            }))}
          />
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-heading">
            <h2>Originaldokument</h2>
          </div>
          <div className="card-grid card-grid--3">
            {document ? <DocumentCard document={document} organization={organization} /> : null}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Änderungshistorie</h2>
          </div>
          <VersionHistory entries={changelog} />
        </div>
      </section>
    </>
  );
}
