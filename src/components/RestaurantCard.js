import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>{
    
    const {resData}=props;
    console.log(props)
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resData.info
    return(<div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
        <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Rating</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} Minutes</h4>
        
    </div>)
}
export default RestaurantCard;