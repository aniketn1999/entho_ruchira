import React from "react";
import { useCart } from "./CartContext";

const OrderSummary = ({ onPlaceOrder }) => {
  const { cartItems } = useCart();

  // Calculate subtotal safely
  const subtotal = cartItems.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const qty = Number(item.quantity) || 0;
    return sum + price * qty;
  }, 0);

  const shipping =  50;
  const total = subtotal + shipping;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md sticky top-4">
      <h2 className="text-xl font-semibold mb-4 text-[#282561]">
        Order Summary
      </h2>

      {/* List Products */}
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="flex justify-between text-sm mb-2">
            <span>
              {item.name} ({item.selectedWeight}) × {item.quantity}
            </span>
            <span>₹{(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-sm">No items in cart.</p>
      )}

      <hr className="my-4" />

      <div className="flex justify-between text-sm">
        <span>Subtotal</span>
        <span>₹{subtotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span>Shipping</span>
        <span>{`₹${shipping}`}</span>
      </div>

      <hr className="my-4" />

      <div className="flex justify-between font-semibold text-lg">
        <span>Total</span>
        <span>₹{total.toFixed(2)}</span>
      </div>

      <button
        onClick={onPlaceOrder}
        className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition cursor-pointer"
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;
