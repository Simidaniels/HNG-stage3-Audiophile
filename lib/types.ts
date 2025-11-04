// lib/types.ts

// lib/types.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  slug: string;
  image: string;
  description: string;
}

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface ShippingInfo {
  name: string;
  address: string;
  city: string;
  country: string;
  phone?: string;
}

export interface Order {
  id: string;
  customer: {
    name: string;
    email: string;
  };
  shipping: ShippingInfo;
  items: OrderItem[];
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
  status: "pending" | "completed" | "shipped";
  createdAt: string;
}

