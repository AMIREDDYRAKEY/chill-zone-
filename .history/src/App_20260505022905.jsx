 import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Ourspecialites from './components/Ourspecialites'
import Aboutus from './components/Aboutus'
import Gallery from './components/Gallery'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
import 

const App = () => {
  return (
    <div style={{ background: "linear-gradient(160deg, #09071a 0%, #0e0b22 60%, #120920 100%)" }}>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reviews" element={<Feedback />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App