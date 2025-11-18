import React, { useState } from "react";

const PaymentMethods = () => {
  const [selected, setSelected] = useState("cod");

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-[#282561]">
        Payment Options
      </h2>

      <div className="space-y-3">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={selected === "cod"}
            onChange={(e) => setSelected(e.target.value)}
          />
          <span>Cash on Delivery</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="card"
            checked={selected === "card"}
            onChange={(e) => setSelected(e.target.value)}
          />
          <span>Credit / Debit Card</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="upi"
            checked={selected === "upi"}
            onChange={(e) => setSelected(e.target.value)}
          />
          <span>UPI / Net Banking</span>
        </label>
      </div>
    </div>
  );
};

export default PaymentMethods;
