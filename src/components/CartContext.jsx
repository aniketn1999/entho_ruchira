// src/components/CartContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const raw = localStorage.getItem("entho_cart");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("entho_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    // item shape expected:
    // { id, name, image, price, selectedWeight, quantity }
    setCartItems((prev) => {
      // merge same product + same weight
      const idx = prev.findIndex(
        (p) => p.id === item.id && p.selectedWeight === item.selectedWeight
      );
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = {
          ...next[idx],
          quantity: next[idx].quantity + item.quantity,
        };
        return next;
      }
      return [...prev, { ...item }];
    });
    // debug log
    // console.log("addToCart called:", item);
  };

  const removeFromCart = (id, selectedWeight) => {
    setCartItems((prev) =>
      prev.filter((p) => !(p.id === id && p.selectedWeight === selectedWeight))
    );
  };

  const updateQuantity = (id, selectedWeight, newQuantity) => {
    setCartItems((prev) =>
      prev.map((p) =>
        p.id === id && p.selectedWeight === selectedWeight
          ? { ...p, quantity: Math.max(1, newQuantity) }
          : p
      )
    );
  };

  const clearCart = () => setCartItems([]);

  const cartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        cartCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
