import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import FirstDesctination from "./Components/FirstDestination";
import SecondDestination from "./Components/SecondDestination";
import ThirdDesctination from "./Components/ThirdDestination";
import FourthDestination from "./Components/FourthDestination";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      Maps1: new Map([
        ["key1", "value1"],
        ["key2", "value2"],
      ]),
    };
  }

  handler(event) {
    this.setState((state, event) => {
      return {
        Maps: state.Maps,
      };
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.Maps1 !== this.state.Maps1) {
      this.setState({ Maps1: prevProps.Maps1 });
    }
  }

  render() {
    const { DestinationList, VehicleList, Maps1 } = this.props;

    return (
      <div>
        <div className="container" style={{ color: "red", height: "900px" }}>
          <Nav style={{ color: "red", height: "900px" }}></Nav>
          <FirstDesctination
            DestinationList={DestinationList}
            VehicleList={VehicleList}
            Maps={this.state.Maps1}
            handler={this.handler}
          />
          <SecondDestination
            DestinationList={DestinationList}
            VehicleList={VehicleList}
            Maps={this.state.Maps1}
            handler={this.handler}
          />
          <ThirdDesctination
            DestinationList={DestinationList}
            VehicleList={VehicleList}
            Maps={Maps1}
          />
          <FourthDestination
            DestinationList={DestinationList}
            VehicleList={VehicleList}
            Maps={Maps1}
          />
        </div>
      </div>
    );
  }
}
export default App;
