import {View, Text} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const HomeMap = () => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{height: '100%', width: '100%'}}
      region={{
        latitude: -26.107567, // change it to origin.location.lat
        longitude: 28.056702, // change it to origin.location.lng
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}></MapView>
  );
};

export default HomeMap;
