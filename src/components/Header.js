import { useState,useEffect } from "react";
import { LOGO_URL } from "../utils/constants";

const Header=()=>{
    const [btnreact,setbtnreact]=useState("login");
    useEffect(()=>{
        console.log("use effect called")
    },[]);
    return(
    <div className="header">
        <div className="logo-container">
        <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
    <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact</li>
        <li>Cart</li>
        <button className="login" onClick={()=>
        {btnreact==="login" ? setbtnreact("logout"):setbtnreact("login")}
        }>{btnreact}</button>
    </ul>
        </div>
    </div>)
}
export default Header;