import React from "react";
import { css, jsx } from "@emotion/core";
import styled from "styled-components";

const Slide = (props) => {
  const StyledDiv = styled.img`
    max-height: 100%;
    width: 100%;
    background-image: url('/${props.content.name}.svg'); 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  `;
  return <StyledDiv></StyledDiv>;
};

export default Slide;
