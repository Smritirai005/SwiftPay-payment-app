import React from 'react'
import { Appbar } from '../components/AppBar'
import { Balance} from '../components/balance'
import { Users } from '../components/usercomponent'
const Dashboard = () => {
  return (
    <div>
        <Appbar />
        <div className="m-8">
            <Balance value={"10,000"}></Balance>
            <Users></Users>
        </div>
      
    </div>
  )
}

export default Dashboard
