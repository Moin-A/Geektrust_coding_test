import useDocumentScrollThrottled from "../Utility/useDocumentScrollThrottled";
import React, { useState, useContext } from "react";
import ThemeContext from "../Context/Context";
import { Link, Router } from "@reach/router";
import AnimatedButton from "react-animated-buttons";

const Nav = () => {
  const Context = useContext(ThemeContext);
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;

    setShouldShowShadow(currentScrollTop > 100);

    setShouldHideHeader(isScrolledDown);
  });

  const shadowStyle = shouldShowShadow ? "shadow" : "";
  const hiddenStyle = shouldHideHeader ? "issticky" : "";
  return (
    <nav
      style={{ margin: "0", display: "flex" }}
      className={`main-nav ${hiddenStyle} ${shadowStyle}`}
    >
      <Link to="/">
        <AnimatedButton
          color="success"
          animationDuration={1.5}
          animationType="pulse"
        >
          COCKPIT
        </AnimatedButton>
      </Link>
      <Link to="/Home" style={{ justifySelf: "left" }}>
        <AnimatedButton
          color="success"
          animationDuration={1.5}
          animationType="pulse"
        >
          PROCEED TO LAUNCH
        </AnimatedButton>
      </Link>
    </nav>
  );
};

export default Nav;
