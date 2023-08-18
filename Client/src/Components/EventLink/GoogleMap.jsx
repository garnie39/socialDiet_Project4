import React from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import dotenv from "dotenv";
import { Grid } from "@mui/material";

//     center: { lat: -37.80958828739083, lng: 144.9651789676742 },

function Maps(props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_YOUR_API_KEY,
  });

  console.log(props);
  return isLoaded && props.location ? (
    <iframe
      width="600px"
      height="600px"
      style={{ display: "grid", flex: "coloum", padding: "10px" }}
      // loading="lazy"
      src={`https://www.google.com/maps/embed/v1/place?key=${
        import.meta.env.VITE_YOUR_API_KEY
      }&q=${props.location}`}
    ></iframe>
  ) : (
    <></>
  );
}

export default Maps;
