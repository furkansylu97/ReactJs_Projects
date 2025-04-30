import React from 'react'
import BannerImage from '../assets/img/bannernew.jpg'
import '../styles/About.css'

export const About = () => {
  return (
    <div className='about'>
      <div className="aboutTop" style={{backgroundImage: `url(${BannerImage})`}}></div>
      <div className='aboutBottom'>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, minima quam, distinctio maxime earum, praesentium beatae quia qui itaque cum nihil illo. Quisquam possimus sint porro accusamus iusto aspernatur temporibus, harum repellat non praesentium, perferendis consequatur ipsam, pariatur laudantium dolor provident! Animi, veniam asperiores! Impedit sequi amet, explicabo soluta cum minima esse! Quaerat omnis, hic harum quis error excepturi laudantium deleniti iure! Voluptate, adipisci itaque.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, minima quam, distinctio maxime earum, praesentium beatae quia qui itaque cum nihil illo. Quisquam possimus sint porro accusamus iusto aspernatur temporibus, harum repellat non praesentium, perferendis consequatur ipsam, pariatur laudantium dolor provident! Animi, veniam asperiores! Impedit sequi amet, explicabo soluta cum minima esse! Quaerat omnis, hic harum quis error excepturi laudantium deleniti iure! Voluptate, adipisci itaque.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, minima quam, distinctio maxime earum, praesentium beatae quia qui itaque cum nihil illo. Quisquam possimus sint porro accusamus iusto aspernatur temporibus, harum repellat non praesentium, perferendis consequatur ipsam, pariatur laudantium dolor provident! Animi, veniam asperiores! Impedit sequi amet, explicabo soluta cum minima esse! Quaerat omnis, hic harum quis error excepturi laudantium deleniti iure! Voluptate, adipisci itaque.</p>
      </div>
    </div>
  )
}
