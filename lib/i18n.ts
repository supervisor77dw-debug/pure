export type Locale = 'de' | 'en';

export const DEFAULT_LOCALE: Locale = 'de';
export const SUPPORTED_LOCALES: Locale[] = ['de', 'en'];

export function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function localePath(locale: Locale, path = ''): string {
  const normalized = path === '/' ? '' : path.replace(/^\/+/, '');
  return normalized ? `/${locale}/${normalized}` : `/${locale}`;
}

export function alternateLocale(locale: Locale): Locale {
  return locale === 'de' ? 'en' : 'de';
}

export const ui = {
  de: {
    products: 'Produkte',
    systems: 'Systeme',
    evidence: 'Nachweise',
    search: 'Suche',
    searchPlaceholder: 'Suche (Produkte, Systeme, Nachweise)',
    navigation: 'Hauptnavigation',
    menu: 'Menü',
    close: 'Schließen',
    skip: 'Zum Inhalt springen',
    switchLabel: 'Sprache wechseln',
    pendingTitle: 'EN_TRANSLATION_PENDING',
    pendingText: 'Die englische Fassung dieser Seite wird fachlich geprüft und ist noch nicht veröffentlicht.'
  },
  en: {
    products: 'Products',
    systems: 'Systems',
    evidence: 'Evidence',
    search: 'Search',
    searchPlaceholder: 'Search (products, systems, evidence)',
    navigation: 'Main navigation',
    menu: 'Menu',
    close: 'Close',
    skip: 'Skip to content',
    switchLabel: 'Change language',
    pendingTitle: 'EN_TRANSLATION_PENDING',
    pendingText: 'The English version of this page is under technical review and is not published yet.'
  }
} as const;

export function pathWithoutLocale(pathname: string): string {
  const match = pathname.match(/^\/(de|en)(\/.*)?$/);
  return match ? match[2] || '/' : pathname || '/';
}

export function localizedCounterpart(locale: Locale, pathname: string): string {
  const counterpart = alternateLocale(locale);
  const path = pathWithoutLocale(pathname);
  const mappings: Record<string, string> = {
    '/produkte': '/products',
    '/products': '/produkte',
    '/produkte/pure-thermo': '/products/pure-thermo',
    '/products/pure-thermo': '/produkte/pure-thermo',
    '/systeme/pure-thermo-interior': '/systems/pure-thermo-interior',
    '/systems/pure-thermo-interior': '/systeme/pure-thermo-interior',
    '/systeme': '/systems',
    '/systems': '/systeme',
    '/pure-liquid-heat': '/products/pure-liquid-heat',
    '/products/pure-liquid-heat': '/pure-liquid-heat',
    '/produkte/pure-surface-protect': '/products/pure-surface-protect',
    '/products/pure-surface-protect': '/produkte/pure-surface-protect',
    '/produkte/pure-floor-protect': '/products/pure-floor-protect',
    '/products/pure-floor-protect': '/produkte/pure-floor-protect',
    '/produkte/pure-fire-protect': '/products/pure-fire-protect',
    '/products/pure-fire-protect': '/produkte/pure-fire-protect',
    '/produkte/pure-water-protect': '/products/pure-water-protect',
    '/products/pure-water-protect': '/produkte/pure-water-protect',
    '/produkte/pure-wood-protect': '/products/pure-wood-protect',
    '/products/pure-wood-protect': '/produkte/pure-wood-protect',
    '/produkte/pure-boat-protect': '/products/pure-boat-protect',
    '/products/pure-boat-protect': '/produkte/pure-boat-protect',
    '/nachweise/EVD-PT-THERM-001': '/evidence/EVD-PT-THERM-001',
    '/evidence/EVD-PT-THERM-001': '/nachweise/EVD-PT-THERM-001',
    '/': '/'
  };
  return localePath(counterpart, mappings[path] || '/');
}

export function productsIndexPath(locale: Locale): string {
  return locale === 'de' ? '/de/produkte' : '/en/products';
}

export const PRODUCT_ROUTES: Record<string, { de: string; en: string }> = {
  'pure-thermo': { de: 'produkte/pure-thermo', en: 'products/pure-thermo' },
  'pure-liquid-heat': { de: 'pure-liquid-heat', en: 'products/pure-liquid-heat' },
  'pure-floor-protect': { de: 'produkte/pure-floor-protect', en: 'products/pure-floor-protect' },
  'pure-fire-protect': { de: 'produkte/pure-fire-protect', en: 'products/pure-fire-protect' },
  'pure-surface-protect': { de: 'produkte/pure-surface-protect', en: 'products/pure-surface-protect' },
  'pure-water-protect': { de: 'produkte/pure-water-protect', en: 'products/pure-water-protect' },
  'pure-wood-protect': { de: 'produkte/pure-wood-protect', en: 'products/pure-wood-protect' },
  'pure-boat-protect': { de: 'produkte/pure-boat-protect', en: 'products/pure-boat-protect' }
};

export function productPath(locale: Locale, slug: string): string | undefined {
  const route = PRODUCT_ROUTES[slug]?.[locale];
  return route ? localePath(locale, route) : undefined;
}
