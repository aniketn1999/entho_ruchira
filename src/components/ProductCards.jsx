import React from "react";
import { products } from "./Products";
import { NavLink } from "react-router";

const ProductCards = () => {
  return (
    <section className="py-16 bg-[#282561] text-gray-100">
      <div className="container mx-auto px-4 text-center">
        <p className="text-[#fdc58a] font-semibold tracking-wide">Try Our</p>
        <h2 className="text-4xl font-bold mt-2">Best Seller</h2>

        {/* MOBILE: Horizontal Scroll | DESKTOP: Grid */}
        <div className="
          mt-10 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4
          lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible
        ">
          {products.map((product) => (
            <div
              key={product.id}
              className="
                bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden
                transition-transform hover:scale-105
                min-w-[75%] sm:min-w-[45%] md:min-w-[35%] lg:min-w-0
                snap-center
              "
            >
              <NavLink to={`/products/${product.id}`}>
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="
                      w-full object-cover
                      h-[300px] sm:h-[300px] md:h-[300px] lg:h-[350px]
                    "
                  />
                  <span className="absolute top-3 left-3 bg-[#282561] text-white text-xs font-bold px-2 py-1 rounded-full">
                    {product.badge}
                  </span>
                </div>
              </NavLink>

              <div className="p-3">
                <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                  <span>1000 GMS</span>
                  <span>⭐ {product.rating}.0</span>
                </div>

                <h3 className="text-sm font-bold text-[#282561] leading-tight">
                  {product.name}
                </h3>

                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {product.description}
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    ₹{product.oldPrice}
                  </span>

                  <NavLink to={`/products/${product.id}`}>
                    <button className="bg-[#fdc58a] text-[#282561] text-xs font-bold py-1.5 px-4 rounded-full hover:bg-[#ffdfb1]">
                      BUY
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
