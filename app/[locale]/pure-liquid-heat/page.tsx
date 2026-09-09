import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PureLiquidHeatPage from '@/app/pure-liquid-heat/page';

export const metadata: Metadata = { title: 'Pure Liquid Heat · PURE Technology Platform' };

export default function LocalizedLiquidHeatPage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'de') notFound();
  return <PureLiquidHeatPage />;
}
