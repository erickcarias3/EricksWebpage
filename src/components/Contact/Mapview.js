import React from "react";
import Map, {Marker} from "react-map-gl";
import { Box } from '@mui/system';

import 'mapbox-gl/dist/mapbox-gl.css';
const Mapview = () => {

  const MAPBOX_TOKEN = "pk.eyJ1IjoiYmF5YXppZGgiLCJhIjoiY2tvemdwc3ByMDg1YzJubzQxcDR0cDR3dyJ9.s1zXEb5OPqgBDcmupj3GBA"

  return (
    <Box
    sx={{
            display:"flex",
            justifyContent: 'space-around',
            flexWrap: "wrap",
            
        }}
    >
      <Map
        initialViewState={{
          latitude: 38.5578678,
          longitude: -121.5103247,
          zoom: 7,
        }}
        style={{width: 850, height: 400}}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker longitude={-121.426914} latitude={38.608628}  color = "white"/>
        
      </Map>
    </Box>
  );
};

export default Mapview;