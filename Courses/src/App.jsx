import { useState } from 'react'
import './App.css'
import { Course } from './components/Course'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Course 
      title="Angular" 
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident illum facilis nemo inventore est voluptates sunt natus. Officiis, excepturi aut quis deserunt harum cum hic tenetur consequuntur laboriosam at maxime reprehenderit sunt voluptatem ullam odio?"
      />
      <Course 
      title="Bootstrap 5" 
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident illum facilis nemo inventore est voluptates sunt natus. Officiis, excepturi aut quis deserunt harum cum hic tenetur consequuntur laboriosam at maxime reprehenderit sunt voluptatem ullam odio?"
      />
      <Course 
      title="All Web" 
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident illum facilis nemo inventore est voluptates sunt natus. Officiis, excepturi aut quis deserunt harum cum hic tenetur consequuntur laboriosam at maxime reprehenderit sunt voluptatem ullam odio?"
      />
      <Course 
      title="Front-End" 
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident illum facilis nemo inventore est voluptates sunt natus. Officiis, excepturi aut quis deserunt harum cum hic tenetur consequuntur laboriosam at maxime reprehenderit sunt voluptatem ullam odio?"
      />
    </>
  )
}

export default App
