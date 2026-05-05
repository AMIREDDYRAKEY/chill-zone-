import React, { useState } from 'react'

const TabsMenu = () => {
    const menuItems=[
        { name: "Vanilla", type: "classic"},
        { name: "Chocolate", type: "classic"},
        { name: "Blueberry", type: "exotic"},
        { name: "Mango", type: "vegan"},
         { name: "orange", type: "Sundaes"},
          { name: "apple", type: "Sundaes"}
        
    ]
    const [activeTab,setactiveTab]=useState('all')
    const filteredItems =
    activeTab === "all"
      ? menuItems
      : menuItems.filter(item => item.type === activeTab);

  return (
    <div>
        <div className='flex items-center  justify-center gap-10'>
          {
            ['all','classic',"exotic","vegan","Sundaes"].map(tab=>(
              <button>{tab}</button>
            ))
          }
        </div>
    </div>
  )
}

export default TabsMenu