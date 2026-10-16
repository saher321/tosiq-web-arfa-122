import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WebLayout = ({children}) => {
  return (
    <div>
      <Navbar />
      <div className='mx-auto max-w-7xl px-6 py-6'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default WebLayout
