import React, { Component } from "react";

class SecondDestination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedoption: "",
      isselected: false,
    };
  }

  render() {
    const { DestinationList, VehicleList, Maps } = this.props;

    let moin = Maps.values();
    let moin2 = Maps.values();

    const handleChange = (event, Maps) => {
      this.setState({ isselected: true });
      this.setState({ SecondVehicle: event.target.value });
      Maps.set(event.target.value, Maps.get(event.target.value) - 1);
      this.props.handler(event, {
        SecondVehicle: event.target.value,
        SecondDestination: this.state.SecondDestination,
      });
    };

    return (
      <div style={{ color: "black" }} className="SecondDestination">
        <label htmlFor={"Location"}>
          Desctination 2
          <select
            style={{ width: "66%" }}
            id={"Location"}
            value={this.state.SecondDestination}
            onChange={(event) =>
              this.setState({ SecondDestination: event.target.value })
            }
            onBlur={(event) =>
              this.setState({ SecondDestination: event.target.value })
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
              key={`Sec${item}`}
              type={"radio"}
              id={`Sec${item}`}
              checked={this.state.SecondVehicle === item[0]}
              value={item[0]}
              disabled={
                moin2.next().value === 0 ||
                this.state.isselected ||
                this.state.SecondDestination === undefined ||
                +this.state.SecondDestination.split(",")[1] > +item[2]
              }
              onChange={(e) => {
                handleChange(e, Maps);
              }}
            ></input>
            <label htmlFor={`Sec${item}`}>
              {item[0]} {moin.next().value}
            </label>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default SecondDestination;
