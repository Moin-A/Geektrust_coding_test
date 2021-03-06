import React, { Component } from "react";

class FourthDestination extends Component {
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
      this.setState({ FourthVehicle: event.target.value });
      Maps.set(event.target.value, Maps.get(event.target.value) - 1);
      this.props.handler(event, {
        FourthVehicle: event.target.value,
        FourthDestination: this.state.FourthDestination,
      });
    };

    return (
      <div style={{ color: "black" }} className="FourthDestination card">
        <label htmlFor={"Location"}>
          Desctination 4
          <select
            style={{ width: "66%" }}
            id={"Location"}
            value={this.state.FourthDestination}
            onChange={(event) =>
              this.setState({ FourthDestination: event.target.value })
            }
            onBlur={(event) =>
              this.setState({ FouthDestination: event.target.value })
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
        <div>
          {VehicleList.map((item) => (
            <React.Fragment>
              <input
                key={`Fou${item}`}
                type={"radio"}
                id={`Fou${item}`}
                checked={this.state.FourthVehicle === item[0]}
                value={item[0]}
                disabled={
                  moin2.next().value === 0 ||
                  this.state.isselected ||
                  this.state.FourthDestination === undefined ||
                  +this.state.FourthDestination.split(",")[1] > +item[2]
                }
                onChange={(e) => handleChange(e, Maps)}
              ></input>
              <label htmlFor={`Fou${item}`}>
                {item[0]} {moin.next().value}
              </label>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default FourthDestination;
