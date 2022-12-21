import {View, Text} from 'react-native';
import React from 'react';
import HomeMap from '../../components/HomeMap';
import Tooltip from '../../components/Tooltip';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = () => {
  return (
    <View>
      <HomeMap />

      {/* ToolTip */}
      <Tooltip />

      {/* Bottom Component */}
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
