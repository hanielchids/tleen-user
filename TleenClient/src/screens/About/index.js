import {View, Text, Pressable, FlatList} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const articleData = [
  {
    id: '12',
    type: 'Rate app ',
    styleIcon: {
      marginRight: 4,
      padding: 3,
      marginLeft: '70%',
      fontWeight: '100',
    },
  },
  {
    id: '45',
    styleIcon: {marginRight: 4, padding: 3, marginLeft: '50%'},
    type: 'TLEEN careers   ',
  },
  {
    id: '23',
    styleIcon: {marginRight: 4, padding: 3, marginLeft: '70%'},
    type: 'Legal       ',
  },
];

const About = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      {/* About Heading */}
      <View style={styles.headingBox}>
        <View style={{paddingBottom: 0}}>
          <Text style={styles.heading}>About</Text>
          <Text style={styles.subtitles}>
            Know more about TLEEN, spend your time with us.
          </Text>
        </View>
      </View>

      {/* List of items */}

      <View style={{marginTop: 10}}>
        <FlatList
          data={articleData}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={styles.lineView} />}
          renderItem={({item: {type, styleIcon}}) => (
            <Pressable style={styles.pressableRow}>
              <View style={styles.firstFlex}>
                <Text style={styles.typeText}>{type}</Text>
              </View>

              <FontAwesome
                style={styleIcon}
                name="chevron-right"
                color="#A7A7A7"
                size={22}
              />
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default About;

// import {View, Text} from 'react-native';
// import React from 'react';

// const About = () => {
//   return (
//     <View>
//       <Text>About Screen here</Text>
//     </View>
//   );
// };

// export default About;
