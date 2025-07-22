import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'px-4 py-2 rounded-md text-white bg-blue-600'
      : 'px-4 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition'

  return (
    <nav className="bg-gray-300 shadow w-full">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700 tracking-wide">ByteBox</h1>
        <div className="space-x-4 text-base font-medium">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/pastes" className={navLinkClass}>
            My Pastes
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
