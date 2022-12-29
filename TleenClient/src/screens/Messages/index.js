import {SafeAreaView, View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

// Image imports

import messagesImage from '../../assets/placeholderImages/messages.png';

const Messages = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      {/* Heading */}
      <View style={styles.headingBox}>
        <Pressable onPress={navigation.goBack} style={styles.backButton}>
          <AntDesign name="left" size={22} />
        </Pressable>

        <View style={{paddingBottom: 0}}>
          <Text style={styles.heading}>Inbox</Text>
          <Text style={styles.subtitles}>
            Our support team will respond to your request on time via these chat
            or email.
          </Text>
        </View>
      </View>

      <View style={styles.messageIconBox}>
        <Image style={styles.messageIcon} source={messagesImage} />
      </View>

      {/* Button */}
      <View style={{marginTop: 10}}>
        <Pressable
          style={styles.startChatButton}
          //   onPress={() => navigation.navigate("ChatboxScreen")}
        >
          <Text style={styles.chatButtonText}>Start Chat</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Messages;
