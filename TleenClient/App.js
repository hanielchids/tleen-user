/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import {enableLatestRenderer} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import React, {useEffect} from 'react';
import type {Node} from 'react';
import {StatusBar, PermissionsAndroid, Platform} from 'react-native';

// import {withAuthenticator} from 'aws-amplify-react-native';

import {withAuthenticator} from '@aws-amplify/ui-react-native';

// Navigation
import Router from './src/navigation/Root';

// Geolocation require statement for backwards compatibility
navigator.geolocation = require('@react-native-community/geolocation');

import {Amplify} from 'aws-amplify';
import awsExports from './src/aws-exports';
Amplify.configure(awsExports);

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

// Google maps stuff
enableLatestRenderer();

const App: () => Node = () => {
  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Tleen Permission',
          message:
            'Tleen needs access to your location ' +
            'so you can send awesome stuff.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      // for iOS
      Geolocation.requestAuthorization();
    }
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default withAuthenticator(App);
