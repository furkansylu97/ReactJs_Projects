import { useState } from 'react'
import './App.css'
import { Course } from './components/Course'
import  Angular from './assets/img/angular.jpg'
import  Bootstrap from './assets/img/bootstrap5.png'
import  Frontend from './assets/img/frontend.png'
import  Kompleweb from './assets/img/allweb.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Course 
      image={ Angular }
      title="Angular" 
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident illum facilis nemo inventore est voluptates sunt natus. Officiis, excepturi aut quis deserunt harum cum hic tenetur consequuntur laboriosam at maxime reprehenderit sunt voluptatem ullam odio?"
      />
      <Course 
      image={ Bootstrap }
      title="Bootstrap 5" 
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident illum facilis nemo inventore est voluptates sunt natus. Officiis, excepturi aut quis deserunt harum cum hic tenetur consequuntur laboriosam at maxime reprehenderit sunt voluptatem ullam odio?"
      />
      <Course 
      image={ Frontend }
      title="All Web" 
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident illum facilis nemo inventore est voluptates sunt natus. Officiis, excepturi aut quis deserunt harum cum hic tenetur consequuntur laboriosam at maxime reprehenderit sunt voluptatem ullam odio?"
      />
      <Course 
      image={ Kompleweb }
      title="Front-End" 
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident illum facilis nemo inventore est voluptates sunt natus. Officiis, excepturi aut quis deserunt harum cum hic tenetur consequuntur laboriosam at maxime reprehenderit sunt voluptatem ullam odio?"
      />
    </>
  )
}

export default App
