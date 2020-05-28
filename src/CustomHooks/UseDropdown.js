import React, { useState, useEffect, useContext } from "react";
import ThemeContext from "../Context/Context";
import Api from "../Api";
import axios from "axios";

const UseDropdown = () => {
  const [data] = Api();

  const PlanetDropdown = () => (
    <div>
      <div className="FirstDestination">
        {data.map((x) => (
          <button>{x.name}</button>
        ))}
      </div>

      <div className="FirstDestination">
        {data.map((x) => (
          <button>{x.name}</button>
        ))}
      </div>
    </div>
  );

  return [PlanetDropdown];
};
export default UseDropdown;
