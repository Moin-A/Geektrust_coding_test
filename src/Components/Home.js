import React, { Component } from "react";
const plane = require("../falconeAI.jpg");

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
