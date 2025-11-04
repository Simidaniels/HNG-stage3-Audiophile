// app/checkout/page.tsx
import CheckoutForm from '@/components/checkout/CheckoutForm';
// import Summary from '@/components/checkout/Summary';
import PaymentSection from '@/components/checkout/PaymentSection';

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      {/* Left: Checkout Form */}
      <div className="lg:w-2/3">
        <CheckoutForm />
      </div>

      {/* Right: Summary & Payment */}
      <div className="lg:w-1/3 space-y-6">
        {/* <Summary /> */}
        <PaymentSection />
      </div>
    </div>
  );
}
