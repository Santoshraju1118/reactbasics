import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("Callback value", this.state.count);
      }
    );
    console.log(this.state.count);
  };

  incrementFive = () => {
    this.setState((prevState, props) => ({
        count: prevState.count + 5
    }))
  }

  render() {
    return (
      <div>
        count : {this.state.count}
        <div>
          <button onClick={this.incrementCount}>Increment</button>
          <button onClick={this.incrementFive}>Increment 5</button>

        </div>
      </div>
    );
  }
}

export default Counter;
