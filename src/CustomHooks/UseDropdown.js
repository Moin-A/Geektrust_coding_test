import React, { useState, useEffect, useContext } from "react";
import ThemeContext from "../Context/Context";

const UseDropdown = (label, defaultvalue, List) => {
  const { DestinationList, VehicleList } = useContext(ThemeContext);
  const [state, setstate] = useState("xjan");
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const DestinationDropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={DestinationList[0][0]}
        // onChange={(event) => setstate(event.target.value)}
        // onBlur={(event) => setstate(event.target.value)}
      >
        <option></option>
        {DestinationList[0].map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
  const VehicleDropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={DestinationList[0][0]}
        // onChange={(event) => setstate(event.target.value)}
        // onBlur={(event) => setstate(event.target.value)}
      >
        <option></option>
        {VehicleList[0].map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );

  if (List === "DestinationList") {
    return [state, DestinationDropdown, setstate];
  } else {
    return [state, VehicleDropdown, setstate];
  }
};

export default UseDropdown;
