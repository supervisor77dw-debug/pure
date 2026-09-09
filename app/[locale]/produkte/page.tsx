import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductIndexPage } from '@/components/ProductIndexPage';

export const metadata: Metadata = { title: 'Produkte · PURE Technology Platform' };

export default function GermanProductsPage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'de') notFound();
  return <ProductIndexPage locale="de" />;
}
