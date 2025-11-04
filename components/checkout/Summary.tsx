// components/checkout/Summary.tsx
export default function Summary() {
  const cartItems = [
    { name: 'Headphones', quantity: 1, price: 299.99 },
    { name: 'Speaker', quantity: 2, price: 499.99 },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 20;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="border p-4 rounded max-w-md mx-auto">
      <h2 className="font-bold text-lg mb-4">Order Summary</h2>
      <ul className="mb-4">
        {cartItems.map((item, i) => (
          <li key={i} className="flex justify-between mb-2">
            <span>{item.name} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="mb-2 flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
      <div className="mb-2 flex justify-between"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
      <div className="mb-2 flex justify-between"><span>Tax</span><span>${tax.toFixed(2)}</span></div>
      <div className="font-bold flex justify-between mt-4"><span>Total</span><span>${total.toFixed(2)}</span></div>
    </div>
  );
}
