import React, { useState, useContext } from "react";
import styled from "styled-components";
import SliderContent from "./SliderContent";
import Slide from "./Slide";
import Arrow from "./Arrow";
import ThemeContext from "../Context/ThemeContext";

const SliderDiv = styled.div`
  max-height: auto;
  color: green;
  position: relative;
  overflow: hidden;
`;

const Slider = ({ slides }) => {
  const context = useContext(ThemeContext);
  const getWidth = () => window.innerWidth;
  const selectedSlide = useState(0);

  const [state, setState] = useState({
    tranlate: 89,
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
        translate: ((slides.length - 1) * getWidth()) / slides.length,
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
          <Slide
            key={slide + i}
            content={slide}
            selectedSlide={selectedSlide}
          ></Slide>
        ))}
      </SliderContent>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </SliderDiv>
  );
};

export default Slider;

// import React, { Component, useState } from "react";
// import styled from "styled-components";
// import SliderContent from "./SliderContent";
// import Slide from "./Slide";
// import Arrow from "./Arrow";

// class Slider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { tranlate: 89, transition: 0.95, activeIndex: 0 };
//   }
//   componentWillUpdate(props, state) {
//     debugger;
//   }

//   render() {
//     const getWidth = () => window.innerWidth;
//     const nextSlide = () => {
//       if (activeIndex === slides.length - 1) {
//         return this.setState({
//           ...this.state,
//           translate: 0,
//           activeIndex: 0,
//         });
//       }

//       this.setState({
//         ...this.state,
//         activeIndex: activeIndex + 1,
//         translate: ((activeIndex + 1) * getWidth()) / slides.length,
//       });
//     };

//     const prevSlide = () => {
//       if (activeIndex === 0) {
//         return this.setState({
//           ...this.state,
//           translate: ((slides.length - 1) * getWidth()) / slides.length,
//           activeIndex: slides.length - 1,
//         });
//       }

//       this.setState({
//         ...this.state,
//         activeIndex: activeIndex - 1,
//         translate: ((activeIndex - 1) * getWidth()) / slides.length,
//       });
//     };
//     const { transition, translate, activeIndex } = this.state;
//     const { selectedslide, slides } = this.props;

//     const SliderDiv = styled.div`
//       max-height: auto;
//       color: green;
//       position: relative;
//       overflow: hidden;
//     `;
//     return (
//       <SliderDiv>
//         <SliderContent
//           translate={translate}
//           transition={transition}
//           width={getWidth}
//         >
//           {slides.map((slide, i) => (
//             <Slide
//               key={slide + i}
//               content={slide}
//               selectedslide={selectedslide}
//             ></Slide>
//           ))}
//         </SliderContent>
//         <Arrow direction="left" handleClick={prevSlide} />
//         <Arrow direction="right" handleClick={nextSlide} />
//       </SliderDiv>
//     );
//   }
// // }

// export default Slider;
