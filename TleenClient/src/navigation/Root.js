import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './Home';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text, View} from 'react-native';
import CustomDrawer from './CustomDrawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import About from '../screens/About';
import Promotions from '../screens/Promotions';

const Drawer = createDrawerNavigator();

const DummyScreen = props => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>{props.name}</Text>
  </View>
);

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            width: '100%',
          },
          drawerActiveTintColor: '#9ce3a2',
          drawerLabelStyle: {
            color: '#fff',
            fontSize: 20,
            fontWeight: '400',
          },
        }}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="Home"
          options={{
            drawerIcon: () => <AntDesign name="home" color="#fff" size={16} />,
          }}
          component={HomeNavigator}
        />

        <Drawer.Screen
          name="Past Orders"
          options={{
            drawerIcon: () => (
              <AntDesign name="profile" color="#fff" size={16} />
            ),
          }}>
          {() => <DummyScreen name={'Past Orders'} />}
        </Drawer.Screen>
        <Drawer.Screen
          name="Wallet"
          options={{
            drawerIcon: () => (
              <AntDesign name="wallet" color="#fff" size={16} />
            ),
          }}>
          {() => <DummyScreen name={'Wallet'} />}
        </Drawer.Screen>
        <Drawer.Screen
          name="Promotions"
          options={{
            drawerIcon: () => (
              <AntDesign name="barchart" color="#fff" size={16} />
            ),
          }}
          component={Promotions}
        />
        <Drawer.Screen
          name="Support"
          options={{
            drawerIcon: () => (
              <AntDesign name="customerservice" color="#fff" size={16} />
            ),
          }}>
          {() => <DummyScreen name={'Support'} />}
        </Drawer.Screen>
        <Drawer.Screen
          name="About"
          options={{
            drawerIcon: () => (
              <AntDesign name="exclamationcircleo" color="#fff" size={16} />
            ),
          }}
          component={About}
        />
        {/* {() => <DummyScreen name={'About'} />} */}
        {/* </Drawer.Screen> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
