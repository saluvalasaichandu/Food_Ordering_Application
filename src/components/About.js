// import User from './User';
import React from 'react';
import UserClass from './UserClass';
import UserContext from "../utils/UserContext";
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
            <div className="py-2 px-8 m-6 text-lg">
                <h1 className='font-bold'>About us:👁‍🗨</h1>
                <div>LoggedIn user<UserContext.Consumer>{({loggedInUser})=><h1 className='font-bold'>{loggedInUser}</h1>}</UserContext.Consumer></div>
                <h2>App created by Saichandu</h2>
                {/*<User name={"Saichandu (function)"}/>*/}
                <UserClass name={"1st child (class)"} location={"Hyderabad class"} contact={"567890 class"} />
                
            </div>);
    }
}



export default About;