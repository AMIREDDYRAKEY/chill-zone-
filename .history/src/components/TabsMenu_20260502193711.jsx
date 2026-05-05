import React, { useState } from 'react'

const TabsMenu = () => {
    const menuItems=[
        { name: "Vanilla", type: "classic"},
        { name: "Chocolate", type: "classic"},
        { name: "Blueberry", type: "exotic"},
        { name: "Mango", type: "vegan"}
    ]
    const [activeTab,setactiveTab]=useState('all')
    const filteredItems =
    activeTab === "all"
      ? menuItems
      : menuItems.filter(item => item.type === activeTab);

  return (
    <div>
        <div>
          {
            ['all','classic',"exotic","vegan"].map(tab=>(
              butt
            ))
          }
        </div>
    </div>
  )
}

export default TabsMenu