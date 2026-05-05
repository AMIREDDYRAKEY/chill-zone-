 import React from 'react'
 
 import  Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Ourspecialites from './components/Ourspecialites'
import Aboutus from './components/Aboutus'
import Gallery from './components/Gallery'
import Feedback from './components/Feedback'
 const App = () => {
   return (
    <div className=' '   style={{ background: "linear-gradient(160deg, #09071a 0%, #0e0b22 60%, #120920 100%)" }}>
      <Navbar/>
      <Hero/>
      <Marquee/>
      <div className='mt-[40px] pb-[50px]'><Ourspecialites/></div>
      <div className="pb-[40px]" ><Aboutus/></div>
      <div className='pb-[40px]'><Gallery/></div>
      <div><Feedback/></div>
     
      </div>
   )
 }
 
 export default App