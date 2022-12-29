import {View, Text} from 'react-native';
import React from 'react';
import HomeMap from '../../components/HomeMap';
import Tooltip from '../../components/Tooltip';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = () => {
  return (
    <View>
      <View style={{height: '60%'}}>
        <HomeMap />
      </View>

      <View style={{height: '40%'}}>
        {/* ToolTip */}
        <Tooltip showToolTip={true} />
        {/* Bottom Component */}
        <HomeSearch />
      </View>
    </View>
  );
};

export default HomeScreen;
