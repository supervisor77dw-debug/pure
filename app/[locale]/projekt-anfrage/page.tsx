import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProjectRequestPage } from '@/components/ProjectRequestPage';

export const metadata: Metadata = {
  title: 'Projektanfrage · PURE Technology Platform',
  description: 'Technische Projektanfrage für PURE Technologie- und Systemanwendungen.'
};

export default function GermanProjectRequestPage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'de' && params.locale !== 'en') notFound();
  return <ProjectRequestPage locale="de" />;
}
