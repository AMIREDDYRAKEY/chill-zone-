import React from 'react'

const Aboutus = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className="anim-fade-up inline-flex justify-center items-center gap-2.5 px-[80px] py-1.5 mb-8 rounded-full border border-purple-500/20 bg-purple-500/[0.07] backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    <span className="text-[11px] tracking-[0.18em] uppercase text-purple-300 font-medium">
                         About OUR  Zone
                    </span>

                </div>
            </div>
            {/* content */}
            <div className='flex items-center gap-3 justify-center'>
               <span className='text-5xl font-semibold text-[#ec4899]' > Where Every</span> <h1  className='text-5xl font-semibold'> Scoop Tells a Story</h1>
            </div>
        </div>
    )
}

export default Aboutus