import React from 'react'
import { NavLink } from 'react-router'
import { Home, Users } from 'lucide-react'

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Clients', path: '/clients', icon: Users },
  ]
  
  return (
    <nav className="w-full flex justify-center pt-6 px-4">
      <div className="flex items-center gap-2 rounded-full border border-[#186049]/15 bg-white px-3 py-2 shadow-lg shadow-[#186049]/5">
        {navLinks.map((link) => {
          const Icon = link.icon

          return (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-[#186049] text-white shadow-md'
                    : 'text-[#186049] hover:bg-[#186049]/10'
                }`
              }
            >
              <Icon size={18} strokeWidth={2} />
              <span>{link.name}</span>
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
