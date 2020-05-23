import React, { Component } from "react";
import ThemeContext from "../Context/Context";
import { cloneDeep } from "lodash";

class Results extends Component {
  componentWillReceiveProps(props, state) {
    let copy1 = cloneDeep(props);
    delete copy1.State.Maps1;
    if (Object.entries(copy1.State).length == 0) return;
    const { VehicleList } = { ...props };
    let copy = new Map();

    VehicleList.map((item) => copy.set(item[0], [item[1], item[2]]));

    let length = Object.values(copy1.State).length;

    let vehicle = Object.values(copy1.State)[length - 2];

    let Destination = Object.values(copy1.State)[length - 1].split(",")[1];

    let speed = copy.get(vehicle)[0];
    let Time = Destination / speed;
    let NewTime = this.state.Result + Time;
    debugger;
    this.setState({ Result: NewTime });
  }

  constructor(props) {
    super(props);
    this.state = {
      Result: 0,
      caculated: [],
    };
  }

  render() {
    return (
      <div className={"Results"} style={{ color: "black" }}>
        <h1>{this.state.Result}</h1>
      </div>
    );
  }
}

export default Results;
