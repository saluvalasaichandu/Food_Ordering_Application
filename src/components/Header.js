import { useState,useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

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
        <li><Link to="/">Home </Link></li>
        <li> <Link to="/about">About us </Link></li>
        <li> <Link to="/contact">Contact</Link></li>
        <li>Cart</li>
        <button className="login" onClick={()=>
        {btnreact==="login" ? setbtnreact("logout"):setbtnreact("login")}
        }>{btnreact}</button>
    </ul>
        </div>
    </div>)
}
export default Header;