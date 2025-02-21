import React from 'react'

function FeedBackForm() {
  return (
    <div className='px-5 border'>
        <h1 className=' text-center text-2xl font-bold mt-10'>FeedBack Form</h1>

        <form 
            action="" 
            method="post"
            className='border mx-auto pb-20 py-10 lg:w-[600px] md:w-[500px] sm:w-full'
        >
            <h2>Write Your Feedback</h2>
            <hr  className='mb-10'/>
            <div>
                <div className=' w-full mb-3'>
                    <p className='mb-1 mt-5'>Full Name: </p>
                    <input type="text" name="feed_name" id="feed_name" 
                        className='border-1 border-gray-400 w-full p-1'
                    />
                </div>
                <div className=' w-full mb-3'>
                    <p className='mb-1 mt-5'>Email Id: </p>
                    <input type="email" name="feed_email" id="feed_email" 
                        className='border-1 border-gray-400 w-full p-1'
                    />
                </div>
                <div className=' w-full mb-3'>
                    <p className='mb-1 mt-5'>Select Rating: </p>
                    <select name="feed_rating" id="feed_rating"
                        className='border-1 border-gray-400 w-full p-1'
                    >
                        <option value="">Select rating</option>
                        <option value="1-star">1-star</option>
                        <option value="2-star">2-star</option>
                        <option value="3-star">3-star</option>
                        <option value="4-star">4-star</option>
                        <option value="5-star">5-star</option>
                    </select>
                </div>
                <div className=' w-full mb-3'>
                    <p className='mb-1 mt-5'>Write Your Feedback: </p>
                    <textarea name="feed_msg" id="feed_msg" rows={2} cols={20} className='border-1 border-gray-400 px-3 w-full' />
                </div>
            </div>

        </form>
        
    </div>
  )
}

export default FeedBackForm