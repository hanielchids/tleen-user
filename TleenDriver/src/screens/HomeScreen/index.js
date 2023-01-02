import {View, Text, Dimensions, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NewOrderPopup from '../../components/NewOrderPopup';

const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
const GOOGLE_MAPS_APIKEY = 'AIzaSyAz48wFGKcLYPQIhaLTX_Vh8FVSzUUBYHE';

const HomeScreen = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [myPosition, setMyPosition] = useState(null);
  const [order, setOrder] = useState(null);
  const [newOrder, setNewOrder] = useState({
    id: '1',
    type: 'Tleen',

    originLatitude: -26.107567,
    originLongitude: 28.056702,

    destLatitude: -26.06844,
    destLongitude: 28.06376,

    user: {
      rating: 4.8,
      name: 'Tebogo',
    },
  });

  const onGoPress = () => {
    setIsOnline(!isOnline);
  };

  const onDecline = () => {
    setNewOrder();
  };

  const onAccept = newOrder => {
    setOrder(newOrder);
    setNewOrder(null);
  };

  const onUserLocationChange = event => {
    setMyPosition(event.nativeEvent.coordinate);
  };

  const OnDirectionFound = event => {
    console.log('Direction found: ', event);
    if (order) {
      setOrder({
        ...order,
        distance: event.distance,
        duration: event.duration,
      });
    }
  };

  const getDestination = () => {
    if (order && order.pickedUp) {
      return {
        latitude: order.destLatitude,
        longitude: order.destLongitude,
      };
    }
    return {
      latitude: order.originLatitude,
      longitude: order.originLongitude,
    };
  };

  useEffect(() => {
    if (order && order.distance && order.distance < 0.2) {
      setOrder({
        ...order,
        pickedUp: true,
      });
    }
  }, [order]);

  const renderBottomTitle = () => {
    if (order && order.pickedUp) {
      return (
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text>
              {order.duration ? order.duration.toFixed(1) : '?'} min hehe
            </Text>

            <View
              style={{
                backgroundColor: '#d41212', //#1e9203
                marginHorizontal: 10,
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <FontAwesome name="user" color="#fff" size={20} />
            </View>
            <Text>2 km</Text>
          </View>
          <Text style={[styles.bottomText, {color: 'green'}]}>
            Dropping off for {order.user.name}
          </Text>
        </View>
      );
    }
    if (isOnline) {
      return (
        <Text style={[styles.bottomText, {color: 'green'}]}>You're online</Text>
      );
    } else {
      <Text style={styles.bottomText}>You're offline</Text>;
    }
  };

  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        style={{width: '100%', height: Dimensions.get('window').height - 150}}
        onUserLocationChange={onUserLocationChange}
        initialRegion={{
          latitude: -26.107567, // change it to origin.location.lat
          longitude: 28.056702, // change it to origin.location.lng
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}>
        {order && (
          <MapViewDirections
            origin={{
              latitude: -26.107567, // change it to origin.location.lat
              longitude: 28.056702, // change it to origin.location.lng
            }}
            // origin={myPosition}
            onReady={OnDirectionFound}
            destination={getDestination()}
            apikey={GOOGLE_MAPS_APIKEY}
          />
        )}
      </MapView>

      <Pressable
        onPress={() => console.warn('Money made')}
        style={styles.balanceButton}>
        <Text style={styles.balanceText}>
          <Text style={{color: 'green'}}>R</Text>
          0.00
        </Text>
      </Pressable>

      <Pressable
        onPress={() => console.warn('Pressed')}
        style={[styles.roundButton, {top: 10, left: 10}]}>
        <Entypo name="menu" size={24} color="#4a4a4a" />
      </Pressable>

      {/* <Pressable
        onPress={() => console.warn('Pressed left')}
        style={[styles.roundButton, {top: 10, right: 10}]}>
        <Entypo name="menu" size={24} color="#4a4a4a" />
      </Pressable> */}

      <Pressable
        onPress={() => console.warn('Pressed Go')}
        style={[styles.roundButton, {bottom: 110, left: 10}]}>
        <Entypo name="menu" size={24} color="#4a4a4a" />
      </Pressable>

      {isOnline ? (
        <Pressable
          onPress={() => onGoPress()}
          style={[styles.goButton, {backgroundColor: 'gray', fontSize: 24}]}>
          <Text style={styles.goText}>END</Text>
        </Pressable>
      ) : (
        <Pressable onPress={() => onGoPress()} style={styles.goButton}>
          <Text style={styles.goText}>GO</Text>
        </Pressable>
      )}

      <Pressable
        onPress={() => console.warn('Pressed Right')}
        style={[styles.roundButton, {bottom: 110, right: 10}]}>
        <Entypo name="menu" size={24} color="#4a4a4a" />
      </Pressable>

      <View style={styles.bottomContainer}>
        {/* Settings button */}
        <Ionicons name="options" color="#4a4a4a" size={24} />

        {/* {isOnline ? (
          <Text style={[styles.bottomText, {color: 'green'}]}>
            You're online
          </Text>
        ) : (
          <Text style={styles.bottomText}>You're offline</Text>
        )} */}

        {renderBottomTitle()}

        {/* Hamburger button */}
        <Entypo name="menu" color="#4a4a4a" size={24} />
      </View>

      {newOrder && (
        <NewOrderPopup
          newOrder={newOrder}
          onDecline={onDecline}
          onAccept={() => onAccept(newOrder)}
          duration={3}
          distance={2}
        />
      )}
    </View>
  );
};

export default HomeScreen;
