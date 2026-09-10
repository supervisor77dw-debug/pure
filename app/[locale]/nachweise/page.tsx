import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EvidenceHubPage } from '@/components/EvidenceHubPage';

export const metadata: Metadata = { title: 'Prüfungen & Evidenz · PURE Technology Platform' };

export default function GermanEvidenceHub({ params }: { params: { locale: string } }) {
  if (params.locale !== 'de') notFound();
  return <EvidenceHubPage locale="de" />;
}
