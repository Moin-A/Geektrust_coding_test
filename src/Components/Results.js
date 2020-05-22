import React, { Component } from "react";
import ThemeContext from "../Context/Context";
import { clone } from "lodash";

class Results extends Component {
  componentWillReceiveProps(props, state) {
    let copy = clone(props.State);
    if (copy.Maps1) {
      delete copy.Maps1;
    }
    this.setState({ Results: copy });
  }

  componentDidUpdate(props, state) {}

  constructor(props) {
    super(props);
    this.state = {
      Results: 0,
    };
  }

  render() {
    return <div className={"Results"} style={{ color: "black" }}></div>;
  }
}

export default Results;
