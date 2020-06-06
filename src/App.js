import "./App.css";
import React from "react";
import Nav from "./Components/Nav";
import UseDropdown from "./CustomHooks/UseDropdown";
import Slider from "./Utility/Slider";
import Api from "./Api/Api";

const App = () => {
  const [data] = Api();
  const [FirsttDropdown] = UseDropdown();
  const [SecondDropdown] = UseDropdown();
  // const [ThirdDropdown] = UseDropdown();
  // const [FourthDropdown] = UseDropdown();

  return (
    <div className="App">
      <FirsttDropdown />
      <SecondDropdown />
    </div>
  );
};

export default App;
