import React from 'react'
import Header from '../components/Header/Header'
import ServiceRegisterForm from '../components/ServiceRegister/ServiceRegisterForm'
import Footer from '../components/Footer/Footer'

function ServiceRegisterPage() {
  return (
    <div>
        <Header />
        <h1 className='text-center lg:mt-10 lg:mb-15 mt-5 text-2xl font-semibold text-orange-500'>SERVICE REGISTRATION</h1>
        <ServiceRegisterForm />
        <Footer />
    </div>
  )
}

export default ServiceRegisterPage