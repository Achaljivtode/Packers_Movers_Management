import React from 'react'
import Header from '../components/Header/Header'
import QuatationEntryForm from '../components/QuatationEntryForm/QuatationEntryForm'
import Footer from '../components/Footer/Footer'

function QuatationEntryPage() {
  return (
    <div>
        <Header />
        <div className=''>
            <h1 className='text-3xl font-bold py-5 text-center text-orange-500 bg-gray-300'>Quatation Entry</h1>
            <QuatationEntryForm />
        </div>
        <Footer />
        
    </div>
  )
}

export default QuatationEntryPage