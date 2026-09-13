import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LegalImprintPage } from '@/components/LegalImprintPage';

export const metadata: Metadata = { title: 'Imprint · PURE Technology Platform', robots: { index: true, follow: true } };

export default function ImprintPage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'en') notFound();
  return <LegalImprintPage locale="en" />;
}
