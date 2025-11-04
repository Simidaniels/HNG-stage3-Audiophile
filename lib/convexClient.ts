// lib/convexClient.ts
import { ConvexClient } from "convex/browser";

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || "";

if (!CONVEX_URL) {
  throw new Error("NEXT_PUBLIC_CONVEX_URL is not set in .env.local");
}

export const convex = new ConvexClient(CONVEX_URL);
