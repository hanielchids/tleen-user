import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

// Image imports

import image1 from '../../assets/placeholderImages/userPic.png';
import image2 from '../../assets/placeholderImages/userPic1.png';
import image3 from '../../assets/placeholderImages/userPic2.png';
import image4 from '../../assets/placeholderImages/userPic3.png';

const articleData = [
  {
    id: '12',
    type: 'Using TLEEN',
    styleIcon: {
      marginRight: 4,
      padding: 3,
      marginLeft: '60%',
      fontWeight: '100',
    },
  },
  {
    id: '45',

    styleIcon: {
      marginRight: 4,
      padding: 3,
      marginLeft: '47%',
      fontWeight: '100',
    },
    type: 'Delivery was offline',
  },
  {
    id: '23',
    styleIcon: {
      marginRight: 4,
      padding: 3,
      marginLeft: '43%',
      fontWeight: '100',
    },
    type: 'Wrong pickup details',
  },
  {
    id: '3',
    styleIcon: {
      marginRight: 4,
      padding: 3,
      marginLeft: '51%',
      fontWeight: '100',
    },
    type: 'Payment issues   ',
  },
  {
    id: '4',
    type: 'Other services    ',
    styleIcon: {
      marginRight: 4,
      padding: 3,
      marginLeft: '52%',
      fontWeight: '100',
    },
  },
];

const Support = () => {
  const navigation = useNavigation();

  const [value, setValue] = useState('');

  return (
    <SafeAreaView>
      {/* Heading */}
      <View style={styles.headingBox}>
        <Pressable onPress={navigation.goBack} style={styles.backButton}>
          <AntDesign name="left" size={22} />
        </Pressable>

        <View style={{paddingBottom: 0}}>
          <Text style={styles.heading}>Support</Text>
          <Text style={styles.subtitles}>
            Our support team are always available to render support services
            where necessary.
          </Text>
        </View>
      </View>

      {/* End of header section */}

      {/* Search bar */}
      <View style={styles.searchBox}>
        <View style={{alignItems: 'center'}}>
          <TextInput
            keyboardType="number-pad"
            // returnKeyType="done"
            value={value}
            placeholder="Search for articles"
            onChangeText={setValue}
            style={styles.searchInput}
          />
        </View>

        <Pressable
          style={styles.searchButton}
          // onPress={() => setModalVisible(true)}
        >
          <SimpleLineIcons name="magnifier" size={20} />
        </Pressable>
      </View>
      {/* End of Search bar */}

      {/* BOX SECTION */}
      <View style={{paddingLeft: 8}}>
        <View style={styles.messageBox}>
          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <Image
              source={image1}
              style={
                (styles.imageStyle,
                {marginLeft: '18%', marginTop: 5, height: 50, width: 50})
              }
            />
            <Image source={image2} style={styles.imageStyle} />
            <Image source={image3} style={styles.imageStyle} />
            <Image source={image4} style={styles.imageStyle} />
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.messageText}>New Conversation</Text>
            <Text style={styles.messageSubText}>
              Our support team are always available to render support services
              where necessary.
            </Text>

            <Pressable
              style={styles.messageButton}
              onPress={() => navigation.navigate('Messages')}>
              <Text style={styles.messageButtonText}>New Message</Text>
            </Pressable>
          </View>
        </View>
      </View>
      {/* End of new message component */}

      {/* Articles list */}
      <View style={{marginTop: '-45%'}}>
        <Text style={styles.articleHeading}>Popular articles</Text>

        <FlatList
          data={articleData}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => (
            <View style={{backgroundColor: '#e5e7eb', height: 0.5}} />
          )}
          renderItem={({item: {type, styleIcon}}) => (
            <Pressable style={styles.articleListItem}>
              <View>
                <Text style={styles.articleItem}>{type}</Text>
              </View>

              <AntDesign
                style={styleIcon}
                name="right"
                color="#A7A7A7"
                size={16}
              />
            </Pressable>
          )}
        />
      </View>

      {/* End of Articles list */}
    </SafeAreaView>
  );
};

export default Support;
