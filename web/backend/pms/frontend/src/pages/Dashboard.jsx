import React from 'react'
import { useAuth } from '../store/useAuth'

const Dashboard = () => {
  const user = useAuth(state => state.user)
  return (
    <>
    {
      user.isAdmin ? <div>Dashboard, {user.fullName}</div>:
      <>Sample user</>
    }
    </>
  )
}

export default Dashboard