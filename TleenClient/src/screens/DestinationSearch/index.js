import {View, TextInput, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';

import {useNavigation} from '@react-navigation/native';

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState('');
  const [destinationPlace, setDestinationPlace] = useState('');

  const homePlace = {
    description: 'Home',
    geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
  };
  const workPlace = {
    description: 'Work',
    geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
  };

  const navigation = useNavigation();

  useEffect(() => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults', {
        originPlace,
        destinationPlace,
      });
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="From"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAz48wFGKcLYPQIhaLTX_Vh8FVSzUUBYHE',
            language: 'en',
          }}
          enablePoweredByContainer={false}
          currentLocation={true}
          currentLocationLabel="Current location"
          suppressDefaultStyles
          styles={{
            textInput: {
              ...styles.textInput,
              padding: 12,
              borderRadius: 5,
            },
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          renderRow={data => <PlaceRow data={data} />}
          renderDescription={data => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
            console.log(data, details);
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAz48wFGKcLYPQIhaLTX_Vh8FVSzUUBYHE',
            language: 'en',
          }}
          enablePoweredByContainer={false}
          styles={{
            textInput: {
              ...styles.textInput,
              backgroundColor: '#e3e3e3',
            },
            container: {
              ...styles.autocompleteContainer,
              top: 50,
            },
            separator: styles.separator,
          }}
          renderRow={data => <PlaceRow data={data} />}
        />

        {/* Direction bar
         *from circle
         *to square
         *line
         */}
        <View style={styles.circle} />

        <View style={styles.line} />

        <View style={styles.square} />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
