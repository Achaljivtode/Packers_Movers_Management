import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function ServiceDetailsPage() {
  return (
    <div>
        <Header />
        <h1 className='text-3xl font-bold p-5 bg-gray-300 text-orange-400 text-center'>Details of Office Shifting</h1>
        <div>
            <div className=' w-2/4 mx-auto mt-15 mb-15'>
                <h1 className=' text-2xl font-semibold'>Service Details</h1>
                <hr className=' mx-auto' />
            </div>
            <table className='border w-3/6 lg:mb-45 mx-auto text-center'>
                <thead>
                    <tr>
                        <th className='border p-2 bg-orange-400 text-white text-xl'>Column</th>
                        <th className='border p-2 bg-orange-400 text-white text-xl'>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border p-4 font-bold'>Name</td>
                        <td className='border p-4 text-lg text-gray-600'>service name here</td>
                    </tr>
                    <tr>
                        <td className='border p-4 font-bold'>Description</td>
                        <td className='border p-4 text-lg text-gray-600'>Description here</td>
                    </tr>
                </tbody>
            </table>
            <Footer />
        </div>
    </div>
  )
}

export default ServiceDetailsPage