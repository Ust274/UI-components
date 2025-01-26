import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const InteractiveMap = () => {
  const position = [22.572645, 88.363892]; // Default center coordinates

  // Configure map options to disable wrapping
  const mapOptions = {
    center: position,
    zoom: 13,
    maxBounds: [[-90, -180], [90, 180]], 
    maxBoundsViscosity: 1.0, // Prevent panning outside bounds
    minZoom: 3, // Prevent zooming out too far
    maxZoom: 25
  };

  return (
    <div className="h-screen flex flex-col">
      <MapContainer 
        {...mapOptions}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          noWrap={true} // Prevent tile wrapping
        />
        <Marker position={position}>
          <Popup>A default marker.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;