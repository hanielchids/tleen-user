import {View, Text, Image} from 'react-native';
import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import cars from '../../assets/data/cars';
import MapViewDirections from 'react-native-maps-directions';

const RouteMap = () => {
  const origin = {
    latitude: -26.107567,
    longitude: 28.056702,
  };

  const destination = {
    latitude: -26.1018398,
    longitude: 28.0595678,
  };
  // Will replace with real data
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{height: '100%', width: '100%'}}
      region={{
        latitude: -26.107567, // change it to origin.location.lat
        longitude: 28.056702, // change it to origin.location.lng
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}>
      <MapViewDirections
        origin={origin}
        destination={destination}
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
