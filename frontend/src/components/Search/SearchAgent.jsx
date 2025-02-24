import React, { useEffect, useState } from 'react'
import { fetchAgents } from "../../services/api";

function SearchAgent() {
    
    const [agents, setAgents] = useState([]);

  // Fetch orders when component loads
  useEffect(() => {
    fetchAgents()
      .then(setAgents)
      .catch(() => alert("Failed to load Agents"));
  }, []);

  useEffect(() => {
    const getAllAgents = async () => {
      try {
        const data = await fetchAgents();
        console.log("Fetched Orders in React:", data); // Debugging log
        setAgents(data); // Ensure all orders are stored
      } catch (error) {
        alert("Failed to load orders");
      }
    };

    getAllAgents();
  }, []);
  return (
    <div className=' xl:w-[1300px] lg:w-[1000px] md:w-full mx-auto lg:mb-42'>
        <div className=' flex lg:flex-row  md:w-full sm:w-full lg:w-3/4 mx-auto lg:mt-20 md:mt-10 mt-5 px-10' >
            <p className=' font-semibold lg:block md:hidden hidden text-xl lg:w-1/4'>Search Agent : </p>
            <div className=' w-full mx-auto lg:w-3/4'>
                <input type="text" className='border lg:w-4/5 md:w-4/5  w-3/4  px-5 py-1' placeholder='Search Agent' />
                <button className=' lg:w-1/5 md:1/5 px-2 py-1 lg:px-5 lg:py-2 rounded-md hover:cursor-pointer hover:bg-orange-500 bg-orange-400 text-white font-bold '>Search</button>
            </div>
        </div>
        <div className=' grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 md:w-full sm:grid-cols-1 lg:w-3/4 mx-auto my-10'>
            
            <div className=' sm:w-3/4 md:w-3/4 mx-auto lg:w-full flex p-5'>
                <img src="/Resources/images/logo.jpg" alt="" className='w-1/4' />
                <div className=' mx-auto'>
                    <h1 className='text-xl font-semibold my-1 hover:cursor-pointer'>Agent 1 <span>(Mumbai)</span></h1>
                    <p className='text-gray-500 text-md'>Contact: 12357890</p>
                    <p className='text-gray-500 text-md'>Email: agent-1@gmail.com</p>
                </div>
            </div>
            <div className=' sm:w-3/4 mx-auto lg:w-full flex p-5'>
                <img src="/Resources/images/logo.jpg" alt="" className='w-1/4' />
                <div className=' mx-auto'>
                    <h1 className='text-xl font-semibold my-1 hover:cursor-pointer'>Agent 1 <span>(Mumbai)</span></h1>
                    <p className='text-gray-500 text-md'>Contact: 12357890</p>
                    <p className='text-gray-500 text-md'>Email: agent-1@gmail.com</p>
                </div>
            </div>
            <div className=' sm:w-3/4 mx-auto lg:w-full flex p-5'>
                <img src="/Resources/images/logo.jpg" alt="" className='w-1/4' />
                <div className=' mx-auto'>
                    <h1 className='text-xl font-semibold my-1 hover:cursor-pointer'>Agent 1 <span>(Mumbai)</span></h1>
                    <p className='text-gray-500 text-md'>Contact: 12357890</p>
                    <p className='text-gray-500 text-md'>Email: agent-1@gmail.com</p>
                </div>
            </div>

            
            
            
        </div>
    </div>
  )
}

export default SearchAgent