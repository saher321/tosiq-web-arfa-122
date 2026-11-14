import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div>
        <div className='p-4 font-bold italic text-blue-500'>
            pms
        </div>
        <div className='rounded my-5 bg-white p-6 max-w-lg mx-auto'>
            {children}
        </div>
    </div>
  )
}

export default AuthLayout
