import React from 'react'

const Gallery = () => {
    const data=[
        {logo:"🍎",name:"Apple"},
        {logo:"🍍",name:"PineApple"},
        {logo:""}
    ]🍅
  return (
    <div>
         <div className='flex justify-center items-center'>
                <div className="anim-fade-up inline-flex justify-center items-center gap-2.5 px-[80px] py-1.5 mb-8 rounded-full border border-purple-500/20 bg-purple-500/[0.07] backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    <span className="text-[11px] tracking-[0.18em] uppercase text-purple-300 font-medium">
                          FLAVORS GALLERY
                    </span>

                </div>
            </div>
        {/* CONTENT */}
        <div className='flex  flex-col items-center  justify-center'>
              <div className='flex gap-3'>  <span className='text-5xl font-semibold  ' > Visual</span> <h1  className='text-5xl font-semibold text-[#ec4899]'> feast Awaits </h1></div>
               
            </div>
        {/* Scroller or Marquee */}

    </div>
  )
}

export default Gallery