import {View, Text, Image, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

// import cars from '../../assets/data/cars';

import {API, graphqlOperation} from 'aws-amplify';
import {listCars} from '../../graphql/queries';

const HomeMap = () => {
  const [cars, setCars] = useState([]);

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
    <MapView
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
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
  );
};

export default HomeMap;
