import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";





const Footer = () => {


  const socials = [
    { name: "Facebook", href: "#", icon: <FaFacebook /> },
    { name: "Instagram", href: "#", icon: <FaInstagram /> },
    { name: "YouTube", href: "#", icon: <FaYoutube /> },
    { name: "X", href: "#", icon: <FaXTwitter /> },
  ];

  return (
    <footer className="bg-[#fdc58a]  text-[#282561] py-12">
      <div className="container mx-auto px-20 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

          {/* Company Info Section */}
          <div>
            <div className="flex items-center justify-center md:justify-start mb-4 ">
              {/* <span className="bg-[#fdc58a] text-white p-2 rounded-full font-bold">ER</span> */}
              <div className="text-2xl font-bold cursor-pointer">
                <img src="/assets/logo.png" alt="logo" className="h-10" />
              </div>

              <h3 className="text-xl font-bold ml-2">Entho Ruchira</h3>
            </div>
            <p className="text-sm">Authentic handcrafted Telangana pickles made with love and traditional recipes passed down through generations.</p>
            <ul className="mt-4 text-sm space-y-2">
              <li>100% Handmade • No Preservatives</li>
              <li>Traditional Recipes • Premium Quality</li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-[#282561] hover:font-bold transition-colors duration-200">Home</a></li>
              <li><a href="#" className="hover:text-[#282561] hover:font-bold transition-colors duration-200">Products</a></li>
              <li><a href="#" className="hover:text-[#282561] hover:font-bold transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-[#282561] hover:font-bold transition-colors duration-200">Health Benefits</a></li>
              <li><a href="#" className="hover:text-[#282561] hover:font-bold transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="hover:text-[#282561] hover:font-bold transition-colors duration-200">FAQ</a></li>
              <li><a href="#" className="hover:text-[#282561] hover:font-bold transition-colors duration-200">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-[#282561] hover:font-bold transition-colors duration-200">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="text-sm space-y-3">
              <li className="flex items-center justify-center md:justify-start">
                <FiPhone className="text-[#282561] mr-2 text-lg" />
                +91 90327 17675
              </li>

              <li className="flex items-center justify-center md:justify-start">
                <FiMail className="text-[#282561] mr-2 text-lg" />
                orders@enthoruchira.com
              </li>

              <li className="flex items-center justify-center md:justify-start">
                <FiMapPin className="text-[#282561] mr-2 text-lg" />
                Telangana, India
              </li>
            </ul>
            <div className="mt-4">
              <h5 className="font-semibold text-sm">Business Hours:</h5>
              <p className="text-xs">Mon-Sat: 9 AM - 8 PM</p>
              <p className="text-xs">Sunday: 10 AM - 6 PM</p>
            </div>

            {/* Also Order On section */}
            <div className="mt-8">
              <h5 className="font-semibold text-lg mb-2">ALSO ORDER ON</h5>
              <div className="flex justify-center md:justify-start space-x-4">
                {/* Swiggy Button */}
                <a
                  href="#" // <<-- REPLACE '#' with your Swiggy store link
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Order on Swiggy"
                  className="transition-transform duration-200 hover:scale-110"
                >
                  <img
                    src="/assets/swiggy.png"
                    alt="Swiggy"
                    className="h-12 w-12 rounded-full"
                  />
                </a>

                {/* Zomato Button */}
                <a
                  href="#" // <<-- REPLACE '#' with your Zomato store link
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Order on Zomato"
                  className="transition-transform duration-200 hover:scale-110"
                >
                  <img
                    src="/assets/zomato.png"
                    alt="Zomato"
                    className="h-12 w-12 rounded-full"
                  />
                </a>
              </div>
            </div>


            {/* Follow Us On section */}
            <div className="mt-8">
              <h5 className="font-semibold text-lg mb-2">FOLLOW US ON</h5>
              <div className="flex justify-center md:justify-start space-x-4">
                {socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.name}
                    className="text-[#282561] hover:text-[#ffffff] transition-colors duration-200 text-2xl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-500">
          <p>© 2024 Entho Ruchira. All rights reserved. Made with ❤️ in Telangana.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
