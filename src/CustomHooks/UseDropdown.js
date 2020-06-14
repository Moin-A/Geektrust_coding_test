import React, { useState, useEffect, useContext, Component } from "react";
import styled from "styled-components";
import ThemeContext from "../Context/ThemeContext";
import Api from "../Api/Api";
import VehicleApi from "../Api/Api.vehicle";
import Styledinput from "../Utility/StyledInput";
import Slider from "../Utility/Slider";
import axios from "axios";

import { CSSTransition, transit } from "react-css-transition";

const UseDropdown = (index, data1, data3, list, Listofselectedvehicle) => {
  const [newdata1, setdata] = useState(data1);
  const [newdata3, setdata3] = useState(data3);
  const [newlist, setnewlist] = list;
  const [label, setlabel] = useState(0);

  useEffect(() => {
    setdata(data1);
    setdata3(data3);
  }, [data1, data3]);

  const PlanetDropdown = () => (
    <section className="section-slider">
      <Styledinput
        newdata1={newdata1}
        index={index}
        newdata3={newdata3}
        Listofselectedvehicle={Listofselectedvehicle}
      ></Styledinput>
      {/* <Slider slides={Object.values(newdata3)} /> */}
    </section>
  );

  return [React.memo(PlanetDropdown)];
};
export default UseDropdown;
