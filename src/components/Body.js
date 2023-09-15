import RestaurantCard from "./RestaurantCard";

import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";


const Body=()=>{
    let [listOfRestaurants,setListOfRestaurants]= useState([]);

    useEffect(()=>{
       fetchData(); 
    }, []);
    const fetchData= async () =>{
        
        const data= await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=17.385044&lng=78.486671");
      
        const jsonData=await data.json() ;

        console.log(jsonData);

        setListOfRestaurants(jsonData?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        
    }
    if(listOfRestaurants.length==0){
        return(<Shimmer/>)
      }
    
    return(
       
    <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                const filteredList=listOfRestaurants.filter((res)=>(res.info.avgRating>4.4))
            //console.log(listOfRestaurants);
            setListOfRestaurants(filteredList);
            }}>Top Rated Restaurants</button>
    
        </div>
        
        <div className="res-container">
            {
            listOfRestaurants.map(restaurant =><RestaurantCard key={restaurant.info.id}resData={restaurant}/>)
            }
        </div>
      
    </div>)
}   

export default Body;
