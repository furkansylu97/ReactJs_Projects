import React from 'react'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";


export const Courses = ( {courses, removeCourse} ) => {
    const [index, setIndex] = useState(0);
    const {content, title, price} = courses[index]
  return (
    <div className='courseWrapper'>
        <div>
            <h2>Kurslarım</h2>    
        </div>
        <div className="newCardWrapper">
            <button className='prevNextBtn'><FaChevronLeft/></button>
            <div className='cardWrapper'>
                <div className='cardTitleWrapper'>
                    <h2 className='cardTitle'>{ title }</h2>
                    <h4 className='cardPrice'>{ price }₺</h4>
                </div>
                <p className='cardContent'>{ content }</p>
            </div>
            <button className='prevNextBtn'><FaChevronRight/></button>
        </div>
    </div>
  )
}
