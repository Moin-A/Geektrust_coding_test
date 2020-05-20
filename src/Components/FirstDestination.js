import React, { useState, useContext, useEffect } from "react";
import ThemeContext from "../Context/Context";

//!`--------------------------------------------------------
//**And I need to map the all the options alse */
// ?Here I have to call the api call for destination 1 based on the option
//!`--------------------------------------------------------
//!`--------------------------------------------------------
//*(We need a way to call the places api and return a list of DEstination)
//**will craete the useeffct in index.js for place, pass down the states via context */

const FirstDestination = ({ DestinationList, VehicleList }) => {
  // const { DestinationList, VehicleList } = useContext(ThemeContext);
  const [Destination, updateDestination] = useState(DestinationList[0]);
  const [Vehicle, updateVehicle] = useState(VehicleList[0]);
  const [selectedoption, setselectedoption] = useState("");

  useEffect(() => {
    updateDestination("");
  }, []);

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
          {DestinationList.map((item) => (
            <option key={item[0]} value={item[0]}>
              {item[0]}
            </option>
          ))}
        </select>
      </label>
      {/* <label htmlFor={"Vehicle"}>
        VehicleList
        <select
          style={{ width: "66%" }}
          id={"Vehicle"}
          value={Vehicle}
          onChange={(event) => updateVehicle(event.target.value)}
          onBlur={(event) => updateVehicle(event.target.value)}
        >
          <option />
          {VehicleList.map((item) => (
            <option key={item[0]} value={item}>
              {item[0]}
            </option>
          ))}
        </select> */}

      {/* </label> */}
      {VehicleList.map((item) => (
        <React.Fragment>
          <br />
          <input
            key={`Fir${item}`}
            type={"radio"}
            id={`Fir${item}`}
            checked={selectedoption === item[0]}
            value={item[0]}
            onChange={(event) => {
              setselectedoption(event.target.value);
            }}
          ></input>
          <label htmlFor={`Fir${item}`}> {item[0]} </label>
        </React.Fragment>
      ))}
    </div>
  );
};
// ajxajbxajbabx

export default FirstDestination;
