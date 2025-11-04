'use client';
import { useState } from 'react';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';
import Select from '../ui/Select';
import Button from '../ui/Button';

interface CheckoutFormData {
  billingName: string;
  billingPhone: string;
  billingAddress: string;
  shippingAddress: string;
  shippingZip: string;
  shippingCity: string;
  shippingCountry: string;
}

type FormErrors = Partial<Record<keyof CheckoutFormData, string>>;

export default function CheckoutForm() {
  const [form, setForm] = useState<CheckoutFormData>({
    billingName: '',
    billingPhone: '',
    billingAddress: '',
    shippingAddress: '',
    shippingZip: '',
    shippingCity: '',
    shippingCountry: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    if (!form.billingName) newErrors.billingName = 'Billing Name is required';
    if (!form.billingAddress) newErrors.billingAddress = 'Billing Address is required';
    if (!form.shippingAddress) newErrors.shippingAddress = 'Shipping Address is required';
    if (!form.shippingCity) newErrors.shippingCity = 'City is required';
    if (!form.shippingZip) newErrors.shippingZip = 'Zip code is required';
    if (!form.shippingCountry) newErrors.shippingCountry = 'Country is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert('Checkout form submitted successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8">
      {/* Billing Details */}
      <section className="billing-details space-y-4">
        <h2 className="text-xl font-bold">Billing Details</h2>
        <Input
          label="Name"
          name="billingName"
          value={form.billingName}
          onChange={handleChange}
          placeholder="John Doe"
          error={errors.billingName}
        />
        <Input
          label="Phone"
          name="billingPhone"
          value={form.billingPhone}
          onChange={handleChange}
          placeholder="+1 234 567 890"
        />
        <TextArea
          label="Address"
          name="billingAddress"
          value={form.billingAddress}
          onChange={handleChange}
          placeholder="123 Main Street, Apt 4B"
          error={errors.billingAddress}
        />
      </section>

      {/* Shipping Info */}
      <section className="shipping-info space-y-4">
        <h2 className="text-xl font-bold">Shipping Info</h2>
        <TextArea
          label="Address"
          name="shippingAddress"
          value={form.shippingAddress}
          onChange={handleChange}
          placeholder="456 Another St, Suite 12"
          error={errors.shippingAddress}
        />
        <Input
          label="Zip Code"
          name="shippingZip"
          value={form.shippingZip}
          onChange={handleChange}
          placeholder="10001"
          error={errors.shippingZip}
        />
        <Input
          label="City"
          name="shippingCity"
          value={form.shippingCity}
          onChange={handleChange}
          placeholder="New York"
          error={errors.shippingCity}
        />
        <Select
          label="Country"
          name="shippingCountry"
          value={form.shippingCountry}
          onChange={handleChange}
          options={[
            { value: '', label: 'Select country' },
            { value: 'USA', label: 'USA' },
            { value: 'UK', label: 'UK' },
            { value: 'Nigeria', label: 'Nigeria' },
          ]}
          error={errors.shippingCountry}
        />
      </section>

      <Button type="submit" className="w-full">
        Continue
      </Button>
    </form>
  );
}
