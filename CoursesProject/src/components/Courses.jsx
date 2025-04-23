import React from 'react'
import { CourseList } from './CourseList'

export const Courses = ( {courses, removeCourse} ) => {
  return (
    <div className='courseWrapper'>
        <div>
            <h2>My Courses</h2>    
        </div>
        <div className='allCardWrapper'>
            {
                courses.map((course) => {
                    return (
                        <CourseList key={course.id} {...course} removeOneCourse={ removeCourse } />
                    )
                })
            }
        </div>
    </div>
  )
}
