import React, { Component } from "react";
import styled from "@emotion/styled";

const SliderContent = styled.div`
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out ${(props) => props.transition}s;
  height: 38rem;

  width: ${(props) => (props.width < 700 ? 1620 : props.width)}px;
  display: flex;
`;
export default React.memo(SliderContent);

// import React, { Component } from "react";

// class SliderContent extends Component {
//   render() {
//     const props = this.props;
//     const SliderContent = styled.div`
//       transform: translateX(-${(props) => props.translate}px);
//       transition: transform ease-out ${(props) => props.transition}s;
//       height: 38rem;

//       width: ${(props) => (props.width < 700 ? 1620 : props.width)}px;
//       display: flex;
//     `;
//     return SliderContent;
//   }
// }

// export default SliderContent;
