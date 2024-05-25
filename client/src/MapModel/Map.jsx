import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';
import { IoLocationSharp } from "react-icons/io5";

// Custom marker icon using IoLocationSharp
const markerHtmlStyles = `
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
`;

const iconMarkup = ReactDOMServer.renderToStaticMarkup(<IoLocationSharp  color="#D95103" size="3rem" />);
const customMarkerIcon = new L.DivIcon({
  html: `<span style="${markerHtmlStyles}">${iconMarkup}</span>`,
  className: 'custom-div-icon',
  iconSize: [30, 42],
  iconAnchor: [15, 42],
});

const LocationMarker = ({ setSelectedLocation, selectedLocation }) => {
  useMapEvents({
    click(e) {
      setSelectedLocation(e.latlng);
    }
  });

  return selectedLocation ? (
    <Marker position={selectedLocation} icon={customMarkerIcon} />
  ) : null;
};

const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const mapRef = useRef();

  return (
    <div className="map-container" style={{ position: 'relative' }}>
      <MapContainer
        center={[27.7172, 85.3240]} // Adjust the center to change the default marker position
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "800px", width: "100%" }} // Increase height to 800px
        whenCreated={mapInstance => { mapRef.current = mapInstance }}
      >
        <TileLayer
          attribution={null} // Remove default attribution
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker setSelectedLocation={setSelectedLocation} selectedLocation={selectedLocation} />
      </MapContainer>
    </div>
  );
};

export default Map;
