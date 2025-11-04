// app/checkout/page.tsx
import CheckoutForm from '../../components/checkout/CheckoutForm';

export default function CheckoutPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <CheckoutForm />
    </section>
  );
}
