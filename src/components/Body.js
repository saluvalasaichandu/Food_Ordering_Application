import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);
    const [searchText,setSearchtext] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        console.log(json);

        //console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false) return(<h1>you are offline!! please check your connectivity and try again...</h1>)

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <>
            <div className="body">
                <div className="filter">
                    <div className="search">
                        <input type="text" className="search-box" value={searchText} onChange={
                            (e) => {
                                setSearchtext(e.target.value);
                            }
                        } />
                        <button className="search-btn" onClick={() => {
                            const filteredRestaurant = listOfRestaurants.filter((res) => 
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                       setFilteredRestaurant(filteredRestaurant);
                       console.log(filteredRestaurant);
                        }
                        }>Search</button>
                    </div>
                    <button className="filter-btn" onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => {
                                return res.info.avgRating>4.2;
                            });
                        console.log(filteredRestaurant);
                        setFilteredRestaurant(filteredList);
                    }}>
                        Top Rated restaurants
                    </button>
                </div>
                <div className="res-container">
                    {/* RestaurantCard goes here */}
                    {
                        filteredRestaurant.map((restaurant) => (
                          <Link 
                          key={restaurant?.info?.id}
                          to={"/restaurants/" + restaurant?.info?.id}>
                            <RestaurantCard  resData={...restaurant} /></Link>  
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Body;