// app/cart/page.tsx
import CartSummary from '../../components/checkout/Summary';

export default function CartPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <CartSummary />
    </section>
  );
}
