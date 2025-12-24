import React from "react";

const AddressForm = ({ address, setAddress }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-[#282561]">
        Delivery Address
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="name"
          placeholder="Full Name"
          value={address.name}
          onChange={handleChange}
          className="input"
        />
        <input
          name="phone"
          placeholder="Phone Number"
          value={address.phone}
          onChange={handleChange}
          className="input"
        />
        <input
          name="street"
          placeholder="Street Address"
          value={address.street}
          onChange={handleChange}
          className="input col-span-2"
        />
        <input
          name="city"
          placeholder="City"
          value={address.city}
          onChange={handleChange}
          className="input"
        />
        <input
          name="state"
          placeholder="State"
          value={address.state}
          onChange={handleChange}
          className="input"
        />
        <input
          name="pincode"
          placeholder="Pincode"
          value={address.pincode}
          onChange={handleChange}
          className="input"
        />
      </div>
    </div>
  );
};

export default AddressForm;
