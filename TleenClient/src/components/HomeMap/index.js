import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import cars from '../../assets/data/cars';

const HomeMap = () => {
  const getImageName = type => {
    if (type === 'TLEEN') {
      return require('../../assets/top-UberX.png');
    }
    if (type === 'TLEEN XTRA') {
      return require('../../assets/top-Comfort.png');
    }
    if (type === 'TLEEN GOLD') {
      return require('../../assets/top-UberXL.png');
    }
  };

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
      {cars.map(car => (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}>
          <Image
            source={getImageName(car.type)}
            style={{width: 50, height: 50, resizeMode: 'contain'}}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;
