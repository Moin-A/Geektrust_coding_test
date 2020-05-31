import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import Nav from "./Components/Nav";

class Index extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <App />
      </div>
    );
  }
}

export default Index;

ReactDOM.render(<Index />, document.getElementById("root"));
