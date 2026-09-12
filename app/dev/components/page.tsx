import type { Metadata } from 'next';
import {
  getAllProducts,
  getSystemById,
  getValueById,
  getEvidenceById,
  getDocumentById,
  getOrganizationById,
  getApplicationById,
  getMarketById
} from '@/lib/data';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Hero } from '@/components/Hero';
import { ProductCard } from '@/components/ProductCard';
import { ProductHub } from '@/components/ProductHub';
import { SystemCard } from '@/components/SystemCard';
import { ApplicationCard } from '@/components/ApplicationCard';
import { EvidenceBadge } from '@/components/EvidenceBadge';
import { EvidenceCard } from '@/components/EvidenceCard';
import { EvidenceScope } from '@/components/EvidenceScope';
import { TechnicalValue } from '@/components/TechnicalValue';
import { TechnicalTable } from '@/components/TechnicalTable';
import { LayerDiagram } from '@/components/LayerDiagram';
import { SubstrateMatrix } from '@/components/SubstrateMatrix';
import { DocumentCard } from '@/components/DocumentCard';
import { ReferenceCard } from '@/components/ReferenceCard';
import { MaturityBadge } from '@/components/MaturityBadge';
import { ReleaseBadge } from '@/components/ReleaseBadge';
import { MarketBadge } from '@/components/MarketBadge';
import { VersionHistory } from '@/components/VersionHistory';
import { RelatedContent } from '@/components/RelatedContent';
import { AssetFigure } from '@/components/AssetFigure';
import { LightboxFigure } from '@/components/LightboxFigure';

export const metadata: Metadata = { title: 'Komponentenbibliothek (Dev) · PURE Technology Platform', robots: { index: false, follow: false } };

export default function DevComponentsPage() {
  const products = getAllProducts();
  const system = getSystemById('SYS-PT-INT-001')!;
  const lambdaValue = getValueById('VAL-PT-LAMBDA-001')!;
  const values = ['VAL-PT-LAMBDA-001', 'VAL-PT-V-001', 'VAL-PT-SD-001', 'VAL-PT-MU-001'].map((id) => getValueById(id)!);
  const evidence = getEvidenceById('EVD-PT-THERM-001')!;
  const document = getDocumentById('DOC-PT-KIWA-001')!;
  const organization = getOrganizationById('ORG-KIWA')!;
  const application = getApplicationById('APP-BLD-INTERIOR-001')!;
  const market = getMarketById('MKT-P1-DACH')!;

  return (
    <div className="dev-components">
      <Breadcrumb items={[{ label: 'Start', href: '/' }, { label: 'Dev' }, { label: 'Komponenten' }]} />
      <div className="container">
        <h1>Komponentenbibliothek</h1>
        <p>
          Lebende Referenz aller wiederverwendbaren Bausteine der PURE Technology Platform. Alle Beispiele nutzen
          reale Datensätze aus <code>/data</code> und <code>/content</code> — keine erfundenen Beispielwerte.
        </p>
      </div>

      <section>
        <div className="container">
          <h2>Hero</h2>
          <div className="dev-components__demo" style={{ width: '100%' }}>
            <Hero
              eyebrow="Beispiel"
              title="Hero-Komponente"
              subtitle="Verwendet für Startseite und Produktseite."
              primaryCta={{ label: 'Primär', href: '#' }}
              secondaryCta={{ label: 'Sekundär', href: '#' }}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Breadcrumb</h2>
          <div className="dev-components__demo">
            <Breadcrumb items={[{ label: 'Start', href: '/' }, { label: 'Produkte', href: '/' }, { label: 'Pure Thermo' }]} />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>EvidenceBadge</h2>
          <div className="dev-components__demo">
            <EvidenceBadge evidenceClass="A" sourceLabel="Kiwa GmbH" />
            <EvidenceBadge evidenceClass="B" />
            <EvidenceBadge evidenceClass="C" />
            <EvidenceBadge evidenceClass="D" />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>MaturityBadge / ReleaseBadge / MarketBadge</h2>
          <div className="dev-components__demo">
            <MaturityBadge label="Externe Kernprüfung vorhanden · Systemvalidierung läuft" />
            <ReleaseBadge status="conditional" />
            <MarketBadge market={market} />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>ProductCard / ProductHub</h2>
          <div className="dev-components__demo" style={{ maxWidth: 320 }}>
            <ProductCard product={products[0]} href="/produkte/pure-thermo" />
          </div>
          <ProductHub products={products} />
        </div>
      </section>

      <section>
        <div className="container">
          <h2>SystemCard / ApplicationCard</h2>
          <div className="dev-components__demo">
            <SystemCard system={system} href="/systeme/pure-thermo-interior" />
            <ApplicationCard application={application} />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>EvidenceCard / EvidenceScope</h2>
          <div className="dev-components__demo">
            <EvidenceCard evidence={evidence} href="/nachweise/EVD-PT-THERM-001" sourceLabel={organization.name} />
          </div>
          <EvidenceScope
            proves={evidence.scope?.proves_de ?? []}
            doesNotProve={evidence.scope?.does_not_automatically_prove_de ?? []}
          />
        </div>
      </section>

      <section>
        <div className="container">
          <h2>TechnicalValue / TechnicalTable</h2>
          <div className="technical-value-grid">
            {values.map((v) => (
              <TechnicalValue key={v.id} value={v} />
            ))}
          </div>
          <div style={{ marginTop: 'var(--space-4)' }}>
            <TechnicalTable values={values} />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>LayerDiagram</h2>
          <LayerDiagram layers={system.layers ?? []} accent="var(--color-thermo)" />
        </div>
      </section>

      <section>
        <div className="container">
          <h2>SubstrateMatrix</h2>
          <SubstrateMatrix
            rows={[
              { name: 'Beton', status: 'vorgesehen', remark: 'finale Vorbehandlung/Haftzugroute definieren' },
              { name: 'Gips/Trockenbau', status: 'nicht allgemein freigegeben', remark: 'separate Prüfung erforderlich' }
            ]}
          />
        </div>
      </section>

      <section>
        <div className="container">
          <h2>DocumentCard / ReferenceCard</h2>
          <div className="dev-components__demo">
            <DocumentCard document={document} organization={organization} />
            <ReferenceCard name="Keller / kalte Oberflächen" />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>VersionHistory</h2>
          <VersionHistory
            entries={[
              { date: '10.06.2025', text: 'Kiwa-Prüfbericht P000517940 erstellt.' },
              { date: '08.09.2026', text: 'Nachweis in das PURE-Webdatenmodell aufgenommen.' }
            ]}
          />
        </div>
      </section>

      <section>
        <div className="container">
          <h2>AssetFigure / LightboxFigure</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            Einheitlicher Rahmen (Radius/Schatten/Hintergrund) für wiederverwendete Präsentationsgrafiken;
            LightboxFigure ergänzt eine vergrößerbare Ansicht für Grafiken mit viel Kleinschrift.
          </p>
          <div className="card-grid" style={{ maxWidth: 640 }}>
            <AssetFigure file="Systemrouten.png" alt="Beispiel: Übersicht der Pure-Thermo-Systemrouten" />
            <LightboxFigure file="TCO Logik.png" alt="Beispiel: TCO-Logik von Pure Thermo" caption="Klick/Tap vergrößert die Ansicht." />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>RelatedContent</h2>
          <RelatedContent
            items={[
              { title: 'Pure Thermo', description: 'Produktseite', href: '/produkte/pure-thermo' },
              { title: 'Pure Thermo Interior', description: 'Systemseite', href: '/systeme/pure-thermo-interior' },
              { title: 'THERM 4410', description: 'Nachweisseite', href: '/nachweise/EVD-PT-THERM-001' }
            ]}
          />
        </div>
      </section>
    </div>
  );
}
