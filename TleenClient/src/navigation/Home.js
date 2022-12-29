import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import DestinationSearch from '../screens/DestinationSearch';
import SearchResults from '../screens/SearchResults';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Messages from '../screens/Messages';
import Xtra from '../screens/Xtra';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={'DestinationSearch'} component={DestinationSearch} />
      <Stack.Screen name={'SearchResults'} component={SearchResults} />
      <Stack.Screen name={'Messages'} component={Messages} />
      <Stack.Screen name={'Xtra'} component={Xtra} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
