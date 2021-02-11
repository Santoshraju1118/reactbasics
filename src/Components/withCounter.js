import React, { Component } from "react";

const withCounter = (WrappedComponent, IncrementNumber) => {
  class withCounter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + IncrementNumber };
      });
    };

    render() {
      return (
        <div>
          <WrappedComponent
            count={this.state.count}
            incrementCount={this.incrementCount}
            {...this.props}
          />
        </div>
      );
    }
  }
  return withCounter;
};

export default withCounter;
