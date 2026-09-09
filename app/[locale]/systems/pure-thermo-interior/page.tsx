import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LocalePending } from '@/components/LocalePending';

export const metadata: Metadata = {
  title: 'Pure Thermo Interior · PURE Technology Platform',
  description: 'EN_TRANSLATION_PENDING — Pure Thermo Interior English content is under technical review.'
};

export default function EnglishInteriorPage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'en') notFound();
  return <LocalePending title="Pure Thermo Interior" />;
}
