export const legalCompany = {
  companyName: 'TII Technologies',
  legalForm: null,
  street: null,
  postalCode: null,
  city: null,
  country: null,
  managingDirector: null,
  registerCourt: null,
  registrationNumber: null,
  vatId: null,
  email: null,
  phone: null,
  privacyController: null,
  hostingProvider: 'Vercel',
  hostingAddress: null
} as const;

export const missingLegalCompanyFields = Object.entries(legalCompany)
  .filter(([, value]) => value === null)
  .map(([key]) => key);
