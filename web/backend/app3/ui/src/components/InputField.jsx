import React from 'react'

const InputField = ({ type = "text", hint, ...othersProp }) => {
  return (
    <input 
    {...othersProp}
    type={type} 
    className='w-full px-5 py-2.5 rounded-full bg-[#deeae6] focus:outline-[#186049]'
    placeholder={hint}/>
  )
}

export default InputField
