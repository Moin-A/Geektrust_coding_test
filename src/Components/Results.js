import React, { Component, useContext } from "react";
import ThemeContext from "../Context/Context";

const Results = () => {
  const xyz = useContext(ThemeContext);
  const { Maps1, FirstDesctination } = xyz;

  return (
    <div className={"Results"}>
      {Maps1} {FirstDesctination}
    </div>
  );
};

export default Results;
