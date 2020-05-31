import react, { useEffect, useState } from "react";
import axios from "axios";

const VehicleApi = () => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const result = await axios(
      "https://ﬁndfalcone.herokuapp.com/vehicles"
    ).then((x) => setData(x.data));
  }, []);

  return [data];
};

export default VehicleApi;
