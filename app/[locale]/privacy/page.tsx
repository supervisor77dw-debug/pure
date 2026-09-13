import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PrivacyPolicyPage } from '@/components/PrivacyPolicyPage';

export const metadata: Metadata = { title: 'Privacy · PURE Technology Platform', robots: { index: true, follow: true } };

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'en') notFound();
  return <PrivacyPolicyPage locale="en" />;
}
