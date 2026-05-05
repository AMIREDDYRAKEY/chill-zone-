import React from 'react'

const Ourspecialites = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className="anim-fade-up inline-flex justify-center items-center gap-2.5 px-[80px] py-1.5 mb-8 rounded-full border border-purple-500/20 bg-purple-500/[0.07] backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    <span className="text-[11px] tracking-[0.18em] uppercase text-purple-300 font-medium">
                        Our SPECIALTIES
                    </span>

                </div>
            </div>
            {/* text */}
            <div className='flex justify-center gap-3 items-center'>
                <h1 className='text-5xl font-semibold '> Our Specialties </h1>
                     <span className='text-[#ec4899] text-5xl font-semibold'>Crafted with Pure Bliss</span>
            </div>
            {/* paragraph */}
            <div className='flex justify-center items-center mt-3'>
                <p className='text-xl '>Every scoop is a masterpiece, made fresh daily with the finest ingredients.</p>
            </div>
        </div>
    )
}

export default Ourspecialites