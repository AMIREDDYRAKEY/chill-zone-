import React from 'react'

const Aboutus = () => {

    const data = [
        {
            logo: "🌿",
            name: "All Natural Ingredients",
            des: "We source only the finest organic ingredients. No artificial colors, no preservatives — just pure, authentic flavors."
        },
        {
            logo: "📈",
            name: "Made Fresh Daily",
            des: "Our ice creams are churned fresh every morning in small batches to guarantee maximum creaminess and flavor."
        },
        {
            logo: "🚀",
            name: "Lightning Fast Delivery",
            des: "Order online and get your frozen treats delivered in under 30 minutes, perfectly packed to stay ice-cold."
        }
    ]

    return (
        <div className="px-4 sm:px-6 lg:px-[50p">

            {/* Badge */}
            <div className='flex justify-center items-center'>
                <div className="anim-fade-up inline-flex justify-center items-center gap-2 px-4 sm:px-6 md:px-10 py-1.5 mb-6 sm:mb-8 rounded-full border border-purple-500/20 bg-purple-500/[0.07] backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    <span className="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-purple-300 font-medium text-center">
                        About Our Zone
                    </span>
                </div>
            </div>

            {/* Heading */}
            <div className='flex flex-col items-center justify-center text-center'>
                <div className='flex flex-col sm:flex-row gap-2 sm:gap-3'>
                    <span className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#ec4899]'>
                        Where Every
                    </span>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold'>
                        Scoop Tells a Story
                    </h1>
                </div>

                <p className='text-xs sm:text-sm mt-4 sm:mt-6 text-[#525d70] font-medium max-w-2xl'>
                    Born in 2018 in the heart of Hyderabad, Chill Zone was founded on one simple belief —
                    great ice cream should be an experience, not just a dessert.
                </p>
            </div>

            {/* Content Section */}
            <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-10 mt-10'>

                {/* Left Cards */}
                <div className='flex flex-col gap-5 w-full max-w-xl'>

                    {data.map((item, i) => (
                        <div
                            key={i}
                            className='flex items-start sm:items-center gap-4 p-4 bg-[#0a1727] rounded-xl border border-[#1d2736] w-full'
                        >
                            <div className='text-lg sm:text-xl px-3 py-2 border bg-[#0f2436] rounded-xl border-[#0d4157]'>
                                {item.logo}
                            </div>

                            <div className='flex flex-col'>
                                <h1 className='text-[#d2d6db] text-base sm:text-lg md:text-xl'>
                                    {item.name}
                                </h1>
                                <p className='text-[#687487] text-[11px] sm:text-sm font-medium'>
                                    {item.des}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>

                {/* Right Card */}
                <div className='relative w-full max-w-sm sm:max-w-md h-[300px] sm:h-[350px] lg:h-[400px] rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] 
                    flex items-center justify-center shadow-xl border border-[#1f2a3a]'>

                    {/* floating badge */}
                    <div className='absolute top-3 right-3 bg-[#0f2436] px-3 py-1.5 rounded-xl text-[10px] sm:text-xs text-cyan-400 animate-bounce'>
                        Fresh Daily 100%
                    </div>

                    {/* icon */}
                    <div className='text-5xl sm:text-6xl lg:text-7xl animate-float'>
                        🍨
                    </div>

                    {/* bottom stats */}
                    <div className='absolute bottom-3 left-3 bg-[#0f2436] px-3 py-1.5 rounded-xl text-[10px] sm:text-xs text-cyan-300'>
                        10,000+ Customers
                    </div>

                    <div className='absolute bottom-3 right-3 bg-[#0f2436] px-3 py-1.5 rounded-xl text-[10px] sm:text-xs text-yellow-400'>
                        4.9 ★
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Aboutus