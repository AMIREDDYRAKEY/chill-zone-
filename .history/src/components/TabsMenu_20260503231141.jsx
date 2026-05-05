import React, { useState } from 'react'

const TabsMenu = () => {
  const menuItems = [
    {
      name: "Vanilla",
      type: "classic",
      price: "149",
      logo: "🍦",
      desc: "Smooth and creamy vanilla made from premium Madagascar beans. \
A timeless classic loved by all ages. \
Perfect on its own or paired with your favorite toppings."
    },
    { name: "Chocolate", type: "classic" },
    { name: "Blueberry", type: "exotic" },
    { name: "Mango", type: "vegan" },
    { name: "orange", type: "Sundaes" },
    { name: "apple", type: "Sundaes" }

  ]
  const [activeTab, setactiveTab] = useState('all')
  const filteredItems =
    activeTab === "all"
      ? menuItems
      : menuItems.filter(items => item.type === activeTab);

  return (
    <div>
      <div className='flex items-center  justify-center gap-10'>
        {
          ['all', 'classic', "exotic", "vegan", "Sundaes"].map(tab => (
            <button
              key={tab}
              onClick={() => setactiveTab(tab)}
              className={`h-[40px] w-[100px]  rounded-full border-[1.5px]  border-[#162232]
              ${activeTab === tab ? "bg-[#0a3561] text-gray-400" : "text-gray-400"}`}
            >{tab}</button>
          ))
        }
      </div>
      <div
         
        className={`flex gap-5 p-6 bg-[#0a0f1e] border border-[#1d2230] 
  rounded-2xl w-[390px] h-[260px] 
  hover:border-cyan-500/30 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]
  transition-all duration-300

  ${filteredItems.length === 1 ? "col-span-3 mx-auto" : ""}
  `}
      >
        {/* LEFT ICON */}
        <div className="flex items-start justify-center">
          <div className="text-[50px] bg-[#0f172a] p-3 rounded-xl border border-[#1d2230]">
            {items.logo}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-between w-full">

          {/* TITLE */}
          <h1 className="text-lg font-semibold text-white leading-tight">
            {items.name}
          </h1>


          <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
            {items.desc || "Delicious handcrafted ice cream made with premium ingredients. A perfect treat for every mood and moment."}
          </p>


          <div className="flex items-center justify-between mt-2">


            <h2 className="text-xl font-semibold text-cyan-400">
              ₹{items.price || "149"}
            </h2>


            <span className="text-xs px-3 py-1 rounded-full border border-cyan-400/30 text-cyan-400">
              {items.type}
            </span>

          </div>
        </div>
      </div>

    </div>
  )
}

export default TabsMenu