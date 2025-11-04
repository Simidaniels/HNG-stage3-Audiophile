"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="space-x-4 flex items-center">
      <Link href="/">Home</Link>
      <Link href="/products">HEADPHONES</Link>
      <Link href="/products">SPEAKER</Link>
      <Link href="/products">EARPHONES</Link>

      {/* Cart icon */}
      <Link href="/cart" aria-label="Cart">
        <ShoppingCart className="inline w-5 h-5 text-gray-300 hover:text-orange-500 transition" />
      </Link>
    </nav>
  );
}
