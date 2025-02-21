import React from 'react'

function Quatation() {
  return (
    <div>
        <h1 className='text-orange-400 text-2xl font-semibold text-center my-10'>ALL QUATATION REPORT</h1>

        <table className=' mx-auto lg:w-[1000px] md:w-full sm:w-full'>
            <thead>
                <tr className=''>
                    <th className='border p-2 font-normal bg-orange-400 text-white'>ID</th>
                    <th className='border p-2 font-normal bg-orange-400 text-white'>Customer Name</th>
                    <th className='border p-2 font-normal bg-orange-400 text-white'>Customer Email</th>
                    <th className='border p-2 font-normal bg-orange-400 text-white'>Customer Phone</th>
                    <th className='border p-2 font-normal bg-orange-400 text-white'>From</th>
                    <th className='border p-2 font-normal bg-orange-400 text-white'>To</th>
                    <th className='border p-2 font-normal bg-orange-400 text-white'>Service Name</th>
                    <th className='border p-2 font-normal bg-orange-400 text-white'>Service Price</th>
                    <th className='border p-2 font-normal bg-orange-400 text-white'>Service Date</th>
                    <th className='border p-2 font-normal bg-orange-400 text-white'>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border p-2'>1</td>
                    <td className='border p-2'>John Doe</td>
                    <td className='border p-2'>john@gmail.com</td>
                    <td className='border p-2'>1234567890</td>
                    <td className='border p-2'>mumbai</td>
                    <td className='border p-2'>pune</td>
                    <td className='border p-2'>car transport</td>
                    <td className='border p-2'>30000</td>
                    <td className='border p-2'>28/2/2025</td>
                    <td className='border p-2'></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Quatation