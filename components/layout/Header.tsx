// components/layout/Header.tsx

"use client";


import Link from 'next/link';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-xl font-bold">Audiophile</h1>
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
