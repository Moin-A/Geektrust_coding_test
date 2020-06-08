import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../Context/Context";
import Api from "../Api/Api";
import VehicleApi from "../Api/Api.vehicle";
import Slider from "../Utility/Slider";
import axios from "axios";
import { CSSTransition, transit } from "react-css-transition";
const plane = require("../falconeAI.jpg");

const UseDropdown = () => {
  const [data] = Api();
  const [data2] = VehicleApi();

  const [data1, setdata] = useState([]);
  const [data3, setdata3] = useState([]);
  const [index, setindex] = useState([]);
  const [label, setlabel] = useState(0);

  useEffect(() => {
    setdata(data);
    setdata3(data2);
  }, [data, data2]);

  const StyledInput = styled.input`
    opacity: 0;

    position: fixed;
    width: 0;
    &:checked + label {
      background-color: #bfb;
      border-color: #4c4;
    }
    &:focus + label {
      border: 2px solid #444;
    }
  `;
  const Styledlabel = styled.label`
    box-shadow: 0 7px 7px rgba(0, 0, 0, 0.2);
    display: inline-block;
    background-color: #d7d4cd;
    padding: 10px 20px;
    font-family: sans-serif, Arial;
    font-size: 16px;
    border: 2px solid #444;
    border-radius: 4px;
    font-weight: 400;
    cursor: pointer;
  `;

  const PlanetDropdown = ({ index }) => (
    <section className="section-slider">
      <div style={{ color: "black" }} className="FirstDestination card">
        {data1.map((item) => (
          <React.Fragment>
            <StyledInput
              name={index + "radAnswer"}
              key={item.name}
              type={"radio"}
              id={index + item.name}
              value={item.name}
            ></StyledInput>
            <Styledlabel htmlFor={index + item.name}>{item.name}</Styledlabel>
          </React.Fragment>
        ))}
      </div>
      <Slider slides={Object.values(data3)} />
    </section>
  );

  return [PlanetDropdown];
};
export default UseDropdown;
