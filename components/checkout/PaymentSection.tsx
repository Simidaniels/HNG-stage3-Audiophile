// components/checkout/PaymentSection.tsx
'use client';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { useState } from 'react';

export default function PaymentSection() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  const handlePayment = () => {
    alert('Payment processed!'); // Replace with actual payment logic
  };

  return (
    <div className="max-w-md mx-auto border p-4 rounded">
      <h2 className="font-bold mb-4">Payment Details</h2>
      <Input label="Card Number" name="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
      <Input label="Expiry Date" name="expiry" value={expiry} onChange={(e) => setExpiry(e.target.value)} />
      <Input label="CVC" name="cvc" value={cvc} onChange={(e) => setCvc(e.target.value)} />
      <Button onClick={handlePayment} className="mt-4 w-full">Pay Now</Button>
    </div>
  );
}
