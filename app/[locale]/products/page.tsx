import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductIndexPage } from '@/components/ProductIndexPage';

export const metadata: Metadata = { title: 'Products · PURE Technology Platform' };

export default function EnglishProductsPage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'en') notFound();
  return <ProductIndexPage locale="en" />;
}
