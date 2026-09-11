import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = { title: 'Impressum · PURE Technology Platform', robots: { index: true, follow: true } };

export default function ImprintPage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'de') notFound();
  return <><Breadcrumb items={[{ label: 'Start', href: '/de' }, { label: 'Impressum' }]} /><section className="section"><div className="container prose"><h1>Impressum</h1><h2>Angaben zum Anbieter</h2><p>Die für ein vollständiges Impressum erforderlichen Unternehmens- und Kontaktdaten sind im aktuellen Projekt-Repository nicht hinterlegt.</p><p>Bitte ergänzen Sie vor der Veröffentlichung die ladungsfähige Anschrift, vertretungsberechtigte Person, Kontaktangaben sowie gegebenenfalls Register- und Umsatzsteuerdaten aus den verbindlichen Unternehmensunterlagen.</p><h2>Quelle</h2><p>Im Repository ist derzeit nur die Organisation „TII Technologies“ als Technologieentwickler dokumentiert. Diese Angabe ersetzt kein vollständiges Impressum.</p></div></section></>;
}
