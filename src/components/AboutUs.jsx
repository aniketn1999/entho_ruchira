import React from 'react'
import WhyChooseUs from './WhyChooseUs';

import { GoHeartFill } from "react-icons/go";
import { MdWorkspacePremium } from "react-icons/md";
import { FaLeaf } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import SEO from './SEO';


const AboutUs = () => {
    const steps = [
        {
            number: "01",
            title: "Sourcing",
            description: "Fresh ingredients sourced directly from trusted local farmers and suppliers."
        },
        {
            number: "02",
            title: "Preparation",
            description: "Traditional cutting and preparation techniques ensuring optimal flavor absorption."
        },
        {
            number: "03",
            title: "Seasoning",
            description: "Authentic spice blends mixed in precise proportions using time-tested recipes."
        },
        {
            number: "04",
            title: "Maturation",
            description: "Careful aging process allowing flavors to develop and intensify naturally."
        }
    ];

    // Props for WhyChooseUs component
    const heading = 'Our Values';
    const subHeading = 'These principles guide everything we do, from sourcing ingredients to delivering your order.'
    const features = [
        {
            icon: <GoHeartFill className='text-red-500' size={35} />,
            title: 'Made with Love',
            description: 'Every batch is prepared with the same care and attention as if we were making it for our own family.'
        },
        {
            icon: <MdWorkspacePremium className='text-blue-500' size={35} />,
            title: 'Authentic Recipes',
            description: 'Traditional Telangana recipes preserved and passed down through generations of master cooks.'
        },

        {
            icon: <FaLeaf className='text-green-500' size={35} />,
            title: 'Natural Ingredients',
            description: 'Only the finest locally sourced ingredients, with no artificial preservatives or additives.'
        },
        {
            icon: <VscWorkspaceTrusted className='text-purple-500' size={35} />,
            title: 'Quality Assurance',
            description: 'Rigorous quality checks at every step, from ingredient selection to final packaging.'
        },
        {
            icon: <IoPeopleSharp className='text-indigo-500' size={35} />,
            title: 'Community First',
            description: 'Supporting local farmers and suppliers while serving our extended family of customers.'
        },
        {
            icon: <FaClock className='text-orange-500' size={35} />,
            title: 'Time-Honored Process',
            description: 'We never rush the process. Good pickles, like good wine, need time to develop their flavors.'
        },
    ];

    return (
        <>

            <SEO
                title='About Us | Entho Ruchira – Authentic Handmade Non-Veg Pickles'
                description="about Entho Ruchira, handmade pickles story, Telangana pickles, traditional pickle making, non-veg pickles process"
                keywords="about Entho Ruchira, handmade pickles story, Telangana pickles, traditional pickle making, non-veg pickles process"
                canonical='https://enthoruchira.com/aboutus'
            />

            <section className="py-16 bg-[#fdc58a]">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-4xl font-extrabold text-[#282561] mb-4">Our Story</h2>
                    <p className="text-lg text-[#ffffff] mx-auto max-w-3xl mb-12 font-medium">
                        Born from the heart of Telangana, Entho Ruchira preserves the authentic flavors that have been passed down through generations, bringing you the true taste of traditional pickles.
                    </p>
                </div>

                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl">

                    {/* Image Side */}
                    <div className="md:order-1 flex justify-center">
                        <img
                            src="/assets/rec.png"
                            alt="Traditional pickle making process"
                            className="w-full max-w-lg rounded-2xl shadow-2xl object-cover border-4 border-[#fdc58a] transition-transform duration-500 hover:scale-[1.02]"
                        />
                    </div>

                    {/* Text Side */}
                    <div className="md:order-2 text-left p-4">
                        <h3 className="text-4xl font-bold text-[#282561] mb-6">Rooted in Tradition</h3>

                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Entho Ruchira began as a family tradition in the heart of Telangana, where our grandmothers would prepare pickles with secrets passed down through generations. What started in a small kitchen has grown into a mission to share the authentic taste of Telangana with food lovers across India.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Every jar we create tells a story of traditional spices carefully selected from local markets, of time-honored techniques that can't be rushed, and of the love that goes into each batch. We believe that true flavor comes not from shortcuts, but from patience and authenticity.
                        </p>

                    </div>
                </div>
            </section>

            <WhyChooseUs heading={heading} subHeading={subHeading} features={features} />

            <section className="py-16 bg-[#fdc58a]">
                {/* Background Gradient matching the theme */}
                <div className="bg-gradient-to-r bg-[#282561] p-8 md:p-12 rounded-[2.5rem] shadow-2xl mx-4 lg:mx-auto max-w-7xl">
                    <div className="text-center text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-3">Our Process</h2>
                        <p className="text-lg md:text-xl font-medium mb-10 opacity-90 text-[#fdc58a]">
                            From farm to jar, every step is carefully orchestrated to bring you the finest pickles.
                        </p>
                    </div>

                    {/* Process Steps Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-[#282561] mt-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                // Card styling matching the image: rounded, white background with subtle shadow
                                className="bg-white p-6 rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl flex flex-col justify-between h-full"
                            >
                                <p className="text-4xl font-extrabold text-[#fdc58a] mb-2">{step.number}</p>
                                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#282561]">
                <div className="container mx-auto px-4 text-center max-w-4xl">

                    {/* Title uses the theme's orange accent color */}
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#ffffff]">
                        Ready to Experience Authentic Telangana Flavors?
                    </h2>

                    <p className="text-lg md:text-xl text-[#fdc58a] mx-auto max-w-3xl mb-10">
                        Join thousands of satisfied customers who have made Entho Ruchira pickles a part of their family traditions.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">

                        {/* Primary Button (Gradient background) */}
                        <a
                            href="#products"
                            className="inline-block py-3 px-10 rounded-full font-bold text-lg text-white bg-[#fdc58a] shadow-xl 
                       transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                        >
                            Shop Our Pickles
                        </a>

                        {/* Secondary Button (Outline style) */}
                        <a
                            href="#contact"
                            className="inline-block py-3 px-10 rounded-full font-bold text-lg text-[#282561] 
                       border-2 border-[#fdc58a] bg-white 
                       transition-colors duration-300 hover:bg-[#ffe1be] hover:border-red-600"
                        >
                            Bulk Orders
                        </a>
                    </div>
                </div>
            </section>

        </>

    );
}

export default AboutUs;