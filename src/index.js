import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Themecontext from "./Context/Context";
import fetchDestinations from "./Utility/collectDestinationList,";

const Index = () => {
  const DestinationList = useState(["Moin"]);
  const VehicleList = useState(["car"]);
  const [Maps1, setMaps1] = useState([]);
  const Maps = new Map();

  useEffect(() => {
    VehicleList[0].map((item) => Maps.set(item[0], item[1]));
    setMaps1(Maps);
  }, [Maps]);

  fetchDestinations(
    DestinationList[1],
    "https://findfalcone.herokuapp.com/planets"
  );
  fetchDestinations(
    VehicleList[1],
    "https://ﬁndfalcone.herokuapp.com/vehicles"
  );

  return (
    <React.StrictMode>
      <Themecontext.Provider value={{ DestinationList, VehicleList, Maps1 }}>
        <App />
      </Themecontext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

serviceWorker.unregister();
