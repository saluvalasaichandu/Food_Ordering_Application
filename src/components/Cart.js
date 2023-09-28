import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items)
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
   
    return(
    <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart </h1>
        
         <button className="m-2 p-2 bg-black text-white rounded-xl" onClick={handleClearCart}>Clear cart</button> 
        <div className="font-serif text-2xl  text-red-600 ">{cartItems.length==0&& <h1>Cart is empty!!!. please add items to cart</h1>}</div>
        <div className="w-1/2 m-auto"><ItemList items={cartItems}/></div>
    </div>)
}
export default Cart;
