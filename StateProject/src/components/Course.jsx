import React from 'react'
import './Course.css'
import Allweb from '../assets/img/allweb.jpg'
import Angular from '../assets/img/angular.jpg'
import Bootstrap5 from '../assets/img/bootstrap5.png'
import Frontend from '../assets/img/frontend.png'

const courseMap = {
  Angular,
  Bootstrap5,
  Frontend,
  Allweb,
}

export const Course = ({ courseName }) => {
  return (
    <div className="coursePhotos">
      <img className='photos' src={courseMap[courseName]} alt="" />
    </div>
  )
}
