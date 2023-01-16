import React, {useState, useEffect} from 'react';
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
// Graphql
import {API, graphqlOperation} from 'aws-amplify';
import {listCards} from '../../graphql/queries';

// logo imports
import absolutepets from '../../assets/png/absolutepets.png';
import checkers from '../../assets/png/checkers.png';
import clicks from '../../assets/png/clicks.png';
import cottonon from '../../assets/png/cottonon.png';
import dischem from '../../assets/png/dischem.png';
import picknpay from '../../assets/png/picknpay.png';
import funcompany from '../../assets/png/thefuncompany.png';
import Woolworths from '../../assets/png/woolworths.png';
import exclusivebooks from '../../assets/png/exclusivebooks.png';

import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DATA = [
  {
    id: 1,
    title: 'Pick n Pay',
    cardType: 'Smart Shopper',
    logo: picknpay,
    cardNumber: 213213131231,
    bgColor: '#fff', //white
  },
  {
    id: 2,
    title: 'Woolworths',
    cardType: 'WRewards',
    logo: Woolworths,
    cardNumber: 213432421342,
    bgColor: '#22c55e', //light-green
  },
  {
    id: 3,
    title: 'Checkers',
    cardType: 'XTRA Savings',
    logo: checkers,
    cardNumber: 3224224223,
    bgColor: '#fdba74', //orange
  },
  {
    id: 4,
    title: 'Dischem',
    cardType: 'Benefit Card',
    logo: dischem,
    cardNumber: 234242424,
    bgColor: '#059669', // dark-green
  },
  {
    id: 5,
    title: 'Clicks',
    cardType: 'ClubCard',
    logo: clicks,
    cardNumber: 23424245324,
    bgColor: '#fff', //white
  },
  {
    id: 6,
    title: 'Cotton On',
    cardType: 'Perks',
    logo: cottonon,
    cardNumber: 234245324532,
    bgColor: '#fff', //white
  },
  {
    id: 7,
    title: 'Absolute Pets',
    cardType: 'Rewards Card',
    logo: absolutepets,
    cardNumber: 32424532453,
    bgColor: '#0284c7', //blue
  },
  {
    id: 8,
    title: 'The fun company',
    cardType: 'Rewards card',
    logo: funcompany,
    cardNumber: 3242453243,
    bgColor: '#fff', //white
  },
  {
    id: 9,
    title: 'Exclusive Books',
    cardType: 'Fanaties card',
    logo: exclusivebooks,
    cardNumber: 23453242234,
    bgColor: '#000', //black
  },
];

const Item = ({logo}) => (
  <View style={styles.item}>
    <View>
      <Image
        style={{
          width: 120,
          height: 60,
          resizeMode: 'contain',
          marginTop: 10,
          top: 10,
          marginLeft: 5,
        }}
        source={logo}
      />
    </View>
  </View>
);

export default function Xtra() {
  const [cards, setCards] = useState([]);

  const [val1, setVal1] = useState([]);

  const fetchCards = async () => {
    try {
      const cardData = await API.graphql(graphqlOperation(listCards));

      const cards = cardData.data.listCards.items;
      console.log('cards showing here are', cards);
      setCards(cards);

      setVal1(cards[0].cardColor);
    } catch (e) {
      console.log('error here is: ', e);
    }
  };

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
      style={[
        styles.renderButton,
        {backgroundColor: item.id && item.cardColor},
      ]}
      onPress={() => onPress(item)}>
      {item.cardName === 'Woolworths' && (
        <Image
          style={{
            width: 120,
            height: 80,
            resizeMode: 'contain',
            marginTop: 10,
            top: 10,
            marginLeft: 5,
          }}
          source={Woolworths}
        />
      )}
      {item.cardName === `Pick 'n' Pay` && (
        <Image
          style={{
            width: 120,
            height: 80,
            resizeMode: 'contain',
            marginTop: 10,
            top: 10,
            marginLeft: 5,
          }}
          source={picknpay}
        />
      )}

      {item.cardName === 'Checkers' && (
        <Image
          style={{
            width: 120,
            height: 80,
            resizeMode: 'contain',
            marginTop: 10,
            top: 10,
            marginLeft: 5,
          }}
          source={checkers}
        />
      )}

      {item.cardName === 'Clicks' && (
        <Image
          style={{
            width: 120,
            height: 80,
            resizeMode: 'contain',
            marginTop: 10,
            top: 10,
            marginLeft: 5,
          }}
          source={clicks}
        />
      )}

      {item.cardName === 'Dis-chem' && (
        <Image
          style={{
            width: 120,
            height: 80,
            resizeMode: 'contain',
            marginTop: 10,
            top: 10,
            marginLeft: 5,
          }}
          source={dischem}
        />
      )}

      {item.cardName === 'Cotton:on' && (
        <Image
          style={{
            width: 120,
            height: 80,
            resizeMode: 'contain',
            marginTop: 10,
            top: 10,
            marginLeft: 5,
          }}
          source={cottonon}
        />
      )}

      {item.cardName === 'Absolute Pets' && (
        <Image
          style={{
            width: 120,
            height: 80,
            resizeMode: 'contain',
            marginTop: 10,
            top: 10,
            marginLeft: 5,
          }}
          source={absolutepets}
        />
      )}

      {item.cardName === 'The fun company' && (
        <Image
          style={{
            width: 120,
            height: 80,
            resizeMode: 'contain',
            marginTop: 10,
            top: 10,
            marginLeft: 5,
          }}
          source={funcompany}
        />
      )}

      {item.cardName === 'Exclusive books' && (
        <Image
          style={{
            width: 120,
            height: 80,
            resizeMode: 'contain',
            marginTop: 10,
            top: 10,
            marginLeft: 5,
          }}
          source={exclusivebooks}
        />
      )}
    </TouchableOpacity>
  );

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <View style={styles.cardBox}>
          <View style={{paddingBottom: 0}}>
            <TouchableOpacity
              onPress={navigation.goBack}
              style={styles.backButton}>
              <AntDesign name="left" size={22} />
            </TouchableOpacity>

            <Text style={styles.xtraText}>TLEEN EXtra</Text>
          </View>

          <Pressable
            style={styles.addCard}
            onPress={() => navigation.navigate('AddCard')}>
            <Text style={{fontSize: 30}}>+ {''}</Text>
            <View>
              <Text style={styles.addCardText}>Add card</Text>
              <Text style={styles.addCardSubtext}>
                Click to add reward card
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={{paddingLeft: 0, marginTop: 4}}>
          <Text
            style={[
              styles.addCardSubtext,
              {paddingLeft: 15, paddingBottom: 20, color: '#FF6600'},
            ]}>
            Tap card to review more info
          </Text>
          <FlatList
            // data={DATA}
            data={cards}
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
