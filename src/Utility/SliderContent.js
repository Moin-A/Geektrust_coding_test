import React from "react";
import styled from "styled-components";

const SliderContent = styled.div`
  transform: translate(-${(props) => props.translate * 3}px);
  transition: transform ease-out ${(props) => props.transition}s;
  height: 35rem;
  width: 290rem;
  display: flex;
  flex-flow: 1;
`;
export default SliderContent;
