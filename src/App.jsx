import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import About from './Components/pages/About'
import  Contact  from './Components/pages/Contact'
import  Services from './Components/pages/Services'
import Home from './Components/pages/Home'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />}/>
<Route path='/about' element={<About/>} />
<Route path='/services' element={<Services/>} />
<Route path='/Contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App
