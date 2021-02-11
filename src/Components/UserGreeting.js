import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // let message   //Element Variable Approach
    // if(this.state.isLoggedIn){  
    //     message = <div>welcome Bruno..!</div>
    // }else{
    //     message = <div>Welcome Guest..!</div>
    // }
    // return <div>{message}</div>

    // if(this.state.isLoggedIn){                 // if-else Approach
    //     return <div>welcome Bruno..!</div>
    // }else{
    //     return <div>Welcome Guest..!</div>
    // }

    return this.state.isLoggedIn ? (   //Conditional Terenary Approach
      <div>Welcome Bruno..!</div>
    ) : (
      <div>Welcome Guest</div>
    );

    // return this.state.isLoggedIn && <div>Welcome Bruno..!</div>  //Short-circuit Approach
  }
}

export default UserGreeting;
