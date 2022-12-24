import {View, Text, Image} from 'react-native';
import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import cars from '../../assets/data/cars';
import MapViewDirections from 'react-native-maps-directions';

const RouteMap = ({origin, destination}) => {
  const originLoc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };

  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{height: '100%', width: '100%'}}
      region={{
        latitude: -26.107567, // change it to origin.location.lat
        longitude: 28.056702, // change it to origin.location.lng
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        strokeWidth={4}
        strokeColor="green"
        apikey="AIzaSyAz48wFGKcLYPQIhaLTX_Vh8FVSzUUBYHE"
      />
      {/* Markers */}
      <Marker coordinate={origin} title={'Origin'} />
      <Marker coordinate={destination} title={'Destination'} />
    </MapView>
  );
};

export default RouteMap;
