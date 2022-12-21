import {View, Text} from 'react-native';
import React from 'react';
import HomeMap from '../../components/HomeMap';
import RideOptions from '../../components/RideOptions';

const SearchResults = () => {
  return (
    <View>
      <HomeMap />
      <RideOptions />
    </View>
  );
};

export default SearchResults;
