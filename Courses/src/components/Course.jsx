import React from 'react'

export const Course = ({ image, title, description }) => {
  
  return (
    <>
      <img src={ image } alt="" />
      <div>{ title }</div>
      <div>{ description }</div>
    </>
  )
}
