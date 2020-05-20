import React, { useState, useEffect } from "react";

const SecondDestination = ({ DestinationList, VehicleList }) => {
  // const { DestinationList, VehicleList } = useContext(ThemeContext);
  const [Destination, updateDestination] = useState(DestinationList);
  const [Vehicle, updateVehicle] = useState(VehicleList);
  const [selectedoption, setselectedoption] = useState("");

  useEffect(() => {
    updateDestination("");
  }, []);

  return (
    <div style={{ color: "black" }} className="SecondDestination">
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
            key={`Sec${item}`}
            type={"radio"}
            id={`Sec${item}`}
            checked={selectedoption === item[0]}
            value={item[0]}
            onChange={(event) => {
              setselectedoption(event.target.value);
            }}
          ></input>
          <label htmlFor={`Sec${item}`}> {item[0]} </label>
        </React.Fragment>
      ))}
    </div>
  );
};
// ajxajbxajbabx

export default SecondDestination;
