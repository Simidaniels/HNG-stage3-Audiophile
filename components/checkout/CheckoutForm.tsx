// components/checkout/CheckoutForm.tsx
'use client';
import { useState } from 'react';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';
import Select from '../ui/Select';
import Button from '../ui/Button';

// Recommended: define the form type
interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  country: string;
}

// Recommended: define the errors type
type FormErrors = Partial<Record<keyof CheckoutFormData, string>>;

export default function CheckoutForm() {
  const [form, setForm] = useState<CheckoutFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    country: '',
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

    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    if (!form.address) newErrors.address = 'Address is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully!'); // Replace with API call
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <Input label="Name" name="name" value={form.name} onChange={handleChange} error={errors.name} />
      <Input label="Email" name="email" value={form.email} onChange={handleChange} error={errors.email} />
      <Input label="Phone" name="phone" value={form.phone} onChange={handleChange} />
      <TextArea label="Address" name="address" value={form.address} onChange={handleChange} error={errors.address} />
      <Select
        label="Country"
        name="country"
        value={form.country}
        onChange={handleChange}
        options={[
          { value: '', label: 'Select country' },
          { value: 'USA', label: 'USA' },
          { value: 'UK', label: 'UK' },
          { value: 'Nigeria', label: 'Nigeria' },
        ]}
      />
      <Button type="submit">Place Order</Button>
    </form>
  );
}
