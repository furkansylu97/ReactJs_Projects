import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { AboutUs } from './components/AboutUs'
import { Navbar } from './components/Navbar'
import { Mission } from './components/Mission'
import { NotFoundPage } from './components/NotFoundPage'
import { History } from './components/History'
import { Company } from './components/Company'
import { Team } from './components/Team'

function App() {

  return (
    <>
      <Navbar/>

     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/aboutUs' element={<AboutUs/>} />
      <Route path='/mission' element={<Mission/>} />
      <Route path='/history' element={<History/>} >
        <Route path='company' element={<Company/>} />
        <Route path='team' element={<Team/>} />
      </Route>
      <Route path='*' element={<NotFoundPage/>} />
     </Routes>

    </>
  )
}

export default App
