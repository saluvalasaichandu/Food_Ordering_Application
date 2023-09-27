import React, { lazy,Suspense, useEffect, useState} from "react";
import UserContext from "./utils/UserContext";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";



const Grocery=lazy(()=> import("./components/Grocery"));
const About=lazy(()=> import("./components/About"));
const AppLayout=()=>{
    const [userName, setUserName] = useState();

    useEffect(()=>{
        const data={
            name:"sai chandu"
        };
        setUserName(data.name)
    },[]);
    return(
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
    </UserContext.Provider>
    );
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
                {
                    path:"/",
                    element:<Body/>
                },
                {
                    path:"/About",
                    element:<Suspense fallback={"screen is loading..."}><About/> </Suspense>
                },{
                    path:"/contact",
                    element:<Contact/>
                },
                {
                    path:"/Grocery",
                    element:<Suspense fallback={"screen is loading..."}><Grocery/></Suspense>
                },
                {
                    path:"restaurants/:resId",
                    element:<RestaurantMenu/>
                }
            
        ],
        errorElement:<Error/>
    },
    
]);

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />);


