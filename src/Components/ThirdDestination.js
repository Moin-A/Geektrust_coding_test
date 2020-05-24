import React, { Component } from "react";

class ThirdDestination extends Component {
  state = {
    selectedoption: "",
    isselected: false,
  };

  render() {
    const { DestinationList, VehicleList, Maps } = this.props;
    let moin = Maps.values();
    let moin2 = Maps.values();
    const handleChange = (event, Maps) => {
      this.setState({ isselected: true });
      this.setState({ ThirdVehicle: event.target.value });
      Maps.set(event.target.value, Maps.get(event.target.value) - 1);
      this.props.handler(event, {
        ThirdVehicle: event.target.value,
        ThirdDestination: this.state.ThirdDestination,
      });
    };
    return (
      <div style={{ color: "black" }} className="ThirdDestination card">
        <label htmlFor={"Location"}>
          Desctination 3
          <select
            style={{ width: "66%" }}
            id={"Location"}
            value={this.state.ThirdDestination}
            onChange={(event) =>
              this.setState({ ThirdDestination: event.target.value })
            }
            onBlur={(event) =>
              this.setState({ ThirdDestination: event.target.value })
            }
          >
            <option />
            {DestinationList.map((item) => (
              <option key={item[0]} value={item}>
                {item[0]}
              </option>
            ))}
          </select>
        </label>

        {VehicleList.map((item) => (
          <React.Fragment>
            <br />
            <input
              key={`Third${item}`}
              type={"radio"}
              id={`Third${item}`}
              checked={this.state.ThirdVehicle === item[0]}
              value={item[0]}
              disabled={
                moin2.next().value === 0 ||
                this.state.isselected ||
                this.state.ThirdDestination === undefined ||
                +this.state.ThirdDestination.split(",")[1] > +item[2]
              }
              onChange={(e) => handleChange(e, Maps)}
            ></input>
            <label htmlFor={`Third${item}`}>
              {item[0]} {moin.next().value}
            </label>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default ThirdDestination;
