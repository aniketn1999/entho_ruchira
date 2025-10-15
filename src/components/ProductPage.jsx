import React, { useState } from "react";
import { products } from "./Products";
import SEO from "./SEO";

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [spiceLevel, setSpiceLevel] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const categories = ["All", "Chicken", "Mutton", "Fish", "Prawns"];
  const priceRanges = ["All", "Below 700", "700-900", "Above 900"];
  const spiceLevels = ["All", "Mild", "Medium", "Spicy"];
  const sortOptions = [
    { label: "Default", value: "default" },
    { label: "Price: Low to High", value: "lowToHigh" },
    { label: "Price: High to Low", value: "highToLow" },
  ];

  // Filter Logic
  const filteredProducts = products
    .filter((p) =>
      selectedCategory === "All"
        ? true
        : p.name.toLowerCase().includes(selectedCategory.toLowerCase())
    )
    .filter((p) => {
      if (priceRange === "Below 700") return p.price < 700;
      if (priceRange === "700-900") return p.price >= 700 && p.price <= 900;
      if (priceRange === "Above 900") return p.price > 900;
      return true;
    })
    .filter((p) =>
      spiceLevel === "All"
        ? true
        : p.spiceLevel?.toLowerCase() === spiceLevel.toLowerCase()
    )
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") return a.price - b.price;
      if (sortOrder === "highToLow") return b.price - a.price;
      return 0;
    });

  // Reusable Dropdown
  const Dropdown = ({ label, value, onChange, options }) => (
    <div className="mb-6">
      <label className="block mb-2 font-semibold">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white text-[#282561] rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#fdc58a]"
      >
        {options.map((opt) =>
          typeof opt === "string" ? (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ) : (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          )
        )}
      </select>
    </div>
  );

  return (
    <>
      {/* SEO Meta Data */}
      <SEO
        title="Shop Non-Veg Pickles | Entho Ruchira"
        description="Explore handmade chicken, mutton, prawn, and fish pickles made with authentic Telangana spices."
        keywords="buy chicken pickle, mutton pickle, prawn pickle, fish pickle, Telangana pickles, Entho Ruchira"
        canonical="https://enthoruchira.com/products"
        type="product.group"
      />

      {/* Product Section */}
      <section className="py-15 bg-[#282561]">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Our Pickles Collection
          </h2>
          <p className="text-center text-[#fdc58a] mb-10 max-w-2xl mx-auto">
            Discover our handcrafted Telangana pickles made with authentic
            recipes and premium ingredients.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <aside className="md:sticky top-20 bg-[#282561] text-white p-6 rounded-2xl shadow-xl h-fit md:col-span-1">
              <h3 className="text-2xl font-bold mb-6 text-[#fdc58a]">
                Filters
              </h3>

              <Dropdown
                label="Category"
                value={selectedCategory}
                onChange={setSelectedCategory}
                options={categories}
              />
              <Dropdown
                label="Price Range"
                value={priceRange}
                onChange={setPriceRange}
                options={priceRanges}
              />
              <Dropdown
                label="Spice Level"
                value={spiceLevel}
                onChange={setSpiceLevel}
                options={spiceLevels}
              />
              <Dropdown
                label="Sort By"
                value={sortOrder}
                onChange={setSortOrder}
                options={sortOptions}
              />
            </aside>

            {/* Product Cards */}
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-20">
              {filteredProducts.length ? (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                  >
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.alt}
                        className="w-full h-auto object-cover"
                      />
                      <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {product.discount}% off
                      </span>
                      <span className="absolute top-4 left-4 bg-[#282561] text-white text-xs font-bold px-2 py-1 rounded-full">
                        {product.badge}
                      </span>
                    </div>

                    <div className="p-4">
                      <div className="flex items-center justify-between text-gray-600 mb-2">
                        <span className="text-sm">{product.price / 100} GMS</span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < product.rating
                                  ? "text-[#fdc58a]"
                                  : "text-gray-300"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.62-.921 1.902 0l1.286 3.955a1 1 0 00.95.691h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.449a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.683-1.54 1.118L10 16.035l-3.36 2.449c-.785.572-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.052 9.383c-.783-.57-.381-1.81.588-1.81h4.15a1 1 0 00.95-.691l1.286-3.955z" />
                            </svg>
                          ))}
                          <span className="ml-1 text-sm">
                            {product.rating}.0
                          </span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-[#282561]">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {product.description}
                      </p>

                      <div className="mt-4 flex items-center justify-between">
                        <div>
                          <span className="text-lg font-bold text-[#282561]">
                            ₹{product.price}
                          </span>
                          <span className="text-sm text-gray-400 line-through ml-2">
                            ₹{product.oldPrice}
                          </span>
                        </div>
                        <button className="bg-[#fdc58a] text-[#282561] font-bold py-2 px-6 rounded-full transition-colors duration-300 hover:bg-[#ffdfb1]">
                          BUY
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-300 mt-8">
                  No products match your filters.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
