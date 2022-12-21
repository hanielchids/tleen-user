import {View, Image, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RideOptionsRow = props => {
  const {type} = props;

  const getImageName = () => {
    if (type.type === 'UberX') {
      return require('../../assets/UberX.jpeg');
    }
    if (type.type === 'Comfort') {
      return require('../../assets/Comfort.jpeg');
    }
    if (type.type === 'UberXL') {
      return require('../../assets/UberXL.jpeg');
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={getImageName()} />

      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type}
          <Ionicons name="person" size={12} />3
        </Text>
        <Text style={styles.time}>8:03PM drop off</Text>
      </View>

      <View style={styles.rightContainer}>
        <Ionicons name="pricetag" color="#42d742" size={18} />
        <Text style={styles.price}>R{type.price}</Text>
      </View>
    </View>
  );
};

export default RideOptionsRow;
