import React, { useState } from 'react'

const TabsMenu = () => {
  const menuItems = [
    {
      name: "Vanilla",
      type: "classic",
      price: "149",
      logo: "🍦",
      desc: "Smooth and creamy vanilla made from premium Madagascar beans. A timeless classic loved by all ages. Perfect on its own or paired with your favorite toppings."
    },
    {
      name: "Chocolate",
      type: "classic",
      price: "179",
      logo: "🍫",
      desc: "Rich and indulgent Belgian chocolate ice cream. Loaded with deep cocoa flavor and smooth texture. A must-have for every chocolate lover."
    },
    {
      name: "Blueberry",
      type: "exotic",
      price: "199",
      logo: "🫐",
      desc: "Fresh blueberry compote blended with creamy base. A perfect balance of sweet and tangy flavors. Inspired by classic cheesecake desserts."
    },
    {
      name: "Mango",
      type: "vegan",
      price: "159",
      logo: "🥭",
      desc: "Made with real Alphonso mangoes from Devgad. Naturally sweet and completely dairy-free. A refreshing tropical delight."
    },
    {
      name: "Orange Sundae",
      type: "Sundaes",
      price: "189",
      logo: "🍊",
      desc: "Citrusy orange ice cream topped with cream. Finished with crunchy toppings and syrup drizzle. A refreshing twist on classic sundaes."
    },
    {
      name: "Apple Sundae",
      type: "Sundaes",
      price: "199",
      logo: "🍎",
      desc: "Sweet apple compote layered with creamy scoops. Topped with caramel sauce and nuts. A dessert that feels like apple pie in a cup."
    }
  ];

  const [activeTab, setactiveTab] = useState('all')

  const filteredItems =
    activeTab === "all"
      ? menuItems
      : menuItems.filter(items => items.type === activeTab);

  return (
    <div>

      {/* Tabs */}
      <div className='flex overflow-x-auto no-scrollbar justify-start sm:justify-center gap-3 sm:gap-5 px-2 sm:px-0'>
        {['all', 'classic', "exotic", "vegan", "Sundaes"].map(tab => (
          <button
            key={tab}
            onClick={() => setactiveTab(tab)}
            className={`min-w-[90px] sm:w-[100px] h-[38px] sm:h-[40px] px-3 rounded-full border border-[#162232] text-sm sm:text-base
            ${activeTab === tab ? "bg-[#0a3561] text-gray-300" : "text-gray-400"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-8 sm:mt-10 px-3 sm:px-6 lg:px-10">

        {filteredItems.map((item, i) => (
          <div
            key={i}
            className={`flex gap-4 sm:gap-5 p-4 sm:p-6 bg-[#0a0f1e] border border-[#1d2230] 
            rounded-2xl w-full max-w-[390px] h-auto
            hover:border-cyan-500/30 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]
            transition-all duration-300

            ${filteredItems.length === 1 ? "col-span-full mx-auto" : ""}
            `}
          >

            {/* Icon */}
            <div className="flex items-center justify-center">
              <div className="text-[36px] sm:text-[45px] bg-[#0f172a] h-[70px] w-[70px] sm:h-[90px] sm:w-[90px] flex items-center justify-center rounded-xl border border-[#1d2230]">
                {item.logo}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 w-full">

              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-white leading-tight">
                {item.name}
              </h1>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-3">
                {item.desc}
              </p>

              {/* Bottom */}
              <div className="flex items-center justify-between mt-3 sm:mt-6 gap-3 flex-wrap">

                <h2 className="text-lg sm:text-xl font-semibold text-cyan-400">
                  ₹{item.price}
                </h2>

                <span className="text-[10px] sm:text-xs px-4 sm:px-6 py-1.5 rounded-full border border-cyan-400/30 text-cyan-400">
                  {item.type}
                </span>

              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default TabsMenu