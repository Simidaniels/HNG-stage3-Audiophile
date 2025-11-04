// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const mySchema = defineSchema({
  products: defineTable({
    name: v.string(),
    price: v.number(),
    slug: v.string(),
    image: v.string(),
    description: v.string(),
    createdAt: v.number(),
  }),
  orders: defineTable({
    customerName: v.string(),
    customerEmail: v.string(),
    shipping: v.object({
      address: v.string(),
      city: v.string(),
      country: v.string(),
      phone: v.optional(v.string()),
    }),
    items: v.array(
      v.object({
        id: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
      })
    ),
    subtotal: v.number(),
    shippingCost: v.number(),
    tax: v.number(),
    total: v.number(),
    status: v.string(),
    createdAt: v.number(),
  }),
});

export default mySchema;
