"use client"
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import locations from '@/locations.json';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: locations[0].lat,
  lng: locations[0].lng
};

function MyGoogleMap() {
   
  return (
    <LoadScript googleMapsApiKey="AIzaSyDEQKofubScbt-9dVPCKlRwAHw5WKFV7-w">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {locations.map(location => (
          <Marker
            key={location.id}
            position={{ lat: location.lat, lng: location.lng }}
            title={location.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyGoogleMap);
