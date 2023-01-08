import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const NewOrderPopup = ({newOrder, onAccept, onDecline, duration, distance}) => {
  return (
    <View style={styles.root}>
      <Pressable onPress={onDecline} style={styles.declineButton}>
        <Text style={styles.declineText}>Decline</Text>
      </Pressable>

      <Pressable onPress={onAccept} style={styles.popupContainer}>
        <View style={styles.row}>
          <Text style={styles.tleenType}>{newOrder.type}</Text>

          <View style={styles.userBg}>
            <FontAwesome name="user" color="white" size={30} />
          </View>

          <Text style={styles.tleenType}>
            <AntDesign name="star" size={35} />
            {newOrder.user?.rating}
          </Text>
        </View>

        <Text style={styles.minutes}>{duration} mins</Text>
        <Text style={styles.distance}>{distance} km</Text>
      </Pressable>
    </View>
  );
};

export default NewOrderPopup;
