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
  {
    name: "Chocolate",
    type: "classic",
    price: "179",
    logo: "🍫",
    desc: "Rich and indulgent Belgian chocolate ice cream. \
Loaded with deep cocoa flavor and smooth texture. \
A must-have for every chocolate lover."
  },
  {
    name: "Blueberry",
    type: "exotic",
    price: "199",
    logo: "🫐",
    desc: "Fresh blueberry compote blended with creamy base. \
A perfect balance of sweet and tangy flavors. \
Inspired by classic cheesecake desserts."
  },
  {
    name: "Mango",
    type: "vegan",
    price: "159",
    logo: "🥭",
    desc: "Made with real Alphonso mangoes from Devgad. \
Naturally sweet and completely dairy-free. \
A refreshing tropical delight."
  },
  {
    name: "Orange Sundae",
    type: "Sundaes",
    price: "189",
    logo: "🍊",
    desc: "Citrusy orange ice cream topped with cream. \
Finished with crunchy toppings and syrup drizzle. \
A refreshing twist on classic sundaes."
  },
  {
    name: "Apple Sundae",
    type: "Sundaes",
    price: "199",
    logo: "🍎",
    desc: "Sweet apple compote layered with creamy scoops. \
Topped with caramel sauce and nuts. \
A dessert that feels like apple pie in a cup."
  }
];
  const [activeTab, setactiveTab] = useState('all')
  const filteredItems =
    activeTab === "all"
      ? menuItems
      : menuItems.filter(items => items.type === activeTab);

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
       
       <div className="grid grid-cols-3 gap-6 mt-10 px-[55px] justify-items-center">
  {filteredItems.map((item, i) => (
    <div
      key={i}
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
          {item.logo || "🍦"}
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex flex-col justify-between w-full">

        <h1 className="text-lg font-semibold text-white leading-tight">
          {item.name}
        </h1>

        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
          {item.desc  }
        </p>

        <div className="flex items-center justify-between mt-2">
          <h2 className="text-xl font-semibold text-cyan-400">
            ₹{item.price  }
          </h2>

          <span className="text-xs px-3 py-1 rounded-full border border-cyan-400/30 text-cyan-400">
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