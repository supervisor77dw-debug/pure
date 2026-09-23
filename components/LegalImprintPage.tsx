import { Breadcrumb } from './Breadcrumb';
import { legalCompany, isPendingLegalValue } from '@/lib/legal-company';
import { localePath, type Locale } from '@/lib/i18n';

function PendingValue({ value, locale }: { value: string; locale: Locale }) {
  if (!isPendingLegalValue(value)) return <>{value}</>;
  return <>{locale === 'de' ? 'TODO: Noch extern zu bestätigen' : 'TODO: Pending external confirmation'}</>;
}

export function LegalImprintPage({ locale }: { locale: Locale }) {
  const de = locale === 'de';
  const { operator, partners } = legalCompany;
  return <>
    <Breadcrumb items={[{ label: de ? 'Start' : 'Home', href: localePath(locale) }, { label: de ? 'Impressum' : 'Imprint' }]} />
    <section className="section"><div className="container prose">
      <h1>{de ? 'Impressum' : 'Imprint'}</h1>
      <p>{de ? 'Anbieterkennzeichnung für die Website der Dachmarke PURE PARTS.' : 'Provider information for the PURE PARTS umbrella-brand website. The existing English version remains subject to external legal review.'}</p>
      <h2>{de ? 'Diensteanbieter und Betreiber der Website' : 'Website service provider and operator'}</h2>
      <address>
        <strong>{operator.companyName}</strong><br />
        {operator.street}<br />
        {operator.postalCode} {operator.city}<br />
        {operator.country}
      </address>
      <dl>
        <dt>{de ? 'Rechtsform' : 'Legal form'}</dt><dd>{operator.legalForm}</dd>
        <dt>{de ? 'Vertreten durch' : 'Represented by'}</dt><dd>{operator.managingDirector}</dd>
        <dt>{de ? 'Handelsregister' : 'Commercial register'}</dt><dd>{operator.registerCourt}, {operator.registrationNumber}</dd>
        <dt>{de ? 'Telefon' : 'Telephone'}</dt><dd><PendingValue value={operator.phone} locale={locale} /></dd>
        <dt>{de ? 'E-Mail' : 'Email'}</dt><dd><PendingValue value={operator.email} locale={locale} /></dd>
        <dt>{de ? 'Umsatzsteuer-ID' : 'VAT ID'}</dt><dd><PendingValue value={operator.vatId} locale={locale} /></dd>
        <dt>{de ? 'Wirtschafts-ID' : 'Business ID'}</dt><dd><PendingValue value={operator.businessId} locale={locale} /></dd>
        <dt>{de ? 'Verantwortlich für Inhalte' : 'Responsible for content'}</dt><dd><PendingValue value={operator.contentResponsible} locale={locale} /></dd>
        <dt>{de ? 'Websites' : 'Websites'}</dt><dd><a href={operator.domain}>{operator.domain}</a><br /><a href={operator.germanDomain}>{operator.germanDomain}</a></dd>
      </dl>
      <h2>{de ? 'Rolle der Betreiberin' : 'Role of the operator'}</h2>
      <ul>{operator.roles[locale].map((role) => <li key={role}>{role}</li>)}</ul>
      <p>{de ? 'Die Leuchtturm - Invest GmbH koordiniert im Rahmen der jeweiligen vertraglichen Vereinbarungen Marktintegration, Projektanfragen, Partnerentwicklung und Vertrieb.' : 'Leuchtturm - Invest GmbH coordinates market integration, project enquiries, partner development and sales within the scope of the applicable contractual agreements.'}</p>

      <h2>{de ? 'Technologie- und IP-Partner' : 'Technology and IP partners'}</h2>
      <p>{de ? 'Die nachfolgend genannten Unternehmen sind Technologie-, Entwicklungs- oder Produktionspartner. Sie sind nicht Diensteanbieter oder gemeinsame Betreiber dieser Website.' : 'The companies named below are technology, development or production partners. They are not service providers or joint operators of this website.'}</p>
      <h3>{partners.tic.companyName}</h3>
      <address>{partners.tic.street}<br />{partners.tic.postalCode} {partners.tic.city}<br />{partners.tic.country}</address>
      <p>{partners.tic.role[locale]}.</p>
      <p>{de ? `Schutzrecht ${partners.tic.relatedRight} steht im Zusammenhang mit PURE LIQUID HEAT. Geschäftsführung, Registerdaten, Patentinhaberschaft sowie konkrete Vertriebs- und Lizenzrechte werden extern bestätigt.` : `Intellectual property right ${partners.tic.relatedRight} is associated with PURE LIQUID HEAT. Management, register data, patent ownership and specific distribution and licensing rights remain subject to external confirmation.`}</p>
      <h3>{partners.tii.companyName}</h3>
      <p>{partners.tii.role[locale]}.</p>
      <p>{de ? 'Register-, Vertretungs- und IP-Angaben werden erst nach externer Bestätigung veröffentlicht.' : 'Register, representation and IP details will be published only after external confirmation.'}</p>

      <h2>{de ? 'Hinweis zu Technologien und Schutzrechten' : 'Notice concerning technologies and intellectual property rights'}</h2>
      <p>{de ? 'Die auf dieser Website dargestellten Technologien beruhen auf Schutzrechten, Entwicklungsleistungen und technischen Beiträgen verschiedener Partnerunternehmen. Schutzrechte, Produktrechte und Entwicklungsstände sind technologiebezogen zu betrachten. Die Darstellung einer Technologie auf dieser Website bedeutet keine Übertragung oder Inhaberschaft von Schutzrechten auf die Leuchtturm - Invest GmbH.' : 'The technologies presented on this website are based on intellectual property rights, development work and technical contributions from various partner companies. Intellectual property rights, product rights and development statuses must be considered separately for each technology. Presentation of a technology on this website does not constitute a transfer of intellectual property rights to, or ownership of such rights by, Leuchtturm - Invest GmbH.'}</p>
      <h2>{de ? 'Technischer Hinweis' : 'Technical notice'}</h2>
      <p>{de ? 'Technische Informationen, Leistungswerte und Prüfhinweise beziehen sich ausschließlich auf den jeweils bezeichneten Prüfgegenstand, Systemaufbau oder Entwicklungsstand. Eine Übertragung auf andere Anwendungen oder Systemkonfigurationen bedarf der jeweiligen technischen Prüfung.' : 'Technical information, performance values and test references relate exclusively to the specifically identified test subject, system build-up or development status. Application to other uses or system configurations requires the relevant technical assessment.'}</p>
      <h2>{de ? 'Verbraucherstreitbeilegung' : 'Consumer dispute resolution'}</h2>
      <p>{de ? 'Die Anwendbarkeit und erforderliche Formulierung zur Verbraucherstreitbeilegung werden vor Veröffentlichung extern rechtlich bestätigt. Die Plattform ist primär auf Geschäftskunden ausgerichtet.' : 'The applicability of, and required wording for, consumer dispute resolution will be confirmed externally before publication. The platform is primarily directed at business customers.'}</p>
    </div></section>
  </>;
}