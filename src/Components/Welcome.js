import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, placeName } = this.props; //destructuring
    // const { state1, state2 } = this.state;
    return (
      <div>
        <h1>
          Welcome.. {name} from {placeName}
        </h1>
      </div>
    );
  }
}

export default Welcome;
