import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Themecontext from "./Context/Context";
import fetchDestinations from "./Utility/collectDestinationList,";

const Index = () => {
  const DestinationList = useState(["Moin"]);
  const VehicleList = useState(["car"]);
  var globalText = "";

  // async function fetchData() {
  //   fetch("https://findfalcone.herokuapp.com/planets  ")
  //     .then((res) => res.json())
  //     .then((res) => DestinationList[1](res.map((x) => [x.name, x.distance])))
  //     .catch((x) => console.log(x));
  // }

  useEffect(() => {
    fetchDestinations(
      DestinationList[1],
      "https://findfalcone.herokuapp.com/planets"
    );
    fetchDestinations(
      VehicleList[1],
      "https://ﬁndfalcone.herokuapp.com/vehicles"
    );
  });

  return (
    <React.StrictMode>
      <Themecontext.Provider value={{ DestinationList, VehicleList }}>
        <App />
      </Themecontext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

serviceWorker.unregister();
