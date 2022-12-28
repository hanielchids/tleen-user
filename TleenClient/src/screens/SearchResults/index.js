import {View, Text} from 'react-native';
import React, {useState} from 'react';
import RideOptions from '../../components/RideOptions';
import RouteMap from '../../components/RouteMap';

import {useRoute} from '@react-navigation/native';

import {API, graphqlOperation, Auth} from 'aws-amplify';
import {createOrder} from '../../graphql/mutations';

const SearchResults = () => {
  const typeState = useState(null);

  const route = useRoute();

  const {originPlace, destinationPlace} = route.params;

  const onSubmit = async () => {
    const [type] = typeState;

    if (!type) {
      return;
    }

    // Will submit to server
    try {
      const userInfo = await Auth.currentAuthenticatedUser();

      // console.log('userInfo: ', userInfo);

      const date = new Date();
      const input = {
        createdAt: date.toISOString(),
        type,
        originLatitude: originPlace.details.geometry.location.lat,
        originLongitude: originPlace.details.geometry.location.lng,

        destLatitude: destinationPlace.details.geometry.location.lat,
        destLongitude: destinationPlace.details.geometry.location.lng,

        userId: userInfo.attributes.sub,
        carId: '1',
        status: 'NEW',
      };

      const response = await API.graphql(
        graphqlOperation(createOrder, {
          input: input,
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        }),
      );

      console.log('this is the new object', response);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={{display: 'flex'}}>
      <View style={{height: '50%'}}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>

      <View style={{height: '50%', backgroundColor: '#fff'}}>
        <RideOptions typeState={typeState} onSubmit={onSubmit} />
      </View>
    </View>
  );
};

export default SearchResults;
