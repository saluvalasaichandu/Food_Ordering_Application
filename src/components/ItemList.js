import { CDN_URL } from "../utils/constants";
const ItemList=({items})=>{
    console.log(items);
    return(
    <div>
        {items.map((item)=>
        <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left w-3/4 justify-between"> 
        
        <div className="py-2">
            <span>{item.card.info.name}</span>
            <span> -₹{item.card.info.price
                  ? (item.card.info.price)/ 100
                  : (item.card.info.defaultPrice)/ 100}</span>
        </div>
        <div >
            <p className="text-xs">{item.card.info.description}</p>
        </div>
        <div className="absolute">
            <button className="p-1 mx-20 rounded-lg bg-white text-green-800 shadow-lg">Add+</button>
        </div>
        <img src={CDN_URL+item.card.info.imageId} className="w-1/4 "/>
        </div>
        )}
        
    </div>);
}
export default ItemList;