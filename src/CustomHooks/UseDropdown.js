import React, { useState, useEffect, useContext } from "react";
import ThemeContext from "../Context/Context";
import Api from "../Api/Api";
import VehicleApi from "../Api/Api.vehicle";
import axios from "axios";
const plane = require("../falconeAI.jpg");

const UseDropdown = () => {
  const [data] = Api();
  const [vehicle] = VehicleApi();
  const [data1, setdata] = useState([]);
  const [index, setindex] = useState([]);

  useEffect(() => {
    setdata(data);
    setindex(+Object.keys(data)[0]);
  }, [data]);

  function nextProperty() {}

  function prevProperty() {
    setindex((prevstate) => prevstate + 1);
  }

  const PlanetDropdown = () => (
    <React.Fragment>
      <button onClick={() => setindex(index + 1)}>Next</button>
      <button onClick={() => setindex(index - 1)}>Prev</button>
      <div className="container_section1">
        <div className={"grid-wrapper"}>
          <div
            className="FirstDestination"
            style={{
              transform: `translateX(-${index * (100 / data.length)}%)`,
            }}
          >
            {data.map((x) => (
              <div>
                <img src={plane}></img>
              </div>
            ))}
          </div>
          {/* 
      <div className="FirstDestination">
        {vehicle.map((x) => (
          <div></div>
        ))}
    </div> */}
        </div>
      </div>
    </React.Fragment>
  );

  return [PlanetDropdown];
};
export default UseDropdown;
