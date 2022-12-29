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
              // style={tw`p-2 pl-6 h-50 pb-8 pt-4 rounded-md shadow-xl w-75 ${
              //   activeItem?.id && activeItem?.bgColor
              // }`}
              style={[
                styles.viewItem,
                {backgroundColor: activeItem?.id && activeItem?.bgColor},
              ]}>
              <View style={{alignItems: 'center'}}>
                <Image
                  style={{
                    width: 220,
                    height: 80,
                    resizeMode: 'contain',
                    marginTop: 7,
                    marginLeft: 5,
                  }}
                  source={activeItem?.logo}
                />
                <Text
                  // style={tw`text-2xl tracking-widest ml-8`}
                  style={styles.activeText}>
                  {activeItem?.cardNumber}
                </Text>
              </View>
            </View>

            <View
              // style={tw`p-2 pl-6 h-50 pb-8 pt-4 mt-5 rounded-md shadow-xl w-75 bg-white`}
              style={styles.activeCardContainer}>
              <View style={{flexDirection: 'column'}}>
                <Image
                  style={{
                    width: 290,
                    height: 200,
                    resizeMode: 'stretch',
                    marginTop: 0,
                  }}
                  source={activeItem?.barcode}
                />
                {/* <TouchableOpacity onPress={() => copyToClipboard()}> */}
                <Text
                  //  style={tw`text-2xl tracking-widest ml-6`}
                  style={styles.activeCardText}>
                  {activeItem?.cardNumber}
                </Text>
                {/* </TouchableOpacity> */}
              </View>
            </View>

            <View
              // style={tw`mt-5 -ml-20 mb-10`}
              style={{marginTop: 0, marginLeft: 15, marginBottom: 10}}>
              <Text>{activeItem?.name}Reward Card</Text>
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
              }}
              // onPress={console.log('clicked the ting: ', activeItem.name)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
}
