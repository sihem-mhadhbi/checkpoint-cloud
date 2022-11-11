import React from "react";

import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import "./App.css";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCz8NPIe-jWLIvEEPkb75QL3_LGMrYw6rQ",
  });
  if (!isLoaded) return <div>loading...</div>;
  return (
    <div>
      <Map />
    </div>
  );
}
function Map() {
  return (
    <div>
      <GoogleMap
        zoom={10}
        center={{ Iat: 44, Ing: -80 }}
        mapContainerClassName="map-container"
      ></GoogleMap>
    </div>
  );
}
