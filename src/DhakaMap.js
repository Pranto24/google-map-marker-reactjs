// src/DhakaMap.js
import React from 'react';
import { GoogleMap, LoadScript, Marker, Polyline } from '@react-google-maps/api';

const DhakaMap = () => {
    const mapContainerStyle = {
        width: '100%',
        height: '500px',
    };

    const center = {
        lat: 23.797518,
        lng: 90.420028,
    };

    const markers = [
        { lat: 23.81426279756788, lng: 90.40413862620731 },
        { lat: 23.808106397946844, lng: 90.40328323667977 },
        { lat: 23.798141522836097, lng: 90.40168671183021 },
        { lat: 23.78979393341548, lng: 90.40020439868736 },
        { lat: 23.77941034563629, lng: 90.39837976942222 },
    ];

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyDvzDVCb8LpUTNAoOiZKoPgep5E34UP6-4" // Replace with your Google Maps API key
        >
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={14}
                center={center}
            >
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        position={marker}
                        label={`${index + 1}`}
                    />
                ))}

                <Polyline
                    path={markers}
                    options={{
                        strokeColor: 'blue',
                        strokeOpacity: 0.75,
                        strokeWeight: 2,
                    }}
                />
            </GoogleMap>
        </LoadScript>
    );
};

export default DhakaMap;
