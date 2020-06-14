import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import Nav from "./Components/Nav";
import UseDropdown from "./CustomHooks/UseDropdown";
import Slider from "./Utility/Slider";
import Api from "./Api/Api";
import VehicleApi from "./Api/Api.vehicle";
import Results from "../src/Components/Results";
import ThemeContext from "./Context/ThemeContext";

const App = () => {
  const Listofselectedvehicle = useState([]);
  const [DestiantionApidata] = Api();
  const [VehicelApidata] = VehicleApi();
  const list = useState([]);

  const [DestiantionApi, setDestinationApi] = useState([]);
  const [VehicelApi, setVehicleApi] = useState([]);
  const [FirsttDropdown] = UseDropdown(
    0,
    DestiantionApi,
    VehicelApi,
    list,
    Listofselectedvehicle
  );
  const [SecondDropdown] = UseDropdown(
    1,
    DestiantionApi,
    VehicelApi,
    list,
    Listofselectedvehicle
  );
  const [ThirdDropdown] = UseDropdown(
    2,
    DestiantionApi,
    VehicelApi,
    list,
    Listofselectedvehicle
  );
  const [FourthDropdown] = UseDropdown(
    3,
    DestiantionApi,
    VehicelApi,
    list,
    Listofselectedvehicle
  );

  useEffect(() => {
    setDestinationApi(DestiantionApidata);
    setVehicleApi(VehicelApidata);
  }, [DestiantionApidata, VehicelApidata]);

  return (
    <div className="App">
      <FirsttDropdown />
      <SecondDropdown />
      <ThirdDropdown />
      <FourthDropdown />
      <Results
        Listofselectedvehicle={Listofselectedvehicle}
        selectedplanetlist={list[0]}
      />
    </div>
  );
};

export default App;
