import React from 'react'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Category from './components/Category'
import ProductCards from './components/ProductCards'
import CustomerReviews from './components/CustomerReviews'
import NewsLetter from './components/NewsLetter'
import SEO from './components/SEO'


const App = () => {
  return (
    <>
      <SEO
        title="Authentic Handmade Non-Veg Pickles"
        description="Entho Ruchira offers authentic handmade non-veg pickles crafted with traditional Telangana recipes."
        keywords="non-veg pickles, chicken pickle, mutton pickle, Telangana pickles"
        canonical="https://enthoruchira.com"
        image="https://enthoruchira.com/assets/og-image.jpg"
      />


      <Hero />
      <WhyChooseUs />
      <Category />
      <ProductCards />
      <CustomerReviews />
      <NewsLetter />
    </>
  )
}

export default App
