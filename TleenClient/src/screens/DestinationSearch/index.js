import {View, TextInput, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState('');
  const [destinationPlace, setDestinationPlace] = useState('');

  useEffect(() => {
    console.warn('useEffect is called');
    if (originPlace && destinationPlace) {
      console.warn('Redirect to results');
      //   Will add navigation
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
            key: '',
            language: 'en',
          }}
          enablePoweredByContainer={false}
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
        />
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
            console.log(data, details);
          }}
          fetchDetails
          query={{
            key: '',
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
