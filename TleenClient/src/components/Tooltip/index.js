import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const Tooltip = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>index</Text>
      <Text style={styles.text}>
        Tleen tooltip here tooltip here tooltip here tooltip here tooltip here
        tooltip here tooltip here
      </Text>
      <Text style={styles.tooltip}>Learn more</Text>
    </View>
  );
};

export default Tooltip;
