import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import Api from "../Api/Api";

const Input = () => {
  const [data] = Api();

  const [data1, setdata] = useState([]);
  const [data3, setdata3] = useState([]);
  const [index, setindex] = useState([]);

  useEffect(() => {
    setdata(data);
  }, [data]);

  const StyledInput = styled.input`
    opacity: 0;

    position: fixed;
    width: 0;
    &:checked + label {
      background-color: #bfb;
      border-color: #4c4;
    }
    &:focus + label {
      border: 2px dashed #444;
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
  return (
    <div style={{ color: "black" }} className="FirstDestination card">
      {data1.map((item) => (
        <React.Fragment>
          <StyledInput
            name={index + "radAnswer"}
            key={index + item.name}
            type={"radio"}
            id={index + item.name}
            value={item.name}
          ></StyledInput>
          <Styledlabel htmlFor={index + item.name}>{item.name}</Styledlabel>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Input;
