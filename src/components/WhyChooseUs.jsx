import React from "react";

const WhyChooseUs = ({ heading, subHeading, features }) => {
  return (
    <section
      id="why-choose-us"
      className="pt-15 pb-20 bg-[#282561] text-gray-100"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#ffffff] mb-4">{heading}</h2>
        <p className="text-lg text-[#fdc58a] mb-5 max-w-2xl mx-auto">
          {subHeading}
        </p>
        <div
          className="
    flex gap-6 overflow-x-auto pb-6 px-2
    md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:px-20
    scrollbar-hide
  "
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="
        min-w-[280px] sm:min-w-[320px]
        bg-[#2f2b77] p-10 rounded-xl shadow-xl
        hover:shadow-2xl hover:-translate-y-2
        transition-all duration-300
        md:min-w-0
      "
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl text-white font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#fdc58a]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
