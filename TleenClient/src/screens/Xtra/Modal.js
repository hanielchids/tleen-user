import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  Pressable,
} from 'react-native';
import styles from './styles';
import barcode from '../../assets/png/barcode.png';

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

export default function Popup({modalVisible, setModalVisible, activeItem}) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={[
                styles.viewItem,
                {backgroundColor: activeItem?.cardColor},
              ]}>
              <View style={{alignItems: 'center'}}>
                {activeItem?.cardName === 'Woolworths' && (
                  <Image
                    style={{
                      width: 220,
                      height: 100,
                      resizeMode: 'contain',
                      marginTop: 12,
                      marginLeft: 5,
                    }}
                    source={Woolworths}
                  />
                )}
                {activeItem?.cardName === `Pick 'n' Pay` && (
                  <Image
                    style={{
                      width: 220,
                      height: 100,
                      resizeMode: 'contain',
                      marginTop: 12,
                      marginLeft: 5,
                    }}
                    source={picknpay}
                  />
                )}

                {activeItem?.cardName === 'Checkers' && (
                  <Image
                    style={{
                      width: 220,
                      height: 100,
                      resizeMode: 'contain',
                      marginTop: 12,
                      marginLeft: 5,
                    }}
                    source={checkers}
                  />
                )}

                {activeItem?.cardName === 'Clicks' && (
                  <Image
                    style={{
                      width: 220,
                      height: 100,
                      resizeMode: 'contain',
                      marginTop: 12,
                      marginLeft: 5,
                    }}
                    source={clicks}
                  />
                )}

                {activeItem?.cardName === 'Dis-chem' && (
                  <Image
                    style={{
                      width: 220,
                      height: 100,
                      resizeMode: 'contain',
                      marginTop: 12,
                      marginLeft: 5,
                    }}
                    source={dischem}
                  />
                )}

                {activeItem?.cardName === 'Cotton:on' && (
                  <Image
                    style={{
                      width: 220,
                      height: 100,
                      resizeMode: 'contain',
                      marginTop: 12,
                      marginLeft: 5,
                    }}
                    source={cottonon}
                  />
                )}

                {activeItem?.cardName === 'Absolute Pets' && (
                  <Image
                    style={{
                      width: 220,
                      height: 100,
                      resizeMode: 'contain',
                      marginTop: 12,
                      marginLeft: 5,
                    }}
                    source={absolutepets}
                  />
                )}

                {activeItem?.cardName === 'The fun company' && (
                  <Image
                    style={{
                      width: 220,
                      height: 100,
                      resizeMode: 'contain',
                      marginTop: 12,
                      marginLeft: 5,
                    }}
                    source={funcompany}
                  />
                )}

                {activeItem?.cardName === 'Exclusive books' && (
                  <Image
                    style={{
                      width: 220,
                      height: 100,
                      resizeMode: 'contain',
                      marginTop: 12,
                      marginLeft: 5,
                    }}
                    source={exclusivebooks}
                  />
                )}
                <Text style={styles.activeText}>{activeItem?.cardNumber}</Text>
              </View>
            </View>

            <View style={styles.activeCardContainer}>
              <View style={{flexDirection: 'column'}}>
                <Image
                  style={{
                    width: 290,
                    height: 200,
                    resizeMode: 'stretch',
                    marginTop: 0,
                  }}
                  source={barcode}
                />
                <Text style={styles.activeCardText}>
                  {activeItem?.cardNumber}
                </Text>
              </View>
            </View>

            <View style={{marginTop: 0, marginLeft: 15, marginBottom: 10}}>
              <Text>{activeItem?.cardName} Reward Card</Text>
              <Text style={{fontWeight: '200'}}>
                Click card number to copy code
              </Text>
            </View>

            <TouchableHighlight
              style={{
                ...styles.openButton,
                backgroundColor: '#08668C',
                marginLeft: 100,
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
}
