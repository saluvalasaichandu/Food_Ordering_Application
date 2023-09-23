import React, { lazy,Suspense } from "react";
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
    return(<div className="app">
        <Header/>
        <Outlet/>
    </div>);
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


