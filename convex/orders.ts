import { mutation, query } from "./_generated/server";
import { v } from "convex/values"; // ✅ import Convex validators

// -----------------------------
// Create a new order
// -----------------------------
export const createOrder = mutation({
  // ✅ use Convex validator for arbitrary JSON
  args: { order: v.any() },
  handler: async (ctx, { order }) => {
    if (typeof order !== "object" || order === null) {
      throw new Error("Invalid order payload");
    }

    const id = await ctx.db.insert("orders", {
      ...order,
      status: "pending",
      createdAt: new Date().toISOString(),
    });

    return id;
  },
});

// -----------------------------
// Fetch all orders
// -----------------------------
export const getAllOrders = query({
  handler: async (ctx) => {
    return await ctx.db.query("orders").collect();
  },
});

// -----------------------------
// Fetch order by ID
// -----------------------------
export const getOrderById = query({
  // ✅ use Convex validator for string
  args: { orderId: v.id("orders") }, // or v.string() if you store plain strings
  handler: async (ctx, { orderId }) => {
    return await ctx.db.get(orderId);
  },
});
