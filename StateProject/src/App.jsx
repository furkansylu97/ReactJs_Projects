import { useState } from 'react'
import './App.css'
import { Course } from './components/Course'

function getRandomCourse() {
  const courseArray = ['Angular','Bootstrap5','Allweb','Frontend'];
  return courseArray[Math.floor(Math.random()*courseArray.length)]
}

function App() {
  const [courses, setCourses] = useState([])

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()])
  }

  return (
    <>
      <button onClick={handleClick}>Course Add</button>
      {
        courses.map((course,index) => {
          return <Course key={index} courseName={course} />  
        })
      }
    </>
  )
}

export default App
