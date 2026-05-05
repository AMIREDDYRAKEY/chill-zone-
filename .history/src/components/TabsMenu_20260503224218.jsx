import React, { useState } from 'react'

const TabsMenu = () => {
  const menuItems = [
    { name: "Vanilla", type: "classic" },
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
      <div className="grid grid-cols-4 justify-items-center gap-4 mt-10 ">
        {filteredItems.map((item, i) => (
          <div
            key={i}
            className={`bg-[#0a0f1e] flex items-center justify-center h-[250px] w-[250px] border rounded-lg
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