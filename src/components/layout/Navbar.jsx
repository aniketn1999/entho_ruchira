// src/components/Navbar.jsx
import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link } from "react-router";
import App from "../../App";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full shadow-xl fixed left-0 bg-[#fdc58a] z-50">
            {/* Top section */}
            <div className="flex items-center justify-between px-6 py-3 relative overflow-hidden">
                {/* Logo */}
                <div className="text-2xl font-bold cursor-pointer">
                    <Link to='/'>
                        <img src="/assets/logo.png" alt="Entho Ruchira" className="h-10" />
                    </Link>
                </div>

                {/* Animated Offer Text */}
                {/* <div className="whitespace-nowrap animate-marquee text-[#282561] font-bold">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-5/6 overflow-hidden"> */}
                <div className="flex-1 mx-6 overflow-hidden relative">
                    <div className="flex whitespace-nowrap animate-marquee text-red-600">
                        <span className="mx-8">20% Off</span>
                        <span className="mx-8">First Delivery Free</span>
                        <span className="mx-8">20% Off</span>
                        <span className="mx-8">First Delivery Free</span>
                        <span className="mx-8">20% Off</span>
                        <span className="mx-8">First Delivery Free</span>

                        {/* Duplicate for seamless infinite scroll */}
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
                    <FaSearch className="cursor-pointer" />
                    <MdOutlineAccountCircle className="cursor-pointer" />
                    <FaShoppingCart className="cursor-pointer" />

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
                    <li className="cursor-pointer hover:text-[#fdc58a]"><Link to="/">Home</Link></li>
                    <li className="cursor-pointer hover:text-[#fdc58a]"><Link to="/products">Products</Link></li>
                    <li className="cursor-pointer hover:text-[#fdc58a]"><Link to="/aboutus">About Us</Link></li>
                    <li className="cursor-pointer hover:text-[#fdc58a]">Contact Us</li>
                    <li className="cursor-pointer hover:text-[#fdc58a]"><Link to="/faq">FAQ</Link></li>
                </ul>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="bg-[#282561] md:hidden">
                    <ul className="flex flex-col items-center gap-4 text-white py-4 font-medium">
                        <li className="cursor-pointer hover:text-[#fdc58a]"><Link to="/">Home</Link></li>
                        <li className="cursor-pointer hover:text-[#fdc58a]"><Link to="/products">Products</Link></li>
                        <li className="cursor-pointer hover:text-[#fdc58a]"><Link to="/aboutus">About Us</Link></li>
                        <li className="cursor-pointer hover:text-[#fdc58a]">Contact Us</li>
                        <li className="cursor-pointer hover:text-[#fdc58a]"><Link to="/faq">FAQ</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
