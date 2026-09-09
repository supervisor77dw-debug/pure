// Central data-access layer for all structured facts under /data.
// UI components must never hard-code technical values; everything routes through here.
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const DATA_ROOT = path.join(process.cwd(), 'data');

function readYaml<T>(relPath: string): T {
  const filePath = path.join(DATA_ROOT, relPath);
  const raw = fs.readFileSync(filePath, 'utf8');
  return yaml.load(raw) as T;
}

function readAllYaml<T>(relDir: string): T[] {
  const dirPath = path.join(DATA_ROOT, relDir);
  if (!fs.existsSync(dirPath)) return [];
  return fs
    .readdirSync(dirPath)
    .filter((f) => f.endsWith('.yaml') || f.endsWith('.yml'))
    .map((f) => readYaml<T>(path.join(relDir, f)));
}

export type EvidenceClass = 'A' | 'B' | 'C' | 'D';

export interface LocalizedText {
  de?: string;
  en?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: LocalizedText;
  category?: string;
  short_description: LocalizedText;
  owner?: { technical?: string };
  platform?: string;
  publication: string;
  maturity?: { code: string; label_de: string };
  market_priority?: string[];
  systems?: string[];
  accent_token?: string;
  content_status?: string;
  version: string;
  updated_at: string;
  notes?: string[];
  rules?: string[];
}

export interface SystemLayer {
  order: number;
  role: string;
  label_de: string;
  product_id?: string;
  thickness_mm?: number | null;
  status?: string;
}

export interface SystemDef {
  id: string;
  slug: string;
  name: LocalizedText;
  product_id: string;
  related_products?: string[];
  purpose?: LocalizedText;
  status: Record<string, string>;
  evidence_class: EvidenceClass;
  intended_applications?: string[];
  substrates?: { status: string; currently_intended: string[] };
  layers?: SystemLayer[];
  required_validation?: string[];
  focus?: string[];
  prohibited_claims?: string[];
  public_summary_de?: string;
  limitations?: string[];
  version: string;
  updated_at: string;
}

export interface ValueRecord {
  id: string;
  product_id: string;
  property: string;
  label: LocalizedText;
  symbol?: string;
  value?: number;
  value_display?: string;
  uncertainty?: number;
  unit: string;
  conditions?: Record<string, unknown>;
  tested_material?: { designation?: string };
  evidence_class: EvidenceClass;
  evidence_ids?: string[];
  document_ids?: string[];
  classification?: { standard?: string; class?: string; label_de?: string };
  evidence_scope?: string;
  source_label?: string;
  derivation?: string;
  warning_de?: string;
  status?: string;
  limitations?: string[];
  calculation?: { formula?: string; lambda_source?: string; thickness_mm?: number };
  product_mapping?: { status: string; warning_de?: string };
  publication: string;
  version: string;
  updated_at: string;
}

export interface EvidenceRecord {
  id: string;
  title: LocalizedText;
  evidence_class: EvidenceClass;
  type: string;
  related_product_ids?: string[];
  tested_subject?: { designation?: string; description?: string; specimen?: string; formulation_version?: string };
  standard?: { id: string; designation: string };
  organization_id?: string;
  report_number?: string;
  report_date?: string;
  test_period?: string;
  results?: { value_id: string }[];
  scope?: { proves_de?: string[]; does_not_automatically_prove_de?: string[] };
  limitations?: string[];
  document_id?: string;
  review?: Record<string, string>;
  publication: string;
  version: string;
  updated_at: string;
}

export interface ClaimRecord {
  id: string;
  statement_de: string;
  product_id: string;
  evidence_class: EvidenceClass;
  related_systems?: string[];
  value_ids?: string[];
  evidence_ids?: string[];
  status: Record<string, string>;
  channels?: Record<string, unknown>;
  restrictions?: string[];
  prohibited_variants?: string[];
}

export interface ApplicationRecord {
  id: string;
  slug: string;
  name: LocalizedText;
  category?: string;
  description: LocalizedText;
  candidate_systems?: string[];
  publication: string;
  version: string;
}

export interface DocumentRecord {
  id: string;
  title: LocalizedText;
  document_type: string;
  organization_id?: string;
  report_number?: string;
  date?: string;
  language?: string;
  related_products?: string[];
  related_evidence?: string[];
  status: { validity?: string; publication?: string };
  file?: { public_path: string | null; note_de?: string };
  version: string;
  updated_at: string;
}

export interface OrganizationRecord {
  id: string;
  name: string;
  unit?: string;
  type: string[];
  country?: string;
  role_de: string | string[];
  qualification_de?: string;
  publication?: string;
}

export interface MarketRecord {
  id: string;
  priority: number;
  label_de: string;
  countries?: string[];
  regions?: string[];
  status: string;
}

// Public European portfolio — Pure Protect T730 is intentionally excluded per platform rules.
const PUBLIC_PRODUCT_SLUGS = [
  'pure-thermo',
  'pure-liquid-heat',
  'pure-floor-protect',
  'pure-fire-protect',
  'pure-surface-protect',
  'pure-water-protect',
  'pure-wood-protect',
  'pure-boat-protect'
];

export function getAllProducts(): Product[] {
  return readAllYaml<Product>('products')
    .filter((p) => PUBLIC_PRODUCT_SLUGS.includes(p.slug))
    .filter((p) => p.publication === 'public' || p.publication === 'public_with_limitation')
    .sort((a, b) => PUBLIC_PRODUCT_SLUGS.indexOf(a.slug) - PUBLIC_PRODUCT_SLUGS.indexOf(b.slug));
}

export function getProductBySlug(slug: string): Product | undefined {
  return getAllProducts().find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return readAllYaml<Product>('products').find((p) => p.id === id);
}

export function getSystemById(id: string): SystemDef | undefined {
  return readAllYaml<SystemDef>('systems').find((s) => s.id === id);
}

export function getSystemsByProduct(productId: string): SystemDef[] {
  return readAllYaml<SystemDef>('systems').filter((s) => s.product_id === productId);
}

export function getValueById(id: string): ValueRecord | undefined {
  return readAllYaml<ValueRecord>('values').find((v) => v.id === id);
}

export function getValuesByIds(ids: string[]): ValueRecord[] {
  return ids.map((id) => getValueById(id)).filter((v): v is ValueRecord => Boolean(v));
}

export function getEvidenceById(id: string): EvidenceRecord | undefined {
  return readAllYaml<EvidenceRecord>('evidence').find((e) => e.id === id);
}

export function getEvidenceByProduct(productId: string): EvidenceRecord[] {
  return readAllYaml<EvidenceRecord>('evidence').filter((e) => e.related_product_ids?.includes(productId));
}

export function getClaimById(id: string): ClaimRecord | undefined {
  return readAllYaml<ClaimRecord>('claims').find((c) => c.id === id);
}

export function getClaimsByProduct(productId: string): ClaimRecord[] {
  return readAllYaml<ClaimRecord>('claims').filter((c) => c.product_id === productId);
}

export function getApplicationById(id: string): ApplicationRecord | undefined {
  return readAllYaml<ApplicationRecord>('applications').find((a) => a.id === id);
}

export function getApplicationsByIds(ids: string[]): ApplicationRecord[] {
  return ids.map((id) => getApplicationById(id)).filter((a): a is ApplicationRecord => Boolean(a));
}

export function getDocumentById(id: string): DocumentRecord | undefined {
  return readAllYaml<DocumentRecord>('documents').find((d) => d.id === id);
}

export function getOrganizationById(id: string): OrganizationRecord | undefined {
  return readAllYaml<OrganizationRecord>('organizations').find((o) => o.id === id);
}

export function getAllMarkets(): MarketRecord[] {
  return readAllYaml<MarketRecord>('markets').sort((a, b) => a.priority - b.priority);
}

export function getMarketById(id: string): MarketRecord | undefined {
  return getAllMarkets().find((m) => m.id === id);
}
