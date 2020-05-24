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
    debugger;
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
    return (
      <div className={"Results"} style={{ color: "black" }}>
        <h1>{this.state.Result}</h1>
        {showModal ? (
          <Modal>
            <h1>Would you like to Submit your Answer</h1>
            <div className="buttons">
              <button onClick={this.fetcthD}>Yes</button>
              <button
                onChange={(e) => {
                  this.toggleModal();
                }}
              >
                No, I am a monster
              </button>
            </div>
          </Modal>
        ) : null}

        <button onClick={this.toggleModal}>S</button>
      </div>
    );
  }
}

export default Results;
