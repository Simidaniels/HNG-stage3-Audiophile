"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ConvexProvider client={convex}>
      <Header />
      <main>{children}</main>
      <Footer />
    </ConvexProvider>
  );
}
