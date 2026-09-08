import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { getAllProducts } from '@/lib/data';

export const metadata: Metadata = {
  title: 'PURE Technology Platform',
  description:
    'Funktionale Beschichtungstechnologien mit gemeinsamer Entwicklungs-, Prüf- und Dokumentationslogik.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const products = getAllProducts();
  return (
    <html lang="de">
      <body>
        <a className="skip-link" href="#main-content">Zum Inhalt springen</a>
        <Header products={products} />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
