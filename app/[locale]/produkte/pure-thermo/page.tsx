import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GermanPureThermoPage from '@/app/produkte/pure-thermo/page';

export const metadata: Metadata = { title: 'PURE THERMO | Thermische Funktionsbeschichtung | PURE' };

export default function LocalizedPureThermo({ params }: { params: { locale: string } }) {
  if (params.locale !== 'de') notFound();
  return <GermanPureThermoPage />;
}
