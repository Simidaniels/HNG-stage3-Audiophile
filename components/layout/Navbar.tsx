// components/layout/Navbar.tsx
"use client";

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="space-x-4">
      <Link href="/">Home</Link>
      <Link href="/cart">Cart</Link>
      <Link href="/checkout">Checkout</Link>
    </nav>
  );
}
