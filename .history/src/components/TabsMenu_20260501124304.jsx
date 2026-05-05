import React, { useState } from 'react'

const TabsMenu = () => {
    const menuItems=[
        { name: "Vanilla", type: "classic"},
        { name: "Chocolate", type: "classic"},
        { name: "Blueberry", type: "exotic"},
        { name: "Mango", type: "vegan"}
    ]
    // const [activeTab,setactiveTab]=useState('all')
    // const filteredItems =
    // activeTab === "all"
    //   ? menuItems
    //   : menuItems.filter(item => item.type === activeTab);

  return (
    <div className="flex gap-3 mb-6">
        {["all", "classic", "exotic", "vegan"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full border 
              ${activeTab === tab ? "bg-cyan-500 text-white" : "text-gray-400"}`}
          >
            {tab}
          </button>
        ))}
      </div>

       
    
  )
}

export default TabsMenu