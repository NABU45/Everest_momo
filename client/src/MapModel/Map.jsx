import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom marker icon
const markerIcon = new L.Icon({
  iconUrl: 'marker-icon.png',
  iconRetinaUrl: 'marker-icon-2x.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

const LocationMarker = ({ setSelectedLocation, selectedLocation }) => {
  useMapEvents({
    click(e) {
      setSelectedLocation(e.latlng);
    }
  });

  return selectedLocation ? (
    <Marker position={selectedLocation} icon={markerIcon}>
      <Popup>
        <strong>Selected Location</strong><br />
        Latitude: {selectedLocation.lat.toFixed(6)}<br />
        Longitude: {selectedLocation.lng.toFixed(6)}<br />
        <img src={`https://via.placeholder.com/150?text=Location(${selectedLocation.lat.toFixed(6)},${selectedLocation.lng.toFixed(6)})`} alt="Selected Location" />
      </Popup>
    </Marker>
  ) : null;
};

const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const mapRef = useRef();

  return (
    <div className="map-container" style={{ position: 'relative' }}>
      <MapContainer
        center={[27.7172, 85.3240]}
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
