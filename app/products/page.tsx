// app/products/[slug]/page.tsx
import ProductDetails from '../../components/product/ProductDetails';

export default function ProductPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <ProductDetails />
    </section>
  );
}
