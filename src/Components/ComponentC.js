import React, { Component } from "react";
import ComponentE from "./ComponentE";
import UserContext from "./userContext";

export class ComponentC extends Component {
  render() {
    return (
      <div>
        Component C Context :- {this.context}
        <ComponentE />
      </div>
    );
  }
}

ComponentC.contextType = UserContext;

export default ComponentC;
