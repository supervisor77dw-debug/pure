import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { languages: { de: '/de', en: '/en', 'x-default': '/de' } }
};

export function generateStaticParams() {
  return [{ locale: 'de' }, { locale: 'en' }];
}

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
