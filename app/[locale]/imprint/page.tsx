import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = { title: 'Imprint · PURE Technology Platform', robots: { index: true, follow: true } };

export default function ImprintPage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'en') notFound();
  return <><Breadcrumb items={[{ label: 'Home', href: '/en' }, { label: 'Imprint' }]} /><section className="section"><div className="container prose"><h1>Imprint</h1><h2>Provider information</h2><p>The company and contact details required for a complete imprint are not available in the current project repository.</p><p>Before publication, add the registered address, legal representative, contact details and, where applicable, registration and VAT information from authoritative company records.</p><h2>Source</h2><p>The repository currently documents only “TII Technologies” as a technology developer. This is not a complete legal imprint.</p></div></section></>;
}
