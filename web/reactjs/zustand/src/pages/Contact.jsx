import React from 'react'
import WebLayout from '../layouts/WebLayout'
import { useData } from '../store/useData'

const Contact = () => {
  const user = useData(state => state.user)
  return (
    <WebLayout>
      <div>Copyrights &copy; {user}</div>
    </WebLayout>
  )
}

export default Contact