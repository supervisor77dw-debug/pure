import type { Metadata } from 'next';
import Link from 'next/link';
import {
  getContentByPath,
  extractSubsections,
  extractTableRows
} from '@/lib/content';
import {
  getSystemById,
  getApplicationsByIds,
  getEvidenceById,
  getDocumentById,
  getOrganizationById
} from '@/lib/data';
import { Breadcrumb } from '@/components/Breadcrumb';
import { EvidenceBadge } from '@/components/EvidenceBadge';
import { ApplicationCard } from '@/components/ApplicationCard';
import { LayerDiagram } from '@/components/LayerDiagram';
import { SubstrateMatrix } from '@/components/SubstrateMatrix';
import { EvidenceCard } from '@/components/EvidenceCard';
import { DocumentCard } from '@/components/DocumentCard';
import { TechnicalVisual } from '@/components/TechnicalVisual';

export const metadata: Metadata = { title: 'Pure Thermo Interior · PURE Technology Platform' };

const STATUS_LABELS: Record<string, string> = {
  system_definition_and_test_program: 'Systemdefinition / Prüfprogramm',
  conditional: 'bedingt',
  public_with_limitation: 'öffentlich mit Einschränkung'
};

export default function PureThermoInteriorPage() {
  const system = getSystemById('SYS-PT-INT-001');
  if (!system) return null;

  const content = getContentByPath('systems/pure-thermo-interior.de.md');
  const einsatzSection = content.getSection('Einsatzbereich');
  const einsatzSubsections = extractSubsections(einsatzSection?.html);
  const vorgeseheneAnwendungen = einsatzSubsections.find((s) => s.heading.startsWith('Vorgesehene'));
  const nichtFreigegeben = einsatzSubsections.find((s) => s.heading.startsWith('Noch nicht'));

  const untergrundRows = extractTableRows(content.getSection('Untergrundmatrix')?.html).map((r) => ({
    name: r[0],
    status: r[1],
    remark: r[2]
  }));

  const offenSection = content.getSection('Noch zu schließende Systemprüfungen');
  const verarbeitungSection = content.getSection('Verarbeitung');
  const qsSection = content.getSection('Qualitätssicherung');
  const grenzenSection = content.getSection('Technische Grenzen');

  const applications = getApplicationsByIds(system.intended_applications ?? []);
  const thermEvidence = getEvidenceById('EVD-PT-THERM-001');
  const kiwaDoc = getDocumentById('DOC-PT-KIWA-001');
  const kiwaOrg = kiwaDoc?.organization_id ? getOrganizationById(kiwaDoc.organization_id) : undefined;

  return (
    <>
      <Breadcrumb items={[{ label: 'Start', href: '/' }, { label: 'Systeme' }, { label: 'Pure Thermo Interior' }]} />

      <section className="hero" style={{ paddingTop: 'var(--space-6)', paddingBottom: 'var(--space-5)' }}>
        <div className="container">
          <p className="hero__eyebrow">System · Entwicklungsroute</p>
          <h1>Pure Thermo Interior</h1>
          <p className="hero__subtitle">{system.purpose?.de}</p>
          <ul className="hero__meta" style={{ listStyle: 'none', padding: 0 }}>
            <li className="hero__meta-item">System-ID: {system.id}</li>
            <li className="hero__meta-item">Version: {system.version}</li>
            <li className="hero__meta-item">
              Status: {STATUS_LABELS[system.status.maturity] ?? system.status.maturity.replace(/_/g, ' ')}
            </li>
          </ul>
          <div style={{ marginTop: 'var(--space-3)' }}>
            <EvidenceBadge evidenceClass={system.evidence_class} />
          </div>
        </div>
      </section>

      <div className="warning-panel container" role="note" style={{ marginTop: 'var(--space-5)' }}>
        <span className="warning-panel__label">Wichtiger Reifegradhinweis</span>
        Diese Seite beschreibt eine Systemdefinition und ein laufendes Prüfprogramm — keine abgeschlossene
        bauaufsichtliche Zulassung.
      </div>

      <section className="section">
        <div className="container">
          <div className="split-section">
            <div className="split-section__text">
              <span className="section-heading__eyebrow">Problem & Route</span>
              <h2>Innenflächen brauchen thermische Wirkung ohne massiven Aufbau.</h2>
              <p>Pure Thermo Interior adressiert Innenwände, Keller, kalte Oberflächen, Laibungen und Details, bei denen klassische Dämmsysteme baulich oder konstruktiv begrenzt sind.</p>
              <p>Die Route beschreibt keinen pauschalen Schimmelschutz und keine allgemeine energetische Sanierung, sondern einen definierten Systemaufbau aus Untergrund, Primer, PURE THERMO und optionalem Finish.</p>
            </div>
            <div className="split-section__media">
              <TechnicalVisual locale="de" visual="overview" altDe="PURE THERMO Interior Anwendungssituationen im Gebäudeschnitt" altEn="PURE THERMO Interior application scenarios in a building section" captionDe="Illustrative Innenroute. Eignung, Feuchteverhalten und Systemaufbau sind objektspezifisch zu bewerten." captionEn="Illustrative interior route. Suitability, moisture behaviour and system build-up require project-specific assessment." zoomable />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Einsatzbereich</h2>
          </div>
          <div className="card-grid">
            <div>
              <h3>Vorgesehene Anwendungen</h3>
              <div className="card-grid card-grid--3">
                {applications.map((app) => (
                  <ApplicationCard key={app.id} application={app} />
                ))}
              </div>
            </div>
            <div>
              <h3>Noch nicht allgemein freigegeben</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>{nichtFreigegeben?.text}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-heading">
            <h2>Schichtaufbau – Arbeitsstand</h2>
          </div>
          <LayerDiagram layers={system.layers ?? []} accent="var(--color-thermo)" />
          <p className="warning-panel" role="note" style={{ marginTop: 'var(--space-4)' }}>
            <span className="warning-panel__label">Wichtig</span>
            Die Schichtdicke je Spritzgang ist nicht automatisch die freigegebene Gesamtsystemdicke.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Untergrundmatrix – Startzustand</h2>
          </div>
          <SubstrateMatrix rows={untergrundRows} />
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-heading">
            <h2>Vorhandene technische Basis</h2>
            <p>
              Für das produktseitige Kennwertfundament (u. a. Wärmeleitfähigkeit) liegt eine externe Kernprüfung vor —
              die Zuordnung zur aktuellen Pure-Thermo-Rezeptur wird noch dokumentiert.
            </p>
            <Link href="/produkte/pure-thermo#kennwerte">Technische Kernwerte von Pure Thermo ansehen →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Noch zu schließende Systemprüfungen</h2>
          </div>
          {offenSection ? <div className="prose" dangerouslySetInnerHTML={{ __html: offenSection.html }} /> : null}
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-heading">
            <h2>Verarbeitung</h2>
          </div>
          {verarbeitungSection ? <div className="prose" dangerouslySetInnerHTML={{ __html: verarbeitungSection.html }} /> : null}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Qualitätssicherung</h2>
          </div>
          {qsSection ? <div className="prose" dangerouslySetInnerHTML={{ __html: qsSection.html }} /> : null}
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-heading">
            <h2>Technische Grenzen</h2>
          </div>
          {grenzenSection ? <div className="prose" dangerouslySetInnerHTML={{ __html: grenzenSection.html }} /> : null}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Nachweise</h2>
          </div>
          <div className="card-grid card-grid--3">
            {thermEvidence ? (
              <EvidenceCard
                evidence={thermEvidence}
                href={`/nachweise/${thermEvidence.id}`}
                sourceLabel={thermEvidence.organization_id ? getOrganizationById(thermEvidence.organization_id)?.name : undefined}
              />
            ) : null}
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-heading">
            <h2>Dokumente</h2>
          </div>
          <div className="card-grid card-grid--3">
            {kiwaDoc ? <DocumentCard document={kiwaDoc} organization={kiwaOrg} /> : null}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="final-cta">
            <p className="final-cta__lead">Passt PURE THERMO zu Ihrem Projekt?</p>
            <h2>Technische Projektbewertung anfragen</h2>
            <div className="hero__ctas" style={{ justifyContent: 'center' }}>
              <Link className="btn btn--primary" href="/produkte/pure-thermo">Projekt prüfen lassen</Link>
              <Link className="btn btn--secondary btn--dark" href="/produkte/pure-thermo#u-wert-rechner">U-Wert berechnen</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
