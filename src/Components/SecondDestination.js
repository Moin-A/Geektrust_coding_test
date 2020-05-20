import React, { useState, useContext, useEffect } from "react";
import ThemeContext from "../Context/Context";

const SecondDestination = () => {
  let onn = {};
  const { DestinationList, VehicleList, Mymap } = useContext(ThemeContext);
  const [Destination, updateDestination] = useState(DestinationList[0]);
  const [Vehicle, updateVehicle] = useState(VehicleList[0]);
  const [selectedoption, setselectedoption] = useState("");
  const [FirstDestionationVehicle, SetFirstDestionationVehicle] = useState([]);
  const [count, setcount] = useState([3]);
  const [maps, setmaps] = useState("");
  // const [Vehicle, VehicaleDropdown, updateVehicle] = UseDropdown(
  //   "Vehicle",

  //   "DestinationList"
  // );
  // const [Destination, DestinationDropdown, updateDestination] = UseDropdown(
  //   "Destination",
  //   "VehicleList"
  // );

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
            id={`Sec${item}`}
            value={item[0]}
            checked={selectedoption === item[0]}
            onChange={(event) => {
              setselectedoption(event.target.value);
              SetFirstDestionationVehicle(item);
              setcount([...item].splice(0, 2));

              let newmap = maps.set(
                selectedoption,
                maps.get(selectedoption) + 4
              );
              setmaps(newmap);
              debugger;
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
