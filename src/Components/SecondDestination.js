import React, { Component, render } from "react";

class SecondDestination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Maps: new Map([
        ["key1", "value1"],
        ["key2", "value2"],
      ]),
      Destination: "",
      selectedoption: "",
    };
  }

  componentDidMount() {
    this.setState({ Maps: this.props.Maps });
  }

  componentWillReceiveProps(prevProps) {
    if (prevProps.Maps !== this.state.Maps) {
      this.setState({ Maps: prevProps.Maps });
    }
  }

  render() {
    const { DestinationList, VehicleList, Maps } = this.props;

    let moin = this.state.Maps.values();
    let moin2 = this.state.Maps.values();

    const handleChange = (event, Maps, item) => {
      let clone = new Map(this.state.Maps1);
      clone.delete(undefined);
      this.setState({ selectedoption: event.target.value });
      clone.set(event.target.value, clone.get(event.target.value) - 1);
    };

    return (
      <div style={{ color: "black" }} className="SecondDestination">
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
              key={`sec${item}`}
              type={"radio"}
              id={`sec${item}`}
              checked={this.state.selectedoption === item[0]}
              value={item[0]}
              disabled={moin2.next().value == 0}
              onChange={(e) => handleChange(e, Maps)}
            ></input>
            <label htmlFor={`sec${item}`}>
              {item[0]} {moin.next().value}
            </label>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default SecondDestination;
