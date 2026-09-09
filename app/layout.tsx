import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { getAllProducts } from '@/lib/data';
import { headers } from 'next/headers';
import { isLocale, ui } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'PURE Technology Platform',
  description:
    'Funktionale Beschichtungstechnologien mit gemeinsamer Entwicklungs-, Prüf- und Dokumentationslogik.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const products = getAllProducts();
  const headerLocale = headers().get('x-pure-locale') || 'de';
  const locale = isLocale(headerLocale) ? headerLocale : 'de';
  return (
    <html lang={locale}>
      <body>
        <a className="skip-link" href="#main-content">{ui[locale].skip}</a>
        <Header products={products} locale={locale} />
        <main id="main-content">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
