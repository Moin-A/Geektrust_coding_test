import React, { Component } from "react";
import ReactDOM from "react-dom";
import ThemeContext from "./Context/Context";
import App from "./App";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      DestinationList: [
        ["Moin", "uxann"],
        ["Moinx", "xjanxjan"],
      ],
      VehicleList: [["Moinx", "xjanxjan"]],
      Maps1: [["xnajnx"]],
    };
  }

  componentWillUpdate() {
    async function fetchData() {
      let response = await fetch("https://findfalcone.herokuapp.com/vehicles");
      let user = await response.json();
      return user;
    }

    this.setState({ VehicleList: fetchData() });
  }

  render() {
    const { DestinationList, VehicleList, Maps1 } = this.state;
    return (
      <ThemeContext.Provider value={{ DestinationList, VehicleList, Maps1 }}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ThemeContext.Provider>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));

// serviceWorker.unregister();
