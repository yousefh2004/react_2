import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './N1'
import Ground from './G1'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'
import Last from './Last'
function App() {


  return (
    <>
      <Navbar/>
      <Ground/>
      <Portfolio />
      <About />
      <Contact />
      <Last />
    </>
  )
}

export default App
