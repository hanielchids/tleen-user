import {View, Text, Dimensions, Pressable} from 'react-native';
import React, {useState} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NewOrderPopup from '../../components/NewOrderPopup';

const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
const GOOGLE_MAPS_APIKEY = 'AIzaSyAz48wFGKcLYPQIhaLTX_Vh8FVSzUUBYHE';

const HomeScreen = () => {
  const [isOnline, setIsOnline] = useState(false);

  const onGoPress = () => {
    setIsOnline(!isOnline);
  };

  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        style={{width: '100%', height: Dimensions.get('window').height - 150}}
        initialRegion={{
          latitude: -26.107567, // change it to origin.location.lat
          longitude: 28.056702, // change it to origin.location.lng
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}>
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
        />
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

        {isOnline ? (
          <Text style={[styles.bottomText, {color: 'green'}]}>
            You're online
          </Text>
        ) : (
          <Text style={styles.bottomText}>You're offline</Text>
        )}

        {/* Hamburger button */}
        <Entypo name="menu" color="#4a4a4a" size={24} />
      </View>

      <NewOrderPopup />
    </View>
  );
};

export default HomeScreen;
