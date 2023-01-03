import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import {Auth} from 'aws-amplify';

// const isUserLogged = await Auth.currentAuthenticatedUser();

// const {attributes} = isUserLogged;

// console.log('user deatils are here: ', attributes);

const CustomDrawer = props => {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props} style={{backgroundColor: '#164E1B'}}>
      <View style={{backgroundColor: '#1c6322', padding: 15, marginBottom: 10}}>
        {/* User Row */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <View
            style={{flexGrow: 1, flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#cacaca',
                width: 80,
                height: 80,
                borderRadius: 50,
                marginRight: 10,
              }}></View>
            <View>
              <Text style={{color: 'white', fontSize: 24}}>Username</Text>
              <Text style={{color: 'lightgrey'}}>5.00</Text>
            </View>
          </View>

          <View style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Pressable
              style={{bottom: 30}}
              //   onPress={() => navigation.closeDrawer()}
              onPress={console.log('hello')}>
              <AntDesign name="closecircleo" color="white" size={30} />
            </Pressable>
          </View>
        </View>

        {/* Profile Row */}
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#eee',
            paddingVertical: 5,
            marginVertical: 10,
          }}>
          <Pressable
            onPress={() => {
              console.warn('Tleen XTRA');
            }}>
            <Text style={{color: '#dddddd', paddingVertical: 5}}>
              View Profile
            </Text>
          </Pressable>
        </View>

        {/* Do more */}
        <Pressable
          onPress={() => {
            console.warn('Tleen XTRA');
          }}>
          <Text style={{color: '#dddddd', paddingVertical: 5}}>
            Tleen Services
          </Text>
        </Pressable>

        {/* Make money */}
        <Pressable onPress={() => navigation.navigate('Xtra')}>
          <Text style={{color: 'white', paddingVertical: 5}}>TLEEN XTRA</Text>
        </Pressable>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          //   justifyContent: 'space-evenly',
        }}>
        <View style={{width: '60%'}}>
          <DrawerItemList {...props} />
        </View>
        <Image
          style={{
            position: 'absolute',
            zIndex: 50,
            right: 5,
            width: 140,
            height: 564,
            resizeMode: 'contain',
          }}
          source={require('../assets/sidebarImage.png')}
        />
      </View>

      <Pressable
        onPress={() => {
          Auth.signOut();
        }}>
        <Text
          style={{
            color: 'white',
            paddingLeft: 20,
            marginTop: 100,
            padding: 5,
            fontSize: 20,
          }}>
          <Entypo name="log-out" color="white" size={20} /> Log out
        </Text>
      </Pressable>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
