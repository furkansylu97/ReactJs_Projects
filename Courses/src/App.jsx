import { useState } from 'react'
import 'bulma/css/bulma.css';
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
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">My Courses</p>
        </div>
      </section>
      <section className="section">
        <div className='container'>
          <div className="columns">
            <div className="column">
              <Course 
                image={ Angular }
                title="Angular" 
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident illum facilis nemo inventore est voluptates sunt natus. Officiis, excepturi aut quis deserunt harum cum hic tenetur consequuntur laboriosam at maxime reprehenderit sunt voluptatem ullam odio?"
              />
            </div>
            <div className="column">
              <Course 
                image={ Bootstrap }
                title="Bootstrap 5" 
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident illum facilis nemo inventore est voluptates sunt natus. Officiis, excepturi aut quis deserunt harum cum hic tenetur consequuntur laboriosam at maxime reprehenderit sunt voluptatem ullam odio?"
              />
            </div>
            <div className="column">
              <Course 
                image={ Frontend }
                title="All Web" 
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident illum facilis nemo inventore est voluptates sunt natus. Officiis, excepturi aut quis deserunt harum cum hic tenetur consequuntur laboriosam at maxime reprehenderit sunt voluptatem ullam odio?"
              />
            </div>
            <div className="column">
              <Course 
                image={ Kompleweb }
                title="Front-End" 
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident illum facilis nemo inventore est voluptates sunt natus. Officiis, excepturi aut quis deserunt harum cum hic tenetur consequuntur laboriosam at maxime reprehenderit sunt voluptatem ullam odio?"
              />
            </div>
          </div>
        </div>    
      </section>
    </>
  )
}

export default App
