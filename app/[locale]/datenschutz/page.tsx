import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PrivacyPolicyPage } from '@/components/PrivacyPolicyPage';

export const metadata: Metadata = { title: 'Datenschutz · PURE Technology Platform', robots: { index: true, follow: true } };

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'de') notFound();
  return <PrivacyPolicyPage locale="de" />;
}
