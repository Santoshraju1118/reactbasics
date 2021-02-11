import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log("info", info);
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="error">Something Went Wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
