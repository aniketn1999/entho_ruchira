import React from 'react';
import { products } from './Products';
import { NavLink } from 'react-router';


const ProductCards = () => {

  // const desc = products.description
  // const description = desc.length > 80 ? desc.slice(0, 80) + '...' : desc
  // // console.log(description);


  return (
    <section className="py-16 bg-[#282561] text-gray-100">
      <div className="container mx-auto px-4 text-center">
        <p className="text-[#fdc58a] font-semibold tracking-wide">Try Our</p>
        <h2 className="text-4xl font-bold mt-2">Best Seller</h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className="relative bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <NavLink to={`/products/${product.id}`}>
                <div className="relative">
                  <img src={product.image} alt={product.alt} className="w-full h-auto object-cover" />
                  <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">{product.discount}% off</span>
                  <span className="absolute top-4 left-4 bg-[#282561] text-white text-xs font-bold px-2 py-1 rounded-full">{product.badge}</span>
                </div>
              </NavLink>
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2 text-gray-600">
                    <span className="text-sm">1000 GMS</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < product.rating ? 'text-[#fdc58a]' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.62-.921 1.902 0l1.286 3.955a1 1 0 00.95.691h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.449a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.683-1.54 1.118L10 16.035l-3.36 2.449c-.785.572-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.052 9.383c-.783-.57-.381-1.81.588-1.81h4.15a1 1 0 00.95-.691l1.286-3.955z" />
                        </svg>
                      ))}
                      <span className="ml-1 text-sm">{product.rating}.0</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#282561]">{product.name}</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {product.description.length > 80
                      ? `${product.description.slice(0, 80)}...`
                      : product.description
                    }
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    {/* <span className="text-lg font-bold text-[#282561]">₹{product.prices.price}</span> */}
                    <span className="text-sm text-gray-400 ml-2">₹{product.oldPrice}</span>
                  </div>
                  <NavLink to={`/products/${product.id}`}>
                    <button className="bg-[#fdc58a] text-[#282561] font-bold py-2 px-6 rounded-full transition-colors duration-300 hover:bg-[#ffdfb1] cursor-pointer">
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
