import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from "./Products";
import { useCart } from "./CartContext";

const ProductDetailsView = () => {
    const params = useParams();
    const product = products.find(p => p.id === Number(params.productId));
    // console.log(params.productId)
    const [selectedWeight, setSelectedWeight] = useState('250g');
    const [quantity, setQuantity] = useState(1);

    const { addToCart } = useCart();

    // If product not found
    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white bg-[#282561] text-2xl font-semibold">
                Product not found.
            </div>
        );
    }

    const calculateTotal = () => {
        // If your product has weight-based pricing
        if (product.prices) {
            const selectedPrice = product.prices.find(p => p.weight === selectedWeight);
            return selectedPrice ? selectedPrice.price * quantity : 0;
        }
        // Otherwise use its single price
        return product.prices * quantity;
    };

    const selectedPriceObj = product.prices.find(p => p.weight === selectedWeight);

    const handleAddToCart = () => {
        if (!selectedPriceObj) return;
        addToCart({
            id: product.id,
            name: product.name,
            image: product.image,
            price: selectedPriceObj.price,
            selectedWeight,
            quantity,
        });
    };

    console.log("Adding to cart:", { id: product.id, selectedWeight, quantity, price: selectedPriceObj.price });


    return (
        <div className="min-h-screen bg-[#282561] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-5xl w-full flex flex-col md:flex-row">

                {/* Product Image */}
                <div className="w-full md:w-2/5 p-4 flex items-center justify-center bg-gray-900">
                    <img
                        src={product.image}
                        alt={product.alt}
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>

                {/* Product Details */}
                <div className="w-full md:w-3/5 p-6 md:p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>

                    {/* Rating */}
                    <div className="flex items-center mb-4 text-gray-600">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279l-7.416-3.955-7.416 3.955 1.48-8.279-6.064-5.828 8.332-1.151z" />
                                </svg>
                            ))}
                        </div>
                        <span className="ml-2 font-medium text-gray-700">({product.rating})</span>
                        <span className="ml-2 text-sm text-gray-500">{product.reviews} reviews</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

                    {/* Pricing Section */}
                    {product.prices ? (
                        <>
                            <h2 className="text-xl font-semibold text-gray-800 mb-3">Size & Price</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                                {product.prices.map((item) => (
                                    <button
                                        key={item.weight}
                                        onClick={() => setSelectedWeight(item.weight)}
                                        className={`flex flex-col items-center justify-center p-3 border rounded-lg transition-all duration-200
                      ${selectedWeight === item.weight
                                                ? 'border-orange-500 bg-orange-50 text-orange-700 ring-2 ring-orange-200'
                                                : 'border-gray-300 bg-white hover:border-gray-400'
                                            }`}
                                    >
                                        <span className="font-semibold text-lg">₹{item.price}</span>
                                        <span className="text-sm">{item.weight}</span>
                                        {item.bestValue && (
                                            <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full mt-1">
                                                Best Value
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="text-2xl font-semibold text-gray-800 mb-6">
                            ₹{product.price}
                            {product.oldPrice && (
                                <span className="text-gray-500 text-lg line-through ml-2">₹{product.oldPrice}</span>
                            )}
                        </div>
                    )}

                    {/* Quantity */}
                    <div className="flex items-center mb-8">
                        <span className="text-lg font-semibold text-gray-800 mr-4">Quantity:</span>
                        <select
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            className="block appearance-none bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
                        >
                            {[...Array(10)].map((_, i) => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                    </div>

                    {/* Total */}
                    <div className="mb-8">
                        <span className="text-2xl font-bold text-orange-600">Total: ₹{calculateTotal()}</span>
                    </div>

                    {/* Buttons */}
                    <div className="flex space-x-4">
                        <button className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 flex items-center justify-center cursor-pointer"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsView;
