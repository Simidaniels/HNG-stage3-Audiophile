// app/confirmation/page.tsx
'use client'; // important for useSearchParams

import { useSearchParams } from 'next/navigation';

export const dynamic = 'force-dynamic'; // forces client-side rendering

export default function ConfirmationPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Thank you for your order!</h1>
      {orderId && (
        <p className="mb-4">
          Your order ID: <strong>{orderId}</strong>
        </p>
      )}
      <p>We have sent a confirmation email to your inbox.</p>
    </section>
  );
}
