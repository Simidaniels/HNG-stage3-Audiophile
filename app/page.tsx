// app/page.tsx
import ProductGrid from '../components/product/ProductGrid';

export default function HomePage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to Audiophile</h1>
      <p className="mb-8 text-gray-600">
        Discover our premium range of audio equipment.
      </p>
      <ProductGrid />
    </section>
  );
}
