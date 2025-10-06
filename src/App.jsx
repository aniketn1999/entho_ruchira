import React from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Category from './components/Category'
import ProductCards from './components/ProductCards'
import CustomerReviews from './components/CustomerReviews'
import NewsLetter from './components/NewsLetter'
import Footer from './components/layout/Footer'
import ProductPage from './components/ProductPage'


const App = () => {
  return (
    <>
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
