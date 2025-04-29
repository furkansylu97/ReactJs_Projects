import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
// import { AboutUs } from './components/AboutUs'
import { Navbar } from './components/Navbar'
import { Mission } from './components/Mission'
import { NotFoundPage } from './components/NotFoundPage'
import { History } from './components/History'
import { Company } from './components/Company'
import { Team } from './components/Team'
import { Members } from './components/Members'
import { MemberDetail } from './components/MemberDetail'
const LazyAboutUs = React.lazy(() => import('./components/AboutUs'));

function App() {

  return (
    <>
      <Navbar/>

     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/aboutUs' element={
        <React.Suspense fallback={<div>Loading...</div>}>
          <LazyAboutUs/>
        </React.Suspense>
        } />
      <Route path='/mission' element={<Mission/>} />
      <Route path='/history' element={<History/>} >
        <Route path='company' element={<Company/>} />
        <Route path='team' element={<Team/>} />
      </Route>
      <Route path='/members' element={<Members/>} />
      <Route path='/members/:memberId' element={<MemberDetail/>} />
      <Route path='*' element={<NotFoundPage/>} />
     </Routes>

    </>
  )
}

export default App
