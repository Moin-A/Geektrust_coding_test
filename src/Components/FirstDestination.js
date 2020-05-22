import React, { Component, render } from "react";
import { cloneDeep } from "lodash";

class FirstDestination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Moin: 1,
      Destination: "",
      selectedoption: "",
    };
  }

  render() {
    const { DestinationList, VehicleList, Maps } = this.props;

    let moin = Maps.values();
    let moin2 = Maps.values();

    const handleChange = (event) => {
      const { Maps } = this.props;
      this.setState({ selectedoption: event.target.value });
      Maps.set(event.target.value, Maps.get(event.target.value) - 1);
      this.props.handler(event);
    };

    return (
      <div style={{ color: "black" }} className="FirstDestination">
        <label htmlFor={"Location"}>
          Desctination1
          <select
            style={{ width: "66%" }}
            id={"Location"}
            value={this.state.Destination}
            onChange={(event) =>
              this.setState({ Destination: event.target.value })
            }
            onBlur={(event) =>
              this.setState({ Destination: event.target.value })
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
              checked={this.state.selectedoption === item[0]}
              value={item[0]}
              disabled={moin2.next().value == 0}
              onChange={(e) => handleChange(e)}
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
