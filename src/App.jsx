import React from 'react'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Category from './components/Category'
import ProductCards from './components/ProductCards'
import CustomerReviews from './components/CustomerReviews'
import NewsLetter from './components/NewsLetter'
import SEO from './components/SEO'

import { GoHeartFill } from "react-icons/go";
import { FaLeaf } from "react-icons/fa";
import { CookingPot } from 'lucide-react';
import { GiStorkDelivery } from "react-icons/gi";
import { FcCustomerSupport } from "react-icons/fc";
import { VscWorkspaceTrusted } from "react-icons/vsc";


const App = () => {

  // Props for WhyChooseUs component
  const heading = 'Why Choose Entho Ruchira?';
  const subHeading = 'We’re not just another pickle brand. We’re keepers of Telangana’s culinary heritage, bringing you authentic flavors that tell the story of our rich food culture.'
  const features = [
    {
      icon: <GoHeartFill className='text-red-500' size={35} />,
      title: '100% Handmade Excellence',
      description: 'Every jar is crafted with the same love and tradition that we’ve cherished for generations in Telangana kitchens.'
    },
    {
      icon: <FaLeaf className='text-green-500' size={35} />,
      title: 'Premium Natural Ingredients',
      description: 'Locally sourced fresh ingredients, traditional spices, and cold-pressed oils with no artificial preservatives.'
    },

    {
      icon: <CookingPot className='text-orange-500' size={35} />,
      title: 'Authentic Heritage Recipes',
      description: 'Traditional recipes passed down through generations, preserving the authentic taste of Telangana cuisine.'
    },
    {
      icon: <GiStorkDelivery className='text-purple-500' size={35} />,
      title: 'Fresh Delivery',
      description: '3-layer protective packaging ensures your pickles reach you fresh and flavorful, anywhere in India.'
    },
    {
      icon: <FcCustomerSupport className='text-blue-500' size={35} />,
      title: 'Expert Customer Support',
      description: 'Dedicated support line with personal consultation for bulk orders and recipe suggestions.'
    },
    {
      icon: <VscWorkspaceTrusted className='text-indigo-500' size={35} />,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee with easy returns and refunds if you’re not completely satisfied.'
    }
  ];

  return (
    <>
      <SEO
        title="Authentic Handmade Non-Veg Pickles"
        description="Entho Ruchira offers authentic handmade non-veg pickles crafted with traditional Telangana recipes."
        keywords="non-veg pickles, chicken pickle, mutton pickle, Telangana pickles, entho ruchira, "
        canonical="https://enthoruchira.com"
        image="https://enthoruchira.com/assets/logo.png"
      />

      <Hero />
      <WhyChooseUs heading={heading} subHeading={subHeading} features={features} />
      <Category />
      <ProductCards />
      <CustomerReviews />
      <NewsLetter />
    </>
  )
}

export default App
