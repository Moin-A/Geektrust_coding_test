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
  const context = useContext(ThemeContext);
  console.log(`Rendering TestC :`);
  const [data] = Api();
  const [data2] = VehicleApi();

  const list = useState([]);
  const selectedslide = useState([]);
  const [data1, setdata] = useState([]);
  const [data3, setdata3] = useState([]);
  const [FirsttDropdown] = UseDropdown(0, data1, data3, list);
  const [SecondDropdown] = UseDropdown(1, data1, data3, list);
  const [ThirdDropdown] = UseDropdown(2, data1, data3, list);
  const [FourthDropdown] = UseDropdown(3, data1, data3, list);

  useEffect(() => {
    setdata(data);
    setdata3(data2);
  }, [data, data2]);

  return (
    <div className="App">
      <FirsttDropdown />
      <SecondDropdown />
      <ThirdDropdown />
      <FourthDropdown />
      <Results />
    </div>
  );
};

export default App;
