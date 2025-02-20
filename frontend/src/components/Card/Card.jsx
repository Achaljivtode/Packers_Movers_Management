import React from 'react'
import cardDetails from '../../constant/Cards'

function Card() {
  return (
    <div className='my-10 grid lg:grid-cols-4 gap-4 lg:px-10 lg:py-5 md:grid-cols-2 md:px-5 md:py-5 sm:grid-cols-1 sm:px-5 sm:py-5'>
        {
            cardDetails.map((card,index)=>(
                <div 
                    key={index}
                    className='border-2 border-orange-200 p-5 rounded-lg shadow-md bg-orange-100 hover:cursor-pointer'
                >
                    <h1 className='text-2xl text-center mb-5 font-semibold'>{card.title}</h1>
                    <p className='text-md'>{card.content}</p>
                </div>
            ))
        }

    </div>
  )
}

export default Card