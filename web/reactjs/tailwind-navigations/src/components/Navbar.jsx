import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='w-1/2 mx-auto'>
      <div className='flex items-center justify-between bg-sky-300 m-5 p-5 rounded-xl'>
        <div>Navbar</div>
        <div className='flex gap-3'>
          <NavLink to={'/'}> Home </NavLink>
          <NavLink to={'/about-us'}> About us </NavLink>
          <NavLink to={'/contact-us'}> Contact us </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
