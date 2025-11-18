import React, { useState } from "react";
import { useCart } from "./CartContext";
import { FaArrowLeftLong } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router";
import { auth } from "./firebase";
import LoginWithMobile from "./authentication/LoginWithMobile";

const Cart = () => {
  const { cartItems, setCartItems } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const navigate = useNavigate();

  // ❌ Removed shipping & free shipping logic completely
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal - discount;

  const handleQuantityChange = (id, delta) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    );
    setCartItems(updatedItems);
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode === "SAVE10") {
      setDiscount(subtotal * 0.1);
      alert("Promo code applied! You got 10% off.");
    } else {
      setDiscount(0);
      alert("Invalid promo code.");
    }
  };

  const handleProceedToBuy = () => {
    if (auth.currentUser) {
      navigate("/checkout");
    } else {
      setIsLoginOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#282561] p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto mt-5">
        {/* Header */}
        <div className="flex justify-between mb-8">
          <NavLink
            to="/products"
            className="flex items-center text-[#fdc58a] hover:text-[#e9ded3] transition-colors"
          >
            <FaArrowLeftLong className="mr-2" />
            Continue Shopping
          </NavLink>
          <h1 className="text-3xl font-bold text-white ml-8">Shopping Cart</h1>
          <span className="text-[#b29d86] ml-4">
            {cartItems.length} items in your cart
          </span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-grow bg-white rounded-lg shadow p-6">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-600 py-10">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center border-b border-gray-200 py-4 last:border-b-0"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-md mr-4 bg-gray-100"
                  />
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Size: {item.selectedWeight}
                    </p>

                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l-md hover:bg-gray-300 transition-colors"
                      >
                        -
                      </button>
                      <span className="bg-gray-100 text-gray-800 px-4 py-1 border-t border-b border-gray-200">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r-md hover:bg-gray-300 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors mb-2"
                    >
                      🗑
                    </button>

                    <p className="text-lg font-bold text-gray-800">
                      ₹{item.price * item.quantity}
                    </p>

                    {item.quantity > 1 && (
                      <p className="text-sm text-gray-500">₹{item.price} each</p>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-96 bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Order Summary
            </h2>

            {/* Promo Code */}
            <div className="flex mb-4">
              <input
                type="text"
                placeholder="Promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-grow border border-gray-300 rounded-l-lg p-2 focus:outline-none"
              />
              <button
                onClick={applyPromoCode}
                className="bg-orange-500 text-white font-semibold px-4 rounded-r-lg hover:bg-orange-600"
              >
                Apply
              </button>
            </div>

            {/* Summary */}
            <div className="space-y-3 border-b border-gray-200 pb-4 mb-4">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal ({cartItems.length} items)</span>
                <span>₹{subtotal}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>-₹{discount}</span>
                </div>
              )}
            </div>

            {/* Total */}
            <div className="flex justify-between items-center text-xl font-bold text-gray-800 mb-4">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            {/* Checkout */}
            <button
              onClick={handleProceedToBuy}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 text-white font-bold py-3 rounded-lg"
            >
              Proceed to Buy
            </button>
          </div>
        </div>
      </div>

      {/* Login Popup */}
      <LoginWithMobile
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </div>
  );
};

export default Cart;
