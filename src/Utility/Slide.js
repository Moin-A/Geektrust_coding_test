import React, { Component, useContext } from "react";
import { css, jsx } from "@emotion/core";
import styled from "styled-components";
import ThemeContext from "../Context/ThemeContext";

const Slide = (props) => {
  const { label, Listofselectedvehicle } = useContext(ThemeContext);
  const StyledDiv = styled.button`
    
  .active{
    background-color: #673ab7;
  }
  box-shadow:0 10px 10px rgba(0,0,0,0.2);
  position:relative;
  cursor: pointer;
  max-height: 100%; 
  text-align:center;
  align-content:center;
  align-items:center;
  width: 100%; 
  margin:1rem;
  fill: white;
  background-image: url('/${props.content.name}.svg'); 
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #24264f63;
  &:hover:enabled{  background-color: #3e8e41;}
  &:disabled{opacity:0.3}
 &:active:enabled {
background-color: #3e8e41;
box-shadow: 0 5px #666;
transform: translateY(4px);
}

  &:hover{
    scale:scaleY(1.5);
  }

  
`;

  const Styledh1 = styled.h1`
    text-shadow: 1px 1px #a59696;
  `;

  const StyedInput = styled.input`
    width: 4rem;
    height: 4rem;
    position: relative;
    margin: 20px auto;
    background: #fcfff4;
    background: linear-gradient(top, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);
    border-radius: 50px;
    box-shadow: inset 0px 1px 1px white, 0px 1px 3px rgba(0, 0, 0, 0.5);
  `;

  const handleclick = () => {
    props.selectedSlide[1](props.content);
    Listofselectedvehicle.push(props.content);
  };
  return (
    <StyledDiv
      onClick={(e) => handleclick(e)}
      disabled={!(+props.content.max_distance >= +label[1])}
    >
      <StyedInput
        type="checkbox"
        checked={true}
        checked={
          props.selectedSlide[0].name == props.content.name ? "checked" : ""
        }
      ></StyedInput>
      <Styledh1>{props.content.name}</Styledh1>
      <Styledh1>{"Max-Ditance:" + props.content.max_distance}</Styledh1>
      <Styledh1>{"Speed:" + props.content.speed}</Styledh1>
    </StyledDiv>
  );
};

export default Slide;
