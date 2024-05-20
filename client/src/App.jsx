import './App.css'
import React from 'react'
import Navbar from './Components/Navbar'
import OurService from './pages/OurService'
import AboutUs from '../src/Components/AboutUs'

function App() {
  return (
    <div>
      <Navbar/>
      <OurService/>
      <AboutUs />
    </div>
  )
}

export default App
