import {SafeAreaView, View, Text, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import {Auth} from 'aws-amplify';

const Profile = () => {
  const navigation = useNavigation();

  const [active, setActive] = useState(true);

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const user = await Auth.currentSession();
        setUser(user.accessToken.payload.username);
        setEmail(user.idToken.payload.email);

        console.log('user stuff is: ', user.accessToken.payload.username);
        console.log('user email is: ', user.idToken.payload.email);
      } catch (err) {
        console.log(err);
      }
    };

    getUserInfo();
  }, []);

  //   Graphql delete user
  //   https://docs.amplify.aws/lib/auth/delete_user/q/platform/react-native/

  async function deleteUser() {
    try {
      const result = await Auth.deleteUser();
      console.log(result);
    } catch (error) {
      console.log('Error deleting user', error);
    }
  }

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
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
          <Text style={styles.formLabel}>Username</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* <Text style={styles.placeholderText}>First name</Text>
            <Text style={[styles.placeholderText, {marginLeft: 10}]}>
              Last name
            </Text> */}

            <Text style={[styles.placeholderText, {width: '100%'}]}>
              {user}
            </Text>
          </View>

          <Text style={styles.formLabel}>Email address</Text>
          <Text style={[styles.placeholderText, {width: '100%'}]}>{email}</Text>

          {/* <Text style={styles.formLabel}>Phone number</Text>
          <Text style={[styles.placeholderText, {width: '100%'}]}>number</Text> */}

          <Pressable
            style={styles.button}
            onPress={() => {
              Auth.signOut();
            }}>
            <Text style={styles.buttonText}>Log out</Text>
          </Pressable>

          <Pressable
            style={[styles.button, {backgroundColor: '#e60000', marginTop: 20}]}
            onPress={() => {
              deleteUser();
            }}>
            <Text style={styles.buttonText}>Delete Account</Text>
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
          <Pressable
            style={[styles.button, {backgroundColor: '#e60000', marginTop: 20}]}
            onPress={() => {
              deleteUser();
            }}>
            <Text style={styles.buttonText}>Delete Account</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Profile;
