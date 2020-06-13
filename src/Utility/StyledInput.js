import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../Context/ThemeContext";
import Slider from "../Utility/Slider";

const Styledinput = ({ newdata1, index, newdata3 }) => {
  const context = useContext(ThemeContext);
  const [label, setlabel] = useState(0);

  const [newlist, setnewlist] = useState([]);

  const StyledInput = styled.input`
    opacity: 0;
    position: fixed;
    width: 0;
    &:checked + label {
      background-color: #bfb;
      border-color: #4c4;
    }

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
    text-align: center;
    z-index: 5;
  `;
  const handlechange = (e) => {
    setlabel(e.target.value.split(","));
    setnewlist([...newlist, e.target.value.split(",")[0]]);
  };

  return (
    <ThemeContext.Provider value={label}>
      <div className="FirstDestination card">
        {newdata1.map((item) => (
          <React.Fragment>
            <StyledInput
              name={index + "radanswer"}
              key={item.name}
              type={"radio"}
              id={index + item.name}
              value={[item.name, item.distance]}
              onChange={(e) => handlechange(e)}
              checked={label[0] === item.name}
              disabled={newlist.includes(item.name) || label !== 0}
            ></StyledInput>
            <Styledlabel
              htmlFor={index + item.name}
              style={{ cursor: "pointer" }}
            >
              {item.name}
              <br></br>
              {"Distance:" + item.distance}
            </Styledlabel>
          </React.Fragment>
        ))}
      </div>
      <Slider slides={Object.values(newdata3)} />
    </ThemeContext.Provider>
  );
};

export default Styledinput;
