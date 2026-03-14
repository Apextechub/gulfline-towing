import { useState } from 'react'
import Nav from './Components/nav'
import HeroSect from './Components/Hero'
import AboutUs from './Components/About'
import Services from './Components/Services'
import Contact from './Components/quote'
import Footers from './Components/Footer'

import './App.css'

function App() {
  return (
    <>
  <Nav/>
  <HeroSect/>
  <AboutUs/>
  <Services/>
  <Contact/>
  <Footers/>
  </>
  )
}

export default App