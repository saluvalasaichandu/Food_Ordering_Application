import React from "react";
import ReactDOM  from "react-dom/client";
const Header=()=>{
    return(
    <div className="header">
        <div className="logo-container">
        <img className="logo" src="https://t3.ftcdn.net/jpg/02/86/12/22/360_F_286122238_zWzctXPgodrwNOnkBXpjzuO8NeS0T0oJ.jpg"/>
        </div>
        <div className="nav-items">
    <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact</li>
        <li>Cart</li>
    </ul>
        </div>
    </div>)
}
const RestaurantCard=()=>{
    return(<div className="res-card">
        <h3>Bawarchi Foods</h3>
    </div>)

}

const Body=()=>{
    return(
    <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            <RestaurantCard/>
        </div>
    </div>)
}
const AppLayout=()=>{
    return(<div className="app">
        <Header/>
        <Body/>
    </div>);
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>);


