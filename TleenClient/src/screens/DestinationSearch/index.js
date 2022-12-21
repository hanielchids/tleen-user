import {View, TextInput, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

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
            console.log(data, details);
          }}
          fetchDetails
          query={{
            key: ' ',
            language: 'en',
          }}
          enablePoweredByContainer={false}
          styles={{
            textInput: styles.textInput,
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
            console.log(data, details);
          }}
          fetchDetails
          query={{
            key: ' ',
            language: 'en',
          }}
          enablePoweredByContainer={false}
          styles={{
            textInput: [styles.textInput, {backgroundColor: '#e3e3e3'}],
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
