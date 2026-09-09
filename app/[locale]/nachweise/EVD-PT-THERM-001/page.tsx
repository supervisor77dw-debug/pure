import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GermanEvidencePage from '@/app/nachweise/EVD-PT-THERM-001/page';
import { LocalePending } from '@/components/LocalePending';

export const metadata: Metadata = { title: 'Nachweis: Wärmeleitfähigkeit THERM 4410 · PURE Technology Platform' };

export default function LocalizedEvidencePage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'de') notFound();
  return params.locale === 'de' ? <GermanEvidencePage /> : <LocalePending title="THERM 4410 evidence" />;
}
