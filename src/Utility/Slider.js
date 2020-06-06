import React, { useState } from "react";
import styled from "styled-components";
import SliderContent from "./SliderContent";
import Slide from "./Slide";
import Arrow from "./Arrow";

const SliderDiv = styled.div`
  max-height: auto;
  color: green;
  position: relative;
  overflow: hidden;
`;

const Slider = ({ slides }) => {
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    tranlate: 0,
    transition: 0.45,
    activeIndex: 0,
  });

  const { transition, translate, activeIndex } = state;
  const nextSlide = () => {
    if (activeIndex === slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: ((activeIndex + 1) * getWidth()) / slides.length,
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (slides.length - 1) * getWidth(),
        activeIndex: slides.length - 1,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: ((activeIndex - 1) * getWidth()) / slides.length,
    });
  };
  console.log(getWidth);
  return (
    <SliderDiv>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth}
      >
        {slides.map((slide, i) => (
          <Slide key={slide + i} content={slide}></Slide>
        ))}
      </SliderContent>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </SliderDiv>
  );
};

export default Slider;
