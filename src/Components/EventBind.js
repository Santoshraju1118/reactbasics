//Different ways of Event Binding.
import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
        message:"Helloo..!"
    };
    // this.clickHandler = this.clickHandler.bind(this)    //binding in class Constructor
  }

clickHandler = () => {
    this.setState({
        message:"Nice, You Clicked the button..!"
    })
    console.log("this:",this)
}

  render() {
    return (
      <div>
      <div> {this.state.message} </div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click Me</button> */}
        {/* <button onClick={() => {this.clickHandler()}}>Click Me</button> */}
        {/* below one binding in the class constructor */}
        <button onClick={this.clickHandler}>Click Me</button>   

      </div>
    );
  }
}

export default EventBind;
