import React from 'react'

const Feedback = () => {

  const reviews = [
    {
      name: "Priya S",
      place: "Banjara Hills, Hyd",
      text: "The Mango Sorbet is absolutely divine! You can taste the real Alphonso flavour. Best ice cream in Hyderabad, hands down.",
      initials: "PS"
    },
    {
      name: "Rahul K",
      place: "Jubilee Hills, Hyd",
      text: "ChillZone is our family's go-to spot. The Choco Lava is unreal — pure genius in every bite!",
      initials: "RK"
    },
    {
      name: "Ananya M",
      place: "Madhapur, Hyd",
      text: "As a vegan, finding good ice cream is tough. But ChillZone nailed it — creamy and flavorful!",
      initials: "AM"
    },
    {
      name: "Kiran T",
      place: "HITEC City, Hyd",
      text: "The Rose Gulkand flavor took me back to my childhood. Super nostalgic and unique.",
      initials: "KT"
    },
    {
      name: "Deepa R",
      place: "Gachibowli, Hyd",
      text: "Ordered online and delivery was super fast. Ice cream arrived perfectly frozen!",
      initials: "DR"
    },
    {
      name: "Arjun V",
      place: "Kondapur, Hyd",
      text: "Came for the sundae and stayed for everything else. Amazing vibe and friendly staff!",
      initials: "AV"
    }
  ]

  return (
    <div className='mt-8 sm:mt-10 px-4 sm:px-6 lg:px-10'>

      {/* Badge */}
      <div className='flex justify-center items-center'>
        <div className="anim-fade-up inline-flex justify-center items-center gap-2 px-4 sm:px-6 md:px-10 py-1.5 mb-6 sm:mb-8 rounded-full border border-purple-500/20 bg-purple-500/[0.07] backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-purple-300 font-medium text-center">
            Customers Love
          </span>
        </div>
      </div>

      {/* Heading */}
      <div className='flex flex-col items-center justify-center text-center'>
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-3'>
          <span className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#ec4899]'>
            What Our
          </span>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold'>
            Fans Say
          </h1>
        </div>

        <p className='text-xs sm:text-sm text-[#4c546a] mt-3 max-w-xl'>
          Real stories from real ice cream lovers who can't stop coming back.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

        {reviews.map((item, i) => (
          <div
            key={i}
            className="bg-[#0a1727] border border-[#1d2736] rounded-2xl p-4 sm:p-6 
            hover:scale-[1.03] sm:hover:scale-105 hover:border-purple-500/30 
            transition-all duration-500 shadow-lg relative overflow-hidden"
          >

            {/* Stars */}
            <div className="text-yellow-400 text-sm sm:text-base mb-2 sm:mb-3">
              ★★★★★
            </div>

            {/* Text */}
            <p className="text-[#9aa4b2] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              "{item.text}"
            </p>

            {/* User */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                {item.initials}
              </div>

              <div>
                <h3 className="text-white text-sm font-semibold">
                  {item.name}
                </h3>
                <p className="text-[#6b7280] text-[10px] sm:text-xs">
                  📍 {item.place}
                </p>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 
              bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-xl">
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Feedback