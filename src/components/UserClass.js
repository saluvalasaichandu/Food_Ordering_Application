import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        //console.log(props);
        this.state={
            count:0,
        };
        console.log("child constructor");
    }
    render(){
        const{name,location}=this.props;
        console.log("child render");
        return(
            <div className="card-user">
                <h1>Count class: {this.state.count}</h1>
                <button onClick={()=>
                {
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Count Increase</button>
                <button onClick={()=>{
                     this.setState({
                        count:this.state.count-1
                     })
                }}>Count Decrease</button>
                <h2>Name:{name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {this.props.contact}</h4>
            </div>);
        }
    }
export default UserClass;