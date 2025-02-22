import React from 'react'
import dashboard from '../../constant/dashboard'

function Dashboard() {
  return (
    <div>
        <h1>Admin Dashboard</h1>
        {
            dashboard.admin.map((option,index)=>(
                <div key={index}>
                    <p></p>
                </div>
            ))
        }
    </div>
  )
}

export default Dashboard