import React from 'react'
import TabsMenu from './TabsMenu'

const Ourspecialites = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-10">

            {/* Badge */}
            <div className='flex justify-center items-center'>
                <div className="anim-fade-up inline-flex justify-center items-center gap-2 px-4 sm:px-6 md:px-10 lg:px-[60px] py-1.5 mb-6 sm:mb-8 rounded-full border border-purple-500/20 bg-purple-500/[0.07] backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    <span className="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-purple-300 font-medium text-center">
                        Our Specialties
                    </span>
                </div>
            </div>

            {/* Heading */}
            <div className='flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-3 text-center lg:text-left'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold'>
                    Our Specialties
                </h1>
                <span className='text-[#ec4899] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold'>
                    Crafted with Pure Bliss
                </span>
            </div>

            {/* Paragraph */}
            <div className='flex justify-center items-center mt-3 px-2'>
                <p className='text-sm sm:text-md md:text-lg text-[#525d70] font-medium text-center max-w-2xl'>
                    Every scoop is a masterpiece, made fresh daily with the finest ingredients.
                </p>
            </div>

            {/* Tabs */}
            <div className='mt-8 sm:mt-10'>
                <TabsMenu />
            </div>

        </div>
    )
}

export default Ourspecialites