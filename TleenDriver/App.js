/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

// import Geolocation from '@react-native-community/geolocation';
import {enableLatestRenderer} from 'react-native-maps';

// Geolocation require statement for backwards compatibility
// navigator.geolocation = require('@react-native-community/geolocation');

enableLatestRenderer();

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App: () => Node = () => {
  // const androidPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       {
  //         title: 'Tleen Permission',
  //         message:
  //           'Tleen needs access to your location ' +
  //           'so you can send awesome stuff.',
  //         buttonNeutral: 'Ask Me Later',
  //         buttonNegative: 'Cancel',
  //         buttonPositive: 'OK',
  //       },
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log('You can use the location');
  //     } else {
  //       console.log('location permission denied');
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  // useEffect(() => {
  //   if (Platform.OS === 'android') {
  //     androidPermission();
  //   } else {
  //     // for iOS
  //     Geolocation.requestAuthorization();
  //   }
  // }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
