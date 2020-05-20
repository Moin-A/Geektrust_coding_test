import React, { useState, useEffect } from "react";

const FourthDestination = ({ DestinationList, VehicleList, Maps1 }) => {
  // const { DestinationList, VehicleList } = useContext(ThemeContext);
  const [Destination, updateDestination] = useState(DestinationList);
  const [Vehicle, updateVehicle] = useState(VehicleList);
  const [selectedoption, setselectedoption] = useState("");

  return (
    <div style={{ color: "black" }} className="FourthDestination">
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
            key={`Fou${item}`}
            type={"radio"}
            id={`Fou${item}`}
            checked={selectedoption === item[0]}
            value={item[0]}
            onChange={(event) => {
              setselectedoption(event.target.value);
            }}
          ></input>
          <label htmlFor={`Fou${item}`}> {item[0]} </label>
        </React.Fragment>
      ))}
    </div>
  );
};
// ajxajbxajbabx

export default FourthDestination;
