/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

// import Geolocation from '@react-native-community/geolocation';
import {enableLatestRenderer} from 'react-native-maps';

import {Amplify, Auth, API, graphqlOperation} from 'aws-amplify';
import awsExports from './src/aws-exports';
import {withAuthenticator} from '@aws-amplify/ui-react-native';
import {getCarId} from './src/graphql/queries';
import {createCar} from './src/graphql/mutations';

Amplify.configure(awsExports);

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

  useEffect(() => {
    const updateUserCar = async () => {
      // Get authenticated user

      const authenticatedUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      if (!authenticatedUser) {
        return;
      }

      // check if the user already has a car
      const carData = await API.graphql(
        graphqlOperation(getCarId, {id: authenticatedUser.attributes.sub}),
      );

      if (!!carData.data.getCar) {
        console.log('user already has a car assigned');
        return;
      }

      // If they don't create a new car for the user
      const newCar = {
        id: authenticatedUser.attributes.sub,
        type: 'TLEEN',
        userId: authenticatedUser.attributes.sub,
      };
      await API.graphql(graphqlOperation(createCar, {input: newCar}));
    };

    updateUserCar();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
    </SafeAreaView>
  );
};

export default withAuthenticator(App);
