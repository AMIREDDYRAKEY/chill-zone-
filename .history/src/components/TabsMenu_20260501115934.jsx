import React, { useState } from 'react'

const TabsMenu = () => {
    const menuItems=[
        { name: "Vanilla", type: "classic"},
        { name: "Chocolate", type: "classic"},
        { name: "Blueberry", type: "exotic"},
        { name: "Mango", type: "vegan"}
    ]
    const [activeTab,setactiveTab]=useState('all')
    const fill

  return (
    <div>
        <div className='flex justify-center items-center'>TabsMenu</div>
    </div>
  )
}

export default TabsMenu