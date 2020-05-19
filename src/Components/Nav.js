import useDocumentScrollThrottled from "../Utility/useDocumentScrollThrottled";
import React, { useState, useContext } from "react";
import ThemeContext from "../Context/Context";

const Nav = () => {
  const Context = useContext(ThemeContext);
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;

    setShouldShowShadow(currentScrollTop > 210);

    setShouldHideHeader(isScrolledDown);
  });

  const shadowStyle = shouldShowShadow ? "shadow" : "";
  const hiddenStyle = shouldHideHeader ? "issticky" : "";
  return (
    <nav
      className={`main-nav ${hiddenStyle} ${shadowStyle}`}
      style={{ alignItems: "centre" }}
    >
      Nav
    </nav>
  );
};

export default Nav;
