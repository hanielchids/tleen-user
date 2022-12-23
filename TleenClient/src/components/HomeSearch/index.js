import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const HomeSearch = () => {
  const navigation = useNavigation();

  const goToSearch = () => {
    navigation.navigate('DestinationSearch');
  };

  return (
    <View>
      {/* Input Box */}
      <Pressable onPress={goToSearch} style={styles.inputBox}>
        <Text style={styles.inputText}>Where to?</Text>
        <View style={styles.timeContainer}>
          <AntDesign name="clockcircle" color="#535353" size={16} />
          <Text>Now</Text>
          <MaterialIcons name="keyboard-arrow-down" size={16} />
        </View>
      </Pressable>

      {/* Previous destination */}

      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name="clockcircle" color="#fff" size={16} />
        </View>
        <Text style={styles.destinationText}>3 Rivonia Road</Text>
      </View>

      {/* Home destination */}

      <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor: '#2FA94E'}]}>
          <Entypo name="home" color="#fff" size={16} />
        </View>
        <Text style={styles.destinationText}>Home</Text>
      </View>
    </View>
  );
};

export default HomeSearch;
