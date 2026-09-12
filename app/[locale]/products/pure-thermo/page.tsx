import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PureThermoEnglishFullPage } from '@/components/PureThermoEnglishFullPage';

export const metadata: Metadata = {
  title: 'PURE THERMO | Thermal Functional Coating | PURE',
  description: 'Thin thermal functional coating technology for defined components, details and system applications.'
};

export default function EnglishPureThermoPage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'en') notFound();
  return <PureThermoEnglishFullPage />;
}
