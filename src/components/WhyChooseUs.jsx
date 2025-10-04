import React from 'react';

const features = [
  {
    // Using inline SVG for icons to avoid the import error
    icon: <svg className="text-red-500 mb-4" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>,
    title: '100% Handmade Excellence',
    description: 'Every jar is crafted with the same love and tradition that we’ve cherished for generations in Telangana kitchens.'
  },
  {
    icon: <svg className="text-green-500 mb-4" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 5.5c-1.1-1.1-2.2-1.5-3.5-1.5-1.3 0-2.4.4-3.5 1.5-1.1 1.1-1.5 2.2-1.5 3.5 0 1.3.4 2.4 1.5 3.5 1.1 1.1 2.2 1.5 3.5 1.5 1.3 0 2.4-.4 3.5-1.5s1.5-2.2 1.5-3.5c0-1.3-.4-2.4-1.5-3.5zM12 3c-1.84 0-3.32.74-4.5 2c-1.18 1.26-1.5 2.76-1.5 4.5 0 1.74.32 3.24 1.5 4.5s2.66 1.5 4.5 1.5 3.32-.74 4.5-2 1.5-2.76 1.5-4.5c0-1.74-.32-3.24-1.5-4.5s-2.66-1.5-4.5-1.5zM12 17c-1.74 0-3.24-.32-4.5-1.5s-1.5-2.76-1.5-4.5.32-3.24 1.5-4.5 2.76-1.5 4.5-1.5 3.24.32 4.5 1.5 1.5 2.76 1.5 4.5-.32 3.24-1.5 4.5-2.76 1.5-4.5 1.5z" /></svg>,
    title: 'Premium Natural Ingredients',
    description: 'Locally sourced fresh ingredients, traditional spices, and cold-pressed oils with no artificial preservatives.'
  },
  {
    icon: <svg className="text-orange-500 mb-4" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 4.17L19.5 20h-15L12 6.17zM11 10h2v6h-2zM11 18h2v2h-2z" /></svg>,
    title: 'Authentic Heritage Recipes',
    description: 'Traditional recipes passed down through generations, preserving the authentic taste of Telangana cuisine.'
  },
  {
    icon: <svg className="text-blue-500 mb-4" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M20 8h-3V4H7v4H4c-1.1 0-2 .9-2 2v10h20V10c0-1.1-.9-2-2-2zM9 6h6v2H9V6zm11 14H4v-8h16v8z" /></svg>,
    title: 'Fresh Delivery',
    description: '3-layer protective packaging ensures your pickles reach you fresh and flavorful, anywhere in India.'
  },
  {
    icon: <svg className="text-purple-500 mb-4" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>,
    title: 'Expert Customer Support',
    description: 'Dedicated support line with personal consultation for bulk orders and recipe suggestions.'
  },
  {
    icon: <svg className="text-indigo-500 mb-4" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 15H9v-2h2v2zm-2-4V8h4v4h-4z" /></svg>,
    title: 'Quality Guarantee',
    description: '100% satisfaction guarantee with easy returns and refunds if you’re not completely satisfied.'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="pt-15 pb-10 bg-[#282561] text-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#ffffff] mb-4">Why Choose Entho Ruchira?</h2>
        <p className="text-lg text-gray-400 mb-5 max-w-2xl mx-auto">
          We’re not just another pickle brand. We’re keepers of Telangana’s culinary heritage, bringing you authentic flavors that tell the story of our rich food culture.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-20  ">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#2f2b77] p-10 rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl text-[#ffffff] font-semibold text-gold-400 mb-2">{feature.title}</h3>
              <p className="text-sm text-[#fdc58a]">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* <div className="mt-30 bg-gradient-to-r from-orange-500 to-red-600 p-8 md:p-12 rounded-2xl shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white">
            <div className="flex flex-col items-center justify-center">
              <span className="text-4xl md:text-5xl font-bold mb-1">500+</span>
              <span className="text-sm md:text-base">Happy Customers</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-4xl md:text-5xl font-bold mb-1">15+</span>
              <span className="text-sm md:text-base">Pickle Varieties</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-4xl md:text-5xl font-bold mb-1">100%</span>
              <span className="text-sm md:text-base">Handmade Quality</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-4xl md:text-5xl font-bold mb-1">24/7</span>
              <span className="text-sm md:text-base">Customer Support</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;
