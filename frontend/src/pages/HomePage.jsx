import React from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/HeroSection/HeroSection'
import Cards from '../components/cards/Cards'
import Footer from '../components/Footer/Footer'

function HomePage() {
  return (
    <div>
        <Header />
        <HeroSection />
        <Cards />
        
        <Footer />
        
    </div>
  )
}

export default HomePage