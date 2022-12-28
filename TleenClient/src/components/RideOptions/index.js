import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import RideOptionsRow from '../RideOptionsRow';
import typesData from '../../assets/data/types';

const RideOptions = ({typeState, onSubmit}) => {
  const [selectedType, setSelectedType] = typeState;

  return (
    <View style={{backgroundColor: '#fff'}}>
      {typesData.map(type => (
        <RideOptionsRow
          key={type.id}
          type={type}
          isSelected={type.type === selectedType}
          onPress={() => setSelectedType(type.type)}
        />
      ))}

      <Pressable onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Confirm Delivery</Text>
      </Pressable>
    </View>
  );
};

export default RideOptions;
