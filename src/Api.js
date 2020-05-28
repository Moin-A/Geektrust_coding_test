import react, { useEffect, useState } from "react";
import axios from "axios";

const Api = () => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const result = await axios(
      "https://findfalcone.herokuapp.com/planets"
    ).then((x) => setData(x.data));
  }, []);

  return [data, setData];
};

export default Api;
