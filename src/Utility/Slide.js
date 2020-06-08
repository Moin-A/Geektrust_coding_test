import React from "react";
import { css, jsx } from "@emotion/core";
import styled from "styled-components";

const Slide = (props) => {
  const StyledDiv = styled.div`
box-shadow:0 10px 10px rgba(0,0,0,0.2);
  /* Layered box-shadows
gradually increasing offset/blur */
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

    &:hover{
      scale:scaleY(1.5);
    }
    
  `;
  const Styledh1 = styled.h1`
    text-shadow: 1px 1px #a59696;
  `;

  return (
    <React.Fragment>
      <StyledDiv>
        <Styledh1>{props.content.name}</Styledh1>
      </StyledDiv>
    </React.Fragment>
  );
};

export default Slide;
