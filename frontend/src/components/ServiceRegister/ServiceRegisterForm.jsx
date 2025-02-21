import React from 'react'
import { useState } from 'react'

function ServiceRegisterForm() {
    const [status, setStatus] = useState('')
    console.log(status);
    
  return (
    <div>

        <form action="#" method="post" className=' px-5 mx-auto lg:w-xl md:w-full sm:w-full p-3 m-3'>

            <h3 className='text-center font-semibold text-xl'>Register Your service</h3>
            

            <div className='flex flex-row md:w-3/4 md:mx-auto my-7'>
                <label htmlFor="" className=' w-2/5 font-medium'>Enter Service Name:</label>
                <input type="text" className='border-1  border-gray-400 w-3/5  ml-5 p-1 rounded-md' />
            </div>
            <div className='flex flex-row md:w-3/4 md:mx-auto'>
                <label htmlFor="" className=' w-2/5 font-medium'>Service Image:</label>
                <input type="file" className='border-1  border-gray-400 w-3/5  ml-5 p-1 rounded-md' />
            </div>
            <div className='flex flex-row md:w-3/4 md:mx-auto my-7'>
                <label htmlFor="" className=' w-2/5 font-medium'>Status:</label>
                <select 
                    name="status" 
                    id="status" 
                    className='border-1  border-gray-400 w-3/5  ml-5 p-1 rounded-md'
                    onChange={(e)=>setStatus(e.target.value)}
                >
                    <option value="">Select Status</option>
                    <option value="active">Active</option>
                    <option value="deactive">Deactive</option>
                </select>
            </div>
            <div className='flex flex-row md:w-3/4 md:mx-auto'>
                <label htmlFor="" className=' w-2/5 font-medium'>Description:</label>
                <textarea name="description" id="description" cols={40} className='border-1  border-gray-400 w-3/5  ml-5 p-1 rounded-md' />
            </div>

            <div className=' flex flex-row md:w-3/4 md:mx-auto my-5'>
                <input type="submit" value="Register" className='border w-full bg-orange-400 text-white font-semibold p-2 rounded-md hover:cursor-pointer hover:bg-orange-500 ' />
            </div>


        </form>

    </div>
  )
}

export default ServiceRegisterForm