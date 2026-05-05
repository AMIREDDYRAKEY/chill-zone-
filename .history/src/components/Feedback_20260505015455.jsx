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
    <div className='mt-5'>
         <div className='flex justify-center items-center'>
                <div className="anim-fade-up inline-flex justify-center items-center gap-2.5 px-[80px] py-1.5 mb-8 rounded-full border border-purple-500/20 bg-purple-500/[0.07] backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    <span className="text-[11px] tracking-[0.18em] uppercase text-purple-300 font-medium">
                          Customers Love
                    </span>

                </div>
            </div>
        {/* CONTENT */}
        <div className='flex  flex-col items-center  justify-center'>
              <div className='flex gap-3'>  <span className='text-5xl font-semibold  text-[#ec4899] ' > What Our</span> <h1  className='text-5xl font-semibold  '> fans Says </h1></div>
              <div> <p className='text-sm text-[#4c546a]'>Real stories from real ice cream lovers who can't stop coming back.</p></div>
            </div>
        {/* cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">

  {reviews.map((item, i) => (
    <div
      key={i}
      className="bg-[#0a1727] border border-[#1d2736] rounded-2xl p-6 
      hover:scale-105 hover:border-purple-500/30 
      transition-all duration-500 shadow-lg relative overflow-hidden"
    >
      {/* stars */}
      <div className="text-yellow-400 mb-3">★★★★★</div>

      {/* text */}
      <p className="text-[#9aa4b2] text-sm leading-relaxed mb-6">
        "{item.text}"
      </p>

      {/* user */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 flex items-center justify-center text-white text-sm font-bold">
          {item.initials}
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold">{item.name}</h3>
          <p className="text-[#6b7280] text-xs">📍 {item.place}</p>
        </div>
      </div>

      {/* glow effect */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 
        bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-xl"></div>
    </div>
  ))}

</div>
    </div>
  )
}

export default Feedback