import React, { useState, useContext, useEffect } from "react";
import ThemeContext from "../Context/Context";
// import UseDropdown from "../CustomHooks/UseDropdown";

//!`--------------------------------------------------------
//**And I need to map the all the options alse */
// ?Here I have to call the api call for destination 1 based on the option
//!`--------------------------------------------------------
//!`--------------------------------------------------------
//*(We need a way to call the places api and return a list of DEstination)
//**will craete the useeffct in index.js for place, pass down the states via context */

const FirstDestination = () => {
  const { DestinationList, VehicleList, Maps } = useContext(ThemeContext);

  const [Destination, updateDestination] = useState(DestinationList[0]);
  const [Vehicle, updateVehicle] = useState(VehicleList[0]);
  const [selectedoption, setselectedoption] = useState([]);
  const [FirstDestionationVehicle, SetFirstDestionationVehicle] = useState([]);
  // const [Vehicle, VehicaleDropdown, updateVehicle] = UseDropdown(
  //   "Vehicle",

  //   "DestinationList"
  // );
  // const [Destination, DestinationDropdown, updateDestination] = UseDropdown(
  //   "Destination",
  //   "VehicleList"
  // );

  return (
    <div style={{ color: "black" }} className="FirstDestination">
      <label htmlFor={"Location"}>
        Desctination1
        <select
          style={{ width: "66%" }}
          id={"Location"}
          value={Destination}
          onChange={(event) => updateDestination(event.target.value)}
          onBlur={(event) => updateDestination(event.target.value)}
        >
          <option />
          {DestinationList[0].map((item) => (
            <option key={item[0]} value={item[0]}>
              {item[0]}
            </option>
          ))}
        </select>
      </label>
      {/* <DestinationDropdown /> */}
      {/* <label htmlFor={"Vehicle"}>
        VehicleList
        <input
          type="radio"
          style={{ width: "66%" }}
          id={"Vehicle"}
          value={Vehicle}
          onChange={(event) => updateVehicle(event.target.value)}
          onBlur={(event) => updateVehicle(event.target.value)}
        >
          <option />
          {VehicleList[0].map((item) => (
            <option key={item[0]} value={item}>
              {item[0]}
            </option>
          ))}
        </input>
      </label> */}
      {/* <VehicaleDropdown /> */}
      {VehicleList[0].map((item) => (
        <React.Fragment>
          <br />
          <input
            key={`Fou${item}`}
            type={"radio"}
            id={item[0]}
            value={item[0]}
            checked={selectedoption === item[0]}
            onChange={(event) => {
              setselectedoption(event.target.value);
              SetFirstDestionationVehicle(item);
            }}
          ></input>
          <label htmlFor={item[0]}> {item[0]} </label>
        </React.Fragment>
      ))}
    </div>
  );
};
// ajxajbxajbabx

export default FirstDestination;
