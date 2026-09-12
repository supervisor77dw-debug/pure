import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PureLiquidHeatPage from '@/app/pure-liquid-heat/page';

export const metadata: Metadata = {
  title: 'PURE LIQUID HEAT | Electrical Surface Heating | PURE',
  description: 'An electric functional layer for integrated heating systems.'
};

export default function EnglishLiquidHeatPage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'en') notFound();
  return <PureLiquidHeatPage />;
}
