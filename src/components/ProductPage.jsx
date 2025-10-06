import React, { useState } from "react";
import { products } from "./Products";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

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

  // Filtering
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

  return (

    <>
      {/* <Navbar /> */}

      <section className="py-15 bg-[#282561]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#ffffff] mb-8">
            Our Pickles Collection
          </h2>
          <p className="text-center text-[#fdc58a] mt-2 mb-8 max-w-2xl mx-auto">
            Explore our complete collection of handcrafted Telangana pickles. Each
            variety is made with authentic recipes and premium ingredients for an
            unforgettable taste experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar with Dropdowns */}
            <div className="bg-[#282561] text-white p-6 rounded-2xl shadow-lg h-fit md:col-span-1">
              <h3 className="text-2xl font-bold mb-6 text-[#fdc58a]">Filters</h3>

              {/* Category */}
              <div className="mb-6">
                <label className="block mb-2 font-semibold">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-white text-[#282561] rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#fdc58a]"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price */}
              <div className="mb-6">
                <label className="block mb-2 font-semibold">Price Range</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full bg-white text-[#282561] rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#fdc58a]"
                >
                  {priceRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              {/* Spice */}
              <div className="mb-6">
                <label className="block mb-2 font-semibold">Spice Level</label>
                <select
                  value={spiceLevel}
                  onChange={(e) => setSpiceLevel(e.target.value)}
                  className="w-full bg-white text-[#282561] rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#fdc58a]"
                >
                  {spiceLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div>
                <label className="block mb-2 font-semibold">Sort By</label>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="w-full bg-white text-[#282561] rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#fdc58a]"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className=" md:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-20">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="relative bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                  >
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto object-cover"
                      />
                      <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {product.discount}% off
                      </span>
                      <span className="absolute top-4 left-4 bg-[#282561] text-white text-xs font-bold px-2 py-1 rounded-full">
                        {product.badge}
                      </span>
                    </div>
                    <div className="p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2 text-gray-600">
                          <span className="text-sm">{product.price / 100} GMS</span>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${i < product.rating
                                  ? "text-[#fdc58a]"
                                  : "text-gray-300"
                                  }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.62-.921 1.902 0l1.286 3.955a1 1 0 00.95.691h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.449a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.683-1.54 1.118L10 16.035l-3.36 2.449c-.785.572-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.052 9.383c-.783-.57-.381-1.81.588-1.81h4.15a1 1 0 00.95-.691l1.286-3.955z" />
                              </svg>
                            ))}
                            <span className="ml-1 text-sm">{product.rating}.0</span>
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-[#282561]">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-2">
                          {product.description}
                        </p>
                      </div>
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
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <p className="text-center text-gray-500 mt-8">
                  No products match your filters.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* <Footer />   */}
    </>
  );
};

export default ProductPage;
