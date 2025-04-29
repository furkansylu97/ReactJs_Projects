import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/aboutUs'>About</NavLink>
        <NavLink to='/history'>History</NavLink>
    </nav>
  )
}
