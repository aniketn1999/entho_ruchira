import React from "react";
import AddressForm from "../components/AddressForm";
import OrderSummary from "../components/OrderSummary";
import PaymentMethods from "../components/PaymentMethods";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    // const navigate = useNavigate();

    const handlePlaceOrder = () => {
        // Later integrate backend / payment gateway
        alert("Order placed successfully! 🎉");
        // navigate("/orders");
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-10">
            <h1 className="text-3xl font-bold text-center mb-8 text-[#282561]">
                Checkout
            </h1>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                {/* Left: Address + Payment */}
                <div className="md:col-span-2 space-y-6">
                    <AddressForm />
                    <PaymentMethods />
                </div>

                {/* Right: Order Summary */}
                <div>
                    <OrderSummary onPlaceOrder={handlePlaceOrder} />
                </div>
            </div>
        </div>
    );
};

export default Checkout;
