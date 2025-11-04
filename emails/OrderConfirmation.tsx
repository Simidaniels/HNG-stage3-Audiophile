// emails/OrderConfirmation.tsx
import React from "react";

// ---------------------------
// Types
// ---------------------------
export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Shipping {
  address: string;
  city: string;
  country: string;
}

export interface OrderConfirmationEmailProps {
  customerName: string;
  customerEmail: string; // ✅ Added this
  orderId: string;
  items: OrderItem[];
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
  shippingAddress: string;
}

// ---------------------------
// React Email Component
// ---------------------------
export const OrderConfirmationEmail: React.FC<OrderConfirmationEmailProps> = ({
  customerName,
  customerEmail, // ✅ Added here
  orderId,
  items,
  subtotal,
  shippingCost,
  tax,
  total,
  shippingAddress,
}) => {
  return (
    <html>
      <body
        style={{
          fontFamily: "Arial, sans-serif",
          margin: 0,
          padding: 0,
          backgroundColor: "#f7f7f7",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h1 style={{ color: "#333333" }}>Thank you, {customerName}!</h1>
          <p style={{ color: "#555555" }}>Email: {customerEmail}</p> {/* ✅ Display email */}
          <p style={{ color: "#555555" }}>Order ID: {orderId}</p>
          <p style={{ color: "#555555" }}>Shipping Address: {shippingAddress}</p>

          <h2 style={{ color: "#333333" }}>Order Summary</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {items.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <span>{item.name} x {item.quantity}</span>
                <span>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <div style={{ borderTop: "1px solid #ddd", marginTop: "10px", paddingTop: "10px" }}>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Shipping: ${shippingCost.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>

          <p style={{ marginTop: "20px", color: "#555555" }}>
            If you have any questions, contact our support team.
          </p>
        </div>
      </body>
    </html>
  );
};
