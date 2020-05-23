import "./App.css";
import Nav from "./Components/Nav";
import FirstDesctination from "./Components/FirstDestination";
import SecondDestination from "./Components/SecondDestination";
import ThirdDesctination from "./Components/ThirdDestination";
import FourthDestination from "./Components/FourthDestination";
import React, { Component } from "react";
import Results from "./Components/Results";
import ThemeContext from "./Context/Context";

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

  handler(event, states) {
    this.setState({ ...states });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.Maps1 !== this.state.Maps1) {
      this.setState({ Maps1: prevProps.Maps1 });
    }
  }

  render() {
    const { DestinationList, VehicleList } = this.props;

    return (
      <ThemeContext.Provider value={this.state}>
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
              Maps={this.state.Maps1}
              handler={this.handler}
            />
            <FourthDestination
              DestinationList={DestinationList}
              VehicleList={VehicleList}
              Maps={this.state.Maps1}
              handler={this.handler}
            />
            <Results State={this.state} VehicleList={VehicleList} />
          </div>
        </div>
      </ThemeContext.Provider>
    );
  }
}
export default App;
