import {View, Text, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';

const HomeSearch = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');

  const goToSearch = () => {
    navigation.navigate('DestinationSearch');
  };

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const user = await Auth.currentSession();
        setUsername(user.accessToken.payload.username);

        console.log('user stuff is: ', user.accessToken.payload.username);
      } catch (err) {
        console.log(err);
      }
    };

    getUserInfo();
  }, []);

  return (
    <View>
      <Text style={{textAlign: 'center', padding: 5, fontSize: 22}}>
        Hi, {username}
      </Text>
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
