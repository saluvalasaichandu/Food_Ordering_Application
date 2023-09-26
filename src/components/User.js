import { useState } from "react";

const User=(props)=>{
    const[count]=useState(0);
    const[count2]=useState(1);
    return(
    <div className="card-user m-4 p-4 bg-gray-50 rounded-lg">
        <h1>Count is:{count}</h1>
    
        <h1>Count is:{count2}</h1>
        <h2>Name: {props.name}</h2>
        <h3>Location: Hyderabad</h3>
        <h4>Contact:567890</h4>
    </div>)
}
export default User;
