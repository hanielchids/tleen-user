import {View, Text} from 'react-native';
import React from 'react';
import RideOptions from '../../components/RideOptions';
import RouteMap from '../../components/RouteMap';

import {useRoute} from '@react-navigation/native';

const SearchResults = () => {
  const route = useRoute();

  console.log('These are the route props ', route.props);
  const {originPlace, destinationPlace} = route.params;

  return (
    <View style={{display: 'flex'}}>
      <View style={{height: '50%'}}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>

      <View style={{height: '50%'}}>
        <RideOptions />
      </View>
    </View>
  );
};

export default SearchResults;
