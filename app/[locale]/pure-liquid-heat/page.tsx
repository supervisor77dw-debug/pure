import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PureLiquidHeatPage from '@/app/pure-liquid-heat/page';

export const metadata: Metadata = { title: 'PURE LIQUID HEAT | Elektrische Flächenwärme | PURE' };

export default function LocalizedLiquidHeatPage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'de') notFound();
  return <PureLiquidHeatPage />;
}
