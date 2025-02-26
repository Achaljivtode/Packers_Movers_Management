import React,{ useState,useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import { fetchAgents } from '../services/api'

function AllAgents() {
    const [agents, setAgents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchAgents()
          .then((data) => {
            setAgents(data);
            // setFilteredAgents(data);
          })
          .catch(() => alert("Failed to load Agents"));
      }, []);
  return (
    <div>
        <Header />
        <h1 className='bg-gray-300 text-3xl p-5 text-orange-400 font-bold text-center'>All Agents</h1>

        <div className='w-3/4 mx-auto my-10'>
            <h2 className='mb-1 text-2xl font-semibold'>All Agents Report </h2>
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
                    {
                        agents.map( agent =>(
                            <tr key={agent.id}>
                                
                                <td className='p-2 border border-gray-300 text-center'>{agent.id}</td>
                                <td className='p-2 border border-gray-300 text-center'>{agent.full_name}</td>
                                <td className='p-2 border border-gray-300 text-center'>{agent.mobile}</td>
                                <td className='p-2 border border-gray-300 text-center'>{agent.email}</td>
                                <td className='p-2 border border-gray-300 text-center'>{agent.city}</td>
                                <td className='p-2 border border-gray-300 text-center'>
                                    <div>
                                        <button onClick={() => navigate(`/agent-detail/${agent.id}`)} className='border py-1 px-3 ml-2 hover:cursor-pointer text-white rounded-md bg-blue-400'>View</button>
                                        <button className='border py-1 px-3 ml-2 hover:cursor-pointer text-white rounded-md bg-red-400'>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                    <tr>
                    </tr>
                </tbody>
            </table>
        </div>
        <Footer />
    </div>
  )
}

export default AllAgents