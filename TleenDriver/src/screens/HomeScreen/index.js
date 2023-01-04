import {View, Text, Dimensions, Pressable} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NewOrderPopup from '../../components/NewOrderPopup';

const origin = {latitude: -26.107567, longitude: 28.056702};
const destination = {latitude: -26.06844, longitude: 28.06376};
const GOOGLE_MAPS_APIKEY = 'AIzaSyAz48wFGKcLYPQIhaLTX_Vh8FVSzUUBYHE';

const HomeScreen = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [myPosition, setMyPosition] = useState(null);
  const [order, setOrder] = useState(null);
  const [newOrder, setNewOrder] = useState({
    id: '1',
    type: 'TLEEN',

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
    setNewOrder(null);
  };

  const onAccept = newOrder => {
    setOrder(newOrder);
    setNewOrder(null);
  };

  const onUserLocationChange = event => {
    setMyPosition(event.nativeEvent.coordinate);
  };

  const OnDirectionFound = event => {
    // console.log('Direction found: ', event);
    if (order) {
      setOrder({
        ...order,
        distance: event.distance,
        duration: event.duration,
        pickedUp: order.pickedUp || event.distance < 0.2,
        isFinished: order.pickedUp && event.distance < 0.2,
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

  // const mapRef = useRef(null);

  // useEffect(() => {
  //   if (!myPosition || !dVal) return;

  //   // Zooming and fitting to the markers on both sides
  //   mapRef.current.fitToSuppliedMarkers(['myPosition', 'dVal'], {
  //     edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
  //   });
  // }, [myPosition, dVal]);

  // Multiply with 1.60934 to convert miles to km

  // const milesToKm = order.distance.toFixed(2) * 1.60934;

  const renderBottomTitle = () => {
    if (order && order.isFinished) {
      return (
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FF6600',
              width: 200,
              padding: 10,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              COMPLETE {order.type}
            </Text>
          </View>
          <Text style={styles.bottomText}>{order.user.name}</Text>
        </View>
      );
    }

    if (order && order.pickedUp) {
      return (
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text>{order.duration ? order.duration.toFixed(1) : '?'} min</Text>

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
            <Text>{order.distance ? order.distance.toFixed(2) : '?'} km</Text>
          </View>
          <Text style={[styles.bottomText, {color: 'green'}]}>
            Drop off for {order.user.name}
          </Text>
        </View>
      );
    }

    if (order) {
      return (
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text>{order.duration ? order.duration.toFixed(1) : '?'} min</Text>

            <View
              style={{
                backgroundColor: '#1e9203',
                marginHorizontal: 10,
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <FontAwesome name="user" color="#fff" size={20} />
            </View>
            <Text>{order.distance ? order.distance.toFixed(2) : '?'} km</Text>
          </View>
          <Text style={[styles.bottomText, {color: 'green'}]}>
            Picking up for {order.user.name}
          </Text>
        </View>
      );
    }
    if (isOnline) {
      return (
        <Text style={[styles.bottomText, {color: 'green'}]}>You're online</Text>
      );
    }
    return <Text style={styles.bottomText}>You're offline</Text>;
  };

  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        style={{width: '100%', height: Dimensions.get('window').height - 150}}
        onUserLocationChange={onUserLocationChange}
        // initialRegion={{
        //   latitude: -26.107567, // change it to origin.location.lat
        //   longitude: 28.056702, // change it to origin.location.lng
        //   latitudeDelta: 0.005,
        //   longitudeDelta: 0.005,
        // }}
        initialRegion={{
          latitude: 37.78586,
          longitude: -122.40626,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}>
        {order && (
          <MapViewDirections
            // origin={origin}
            origin={myPosition}
            onReady={OnDirectionFound}
            // destination={getDestination()} // use this on real device
            destination={{
              latitude: 37,
              longitude: -120,
            }}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={4}
            strokeColor="green"
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
