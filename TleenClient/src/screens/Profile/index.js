import {SafeAreaView, View, Text, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import {Auth} from 'aws-amplify';

const Profile = () => {
  const navigation = useNavigation();

  const [active, setActive] = useState(true);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const user = await Auth.currentSession();
        setUser(user.accessToken.payload.username);
        setEmail(user.idToken.payload.email);
        setNumber(user.idToken.payload.email);
      } catch (err) {
        console.log(err);
      }
    };

    getUserInfo();
  }, []);

  return (
    <SafeAreaView>
      {/* Heading */}
      <View style={styles.headingBox}>
        <Pressable onPress={navigation.goBack} style={styles.backButton}>
          <AntDesign name="left" size={22} />
        </Pressable>

        <View style={{paddingBottom: 0}}>
          <Text style={styles.heading}>Account</Text>
        </View>
      </View>
      {/* End of Heading section */}

      {/* Tab menu Section */}
      <View
        style={{
          flexDirection: 'row',
          borderWidth: 0.5,
          borderColor: 'gray',
          borderRadius: 5,
          padding: 6,
          marginHorizontal: 20,
        }}>
        <Pressable
          style={[
            styles.tabStyle,
            {
              backgroundColor: active ? '#08668C' : '#fff',
            },
          ]}
          onPress={() => setActive(true)}>
          <Text style={{color: active ? '#fff' : '#08668C'}}>Personal</Text>
        </Pressable>

        <Pressable
          style={[
            styles.tabStyle,
            {
              backgroundColor: !active ? '#08668C' : '#fff',
            },
          ]}
          onPress={() => setActive(false)}>
          <Text style={{color: !active ? '#fff' : '#08668C'}}>Others</Text>
        </Pressable>
      </View>

      {/* End of Tab menu Section */}

      {active ? (
        <View style={{marginTop: 20, marginHorizontal: 20}}>
          <Text style={styles.formLabel}>Full name</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.placeholderText}>First name</Text>
            <Text style={[styles.placeholderText, {marginLeft: 10}]}>
              Last name
            </Text>
          </View>

          <Text style={styles.formLabel}>Email address</Text>
          <Text style={[styles.placeholderText, {width: '100%'}]}>email</Text>

          <Text style={styles.formLabel}>Phone number</Text>
          <Text style={[styles.placeholderText, {width: '100%'}]}>number</Text>

          <Pressable
            style={styles.button}
            onPress={() => {
              Auth.signOut();
            }}>
            <Text style={styles.buttonText}>Log out</Text>
          </Pressable>
        </View>
      ) : (
        <View style={{marginTop: 20, marginHorizontal: 20}}>
          <Pressable
            style={styles.button}
            onPress={() => {
              Auth.signOut();
            }}>
            <Text style={styles.buttonText}>Log out</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Profile;
