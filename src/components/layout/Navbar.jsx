import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { NavLink } from "react-router";
import { useCart } from "../CartContext";
import LoginWithMobile from "../authentication/LoginWithMobile";
import { useAuth } from "../authentication/AuthContext"; // ✅ Import Auth Context

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const { currentUser, logout } = useAuth(); // ✅ Access user and logout
  // console.log("Current User:", currentUser);


  return (
    <nav className="w-full shadow-xl fixed left-0 bg-[#fdc58a] z-50">
      {/* Top section */}
      <div className="flex items-center justify-between px-6 py-3 relative overflow-hidden">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">
          <NavLink to="/">
            <img src="/assets/logo.png" alt="Entho Ruchira" className="h-10" />
          </NavLink>
        </div>

        {/* Animated Offer Text */}
        <div className="flex-1 mx-6 overflow-hidden relative">
          <div className="flex whitespace-nowrap animate-marquee text-red-600">
            <span className="mx-8">20% Off</span>
            <span className="mx-8">First Delivery Free</span>
            <span className="mx-8">20% Off</span>
            <span className="mx-8">First Delivery Free</span>
            <span className="mx-8">20% Off</span>
            <span className="mx-8">First Delivery Free</span>
            <span className="mx-8">20% Off</span>
            <span className="mx-8">First Delivery Free</span>
            <span className="mx-8">20% Off</span>
            <span className="mx-8">First Delivery Free</span>
          </div>
        </div>

        {/* Icons + Mobile Menu Button */}
        <div className="flex items-center gap-4 text-xl">
          {/* ✅ Show login or logout based on auth state */}
          {currentUser ? (
            <button
              onClick={logout}
              className="bg-[#282561] text-white text-sm px-3 py-2 rounded-md hover:bg-[#3a3886] transition font-semibold"
            >
              Logout
            </button>
          ) : (
            <>
              <MdOutlineAccountCircle
                className="cursor-pointer"
                onClick={() => setShowLoginPopup(true)}
              />
              <LoginWithMobile
                isOpen={showLoginPopup}
                onClose={() => setShowLoginPopup(false)}
              />
            </>
          )}

          {/* Cart Icon */}
          <div className="relative">
            <NavLink to="/cart">
              <FaShoppingCart className="cursor-pointer" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </NavLink>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="bg-[#282561] hidden md:block">
        <ul className="flex justify-center gap-8 text-white py-2 font-bold">
          <li className="cursor-pointer hover:text-[#fdc58a]">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="cursor-pointer hover:text-[#fdc58a]">
            <NavLink to="/products">Products</NavLink>
          </li>
          <li className="cursor-pointer hover:text-[#fdc58a]">
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li className="cursor-pointer hover:text-[#fdc58a]">
            <NavLink to="contact">Contact Us</NavLink>
          </li>
          <li className="cursor-pointer hover:text-[#fdc58a]">
            <NavLink to="/faq">FAQ</NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="bg-[#282561] md:hidden">
          <ul className="flex flex-col items-center gap-4 text-white py-4 font-medium">
            <li className="cursor-pointer hover:text-[#fdc58a]">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="cursor-pointer hover:text-[#fdc58a]">
              <NavLink to="/products">Products</NavLink>
            </li>
            <li className="cursor-pointer hover:text-[#fdc58a]">
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li className="cursor-pointer hover:text-[#fdc58a]">
              <NavLink to="contact">Contact Us</NavLink>
            </li>
            <li className="cursor-pointer hover:text-[#fdc58a]">
              <NavLink to="/faq">FAQ</NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
