import User from './User';
import React from 'react';
import UserClass from './UserClass';

class About extends React.Component{
    constructor(props){
        console.log("parent constructor")
        super(props)
    }
    render(){
        console.log("parent render")
        return(
            <div>
                <h1>About us</h1>
                <h2>App created by Saichandu</h2>
                {/*<User name={"Saichandu (function)"}/>*/}
                <UserClass name={"Saichandu (class)"} location={"Hyderabad class"} contact={"567890 class"} />
            </div>);
    }
}



export default About;