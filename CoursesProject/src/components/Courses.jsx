import React from 'react'
import { CourseList } from './CourseList'

export const Courses = ( {courses, removeCourse} ) => {
  return (
    <div>
        <div>
            <h2>My Courses</h2>    
        </div>
        <div>
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
