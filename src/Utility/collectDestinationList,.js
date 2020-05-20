import { useEffect, useState } from "react";

async function fetchDestinations(DestinationList, API) {
  const Res = await fetch(API);
  const data = await Res.json();

  DestinationList(
    data.map((x) => [x.name, x.distance || x.total_no, x.max_distance, x.speed])
  );

  // .then((res) => res.json())
  // .then((res) => {
  //   DestinationList(
  //     res.map((x) => [
  //       x.name,
  //       x.distance || x.total_no,
  //       x.max_distance,
  //       x.speed,
  //     ])
  //   );
  // })
  // .catch((x) => console.log(x));
}

export default fetchDestinations;
