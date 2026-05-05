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

const Home = () => (
  <>
    <Hero />
    <Marquee />
    <div className='mt-10 pb-12'><Ourspecialites /></div>
    <div className="pb-10"><Aboutus /></div>
    <div className='pb-10'><Gallery /></div>
    <div className='pb-10'><Feedback /></div>
  </>
)

const App = () => {
  return (
    <div style={{ background: "linear-gradient(160deg, #09071a 0%, #0e0b22 60%, #120920 100%)" }}>

      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reviews" element={<Feedback />} />
        <Route path="/menu" element={<Ourspecialites />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App