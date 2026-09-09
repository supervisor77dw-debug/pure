import Link from 'next/link';
import { getAllProducts } from '@/lib/data';
import { productPath, type Locale } from '@/lib/i18n';

const EN_DESCRIPTIONS: Record<string, string> = {
  'pure-thermo': 'Thermal functional coating for defined existing-building, detail and special applications.',
  'pure-liquid-heat': 'Electrically activatable coating technology for defined heating and thermal applications.',
  'pure-floor-protect': 'Lightly matt functional protection technology for defined, high-use floor surfaces.',
  'pure-fire-protect': 'Coating technology for defined fire-protection and combination systems.',
  'pure-surface-protect': 'Functional protective coating for defined surface applications.',
  'pure-water-protect': 'Coating technology for water-related and marine applications.',
  'pure-wood-protect': 'Functional coating for defined wood surfaces and protection applications.',
  'pure-boat-protect': 'Specialised technology platform for marine surfaces and boat applications.'
};

export function ProductIndexPage({ locale }: { locale: Locale }) {
  const products = getAllProducts();
  const english = locale === 'en';
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading section-heading--narrow">
          <span className="section-heading__eyebrow">{english ? 'PRODUCTS' : 'PRODUKTE'}</span>
          <h1>{english ? 'Functional material technologies for defined applications.' : 'Funktionale Materialtechnologien für definierte Anwendungen.'}</h1>
          <p>{english ? 'Explore the PURE technology platform and its product families.' : 'Entdecken Sie die PURE Technology Platform und ihre Produktfamilien.'}</p>
        </div>
        <div className="product-index-grid">
          {products.map((product) => {
            const route = productPath(locale, product.slug);
            return (
              <article className="product-index-card" key={product.id}>
                <h2>{product.name.de}</h2>
                <p>{english ? EN_DESCRIPTIONS[product.slug] : product.short_description.de}</p>
                {route ? <Link className="btn btn--primary" href={route}>{english ? 'Explore product' : 'Produkt ansehen'}</Link> : <span className="product-index-card__status">{english ? 'EN_TRANSLATION_PENDING' : 'Seite in Vorbereitung'}</span>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
