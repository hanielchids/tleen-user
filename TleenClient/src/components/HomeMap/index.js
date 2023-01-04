import {View, Text, Image, FlatList, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

// import cars from '../../assets/data/cars';

import {API, graphqlOperation} from 'aws-amplify';
import {listCars} from '../../graphql/queries';

import Geolocation from '@react-native-community/geolocation';

const HomeMap = props => {
  const [cars, setCars] = useState([]);

  // Setting up to geolocate
  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(() => {
    const geoLocate = async () => {
      try {
        Geolocation.getCurrentPosition(pos => {
          const crd = pos.coords;
          setPosition({
            latitude: crd.latitude,
            longitude: crd.longitude,
            latitudeDelta: 0.0421,
            longitudeDelta: 0.0421,
          });
        });

        console.log('Location is: ', position);
      } catch (err) {
        console.log(err);
      }
    };

    geoLocate();
  }, []);

  // EOF Geolocation code

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await API.graphql(graphqlOperation(listCars));

        setCars(response.data.listCars.items);
      } catch (e) {
        console.error(e);
      }
    };

    fetchCars();
  }, []);

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
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        style={{height: '100%', width: '100%'}}
        region={{
          latitude: -26.107567, // change it to origin.location.lat
          longitude: 28.056702, // change it to origin.location.lng
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        // initialRegion={position}
        followsUserLocation={true}>
        {cars.map(car => (
          <Marker
            key={car.id}
            coordinate={{latitude: car.latitude, longitude: car.longitude}}>
            <Image
              source={getImageName(car.type)}
              style={{
                width: 50,
                height: 50,
                resizeMode: 'contain',
                transform: [
                  {
                    rotate: `${car.heading}deg`,
                  },
                ],
              }}
            />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default HomeMap;
