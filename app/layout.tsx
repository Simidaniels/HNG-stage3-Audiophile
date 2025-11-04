// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import ClientWrapper from "./ClientWrapper";

export const metadata = {
  title: "Audiophile E-commerce",
  description: "Premium audio products for music lovers",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
