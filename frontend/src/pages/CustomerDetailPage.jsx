import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function CustomerDetailPage() {
  return (
    <div>
        <Header />
        <h1 className='bg-gray-300 text-3xl p-5 text-orange-400 font-bold text-center'>Details of Customer Name</h1>

        <div className='w-3/4 mx-auto my-10'>
            <h2 className='mb-1 text-2xl font-semibold'>Custome Details</h2>
            <hr />
        </div>
        <div className='w-3/4 mx-auto my-10 mb-22'>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th className='p-3 bg-orange-400 border border-orange-500 text-white'>COLUMN</th>
                        <th className='p-3 bg-orange-400 border border-orange-500 text-white'>DATA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='p-2 border border-gray-300 text-center '>NAME</td>
                        <td className='p-2 border border-gray-300 text-center '>name here</td>
                    </tr>
                    <tr>
                        <td className='p-2 border border-gray-300 text-center bg-gray-200'>CONTACT</td>
                        <td className='p-2 border border-gray-300 text-center bg-gray-200'>contact no</td>
                    </tr>
                    <tr>
                        <td className='p-2 border border-gray-300 text-center'>EMAIL</td>
                        <td className='p-2 border border-gray-300 text-center'>email name</td>
                    </tr>
                    <tr>
                        <td className='p-2 border border-gray-300 text-center bg-gray-200'>ADDRESS</td>
                        <td className='p-2 border border-gray-300 text-center bg-gray-200'>address name</td>
                    </tr>
                    <tr>
                        <td className='p-2 border border-gray-300 text-center'>CITY</td>
                        <td className='p-2 border border-gray-300 text-center'>city name</td>
                    </tr>
                    <tr>
                        <td className='p-2 border border-gray-300 text-center bg-gray-200'>STATE</td>
                        <td className='p-2 border border-gray-300 text-center bg-gray-200'>state name</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
        <Footer />
    </div>
  )
}

export default CustomerDetailPage