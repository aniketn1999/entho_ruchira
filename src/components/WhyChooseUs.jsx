import React from 'react';


const WhyChooseUs = ({heading, subHeading, features}) => {

  

  return (
    <section id="why-choose-us" className="pt-15 pb-20 bg-[#282561] text-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#ffffff] mb-4">{heading}</h2>
        <p className="text-lg text-[#fdc58a] mb-5 max-w-2xl mx-auto">
          {subHeading}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-20  ">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#2f2b77] p-10 rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex justify-center mb-4" >
                {feature.icon}
              </div>
              <h3 className="text-xl text-[#ffffff] font-semibold text-gold-400 mb-2">{feature.title}</h3>
              <p className="text-sm text-[#fdc58a]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
