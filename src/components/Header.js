import { useState,useEffect,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header=()=>{
    const [btnreact,setbtnreact]=useState("login");

    const onlineStatus=useOnlineStatus();
     const {loggedInUser}=useContext(UserContext);
     console.log(loggedInUser);
    useEffect(()=>{
        //console.log("use effect called")
    },[]);
    return(
    <div className="flex  justify-between bg-gray-100 lg:bg-green-100">
        <div className="logo-container">
        <img className="w-36" src={LOGO_URL}/>
        </div>
        <div className="flex items-center">
    <ul className="flex p-4 m-4">
        <li className="px-4">Online_Status:{onlineStatus? "✅":"🔴"}</li>
        <li className="px-4"><Link to="/">Home </Link></li>
        <li className="px-4" > <Link to="/about">About us </Link></li>
        <li className="px-4"> <Link to="/contact">Contact</Link></li>
        <li className="px-4"><Link to="/Grocery">Grocery</Link></li>
        <li className="px-4">Cart</li>
        <button className="login" onClick={()=>
        {btnreact==="login" ? setbtnreact("logout"):setbtnreact("login")}
        }>{btnreact}</button>
        <li className="font-bold px-4">{loggedInUser}</li>
    </ul>
        </div>
    </div>)
}
export default Header;