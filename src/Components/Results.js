import React, { Component, useContext } from "react";
import ThemeContext from "../Context/Context";

const Results = () => {
  const xyz = useContext(ThemeContext);
  const { FirstDestination, FirstVehicle } = xyz;

  debugger;

  return (
    <div className={"Results"} style={{ color: "black" }}>
      {FirstVehicle} {FirstDestination}
    </div>
  );
};

export default Results;
