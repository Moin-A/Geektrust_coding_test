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
  const [ThirdDropdown] = UseDropdown();
  const [FourthDropdown] = UseDropdown();
  // const [ThirdDropdown] = UseDropdown();
  // const [FourthDropdown] = UseDropdown();

  return (
    <div className="App">
      <FirsttDropdown index={1} />
      <SecondDropdown index={2} />
      <ThirdDropdown index={3} />
      <FourthDropdown index={4} />
    </div>
  );
};

export default App;
