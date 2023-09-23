import User from './User';
import React from 'react';
import UserClass from './UserClass';

class About extends React.Component{
    constructor(props){
        //console.log("parent constructor")
        super(props)
    }
    componentDidMount(){
        //console.log("parent component did mount called");
    }
    render(){
        //console.log("parent render")
        return(
            <div>
                <h1>About us</h1>
                <h2>App created by Saichandu</h2>
                {/*<User name={"Saichandu (function)"}/>*/}
                <UserClass name={"1st child (class)"} location={"Hyderabad class"} contact={"567890 class"} />
                
            </div>);
    }
}



export default About;