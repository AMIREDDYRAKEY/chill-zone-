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

  const marqueeData = [...data, ...data]

  return (
    <div className="px-4 sm:px-6 lg:px-10">

      {/* Badge */}
      <div className='flex justify-center items-center'>
        <div className="anim-fade-up inline-flex justify-center items-center gap-2 px-4 sm:px-6 md:px-10 py-1.5 mb-6 sm:mb-8 rounded-full border border-purple-500/20 bg-purple-500/[0.07] backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-purple-300 font-medium text-center">
            Flavors Gallery
          </span>
        </div>
      </div>

      {/* Heading */}
      <div className='flex flex-col items-center justify-center text-center'>
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-3'>
          <span className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold'>
            Visual
          </span>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#ec4899]'>
            Feast Awaits
          </h1>
        </div>
      </div>

      {/* Marquee 1 */}
      <div className="overflow-hidden mt-6 sm:mt-8">
        <div className="flex gap-4 sm:gap-6 marquee-track">
          {marqueeData.map((item, i) => (
            <div
              key={i}
              className="min-w-[120px] sm:min-w-[150px] md:min-w-[180px] 
              h-[90px] sm:h-[110px] md:h-[120px] 
              bg-[#0a1727] border border-[#1d2736] 
              rounded-xl flex flex-col items-center justify-center 
              hover:scale-105 sm:hover:scale-110 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">
                {item.logo}
              </div>
              <p className="text-[#9aa4b2] text-xs sm:text-sm">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee 2 */}
      <div className="overflow-hidden mt-4 sm:mt-5">
        <div className="flex gap-4 sm:gap-6 marquee-track-reverse">
          {marqueeData.map((item, i) => (
            <div
              key={i}
              className="min-w-[120px] sm:min-w-[150px] md:min-w-[180px] 
              h-[90px] sm:h-[110px] md:h-[120px] 
              bg-[#0a1727] border border-[#1d2736] 
              rounded-xl flex flex-col items-center justify-center 
              hover:scale-105 sm:hover:scale-110 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl">
                {item.logo}
              </div>
              <p className="text-[#9aa4b2] text-xs sm:text-sm">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Gallery