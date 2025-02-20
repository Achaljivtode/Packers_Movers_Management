import React from 'react'
import UserHeader from '../components/UserHeader/UserHeader'
import HeroSection from '../components/HeroSection/HeroSection'
import Cards from '../components/cards/Cards'
import Footer from '../components/Footer/Footer'

function HomePage() {
  return (
    <div>
        <UserHeader />
        <HeroSection />
        <Cards />
        
        <Footer />
        
    </div>
  )
}

export default HomePage