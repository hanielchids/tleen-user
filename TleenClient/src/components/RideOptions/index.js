import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import RideOptionsRow from '../RideOptionsRow';
import typesData from '../../assets/data/types';

const RideOptions = () => {
  const confirm = () => {
    console.warn('confirm');
  };
  return (
    <View>
      {typesData.map(type => (
        <RideOptionsRow key={type.id} type={type} />
      ))}

      <Pressable onPress={confirm} style={styles.button}>
        <Text style={styles.buttonText}>Confirm Delivery</Text>
      </Pressable>
    </View>
  );
};

export default RideOptions;
