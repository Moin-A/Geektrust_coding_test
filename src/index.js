import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import { Router } from "@reach/router";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import ErrorBoundary from "./ErrorBoundry";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      DestinationList: [
        ["Moin", "uxann"],
        ["Moinx", "xjanxjan"],
      ],
      VehicleList: [["Moinx", "xjanxjan"]],
      Maps: "",
      Maps1: [
        new Map([
          ["key1", "value1"],
          ["key2", "value2"],
        ]),
      ],
    };
  }

  componentDidMount() {
    axios
      .get(`https://findfalcone.herokuapp.com/vehicles`)
      .then((res) =>
        res.data.map((x) => [
          x.name,
          x.distance || x.total_no,
          x.max_distance,
          x.speed,
        ])
      )
      .then((data) => {
        let clone = new Map(this.state.Maps1);
        clone.delete(undefined);
        data.map((item) => clone.set(item[0], item[1]));
        this.setState({ Maps1: clone, VehicleList: data });
      });
    axios
      .get(`https://findfalcone.herokuapp.com/planets`)
      .then((res) =>
        res.data.map((x) => [
          x.name,
          x.distance || x.total_no,
          x.max_distance,
          x.speed,
        ])
      )
      .then((data) => {
        this.setState({ DestinationList: data });
      });
  }

  render() {
    const { DestinationList, VehicleList, Maps1 } = this.state;

    return (
      <React.StrictMode>
        <div>
          <Nav style={{ color: "red", height: "900px" }}></Nav>
          <Router>
            <App
              path="/Home"
              DestinationList={DestinationList}
              VehicleList={VehicleList}
              Maps1={Maps1}
            />
            <Home path="/" />
          </Router>
        </div>
      </React.StrictMode>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));

// serviceWorker.unregister();
