import * as React from 'react';
import {
  Text,
  View,
  FlatList,
  Pressable,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Popup from './Modal';

import {useNavigation} from '@react-navigation/native';

// logo imports
import absolutepets from '../../assets/png/absolutepets.png';
import checkers from '../../assets/png/checkers.png';
import clicks from '../../assets/png/clicks.png';
import cottonon from '../../assets/png/cottonon.png';
import dischem from '../../assets/png/dischem.png';
import picknpay from '../../assets/png/picknpay.png';
import funcompany from '../../assets/png/thefuncompany.png';
import woolworths from '../../assets/png/woolworths.png';
import exclusivebooks from '../../assets/png/exclusivebooks.png';
import barcode from '../../assets/png/barcode.png';

import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DATA = [
  {
    id: 1,
    title: 'Pick n Pay',
    cardType: 'Smart Shopper',
    logo: picknpay,
    barcode: barcode,
    cardNumber: 213213131231,
    bgColor: '#fff',
  },
  {
    id: 2,
    title: 'Woolworths',
    cardType: 'WRewards',
    logo: woolworths,
    barcode: barcode,
    cardNumber: 213432421342,
    bgColor: '#22c55e',
  },
  {
    id: 3,
    title: 'Checkers',
    cardType: 'XTRA Savings',
    logo: checkers,
    barcode: barcode,
    cardNumber: 3224224223,
    bgColor: '#fdba74',
  },
  {
    id: 4,
    title: 'Dischem',
    cardType: 'Benefit Card',
    logo: dischem,
    barcode: barcode,
    cardNumber: 234242424,
    bgColor: '#059669',
  },
  {
    id: 5,
    title: 'Clicks',
    cardType: 'ClubCard',
    logo: clicks,
    barcode: barcode,
    cardNumber: 23424245324,
    bgColor: '#fff',
  },
  {
    id: 6,
    title: 'Cotton On',
    cardType: 'Perks',
    logo: cottonon,
    barcode: barcode,
    cardNumber: 234245324532,
    bgColor: '#fff',
  },
  {
    id: 7,
    title: 'Absolute Pets',
    cardType: 'Rewards Card',
    logo: absolutepets,
    barcode: barcode,
    cardNumber: 32424532453,
    bgColor: '#0284c7',
  },
  {
    id: 8,
    title: 'The fun company',
    cardType: 'Rewards card',
    logo: funcompany,
    barcode: barcode,
    cardNumber: 3242453243,
    bgColor: '#fff',
  },
  {
    id: 9,
    title: 'Exclusive Books',
    cardType: 'Fanaties card',
    logo: exclusivebooks,
    barcode: barcode,
    cardNumber: 23453242234,
    bgColor: '#000',
  },
];

const Item = ({logo}) => (
  <View style={styles.item}>
    <View>
      <Image
        style={{
          width: logo === exclusivebooks || absolutepets ? 150 : 120,
          height: logo === exclusivebooks || absolutepets ? 100 : 60,
          resizeMode: 'contain',
          marginTop: logo === exclusivebooks || absolutepets ? -5 : 10,
          top: 10,
          marginLeft: logo === exclusivebooks || absolutepets ? -3 : 5,
        }}
        source={logo}
      />
    </View>
  </View>
);

export default function Xtra() {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(null);

  const numColumns = 2;

  const onPress = item => {
    setActiveItem(item);
    setModalVisible(true);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      //   style={tw`p-2 pl-6 h-30 pb-8 pt-4 rounded-md shadow-lg m-2 w-48 ${
      //     item.id && item.bgColor
      //   }`}
      style={[styles.renderButton, {backgroundColor: item.id && item.bgColor}]}
      onPress={() => onPress(item)}>
      <Item logo={item.logo} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <View>
        <View
          // style={tw`p-5 pb-0 -mt-10 `}
          style={styles.cardBox}>
          <View style={{paddingBottom: 0}}>
            <TouchableOpacity
              onPress={navigation.goBack}
              //   style={tw`absolute top-3 z-50 -left-5 mt-1 p-3 rounded-full`}
              style={styles.backButton}>
              <AntDesign name="left" size={22} />
            </TouchableOpacity>

            <Text
              //   style={tw`text-center font-bold text-sky-900 pt-8 pb-0 text-xl`}
              style={styles.xtraText}>
              TLEEN EXtra
            </Text>
          </View>

          <Pressable
            //   style={tw`flex-row items-center p-5 pl-0`}
            style={styles.addCard}>
            {/* <Icon
              style={tw`mr-4 p-3 pl-0`}
              style={tw`mr-4 p-3 pl-0`}
              name="add"
              type="materialicons"
              color="#0c4a6e"
              size={30}
            /> */}
            <Text>+</Text>
            <View>
              <Text style={styles.addCardText}>Add card</Text>
              <Text style={styles.addCardSubtext}>
                Click to add reward card
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={{paddingLeft: 0, marginTop: 4}}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={numColumns}
          />
        </View>
        <Popup
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          activeItem={activeItem}
        />
      </View>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 54,
//   },
// });
