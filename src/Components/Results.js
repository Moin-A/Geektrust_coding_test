import { Link, Router } from "@reach/router";
import React, { Component } from "react";
import Modal from "./Modal";
import { cloneDeep } from "lodash";
const axios = require("axios");

class Results extends Component {
  constructor(props) {
    super(props);
    this.fetcthD = this.fetcthD.bind(this);
    this.secondfetch = this.secondfetch.bind(this);
    this.state = {
      FinalResult: undefined,
      Capturedplanet: undefined,
      loading: true,
      showModal: false,
      Result: 0,
      caculated: [],
      vehicle: [],
      destination: [],
    };
  }

  componentWillReceiveProps(props, state) {
    let copy1 = cloneDeep(props);
    delete copy1.State.Maps1;
    if (Object.entries(copy1.State).length === 0) return;
    const { VehicleList } = { ...props };
    let copy = new Map();
    VehicleList.map((item) => copy.set(item[0], [item[1], item[2]]));
    let length = Object.values(copy1.State).length;
    let vehicle = Object.values(copy1.State)[length - 2];
    let Destination = Object.values(copy1.State)[length - 1].split(",");
    let speed = copy.get(vehicle)[0];
    let Time = Destination[1] / speed;
    let NewTime = this.state.Result + Time;
    this.setState({ Result: NewTime });
    this.setState((prevstate) => ({}));
    this.setState({ destination: [...this.state.destination, Destination[0]] });
    this.setState({ vehicle: [...this.state.vehicle, vehicle] });
  }

  fetcthD = () => {
    const { destination } = this.state;
    this.setState({ showModal: !this.state.showModal });

    axios({
      method: "post",
      url: "https://findfalcone.herokuapp.com/token",
      headers: { Accept: "application/json" },
    }).then((x) => {
      this.secondfetch(x, this.state.destination, this.state.vehicle);
    });
  };

  secondfetch = (x, y, z) => {
    axios({
      method: "post",
      url: "https://findfalcone.herokuapp.com/find",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        // prettier-ignore
        "token": x.data.token,
        // prettier-ignore
        "vehicle_names": z,
        // prettier-ignore
        "planet_names": y
      },
    }).then((x) => {
      this.setState({
        FinalResult: x.data.status,
        Capturedplanet: x.data.planet_name || null,
      });
    });
  };

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  render() {
    const { showModal } = this.state;

    const isLoggedIn = this.state.FinalResult;
    let button;
    if (isLoggedIn === "success") {
      button = (
        <React.Fragment>
          <h1>Sucesss</h1>
          <h1>Queen was found on {this.state.Capturedplanet}</h1>
          <h1>The Search Took {this.state.Result} hrs</h1>
        </React.Fragment>
      );
    }

    if (isLoggedIn === "false") {
      button = (
        <React.Fragment>
          <h1>Sorry ! The Queen has Excaped</h1>
          <h1>The Search patrol took {this.state.Result} hrs</h1>
        </React.Fragment>
      );
    }
    if (isLoggedIn === undefined) {
      button = (
        <React.Fragment>
          <h1 style={{ margin: 0, padding: 0 }}>Score</h1>
          <h1 style={{ padding: "0.5rem" }}>{this.state.Result}</h1>
        </React.Fragment>
      );
    }

    //   button = (
    //     <div>
    //       <h1 style={{ margin: 0, padding: 0 }}>Score</h1>
    //       <h1 style={{ padding: "0.5rem" }}>{this.state.Result}</h1>
    //     </div>
    //   );
    // }

    return (
      <div className={"Results"} style={{ color: "black" }}>
        {button}

        {showModal ? (
          <Modal>
            <h1>Would you like to Submit your Answer</h1>
            <div className="buttons">
              <button onClick={this.fetcthD}>Yes</button>
              <button path="/" onClick={this.toggleModal}>
                NO
              </button>
            </div>
          </Modal>
        ) : null}

        <button onClick={this.toggleModal}>SUBMIT</button>
      </div>
    );
  }
}

export default Results;
