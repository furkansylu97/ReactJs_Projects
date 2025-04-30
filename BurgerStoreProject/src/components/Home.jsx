import React from 'react'
import { Link } from 'react-router-dom'
import BannerNew from '../assets/img/bannernew.jpg'

export const Home = () => {
  return (
    <div className='mainpage' style={{backgroundImage:`url(${BannerNew})`}}>
      <div className='order'>
        <Link to='/menu'>
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  )
}
