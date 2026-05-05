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
        
    </div>
  )
}

export default Feedback