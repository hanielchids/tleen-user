import {View, Text} from 'react-native';
import React from 'react';
import HomeMap from '../../components/HomeMap';
import Tooltip from '../../components/Tooltip';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = () => {
  return (
    <View>
      <View style={{height: '50%'}}>
        <HomeMap />
      </View>

      <View style={{height: '50%'}}>
        {/* ToolTip */}
        <Tooltip />
        {/* Bottom Component */}
        <HomeSearch />
      </View>
    </View>
  );
};

export default HomeScreen;
