import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'


function Navbar() {
  return (
    <div className=' rounded-2xl flex flex-row gap-4 place-content-evenly bg-red-100'>
     <NavLink to="/">
        Home
     </NavLink>

     <NavLink to="/pastes">
        pastes
     </NavLink>
    </div>
  )
}

export default Navbar
