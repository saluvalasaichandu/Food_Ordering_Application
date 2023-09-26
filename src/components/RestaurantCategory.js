import React, { useState } from 'react'
import ItemList from './ItemList'
const  RestaurantCategory=({data})=>{
   
    //console.log(props.data)
    const[showItems,setShowItems]=useState(false);
    const handleClick=()=>{
        setShowItems(!showItems);
    }
  return (
    <div className="w-1/2 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            
        <span  className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
        <span>⏬</span></div>
        <div>
          {showItems&&<ItemList items={data.itemCards}/>}
        </div>
    </div>
  )
}

export default RestaurantCategory