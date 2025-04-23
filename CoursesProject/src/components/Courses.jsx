import React from 'react'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";


export const Courses = ( {courses, removeCourse} ) => {
    const [index, setIndex] = useState(0);
    const {content, title, price} = courses[index]

    const checkIndex = (index) => {
        if (index < 0) {
            return courses.length - 1;
        }
        if (index > courses.length - 1 ) {
            return 0;
        }
        return index;
    }

    const prevCourse = () => {
        setIndex((index) =>{
            let newIndex = index - 1;
            return checkIndex(newIndex);
        })
    }

    const nextCourse = () => {
        setIndex((index) =>{
            let newIndex = index + 1;
            return checkIndex(newIndex);
        })
    }
  return (
    <div className='courseWrapper'>
        <div className='courseTitleWrapper'>
            <h2>Kurslarım</h2>    
            <button className='randomBtn'>Rastgele Kurs Ata</button>
        </div>
        <div className="newCardWrapper">
            <button className='prevNextBtn' onClick={prevCourse}><FaChevronLeft/></button>
            <div className='cardWrapper'>
                <div className='cardTitleWrapper'>
                    <h2 className='cardTitle'>{ title }</h2>
                    <h4 className='cardPrice'>{ price }₺</h4>
                </div>
                <p className='cardContent'>{ content }</p>
            </div>
            <button className='prevNextBtn' onClick={nextCourse}><FaChevronRight/></button>
        </div>
    </div>
  )
}
