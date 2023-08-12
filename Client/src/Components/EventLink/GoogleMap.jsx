import React, { useCallback, useState, forwardRef, memo } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import dotenv from "dotenv";

//     center: { lat: -37.80958828739083, lng: 144.9651789676742 },

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -37.80958828739083,
  lng: 144.9651789676742,
};

function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyC7yZTZaXUuy3ZB7R-9Id6oChdsy0tn0CI",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
    ></GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Maps);
