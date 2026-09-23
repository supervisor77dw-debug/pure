export const legalPlaceholders = {
  phone: 'LEGAL_PHONE_PENDING',
  email: 'LEGAL_EMAIL_PENDING',
  vatId: 'VAT_ID_PENDING',
  businessId: 'BUSINESS_ID_PENDING',
  contentResponsible: 'CONTENT_RESPONSIBLE_PENDING',
  ticManagingDirector: 'TIC_MANAGING_DIRECTOR_PENDING',
  ticRegister: 'TIC_REGISTER_PENDING',
  ticPatentOwnership: 'TIC_PATENT_OWNERSHIP_PENDING',
  ticRights: 'TIC_DISTRIBUTION_AND_LICENSE_RIGHTS_PENDING',
  tiiRegister: 'TII_REGISTER_PENDING',
  tiiRepresentation: 'TII_REPRESENTATION_PENDING',
  tiiIp: 'TII_IP_DETAILS_PENDING',
  vercelProviderDetails: 'VERCEL_PROVIDER_DETAILS_PENDING',
  vercelDpaStatus: 'VERCEL_DPA_STATUS_PENDING',
  vercelLogRetention: 'VERCEL_LOG_RETENTION_PENDING',
  vercelThirdCountryTransfer: 'VERCEL_THIRD_COUNTRY_TRANSFER_PENDING'
} as const;

export const legalCompany = {
  operator: {
    companyName: 'Leuchtturm - Invest GmbH',
    legalForm: 'GmbH',
    street: 'Grasweg 48',
    postalCode: '24118',
    city: 'Kiel',
    country: 'Deutschland',
    managingDirector: 'Thies Boller',
    registerCourt: 'Amtsgericht Kiel',
    registrationNumber: 'HRB 23688',
    phone: legalPlaceholders.phone,
    email: legalPlaceholders.email,
    vatId: legalPlaceholders.vatId,
    businessId: legalPlaceholders.businessId,
    contentResponsible: legalPlaceholders.contentResponsible,
    domain: 'https://pure-parts.com',
    germanDomain: 'https://pure-parts.de',
    roles: {
      de: [
        'Betreiber der Website',
        'Ansprechpartner für Projektanfragen',
        'Marktintegration',
        'Partnerentwicklung',
        'Vertriebskoordination im Rahmen der jeweils bestehenden vertraglichen Vereinbarungen'
      ],
      en: [
        'Website operator',
        'Contact for project enquiries',
        'Market integration',
        'Partner development',
        'Sales coordination within the scope of the applicable contractual agreements'
      ]
    }
  },
  hosting: {
    provider: 'Vercel',
    providerDetails: legalPlaceholders.vercelProviderDetails,
    processingAgreement: legalPlaceholders.vercelDpaStatus,
    retention: legalPlaceholders.vercelLogRetention,
    thirdCountryTransfer: legalPlaceholders.vercelThirdCountryTransfer
  },
  partners: {
    tic: {
      companyName: 'TIC Technology Innovation Competence GmbH',
      street: 'Rührsbrook 61',
      postalCode: '24226',
      city: 'Heikendorf',
      country: 'Deutschland',
      role: {
        de: 'Technologie-/IP-Partner insbesondere im Bereich PURE LIQUID HEAT',
        en: 'Technology and IP partner, particularly in relation to PURE LIQUID HEAT'
      },
      relatedRight: 'EP 3 943 558',
      managingDirector: legalPlaceholders.ticManagingDirector,
      register: legalPlaceholders.ticRegister,
      patentOwnership: legalPlaceholders.ticPatentOwnership,
      distributionAndLicenseRights: legalPlaceholders.ticRights
    },
    tii: {
      companyName: 'Tii Technologies GmbH',
      role: {
        de: 'Technologie-/Entwicklungspartner und Produktionspartner für weitere PURE-Technologien nach Maßgabe der jeweiligen Vertrags- und Rechtekette',
        en: 'Technology, development and production partner for further PURE technologies, subject to the applicable contractual and rights chain'
      },
      register: legalPlaceholders.tiiRegister,
      representation: legalPlaceholders.tiiRepresentation,
      ipDetails: legalPlaceholders.tiiIp
    }
  }
} as const;

export const pendingLegalFields = Object.values(legalPlaceholders);

export function isPendingLegalValue(value: string) {
  return value.endsWith('_PENDING');
}
