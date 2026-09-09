import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GermanInteriorPage from '@/app/systeme/pure-thermo-interior/page';
import { LocalePending } from '@/components/LocalePending';

export const metadata: Metadata = { title: 'Pure Thermo Interior · PURE Technology Platform' };

export default function LocalizedInteriorPage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'de') notFound();
  return params.locale === 'de' ? <GermanInteriorPage /> : <LocalePending title="Pure Thermo Interior" />;
}
