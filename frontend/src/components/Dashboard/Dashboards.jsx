import React, { useEffect } from 'react'
import dashboard from '../../constant/dashboard'
import { useState } from 'react'
// import dashboard from '../../constant/dashboard'

function Dashboards() {
  const [Data,setdata] = useState({})
  const userRole = localStorage.getItem('role')
  const [image, setImage] = useState('')

  useEffect(() => {
    if(userRole === 'admin'){ 
      setdata(dashboard.admin)
      setImage('/Resources/images/image-1.jpg') 
    }
    if(userRole === 'agent'){ 
      setdata(dashboard.agent) 
      setImage('/Resources/images/image-2.jpg') 

    }
    if(userRole === 'customer'){ 
      setdata(dashboard.user) 
      setImage('/Resources/images/image-3.jpg') 

    }

  },[userRole])

  console.log(userRole.toUpperCase())

  return (
    <div>
        <h1 className='text-3xl font-bold text-orange-400 bg-gray-300 p-4 text-center'>{userRole.toUpperCase()} DASHBOARD</h1>
        <div className='flex flex-row justify-between my-10 p-10 lg:w-[1450px] mx-auto'>
          <ul className=' w-[50%]'>
            {
              Object.keys(Data).map((key)=>(
                <li key={key} className='border p-2 my-5 w-[80%] mx-auto text-center bg-orange-400 text-white text-2xl font-semibold rounded-xl'>
                
                {
                  (key === 'Logout')? 
                  <a href={Data[key].link} onClick={()=>localStorage.setItem('role',"")}>{key}</a>:
                  <a href={Data[key].link}>{key}</a>

                }
                </li>
              ))
            }
          </ul>
          <img src={image} alt="" className='w-[50%]' />
        </div>
        

        
    </div>
  )
}

export default Dashboards