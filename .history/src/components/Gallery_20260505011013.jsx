import React from 'react'

const Gallery = () => {
  const data = [
  { logo: "🍵", name: "Matcha" },
  { logo: "🍓", name: "Strawberry" },
  { logo: "🥜", name: "Peanut Butter" },
  { logo: "🍦", name: "Vanilla" },
  { logo: "🍫", name: "Chocolate" },
  { logo: "🫐", name: "Blueberry" },
  { logo: "🍋", name: "Lemon" },
  { logo: "🍇", name: "Grape" },
  { logo: "🥥", name: "Coconut" },
  { logo: "☕", name: "Coffee" },
  { logo: "🍒", name: "Cherry" },
  { logo: "🍑", name: "Peach" }
]

// duplicate for smooth loop
const marqueeData = [...data, ...data]
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
        
<div className="overflow-hidden mt-16">
  <div className="flex gap-6 marquee-track">
    {marqueeData.map((item, i) => (
      <div
        key={i}
        className="min-w-[180px] h-[120px] bg-[#0a1727] border border-[#1d2736] 
        rounded-xl flex flex-col items-center justify-center 
        hover:scale-110 transition-all duration-300"
      >
        <div className="text-3xl mb-2">{item.logo}</div>
        <p className="text-[#9aa4b2] text-sm">{item.name}</p>
      </div>
    ))}
  </div>
</div>
<div className="overflow-hidden mt-16">
  <div className="flex gap-6 marquee-track">
    {marqueeData.map((item, i) => (
      <div
        key={i}
        className="min-w-[180px] h-[120px] bg-[#0a1727] border border-[#1d2736] 
        rounded-xl flex flex-col items-center justify-center 
        hover:scale-110 transition-all duration-300"
      >
        <div className="text-3xl mb-2">{item.logo}</div>
        <p className="text-[#9aa4b2] text-sm">{item.name}</p>
      </div>
    ))}
  </div>
</div>


    </div>
  )
}

export default Gallery