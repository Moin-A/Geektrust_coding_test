import React, { useState, useEffect, useContext } from "react";
import ThemeContext from "../Context/Context";
import Api from "../Api/Api";
import Slider from "../Utility/Slider";
import VehicleApi from "../Api/Api.vehicle";
import axios from "axios";
import { CSSTransition, transit } from "react-css-transition";
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

  const PlanetDropdown = () => (
    <section className="section-slider">
      <div style={{ color: "black" }} className="FirstDestination card">
        <label htmlFor={"Location"} key={1}>
          Desctination1
          <select style={{ width: "66%" }} id={"Location"} value={"v"}>
            <option />
            {data1.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <Slider slides={Object.values(data)} />
    </section>
  );

  return [PlanetDropdown];
};
export default UseDropdown;
