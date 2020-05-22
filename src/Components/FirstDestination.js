import React, { Component, render } from "react";
import { cloneDeep } from "lodash";
import ThemeContext from "../Context/Context";

class FirstDestination extends Component {
  static contextType = ThemeContext.Consumer;
  constructor(props) {
    super(props);
    this.state = {
      FirstVehicle: "",
      isselected: false,
    };
  }

  render() {
    const { DestinationList, VehicleList, Maps } = this.props;

    let moin = Maps.values();
    let moin2 = Maps.values();

    const handleChange = (event, Maps) => {
      this.setState({ isselected: true });
      this.setState({ FirstVehicle: event.target.value });
      Maps.set(event.target.value, Maps.get(event.target.value) - 1);
      this.props.handler(event, {
        FirstVehicle: event.target.value,
        FirstDestination: this.state.FirstDestination,
      });
    };

    return (
      <div style={{ color: "black" }} className="FirstDestination">
        <label htmlFor={"Location"}>
          Desctination1
          <select
            style={{ width: "66%" }}
            id={"Location"}
            value={this.state.FirstDestination}
            onChange={(event) =>
              this.setState({ FirstDestination: event.target.value })
            }
            onBlur={(event) =>
              this.setState({ FirstDestination: event.target.value })
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
              key={`Fir${item}`}
              type={"radio"}
              id={`Fir${item}`}
              checked={this.state.FirstVehicle === item[0]}
              value={item[0]}
              disabled={moin2.next().value == 0 || this.state.isselected}
              onChange={(e) => {
                this.setState({ FirstVehicle: e.target.value });
                handleChange(e, Maps);
              }}
            ></input>
            <label htmlFor={`Fir${item}`}>
              {item[0]} {moin.next().value}
            </label>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default FirstDestination;
