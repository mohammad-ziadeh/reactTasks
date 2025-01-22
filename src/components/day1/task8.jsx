import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    if (this.state.isLoggedIn) {
      return <h1>Success!</h1>;
    } else {
      return <h1>No success T-T</h1>;
    }
  }
}

export default MyComponent;
