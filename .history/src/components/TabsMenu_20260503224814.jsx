import React, { useState } from 'react'

const TabsMenu = () => {
  const menuItems = [
    { name: "Vanilla", type: "classic" ,Price:"149",desc:"",lo },
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
      : menuItems.filter(item => item.type === activeTab);

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
      <div className="grid grid-cols-3 justify-items-center gap-3 mt-10 px-[55px]">
        {filteredItems.map((item, i) => (
          <div
            key={i}
            className={`bg-[#0a0f1e] border-[1px] border-[#1d2230] flex items-center justify-center h-[250px] w-[390px]   rounded-xl
      ${filteredItems.length === 1 ? "col-span-3 mx-auto" : ""}`}
          >
            {item.name}
          </div>
        ))}
      </div>

    </div>
  )
}

export default TabsMenu