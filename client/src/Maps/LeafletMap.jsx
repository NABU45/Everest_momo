import React, { useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import osm from '../Maps/osm-Provider';
import L from 'leaflet';
import locationIcon from '../images/ContactusIcon/location-pin.png';

// Define the marker icon using L.Icon
const markerIcon = new L.Icon({
    iconUrl: locationIcon,
    iconSize: [35, 45],
    iconAnchor: [17, 45], // Anchor the icon correctly
    popupAnchor: [0, -45]  // Position the popup correctly
});

function LeafletMap() {
    const [center, setCenter] = useState({ lat:  27.4252, lng: 85.1912 });
    const ZOOM_LEVEL = 9;
    const mapRef = useRef();

    return (
        <>
            <div>
                <div className='flex flex-col'>
                    <MapContainer
                        center={center}
                        zoom={ZOOM_LEVEL}
                        ref={mapRef}
                        style={{ height: '500px', width: '100%' }} // Set the height and width of the map
                    >
                        <TileLayer
                            url={osm.maptiler.url}
                            attribution={osm.maptiler.attribution}
                        />
                        <Marker position={[27.7172, 85.3240]} icon={markerIcon}>
                            <Popup>
                                <b className='text-lg'>New Baneshwor, Kathmandu,  Bagmati, Nepal</b>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </>
    );
}

export default LeafletMap;
