import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.InputRef = React.createRef();
  }

  focusInput = () => {
    this.InputRef.current.focus();
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.InputRef} ></input>
      </div>
    );
  }
}

export default Input;
