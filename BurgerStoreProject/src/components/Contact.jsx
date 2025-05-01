import React from 'react'
import Banner from '../assets/img/banner.png'

export const Contact = () => {
  return (
    <div className='contact'>
      <div className="leftSide" style={{backgroundImage: `url(${Banner})`}} >
      </div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form>
          <label>Name Surname</label>
          <input type="text" name='name' placeholder='Please enter your name and surname...'/>
          <label>E-mail</label>
          <input type="email" name='email' placeholder='Please enter your e-mail adress...'/>
          <label>Your Message</label>
          <textarea rows={'6'} name='message' placeholder='Please enter your name and surname...'></textarea>
        </form>
      </div>
    </div>
  )
}
