import RestaurantCard from "./RestaurantCard";
import { useState, useEffect,useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";
const Body = () => {
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);
    const [searchText,setSearchtext] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        console.log(json);

        //console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.Srestaurants)
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false) return(<h1>you are offline!! please check your connectivity and try again...</h1>)

    const { loggedInUser, setUserName } = useContext(UserContext);
    
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <>
            <div className="body">
                <div className="filter flex">
                    <div className="search m-4 p-4">
                        <input type="text" className="border border-solid border-black" value={searchText} onChange={
                            (e) => {
                                setSearchtext(e.target.value);
                            }
                        } />
                       
                        <button className="m-4 px-4 py-2 bg-orange-400 rounded-lg" onClick={() => {
                            const filteredRestaurant = listOfRestaurants.filter((res) => 
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                       setFilteredRestaurant(filteredRestaurant);
                       console.log(filteredRestaurant);
                        }
                        }>Search</button>
                    </div>
                    <div className= "search m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-300 rounded-lg" onClick={() => {
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
                    <div className= "search m-4 p-4 flex items-center">
                        <label>User name: </label>
                        <input className="border border-black mx-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>
                    </div>
                    
                </div>
                <div className="flex flex-wrap ">
                    {/* RestaurantCard goes here */}
                    {
                        filteredRestaurant.map((restaurant) => (
                          <Link 
                          key={restaurant?.info?.id}
                          to={"/restaurants/" + restaurant?.info?.id}>
                            {restaurant.info.aggregatedDiscountInfoV3?(
              <RestaurantCardPromoted resData={...restaurant} />
            ) : (<RestaurantCard  resData={...restaurant} />)}
                            </Link>  
                        ))}
                </div>
            </div>
        </>
    );
}

export default Body;