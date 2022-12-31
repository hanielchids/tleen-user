import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const NewOrderPopup = () => {
  const onDecline = () => {
    console.warn('Declined trip');
  };

  const onAccept = () => {
    console.warn('Accepted trip');
  };
  return (
    <View style={styles.root}>
      <Pressable onPress={onDecline} style={styles.declineButton}>
        <Text style={styles.declineText}>Decline</Text>
      </Pressable>

      <Pressable onPress={onAccept} style={styles.popupContainer}>
        <View style={styles.row}>
          <Text style={styles.tleenType}>Tleen</Text>
          {/* <Image source={{}} /> */}

          <View style={styles.userBg}>
            <FontAwesome name="user" color="white" size={30} />
          </View>

          <Text style={styles.tleenType}>
            <AntDesign name="star" size={35} />5
          </Text>
        </View>

        <Text style={styles.minutes}>2 mins</Text>
        <Text style={styles.distance}>2 km</Text>
      </Pressable>
    </View>
  );
};

export default NewOrderPopup;
