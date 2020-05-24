import React, { Component } from "react";
import Modal from "./Modal";
import { cloneDeep } from "lodash";

class Results extends Component {
  state = { loading: true };
  state = { loading: true, showModal: false, Result: 0, caculated: [] };

  componentWillReceiveProps(props, state) {
    let copy1 = cloneDeep(props);
    delete copy1.State.Maps1;
    if (Object.entries(copy1.State).length === 0) return;
    const { VehicleList } = { ...props };
    let copy = new Map();
    VehicleList.map((item) => copy.set(item[0], [item[1], item[2]]));
    let length = Object.values(copy1.State).length;
    let vehicle = Object.values(copy1.State)[length - 2];
    let Destination = Object.values(copy1.State)[length - 1].split(",")[1];
    let speed = copy.get(vehicle)[0];
    let Time = Destination / speed;
    let NewTime = this.state.Result + Time;
    this.setState({ Result: NewTime });
  }
  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  render() {
    const { showModal } = this.state;
    return (
      <div className={"Results"} style={{ color: "black" }}>
        <h1>{this.state.Result}</h1>
        {showModal ? (
          <Modal>
            <h1>Would you like to adopt ?</h1>
            <div className="buttons">
              <button onClick={this.adopt}>Yes</button>
              <button onClick={this.toggleModal}>No, I am a monster</button>
            </div>
          </Modal>
        ) : null}

        <button onClick={this.toggleModal}>Adopt</button>
      </div>
    );
  }
}

export default Results;
