import React from 'react'
import Burgerlogo from '../assets/img/burgerlogo.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="main">
            <img src={ Burgerlogo } alt="" />
            <div>
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    </div>
  )
}
