import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  Pressable,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {SelectList} from 'react-native-dropdown-select-list';

import {useNavigation} from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles';
import {API, graphqlOperation} from 'aws-amplify';

// Graphqlfor card functions
import {createCards, deleteCards} from '../../../graphql/mutations';
import {listCards} from '../../../graphql/queries';
// Mutations for card functions

const DATA = [
  {
    id: 1,
    title: 'Pick n Pay',
    cardType: 'Smart Shopper',
    cardNumber: 213213131231,
    bgColor: '#fff',
  },
];

export default function AddCard() {
  const navigation = useNavigation();
  const [active, setActive] = useState(true);

  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardColor, setCardColor] = useState('');
  const [cards, setCards] = useState([]);

  const addCard = async () => {
    try {
      const input = {cardName, cardNumber, cardColor};
      const result = await API.graphql(graphqlOperation(createCards, {input}));

      const newCard = result.data.createCards;
      const updatedCard = [newCard, ...cards];

      alert('Card added!!');

      setCards(updatedCard);
      setCardName('');
      setCardNumber();
      setCardColor('');
    } catch (e) {
      console.log('error here is :', e);
    }
  };

  const removeCard = async id => {
    try {
      const input = {id};
      const result = await API.graphql(graphqlOperation(deleteCards, {input}));

      const deletedCardId = result.data.deleteCards.id;
      const updatedCard = cards.filter(card => card.id !== deletedCardId);

      setCards(updatedCard);
    } catch (e) {
      console.log('error here is :', e);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const cardData = await API.graphql(graphqlOperation(listCards));

      const cards = cardData.data.listCards.items;
      setCards(cards);
    } catch (e) {
      console.log('error here is: ', e);
    }
  };

  const data = [
    {key: '1', value: `Pick 'n' Pay`},
    {key: '2', value: 'Woolworths'},
    {key: '3', value: 'Checkers'},
    {key: '4', value: 'Clicks'},
    {key: '5', value: 'Dis-chem'},
    {key: '6', value: 'Cotton:on'},
    {key: '7', value: 'Absolute Pets'},
    {key: '8', value: 'The fun company'},
    {key: '8', value: 'Exclusive books'},
  ];

  const colorData = [
    {key: '1', value: 'red'},
    {key: '2', value: 'steelblue'},
    {key: '3', value: 'white'},
    {key: '4', value: 'green'},
    {key: '5', value: 'orange'},
    {key: '6', value: 'black'},
    {key: '7', value: 'dark-green'},
  ];

  return (
    <SafeAreaView>
      <View style={styles.headingBox}>
        <TouchableOpacity onPress={navigation.goBack} style={styles.backButton}>
          <AntDesign name="left" size={22} />
        </TouchableOpacity>

        <Text style={styles.xtraText}>
          {active ? 'Add Card' : 'Remove Card'}{' '}
        </Text>
      </View>

      {/* Tab menu Section */}
      <View
        style={{
          flexDirection: 'row',
          borderWidth: 0.5,
          borderColor: 'gray',
          borderRadius: 5,
          padding: 6,
          marginHorizontal: 20,
        }}>
        <Pressable
          style={[
            styles.tabStyle,
            {
              backgroundColor: active ? '#08668C' : '#fff',
            },
          ]}
          onPress={() => setActive(true)}>
          <Text style={{color: active ? '#fff' : '#08668C'}}>Add Cards</Text>
        </Pressable>

        <Pressable
          style={[
            styles.tabStyle,
            {
              backgroundColor: !active ? '#08668C' : '#fff',
            },
          ]}
          onPress={() => setActive(false)}>
          <Text style={{color: !active ? '#fff' : '#08668C'}}>
            Remove Cards
          </Text>
        </Pressable>
      </View>

      {/* End of Tab menu Section */}

      {active ? (
        <View style={{marginTop: 20, marginHorizontal: 20}}>
          <Text style={styles.formLabel}>Card Name</Text>

          <SelectList
            style={[styles.placeholderText, {width: '100%'}]}
            data={data}
            value={cardName}
            setSelected={val => setCardName(val)}
            save="value"
          />

          <Text style={styles.formLabel}>Card Number</Text>
          <TextInput
            style={[styles.placeholderText, {width: '100%'}]}
            value={cardNumber}
            onChangeText={number => setCardNumber(number)}
            placeholder="Card Number"
          />

          <Text style={styles.formLabel}>Card color</Text>
          <SelectList
            style={[styles.placeholderText, {width: '100%'}]}
            data={colorData}
            value={cardColor}
            setSelected={val => setCardColor(val)}
            save="value"
          />

          <View>
            <Pressable style={styles.button} onPress={addCard}>
              <Text style={styles.buttonText}>Add Card</Text>
            </Pressable>
          </View>

          {/* Tips Panel */}
          <View style={styles.rewardsContainer}>
            <View style={styles.rewardsBox}>
              <View>
                <Text style={styles.rewardsPanelText}>
                  Tips for adding cards
                </Text>
                <Text
                  style={[
                    styles.rewardsSubText,
                    {
                      fontSize: 12,
                    },
                  ]}>
                  For your card to reflect properly match the right color on the
                  card to easily see the logo on the card as on the physical
                  reward card.
                  {/* <Text style={styles.learnMoreText}>Examples below. </Text> */}
                </Text>
              </View>
            </View>
          </View>

          {/* End of Tips Panel */}
        </View>
      ) : (
        <View style={{marginTop: 20, marginHorizontal: 20}}>
          {cards.map((card, index) => {
            return (
              <View key={index} style={{flexDirection: 'row', marginTop: 10}}>
                <Text style={[styles.placeholderText, {width: '90%'}]}>
                  {card.cardName}
                </Text>
                <Pressable onPress={() => removeCard(card.id)}>
                  <Ionicons
                    name="trash-outline"
                    color="gray"
                    style={{padding: 5}}
                    size={32}
                  />
                </Pressable>
              </View>
            );
          })}
        </View>
      )}
    </SafeAreaView>
  );
}
