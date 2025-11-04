import { query } from "./_generated/server";
import { v } from "convex/values"; // ✅ Convex validators

// -----------------------------
// Fetch all products
// -----------------------------
export const getAllProducts = query({
  handler: async (ctx) => {
    // Return all documents in the "products" table
    return await ctx.db.query("products").collect();
  },
});

// -----------------------------
// Fetch a product by slug
// -----------------------------
export const getProductBySlug = query({
  // ✅ Define expected arguments
  args: { slug: v.string() },
  handler: async (ctx, { slug }) => {
    // Convex doesn’t let you filter with .eq on plain fields directly —
    // you must iterate or add an index if you query by slug often.
    const products = await ctx.db.query("products").collect();
    const found = products.find((p) => p.slug === slug);

    return found || null;
  },
});
