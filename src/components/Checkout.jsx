import React, { useState } from "react";
import AddressForm from "../components/AddressForm";
import OrderSummary from "../components/OrderSummary";
import { useCart } from "../components/CartContext";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const SHIPPING_CHARGE = 50;

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  const validateAddress = () => {
    for (let key in address) {
      if (!address[key].trim()) {
        toast.error(`Please fill ${key}`);
        return false;
      }
    }
    if (!/^[6-9]\d{9}$/.test(address.phone)) {
      toast.error("Enter valid 10 digit mobile number");
      return false;
    }
    if (!/^\d{6}$/.test(address.pincode)) {
      toast.error("Enter valid 6 digit pincode");
      return false;
    }
    return true;
  };

  const handlePlaceOrder = async () => {
    if (!cartItems.length) {
      toast.error("Your cart is empty");
      return;
    }

    if (!validateAddress()) return;

    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const total = subtotal + SHIPPING_CHARGE;

    const orderItems = cartItems
      .map(
        (item) =>
          `${item.name} (${item.selectedWeight}) × ${item.quantity} = ₹${
            item.price * item.quantity
          }`
      )
      .join("\n");

    const templateParams = {
      customer_name: address.name,
      customer_phone: address.phone,
      shipping_address: `
${address.street},
${address.city}, ${address.state}
Pincode: ${address.pincode}
      `,
      order_items: orderItems,
      subtotal_amount: subtotal,
      shipping_amount: SHIPPING_CHARGE,
      total_amount: total,
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

      // ✅ Redirect to product page after 2 sec
      setTimeout(() => navigate("/products"), 2000);
    } catch (err) {
      console.error(err);
      toast.error("Failed to place order");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#282561]">
        Checkout
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <AddressForm address={address} setAddress={setAddress} />
        </div>

        <OrderSummary onPlaceOrder={handlePlaceOrder} />
      </div>
    </div>
  );
};

export default Checkout;
