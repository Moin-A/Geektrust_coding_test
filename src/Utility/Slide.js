import { css, jsx } from "@emotion/core";
import styled from "styled-components";

// const Slide = ((props) => {
//   const StyledDiv = styled.button`
// box-shadow:0 10px 10px rgba(0,0,0,0.2);
//   /* Layered box-shadows
// gradually increasing offset/blur */
//     position:relative;
//     cursor: pointer;
//     max-height: 100%;
//     text-align:center;
//     align-content:center;
//     align-items:center;
//     width: 100%;
//     margin:1rem;
//     fill: white;
//     background-image: url('/${props.content.name}.svg');
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center;
//     background-color: #24264f63;
//     &:hover{  background-color: #3e8e41;}
//    &:active {
//   background-color: #3e8e41;
//   box-shadow: 0 5px #666;
//   transform: translateY(4px);
// }

//     &:hover{
//       scale:scaleY(1.5);
//     }

//   `;
//   const Styledh1 = styled.h1`
//     text-shadow: 1px 1px #a59696;
//   `;

//   return (
//     <React.Fragment>
//       <StyledDiv onClick={(e) => props.selectedslide[1](props.content)}>
//         <Styledh1>{props.content.name}</Styledh1>
//       </StyledDiv>
//     </React.Fragment>
//   );
// });

// export default Slide;

import React, { Component } from "react";
class Slide extends Component {
  render() {
    const props = this.props;
    const StyledDiv = styled.button`
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
    }s
    
  `;
    const Styledh1 = styled.h1`
      text-shadow: 1px 1px #a59696;
    `;
    debugger;
    return (
      <React.Fragment>
        <StyledDiv
          onClick={(e) => props.selectedSlide[1](props.content)}
          disabled={!(+props.content.max_distance >= +props.label[1])}
        >
          <Styledh1>{props.content.name}</Styledh1>
          <Styledh1>{"Max-Ditance:" + props.content.max_distance}</Styledh1>
          <Styledh1>{"Speed:" + props.content.speed}</Styledh1>
        </StyledDiv>
      </React.Fragment>
    );
  }
}

export default Slide;
