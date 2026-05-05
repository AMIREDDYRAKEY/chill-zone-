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
       

    </div>
  )
}

export default TabsMenu