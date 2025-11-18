import React, { useState } from "react";

const AddressForm = () => {
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(address);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-[#282561]">
        Delivery Address
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.keys(address).map((key) => (
          <input
            key={key}
            type={key === "phone" || key === "pincode" ? "number" : "text"}
            name={key}
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
            value={address[key]}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#282561] outline-none"
          />
        ))}

        <button
          type="submit"
          className="col-span-2 bg-[#282561] hover:bg-[#3a3880] text-white font-semibold py-2 rounded-lg transition"
        >
          Save Address
        </button>
      </form>
    </div>
  );
};

export default AddressForm;
