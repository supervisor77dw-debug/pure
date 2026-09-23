import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocaleShell } from '@/components/LocaleShell';
import { getAllProducts } from '@/lib/data';
import { headers } from 'next/headers';
import { isLocale, ui } from '@/lib/i18n';
import { surfaceReferenceFlags } from '@/lib/surface-reference-flags';
import { legalCompany } from '@/lib/legal-company';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: siteConfig.name,
  description:
    'Funktionale Beschichtungstechnologien mit gemeinsamer Entwicklungs-, Prüf- und Dokumentationslogik.',
  openGraph: { siteName: siteConfig.name, type: 'website' },
  robots: process.env.VERCEL_ENV === 'preview' ? { index: false, follow: false } : { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const products = getAllProducts();
  const headerLocale = headers().get('x-pure-locale') || 'de';
  const locale = isLocale(headerLocale) ? headerLocale : 'de';
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', '@id': `${siteConfig.url}/#organization`, name: legalCompany.operator.companyName, url: siteConfig.url },
      { '@type': 'WebSite', '@id': `${siteConfig.url}/#website`, url: siteConfig.url, name: siteConfig.name, publisher: { '@id': `${siteConfig.url}/#organization` }, inLanguage: ['de', 'en'] }
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
