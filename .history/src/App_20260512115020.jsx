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
import Login from './components/Login'
import Register from './components/Register'
import AvailableItems from './components/AvailableItems'
// Home page (scroll)
const Home = () => (
  <>
    <section id="home">
      <Navbar/>
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
     <section id="cta"  >
      <Footer/>
    </section>
  </>
)

const App = () => {
  return (
    <div  className="bg-[#0a1727]" >

       

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
         <Route path="/avilableitems" element={<AvailableItems />} />
      </Routes>

     
    </div>
  )
}

export default App