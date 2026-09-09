import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LocalePending } from '@/components/LocalePending';

export const metadata: Metadata = {
  title: 'Evidence: Thermal conductivity THERM 4410 · PURE Technology Platform',
  description: 'EN_TRANSLATION_PENDING — The THERM 4410 evidence page is under technical review.'
};

export default function EnglishEvidencePage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'en') notFound();
  return <LocalePending title="THERM 4410 evidence" />;
}
