import React from 'react'

const TabsMenu = () => {
    const Tabs=[
        { name: "Vanilla", type: "classic"},
        { name: "Chocolate", type: "classic"},
        { name: "Vanilla", type: "exotic"},
        { name: "Vanilla", type: "vegan"}
    ]
  return (
    <div>
        <div className='flex justify-center items-center'>TabsMenu</div>
    </div>
  )
}

export default TabsMenu