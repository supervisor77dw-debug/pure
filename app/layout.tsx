import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocaleShell } from '@/components/LocaleShell';
import { getAllProducts } from '@/lib/data';
import { headers } from 'next/headers';
import { isLocale, ui } from '@/lib/i18n';
import { surfaceReferenceFlags } from '@/lib/surface-reference-flags';

export const metadata: Metadata = {
  metadataBase: new URL('https://pure-virid.vercel.app'),
  title: 'PURE Technology Platform',
  description:
    'Funktionale Beschichtungstechnologien mit gemeinsamer Entwicklungs-, Prüf- und Dokumentationslogik.',
  robots: process.env.VERCEL_ENV === 'preview' ? { index: false, follow: false } : { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const products = getAllProducts();
  const headerLocale = headers().get('x-pure-locale') || 'de';
  const locale = isLocale(headerLocale) ? headerLocale : 'de';
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', '@id': 'https://pure-virid.vercel.app/#organization', name: 'PURE Technology Platform', url: 'https://pure-virid.vercel.app' },
      { '@type': 'WebSite', '@id': 'https://pure-virid.vercel.app/#website', url: 'https://pure-virid.vercel.app', name: 'PURE Technology Platform', publisher: { '@id': 'https://pure-virid.vercel.app/#organization' }, inLanguage: ['de', 'en'] }
    ]
  };
  return (
    <html lang={locale}>
      <body className={`${surfaceReferenceFlags.showLanuvReference ? 'show-lanuv-reference ' : ''}${surfaceReferenceFlags.showUaeReference ? 'show-uae-reference' : ''}`.trim()}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <LocaleShell />
        <Header products={products} locale={locale} />
        <main id="main-content">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
