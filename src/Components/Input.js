import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import Api from "../Api/Api";
import VehicleApi from "../Api/Api.vehicle";
import Slider from "../Utility/Slider";

const Input = () => {
  const data = VehicleApi();
  const [value, setvalue] = useState([]);

  useEffect(() => {
    setvalue(data);
  }, [data]);
  return <Slider slides={Object.values(data)} />;
};

export default Input;
