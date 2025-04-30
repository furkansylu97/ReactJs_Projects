import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Menu } from './components/Menu'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
    <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/menu' element={<Menu />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
