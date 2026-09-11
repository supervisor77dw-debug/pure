import Link from 'next/link';
import { Breadcrumb } from './Breadcrumb';
import { localePath, type Locale } from '@/lib/i18n';

export function ProjectRequestPage({ locale }: { locale: Locale }) {
  const de = locale === 'de';
  return <>
    <Breadcrumb items={[{ label: de ? 'Start' : 'Home', href: localePath(locale) }, { label: de ? 'Projektanfrage' : 'Project request' }]} />
    <section className="section"><div className="container"><div className="section-heading section-heading--narrow"><span className="section-heading__eyebrow">{de ? 'KONTAKT' : 'CONTACT'}</span><h1>{de ? 'Technische Projektbewertung anfragen' : 'Request technical project assessment'}</h1><p>{de ? 'Beschreiben Sie Bauteil, Anwendung, Untergrund, Randbedingungen und den gewünschten nächsten Prüfschritt. Der konkrete Kontaktweg wird ergänzt, sobald die erforderlichen Unternehmensdaten im Repository hinterlegt sind.' : 'Describe the component, application, substrate, boundary conditions and desired next validation step. The final contact channel will be added once the required company data is available in the repository.'}</p></div><div className="proof-panel"><h2>{de ? 'Kontaktangaben fehlen noch' : 'Contact details are not available yet'}</h2><p>{de ? 'Im aktuellen Projektstand sind keine ladungsfähige Anschrift, E-Mail-Adresse oder CRM-Endpoint hinterlegt. Es werden deshalb keine Kontaktdaten erfunden.' : 'The current project does not contain a registered address, email address or CRM endpoint. No contact details are invented.'}</p><p><strong>{de ? 'Benötigte Quelle:' : 'Required source:'}</strong> {de ? 'verbindliche Unternehmens- und Kontaktangaben aus den Projektunterlagen.' : 'authoritative company and contact details from the project records.'}</p><div className="hero__ctas"><Link className="btn btn--secondary" href={localePath(locale, de ? 'produkte/pure-thermo' : 'products/pure-thermo')}>{de ? 'Zur PURE THERMO Plattform' : 'Back to PURE THERMO platform'}</Link></div></div></div></section>
  </>;
}
