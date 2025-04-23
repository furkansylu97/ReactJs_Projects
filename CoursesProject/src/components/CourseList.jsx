import React from 'react'

export const CourseList = ({id, content, title, price, removeOneCourse}) => {
  return (
    <div className='cardWrapper'>
        <div className='cardTitleWrapper'>
            <h2 className='cardTitle'>{ title }</h2>
            <h4 className='cardPrice'>{ price }₺</h4>
        </div>
        <p className='cardContent'>{ content }</p>
        <button className='cardDeleteBtn' onClick={() => removeOneCourse(id)}>Sil</button>
    </div>
  )
}
