import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState,useEffect } from "react";

const Body=()=>{
    let [listOfRestaurants,setListOfRestaurants]= useState(resList);
    useEffect(()=>{
       fetchData(); 
    },[]);

    const fetchData=async()=>{
        const data= await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=17.385044&lng=78.486671");
      
    const json= await data.json() ;
    console.log(json);
     setListOfRestaurants(json.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants);
};
    return(
       
    <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                const filteredList=listOfRestaurants.filter((res)=>(res.info.avgRating>4.5))
            
            console.log(listOfRestaurants);
            setListOfRestaurants(filteredList);
            }}>Top Rated Restaurants</button>
    
        </div>
        
        <div className="res-container">
            {
            listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id}resData={restaurant}/>)
            }
        </div>
      
    </div>)
}   

export default Body;
