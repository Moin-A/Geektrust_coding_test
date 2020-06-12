import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../Context/Context";
import Api from "../Api/Api";
import VehicleApi from "../Api/Api.vehicle";
import Slider from "../Utility/Slider";
import axios from "axios";
import { CSSTransition, transit } from "react-css-transition";

const UseDropdown = (index, data1, data3, list) => {
  const [newdata1, setdata] = useState(data1);
  const [newdata3, setdata3] = useState(data3);
  const [label, setlabel] = useState(0);
  const [newlist, setnewlist] = list;

  useEffect(() => {
    setdata(data1);
    setdata3(data3);
  }, [data1, data3]);

  const StyledInput = styled.input`
    opacity: 0;

    position: fixed;
    width: 0;
    &:checked + label {
      background-color: #bfb;
      border-color: #4c4;
    }
    /* &:focus + label {
      border: 2px solid #444;
    } */
    &:disabled + label {
      opacity: 0.3;
    }
    &:checked + label {
      background-color: #bfb;
      border-color: #4c4;
      opacity: 0.7;
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
    z-index: 5;
  `;
  const handlechange = (e) => {
    setlabel(e.target.value);
    setnewlist([...newlist, e.target.value]);
  };

  const PlanetDropdown = () => (
    <section className="section-slider">
      <div className="FirstDestination card">
        {newdata1.map((item) => (
          <React.Fragment>
            <StyledInput
              name={index + "radanswer"}
              key={item.name}
              type={"radio"}
              id={index + item.name}
              value={item.name}
              onChange={(e) => handlechange(e)}
              checked={label === item.name}
              disabled={newlist.includes(item.name) || label !== 0}
            ></StyledInput>
            <Styledlabel
              htmlFor={index + item.name}
              style={{ cursor: "pointer" }}
            >
              {item.name}
            </Styledlabel>
          </React.Fragment>
        ))}
      </div>
      <Slider slides={Object.values(newdata3)} />
    </section>
  );

  const NPlanetDropdown = React.memo(PlanetDropdown);

  return [NPlanetDropdown];
};
export default UseDropdown;
