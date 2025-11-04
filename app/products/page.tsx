// app/products/page.tsx
import ProductGrid from '../../components/product/ProductGrid';

export default function ProductsPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <ProductGrid />
    </section>
  );
}
