import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-16 bg-[#282561]">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-5xl mx-auto flex flex-col md:flex-row md:items-stretch">
          <div className="w-full md:w-1/2 p-8 text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#282561]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7l5.21-3.47a1 1 0 011.08 0L12 8l-4.71 3.13a1 1 0 00-.71 0L3 12z" />
              </svg>
            </div>
            <h2 className="text-3xl font-extrabold text-[#282561]">Join Our Newsletter</h2>
            <p className="mt-2 text-gray-600">Get exclusive recipes & offers</p>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li className="flex items-center justify-center md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#fdc58a]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.172 10.172a1 1 0 011.414 0L9 11.586l3.414-3.414a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                10% off your first order
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#fdc58a]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.172 10.172a1 1 0 011.414 0L9 11.586l3.414-3.414a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Traditional recipes & cooking tips
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#fdc58a]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.172 10.172a1 1 0 011.414 0L9 11.586l3.414-3.414a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Early access to new products
              </li>
            </ul>
            <form className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="Your Name (Optional)"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#fdc58a]"
              />
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#fdc58a]"
              />
              <button
                type="submit"
                className="w-full bg-[#fdc58a] text-[#282561] font-bold py-3 rounded-xl transition-colors duration-300 hover:bg-[#ffdfb1]"
              >
                Subscribe & Get 10% Off
              </button>
            </form>
            <p className="mt-4 text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
          </div>

          <div className="hidden md:flex flex-col justify-center items-center w-full md:w-1/2 p-8 text-white rounded-r-3xl bg-gradient-to-tr from-[#282561] to-[#fdc58a] text-center">
            <h3 className="text-3xl font-extrabold">Join 1000+ Food Lovers</h3>
            <p className="mt-4 text-sm font-light">
              Discover traditional recipes, get cooking tips, and never miss out on our seasonal specials and limited-time offers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
