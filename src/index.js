import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";

class Index extends Component {
  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}

export default Index;

ReactDOM.render(<Index />, document.getElementById("root"));
