import React from 'react'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Ourspecialites 
const Home = () => {
  return (
    <div>
         <Hero/>
            <Marquee/>
            <div className='mt-[40px] pb-[50px]'><Ourspecialites/></div>
            <div className="pb-[40px]"><Aboutus/></div>
            <div className='pb-[40px]'><Gallery/></div>
            <div className='pb-[40px]'><Feedback/></div>
    </div>
  )
}

export default Home