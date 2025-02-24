import React from 'react'
import Header from '../components/Header/Header'
import Servicess from '../components/servicess/servicess'
import Footer from '../components/Footer/Footer'

function ServicePage() {
  return (
    <div>
        <Header />
        <h1 className='text-3xl font-bold p-5 bg-gray-300 text-orange-400 text-center'>All Services</h1>
        <p className='my-5  text-center text-xl text-gray-500 font-semibold'>
            These all are available Service. Kindly click on the packers and movers to see the details of it.
        </p>
        <Servicess />
        <Footer />
    </div>
  )
}

export default ServicePage