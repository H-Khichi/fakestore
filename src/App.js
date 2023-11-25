import React from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Hero from './components/hero/hero'
import Products from './components/cards/product'
import Slider from './pages/slider/slider'
export default function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Products/>
      <Footer/> 
      {/* <Slider/> */}
    </div>
  )
}
