import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Ourspecialites from './components/Ourspecialites'
import Aboutus from './components/Aboutus'
import Gallery from './components/Gallery'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div style={{ background: "linear-gradient(160deg, #09071a 0%, #0e0b22 60%, #120920 100%)" }}>

      <Navbar />

      {/* Sections */}
      <section id="home">
        <Hero />
        <Marquee />
      </section>

      <section id="menu" className="mt-10 pb-12">
        <Ourspecialites />
      </section>

      <section id="about" className="pb-10">
        <Aboutus />
      </section>

      <section id="gallery" className="pb-10">
        <Gallery />
      </section>

      <section id="reviews" className="pb-10">
        <Feedback />
      </section>

      <section id="cta">
        <Footer />
      </section>

      {/* extra Routes */}
      <Routes>
        <Route  path='/Login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App