import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>{
    
    const {resData}=props;
    console.log(props)
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resData.info
    return(<div className="m-4 p-4 w-[250px] rounded-xl bg-gray-100 hover:bg-gray-200">
        <img className="rounded-lg" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Rating</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} Minutes</h4>
        
    </div>)
}
export const withPromotedLabel=(RestaurantCard)=>{
    return((props)=>{
        return(<div >
            <label  className="absolute bg-black text-white m-2 p-2 rounded-lg">Coupons Available</label>
            <RestaurantCard {...props}/>
        </div>)
        
    })
}

export default RestaurantCard;