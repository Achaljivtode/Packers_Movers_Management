import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'

function AllCustomer() {
    const navigate = useNavigate();
  return (
    <div>
        <Header />
        <h1 className='bg-gray-300 text-3xl p-5 text-orange-400 font-bold text-center'>All Customers</h1>

        <div className='w-3/4 mx-auto my-10'>
            <h2 className='mb-1 text-2xl font-semibold'>All Customer Report </h2>
            <hr />
        </div>
        <div className='w-3/4 mx-auto my-10 mb-40'>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th className='p-3 bg-orange-400 border border-orange-500 text-white'>ID</th>
                        <th className='p-3 bg-orange-400 border border-orange-500 text-white'>USER NAME</th>
                        <th className='p-3 bg-orange-400 border border-orange-500 text-white'>CONTACT NO</th>
                        <th className='p-3 bg-orange-400 border border-orange-500 text-white'>EMAIL</th>
                        <th className='p-3 bg-orange-400 border border-orange-500 text-white'>CITY</th>
                        <th className='p-3 bg-orange-400 border border-orange-500 text-white'>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='p-2 border border-gray-300 text-center'>user id</td>
                        <td className='p-2 border border-gray-300 text-center'>user name</td>
                        <td className='p-2 border border-gray-300 text-center'>user no</td>
                        <td className='p-2 border border-gray-300 text-center'>user email</td>
                        <td className='p-2 border border-gray-300 text-center'>user city</td>
                        <td className='p-2 border border-gray-300 text-center'>
                            <div>
                                <button onClick={() => navigate('/customer-detail/:id')} className='border py-1 px-3 ml-2 hover:cursor-pointer text-white rounded-md bg-blue-400'>View</button>
                                <button className='border py-1 px-3 ml-2 hover:cursor-pointer text-white rounded-md bg-red-400'>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Footer />
    </div>
  )
}

export default AllCustomer