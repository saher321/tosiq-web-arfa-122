import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
        <NavLink to={'/'}>Home</NavLink> |&nbsp;
        <NavLink to={'/about-us'}>About</NavLink> |&nbsp;
        <NavLink to={'/contact-us'}>Contact</NavLink>
    </div>
  )
}

export default Navbar