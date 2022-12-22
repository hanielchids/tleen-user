import {View, Text} from 'react-native';
import React from 'react';
import HomeMap from '../../components/HomeMap';
import RideOptions from '../../components/RideOptions';

const SearchResults = () => {
  return (
    <View style={{display: 'flex'}}>
      <View style={{height: '50%'}}>
        <HomeMap />
      </View>

      <View style={{height: '50%'}}>
        <RideOptions />
      </View>
    </View>
  );
};

export default SearchResults;
