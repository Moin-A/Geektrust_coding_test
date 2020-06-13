import react, { useEffect, useState } from "react";
import axios from "axios";


const ResultApi ={
    
    
    
    
   useEffect(() => {
    axios({
        method: "post",
        url: "https://findfalcone.herokuapp.com/token",
        headers: { Accept: "application/json" },
      }).then((x) => {
        this.secondfetch(x, this.state.destination, this.state.vehicle);
      });
    };
    
    secondfetch = (x, y, z) => {
      axios({
        method: "post",
        url: "https://findfalcone.herokuapp.com/find",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: {
          // prettier-ignore
          "token": x.data.token,
          // prettier-ignore
          "vehicle_names": z,
          // prettier-ignore
          "planet_names": y
        },
      }).then((x) => {
        this.setState({
          FinalResult: x.data.status,
          Capturedplanet: x.data.planet_name || null,
        });
      });
    };
    
    }
   
   }, [])
   
   
   
   
// const Api = () => {
//     const [data, setData] = useState([]);
//     useEffect(async () => {
//       const result = await axios(
//         "https://findfalcone.herokuapp.com/planets"
//       ).then((x) => setData(x.data));
//     }, []);
  
//     return [data, setData];
//   };
  
//   export default Api;