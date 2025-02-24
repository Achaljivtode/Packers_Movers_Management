import React from 'react'
import { useNavigate } from 'react-router-dom'

function QuatationEntryForm() {

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/quatation-report')
    }

  return (
    <div>
        <form action="#" method="post" 
            className=' lg:w-2/4 lg:my-19 md:w-full md:my-10 p-5 mx-auto'
        >

            <div className='flex flex-row mt-5'>
                <label htmlFor="service" className=' w-2/5 flex lg:justify-end md:justify-end sm:justify-start pr-3'>Select Service: </label>
                <select name="service" id="service" className='border-1 border-gray-400 rounded-sm w-3/5 p-2' required>
                    <option value="">Select Service</option>
                    <option value="Office Shifting">Office Shifting</option>
                    <option value="House Shifting">House Shifting</option>
                    <option value="Car Shifting">Car Shifting</option>
                    <option value="Bike Shifting">Bike Shifting</option>
                    <option value="Packages Shifting">Packages Shifting</option>
                </select>
            </div>
            <div className='flex flex-row mt-5'>
                <label htmlFor='from-address' className='w-2/5 flex lg:justify-end md:justify-end sm:justify-start pr-3'>Shift From Address: </label>
                <input id='from-address' name='from-address' type="text" className='border-1 border-gray-400 rounded-sm w-3/5 p-2' placeholder='Shift From Address' required />
            </div>
            <div className='flex flex-row mt-5'>
                <label htmlFor="to-address" className=' w-2/5 flex lg:justify-end md:justify-end sm:justify-start pr-3'>Shift To Address: </label>
                <input id='to-address' name='to-address' type="text" className='border-1 border-gray-400 rounded-sm w-3/5 p-2' placeholder='Shift To Address' required />
            </div>
            <div className='flex flex-row mt-5'>
                <label htmlFor="service-date" className=' w-2/5 flex lg:justify-end md:justify-end sm:justify-start pr-3'>Service Date</label>
                <input id='service-date' name='service-date' type="date" className='border-1 border-gray-400 rounded-sm w-3/5 p-2' required />
            </div>
            <div className='flex flex-row mt-5'>
                <label htmlFor="reference" className=' w-2/5 flex lg:justify-end md:justify-end sm:justify-start pr-3'>References: </label>
                <input id='reference' name='reference' type="text" className='border-1 border-gray-400 rounded-sm w-3/5 p-2' placeholder='Enter References' required />
            </div>
            <div className='flex flex-row mt-5'>
                <label htmlFor="service-details" className=' w-2/5 flex lg:justify-end md:justify-end sm:justify-start pr-3'>Details of Services: </label>
                <input id='service-details' name='service-details' type="text" className='border-1 border-gray-400 rounded-sm w-3/5 p-2' placeholder='Enter details of all items' required />
            </div>
            <div className='mt-5 text-end'>
                <input type="submit" onClick={handleSubmit} value="SUBMIT" className='w-full bg-orange-400 p-2 rounded-md text-white text-xl font-semibold'  />
            </div>
        </form>
    </div>
  )
}

export default QuatationEntryForm