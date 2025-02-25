import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function CustomerFeedBackPage() {
    return (
        <div>
            <Header />
            <h1 className='bg-gray-300 py-4 text-3xl text-orange-400 font-bold text-center'>Feedback Detail</h1>

            <div className='w-3/4 mx-auto my-20'>
                <h2 className='text-xl mb-1 text-semibold'>Customer Feedback details</h2>
                <hr />
            </div>

            <div className='w-3/4 mx-auto mb-20'>
                <table className='w-full border'>
                    <thead>
                        <tr>
                            <th className='border bg-orange-400 text-white p-3 text-xl'>COLUMN</th>
                            <th className='border bg-orange-400 text-white p-3 text-xl'>DATA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border border-gray-300 text-center p-4 font-semibold'>Name</td>
                            <td className='border border-gray-300 text-center p-4 '>Name here</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-300 bg-gray-200 text-center p-4 font-semibold'>Email</td>
                            <td className='border border-gray-300 bg-gray-200 text-center p-4 '>Email here</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-300 text-center p-4 font-semibold'>Rating</td>
                            <td className='border border-gray-300 text-center p-4 '>Rating here</td>
                        </tr>
                        <tr>
                            <td className='border border-gray-300 bg-gray-200 text-center p-4 font-semibold'>Feedback</td>
                            <td className='border border-gray-300 bg-gray-200 text-center p-4 '>Feedback here</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />

        </div>
    )
}

export default CustomerFeedBackPage