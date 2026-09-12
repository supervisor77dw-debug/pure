import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GermanPureThermoPage from '@/app/produkte/pure-thermo/page';

export const metadata: Metadata = { title: 'Pure Thermo · PURE Technology Platform' };

export default function LocalizedPureThermo({ params }: { params: { locale: string } }) {
  if (params.locale !== 'de') notFound();
  return <GermanPureThermoPage />;
}
