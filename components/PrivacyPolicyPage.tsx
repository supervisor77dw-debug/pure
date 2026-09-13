import { Breadcrumb } from './Breadcrumb';
import { legalCompany } from '@/lib/legal-company';
import { localePath, type Locale } from '@/lib/i18n';

export function PrivacyPolicyPage({ locale }: { locale: Locale }) {
  const de = locale === 'de';
  const { operator, hosting } = legalCompany;
  return <>
    <Breadcrumb items={[{ label: de ? 'Start' : 'Home', href: localePath(locale) }, { label: de ? 'Datenschutz' : 'Privacy' }]} />
    <section className="section"><div className="container prose">
      <h1>{de ? 'Datenschutz' : 'Privacy'}</h1>
      <p>{de ? 'Diese Seite bildet den derzeit bestätigten technischen Stand ab. Noch offene rechtliche und dienstleisterbezogene Angaben müssen vor Veröffentlichung extern finalisiert werden.' : 'This page reflects the currently confirmed technical status. Outstanding legal and service-provider details must be finalised externally before publication.'}</p>

      <h2>1. {de ? 'Verantwortlicher' : 'Controller'}</h2>
      <address><strong>{operator.companyName}</strong><br />{operator.street}<br />{operator.postalCode} {operator.city}<br />{operator.country}</address>
      <p>{de ? 'Datenschutzkontakt und finale öffentliche Domain: noch festzulegen.' : 'Privacy contact and final public domain: pending confirmation.'}</p>

      <h2>2. {de ? 'Hosting / Vercel' : 'Hosting / Vercel'}</h2>
      <p>{de ? `Die Website wird technisch über ${hosting.provider} bereitgestellt. Die vollständige Anbieterbezeichnung, Vertrags- und Datenschutzunterlagen sowie die konkrete Projektkonfiguration sind vor Veröffentlichung anhand der Betreiberunterlagen zu ergänzen.` : `The website is technically provided via ${hosting.provider}. The full provider identification, contractual and privacy documentation, and the specific project configuration must be completed from the operator's records before publication.`}</p>

      <h2>3. {de ? 'Server- und Request-Logs' : 'Server and request logs'}</h2>
      <p>{de ? 'Beim Abruf der Website können technisch erforderliche Verbindungsdaten verarbeitet werden, insbesondere IP-Adresse, Zeitpunkt, angeforderte URL, HTTP-Status, Referrer und User-Agent. Tatsächlicher Umfang, Zweck, Rechtsgrundlage und Aufbewahrungsdauer der Vercel-Protokollierung sind vor Veröffentlichung anhand der aktiven Projekt- und Vertragskonfiguration zu bestätigen.' : 'When the website is accessed, technically necessary connection data may be processed, including IP address, time, requested URL, HTTP status, referrer and user agent. The actual scope, purpose, legal basis and retention period of Vercel logging must be confirmed from the active project and contractual configuration before publication.'}</p>

      <h2>4. {de ? 'Kontaktaufnahme / Projektanfrage' : 'Contact / project enquiry'}</h2>
      <p>{de ? 'Das Projektformular umfasst Name, Unternehmen, E-Mail, Telefon, Produkt oder Technologie, Projektart, Standort oder Land, Nachricht, Rückrufwunsch, Datenschutzbestätigung und ein nicht sichtbares Honeypot-Feld. Pflichtfelder sind Name, E-Mail, Nachricht und Datenschutzbestätigung.' : 'The project form includes name, company, email, telephone, product or technology, project type, location or country, message, callback request, privacy confirmation and a non-visible honeypot field. Required fields are name, email, message and privacy confirmation.'}</p>
      <p>{de ? 'Die produktive Zustellung ist derzeit gesperrt. Die Anwendung speichert oder protokolliert Formulardaten nicht dauerhaft und zeigt ohne konfigurierten Versandweg keinen Erfolgszustand. Empfänger, Versanddienst, Zweck, Rechtsgrundlage und Aufbewahrung werden vor Aktivierung des Formulars ergänzt.' : 'Production delivery is currently disabled. The application does not persist or log form data and does not show a success state without a configured delivery channel. Recipient, delivery service, purpose, legal basis and retention will be added before the form is activated.'}</p>

      <h2>5. {de ? 'Rechtsgrundlagen' : 'Legal bases'}</h2>
      <p>{de ? 'Die einschlägigen Rechtsgrundlagen für Hosting, Sicherheitsprotokollierung und die Bearbeitung von Projektanfragen werden vor Veröffentlichung anhand der tatsächlichen Verarbeitung und des Betreiberkontexts extern rechtlich bestätigt.' : 'The applicable legal bases for hosting, security logging and processing project enquiries will be confirmed externally before publication based on the actual processing and operator context.'}</p>

      <h2>6. {de ? 'Empfänger / Auftragsverarbeiter' : 'Recipients / processors'}</h2>
      <p>{de ? `Aktuell bestätigter technischer Hosting-Dienst: ${hosting.provider}. Ein Mail- oder Transactional-Mail-Dienst ist noch nicht festgelegt. Weitere Empfänger, Auftragsverarbeiter und Zugriffsrollen sind vor Aktivierung zu dokumentieren.` : `Currently confirmed technical hosting service: ${hosting.provider}. No mail or transactional email service has yet been selected. Further recipients, processors and access roles must be documented before activation.`}</p>

      <h2>7. {de ? 'Speicherdauer / Löschung' : 'Retention / deletion'}</h2>
      <p>{de ? 'Die Anwendung führt derzeit keine dauerhafte Formularspeicherung. Aufbewahrungs- und Löschfristen für Hosting-Protokolle sowie für die spätere Projektkommunikation sind anhand der aktiven Dienste und gesetzlichen Anforderungen extern festzulegen.' : 'The application currently performs no persistent form storage. Retention and deletion periods for hosting logs and future project communications must be defined externally based on the active services and applicable requirements.'}</p>

      <h2>8. {de ? 'Drittlandtransfer' : 'International data transfers'}</h2>
      <p>{de ? 'Ob und auf welcher Grundlage Vercel oder ein späterer Versanddienst Daten außerhalb der EU/des EWR verarbeitet, ist anhand der konkreten Vertrags-, Unterauftragsverarbeiter- und Projektkonfiguration zu bestätigen und anschließend hier zu dokumentieren.' : 'Whether, and on what basis, Vercel or a future delivery service processes data outside the EU/EEA must be confirmed from the specific contractual, subprocessors and project configuration and then documented here.'}</p>

      <h2>9. {de ? 'Betroffenenrechte' : 'Data-subject rights'}</h2>
      <p>{de ? 'Informationen zu Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Datenübertragbarkeit und Beschwerdemöglichkeiten sowie der zuständige Kontakt werden vor Veröffentlichung rechtlich geprüft und vervollständigt.' : 'Information on access, rectification, deletion, restriction, objection, data portability and complaint options, together with the responsible contact, will be legally reviewed and completed before publication.'}</p>

      <h2>10. {de ? 'Sicherheits- und Kommunikationshinweise' : 'Security and communication notices'}</h2>
      <p>{de ? 'Aktuell setzt die Website keine Analytics- oder Tracking-Dienste, Cookies, Local Storage, Session Storage, externen Fonts, extern eingebetteten Medien oder sonstigen Third-Party-Requests ein. Solange dieser Zustand unverändert bleibt, ist technisch kein Consent-Management erforderlich. Änderungen an Diensten oder Einbindungen erfordern eine erneute Prüfung.' : 'The website currently uses no analytics or tracking services, cookies, local storage, session storage, external fonts, externally embedded media or other third-party requests. While this remains unchanged, no consent-management system is technically required. Changes to services or integrations require reassessment.'}</p>
      <p>{de ? 'Bei der Kommunikation über das Internet können trotz angemessener technischer Maßnahmen Sicherheitsrisiken nicht vollständig ausgeschlossen werden. Über das Projektformular sollen keine besonderen Kategorien personenbezogener Daten oder vertraulichen Geschäftsgeheimnisse übermittelt werden.' : 'Despite appropriate technical measures, security risks cannot be completely excluded when communicating over the internet. Special categories of personal data or confidential trade secrets should not be submitted through the project form.'}</p>
    </div></section>
  </>;
}