import "./App.css";
import React from "react";
import Nav from "./Components/Nav";
import UseDropdown from "./CustomHooks/UseDropdown";

const App = () => {
  const [PlanetDropdown] = UseDropdown();

  return <PlanetDropdown />;
};

export default App;
