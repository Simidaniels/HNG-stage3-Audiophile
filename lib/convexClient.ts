// lib/convexClient.ts
import { ConvexClient } from "convex/browser";

let convex: ConvexClient | null = null;

export function getConvexClient() {
  // Only run in the browser
  if (typeof window !== "undefined") {
    if (!convex) {
      const url = process.env.NEXT_PUBLIC_CONVEX_URL;
      if (!url) {
        throw new Error("NEXT_PUBLIC_CONVEX_URL is not set");
      }
      convex = new ConvexClient(url);
    }
    return convex;
  }
  // Return null on server to prevent build errors
  return null;
}
