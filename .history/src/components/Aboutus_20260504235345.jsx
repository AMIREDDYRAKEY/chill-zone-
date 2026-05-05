import React from 'react'

const Aboutus = () => {
    const data =[
        {logo:"🌿",name:"All Natural Ingredients",des:"We source only the finest organic ingredients. No artificial colors, no preservatives — just pure, authentic flavors."},
         {logo:"📈",name:"Made Fresh Daily",des:"Our ice creams are churned fresh every morning in small batches to guarantee maximum creaminess and flavor."},
         {logo:"🚀",name:"Lightning Fast Delivery",des:"Order online and get your frozen treats delivered in under 30 minutes, perfectly packed to stay ice-cold."},


         

    ]
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
            <div className='flex  flex-col items-center  justify-center'>
              <div className='flex gap-3'>  <span className='text-5xl font-semibold text-[#ec4899]' > Where Every</span> <h1  className='text-5xl font-semibold'> Scoop Tells a Story</h1></div>
               <p className='text-sm mt-6 text-[#525d70] font-semibold'>Born in 2018 in the heart of Hyderabad, Chill Zone was founded on one simple belief </p>
                  <p className='text-sm text-[#525d70] font-semibold '> great ice cream should be an experience, not just a dessert.</p>
            </div>
            {/* boxes */}
            <div className='flex  p-10 flex-col gap-5'>
                {data.map((data,i)=>(
                    <div key={i} className='border-[1px] items-center gap-3 p-4 w-[600px] h-[100px] flex '>
                        <div className='text-[40px] border-[1px] '>{data.logo}</div>
                        <div>
                        <h1>{data.name}</h1>
                        <p>{data.des}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Aboutus