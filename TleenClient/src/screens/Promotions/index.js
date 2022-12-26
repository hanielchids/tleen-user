import {View, Text, TextInput, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

const Promotions = () => {
  const [value, setValue] = useState('');

  return (
    <SafeAreaView>
      {/* Heading */}
      <View style={styles.headingBox}>
        <View style={{paddingBottom: 0}}>
          <Text style={styles.heading}>Promotions</Text>
        </View>
      </View>

      {/* BOX SECTION */}
      <View style={{paddingLeft: 4}}>
        <View style={styles.promoBox}>
          <View>
            <Text style={styles.commissionText}>
              Earn R100 for commission by sharing refferal link
            </Text>

            <Text style={styles.refferalCode}>Refferal code</Text>

            <View style={styles.inputContainer}>
              <View>
                <TextInput
                  keyboardType="number-pad"
                  // returnKeyType="done"
                  value={value}
                  onChangeText={setValue}
                  style={styles.forminput}
                />
              </View>

              {/* <TouchableOpacity
                style={tw` bg-gray-500 rounded-md  px-5 py-2.5 -mt-3 `}
                onPress={() => setModalVisible(true)}
                // onPress={() => navigation.navigate("PendingOrderScreen")}
              >
                <Text style={tw`text-white  text-lg text-center`}>
                  Copy link
                </Text>
              </TouchableOpacity> */}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Promotions;
