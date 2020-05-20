import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import FirstDesctination from "./Components/FirstDestination";
import SecondDestination from "./Components/SecondDestination";
import ThirdDesctination from "./Components/ThirdDestination";
import FourthDestination from "./Components/FourthDestination";

const App = ({ DestinationList, VehicleList, Maps1 }) => {
  return (
    <div className="container" style={{ color: "red", height: "900px" }}>
      <Nav style={{ color: "red", height: "900px" }}></Nav>
      <FirstDesctination
        DestinationList={DestinationList}
        VehicleList={VehicleList}
        Maps={Maps1}
      />
      <SecondDestination
        DestinationList={DestinationList}
        VehicleList={VehicleList}
        Maps={Maps1}
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
  );
};

export default App;
