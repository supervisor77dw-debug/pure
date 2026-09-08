import type { Product } from '@/lib/data';
import { ProductCard } from './ProductCard';

const PRODUCT_HREFS: Record<string, string> = {
  'pure-thermo': '/produkte/pure-thermo'
};

export function ProductHub({ products }: { products: Product[] }) {
  return (
    <div className="product-hub">
      <div className="product-hub__grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} href={PRODUCT_HREFS[product.slug]} />
        ))}
      </div>
    </div>
  );
}
