import React, { Component } from "react";
const plane = require("../space.png");

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <img src={plane} alt="name" style={{ width: "100%" }} />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
