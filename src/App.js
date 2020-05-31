import "./App.css";
import React from "react";
import Nav from "./Components/Nav";
import UseDropdown from "./CustomHooks/UseDropdown";

const App = () => {
  const [FirsttDropdown] = UseDropdown();
  const [SecondDropdown] = UseDropdown();
  // const [ThirdDropdown] = UseDropdown();
  // const [FourthDropdown] = UseDropdown();

  return (
    <React.Fragment>
      <FirsttDropdown />
      <SecondDropdown />
    </React.Fragment>
  );
};

export default App;
