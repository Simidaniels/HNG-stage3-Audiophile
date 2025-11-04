// components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Audiophile. All rights reserved.
      </div>
    </footer>
  );
}
