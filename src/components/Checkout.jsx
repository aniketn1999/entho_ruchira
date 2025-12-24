import React, { useState } from "react";
import AddressForm from "../components/AddressForm";
import OrderSummary from "../components/OrderSummary";
import { useCart } from "../components/CartContext";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handlePlaceOrder = async () => {
    if (!cartItems.length) {
      toast.error("Cart is empty");
      return;
    }

    // Convert cart items to readable text
    const orderItems = cartItems
      .map(
        (item) =>
          `${item.name} (${item.selectedWeight}) x ${item.quantity} = ₹${
            item.price * item.quantity
          }`
      )
      .join("\n");
    const totalAmount = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const templateParams = {
      customer_name: address.name,
      customer_phone: address.phone,
      shipping_address: `
${address.street},
${address.city}, ${address.state}
Pincode: ${address.pincode}
      `,
      order_items: orderItems,
      total_amount: totalAmount,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_ORDER_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Order placed successfully 🎉");
      clearCart();
    } catch (error) {
      console.error(error);
      toast.error("Failed to place order");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#282561]">
        Checkout
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Address */}
        <div className="md:col-span-2 space-y-6">
          <AddressForm address={address} setAddress={setAddress} />
        </div>

        {/* Order Summary */}
        <OrderSummary onPlaceOrder={handlePlaceOrder} />
      </div>
    </div>
  );
};

export default Checkout;
