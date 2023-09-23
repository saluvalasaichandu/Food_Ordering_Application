import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        //console.log(props);
        this.state={
          userInfo:{
            name:"dummy name",
            location:"dummy location",
            avatar_url:" "
          }
        };
        //console.log(this.props.name+"child constructor");
    }
    async componentDidMount(){
        //console.log( this.props.name +"child component did mount is called")
        const data= await fetch("https://api.github.com/users/saluvalasaichandu")
        const json=await data.json();
        console.log(json)
        this.setState({
            userInfo:json
        })
    }
    componentDidUpdate(){
        console.log("componentDidUpdate called");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount called");
    }
    render(){
       
        //console.log(this.props.name+"child render");
        return(
            <div className="card-user">
                <img src="https://avatars.githubusercontent.com/u/101009119?v=4"/>
               <h2>Name:{this.state.userInfo.login}</h2>
                <h3>Location: {this.state.userInfo.id}</h3>
                <h4>Contact: {this.props.contact}</h4>
            </div>);
        }
    }
export default UserClass;