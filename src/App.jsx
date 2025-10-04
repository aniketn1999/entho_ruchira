import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Category from './components/Category'
import ProductCards from './components/ProductCards'
import CustomerReviews from './components/CustomerReviews'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'
import ProductPage from './components/ProductPage'
import { Route, Routes } from 'react-router'


const App = () => {
  return (
    <>
      <Navbar />
      <main className='pt-20'>
        <Routes>
          <Route path='/' element={
            <>
              <Hero />
              <WhyChooseUs />
              <Category />
              <ProductCards />
              <CustomerReviews />
              <NewsLetter />
            </>
          } />
          <Route path='/products' element={<ProductPage />} />
        </Routes>
      </main>
      <Footer />

    </>
  )
}

export default App
