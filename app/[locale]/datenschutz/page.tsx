import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = { title: 'Datenschutz · PURE Technology Platform', robots: { index: true, follow: true } };

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'de') notFound();
  return <><Breadcrumb items={[{ label: 'Start', href: '/de' }, { label: 'Datenschutz' }]} /><section className="section"><div className="container prose"><h1>Datenschutz</h1><h2>Hinweis zur Veröffentlichung</h2><p>Eine vollständige Datenschutzerklärung ist im aktuellen Projekt-Repository noch nicht hinterlegt.</p><p>Vor der Veröffentlichung müssen Verantwortlicher, Zwecke und Rechtsgrundlagen der Verarbeitung, Hosting-/Analyse-Dienste, Speicherdauer, Betroffenenrechte und Kontaktweg anhand der verbindlichen Unternehmens- und Hostingunterlagen ergänzt werden.</p><h2>Keine erfundenen Angaben</h2><p>Es werden an dieser Stelle bewusst keine Unternehmens-, Kontakt- oder Dienstleisterdaten erfunden.</p></div></section></>;
}
