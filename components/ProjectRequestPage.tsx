import Link from 'next/link';
import { Suspense } from 'react';
import { Breadcrumb } from './Breadcrumb';
import { localePath, type Locale } from '@/lib/i18n';
import { ProjectRequestForm } from './ProjectRequestForm';

export function ProjectRequestPage({ locale }: { locale: Locale }) {
  const de = locale === 'de';
  return <>
    <Breadcrumb items={[{ label: de ? 'Start' : 'Home', href: localePath(locale) }, { label: de ? 'Projektanfrage' : 'Project request' }]} />
    <section className="section"><div className="container"><div className="section-heading section-heading--narrow"><span className="section-heading__eyebrow">{de ? 'KONTAKT' : 'CONTACT'}</span><h1>{de ? 'Technische Projektbewertung anfragen' : 'Request technical project assessment'}</h1><p>{de ? 'Beschreiben Sie Bauteil, Anwendung, Untergrund, Randbedingungen und den gewünschten nächsten Prüfschritt.' : 'Describe the component, application, substrate, boundary conditions and desired next validation step.'}</p></div><Suspense fallback={null}><ProjectRequestForm locale={locale} /></Suspense><div className="project-request-form__note">{de ? 'Der Delivery-Endpunkt ist noch nicht konfiguriert. Es werden keine Daten gespeichert oder protokolliert.' : 'The delivery endpoint is not configured yet. No data is stored or logged.'}</div></div></section>
  </>;
}
