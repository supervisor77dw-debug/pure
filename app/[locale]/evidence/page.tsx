import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EvidenceHubPage } from '@/components/EvidenceHubPage';

export const metadata: Metadata = { title: 'Testing & Evidence · PURE Technology Platform' };

export default function EnglishEvidenceHub({ params }: { params: { locale: string } }) {
  if (params.locale !== 'en') notFound();
  return <EvidenceHubPage locale="en" />;
}
