import "./App.css";
import Nav from "./Components/Nav";
import FirstDesctination from "./Components/FirstDestination";
import SecondDestination from "./Components/SecondDestination";
import ThirdDesctination from "./Components/ThirdDestination";
import FourthDestination from "./Components/FourthDestination";
import React, { Component } from "react";
import Results from "./Components/Results";
import ErrorBoundary from "./ErrorBoundry";

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

  resetForm = () => {
    this.setState(this.baseState);
  };

  handler(event, states) {
    this.setState({ ...states });
  }

  componentDidUpdate(prevProps, state) {
    if (prevProps.Maps1 !== state.Maps1) {
      this.setState({ Maps1: prevProps.Maps1 });
    }
  }

  componentDidMount() {
    if (this.state.Maps1 !== this.state.Map1) {
      this.setState({ Maps1: this.state.Maps1 });
    }
  }

  render() {
    const { DestinationList, VehicleList } = this.props;

    return (
      <div>
        <div className="container" style={{ color: "red", height: "900px" }}>
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
          <Results
            State={this.state}
            VehicleList={VehicleList}
            resetform={this.resetForm}
          />
        </div>
      </div>
    );
  }
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <App {...props} />
    </ErrorBoundary>
  );
}
