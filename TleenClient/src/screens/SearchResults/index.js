import {View, Text} from 'react-native';
import React from 'react';
import RideOptions from '../../components/RideOptions';
import RouteMap from '../../components/RouteMap';

const SearchResults = () => {
  return (
    <View style={{display: 'flex'}}>
      <View style={{height: '50%'}}>
        <RouteMap />
      </View>

      <View style={{height: '50%'}}>
        <RideOptions />
      </View>
    </View>
  );
};

export default SearchResults;
