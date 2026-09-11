import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = { title: 'Privacy · PURE Technology Platform', robots: { index: true, follow: true } };

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'en') notFound();
  return <><Breadcrumb items={[{ label: 'Home', href: '/en' }, { label: 'Privacy' }]} /><section className="section"><div className="container prose"><h1>Privacy</h1><h2>Publication note</h2><p>A complete privacy policy is not yet available in the current project repository.</p><p>Before publication, add the controller, processing purposes and legal bases, hosting/analytics services, retention periods, data-subject rights and contact route from authoritative company and hosting records.</p><h2>No invented information</h2><p>No company, contact or service-provider details are invented here.</p></div></section></>;
}
