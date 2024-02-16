import React from "react";
class Shouldupdate extends React.Component {
    state = {color:"red"  } 

    shouldComponentUpdate(){
        return false;
    }
    change =()=>{
        this.setState({color:"blue"})
    }
    render() { 
        return (
            <div>

            <h1>My color is {this.state.color}</h1>
            <button onClick={this.change}>Change Color</button>

            </div>
        );
    }
}
 
export default Shouldupdate;