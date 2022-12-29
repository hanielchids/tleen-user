import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tooltip = ({showToolTip}) => {
  const [showTooltip, setShowTooltip] = useState(true);

  showToolTip = showTooltip;

  return (
    <>
      {showTooltip === true && (
        <View style={styles.container}>
          <Text style={styles.title}>index</Text>
          <Text style={styles.text}>
            Tleen tooltip here tooltip here tooltip here tooltip here tooltip
            here tooltip here tooltip here
          </Text>
          <Text style={styles.tooltip}>Learn more</Text>

          <Pressable
            // style={{bottom: 99, left: '93%'}}
            style={{
              position: 'absolute',
              zIndex: 50,
              padding: 3,
              marginTop: 7,
              left: '95%',
            }}
            onPress={() => setShowTooltip(false)}>
            <AntDesign name="closecircleo" color="white" size={30} />
          </Pressable>
        </View>
      )}
    </>
  );
};

export default Tooltip;
