import React from 'react'

export const CourseList = ({id, content, title, price, removeOneCourse}) => {
  return (
    <div>
        <div className='cardTitleWrapper'>
            <h2 className='cardTitle'>{ title }</h2>
            <h4 className='cardPrice'>{ price }₺</h4>
        </div>
        <button className='cardDeleteBtn' onClick={() => removeOneCourse(id)}>Sil</button>
    </div>
  )
}
