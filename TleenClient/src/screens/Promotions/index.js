import {View, Text, TextInput, SafeAreaView, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Promotions = () => {
  const [value, setValue] = useState('');

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      {/* Heading */}
      <View style={styles.headingBox}>
        <Pressable onPress={navigation.goBack} style={styles.backButton}>
          <AntDesign name="left" size={22} />
        </Pressable>

        <View style={{paddingBottom: 0}}>
          <Text style={styles.heading}>Promotions</Text>
        </View>
      </View>

      {/* BOX SECTION */}
      <View style={{paddingLeft: 0, marginBottom: 0}}>
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

              <Pressable
                style={styles.linkButton}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.linkText}>Copy link</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      {/* Rewards Panel */}
      <View style={styles.rewardsContainer}>
        <View style={styles.rewardsBox}>
          <View>
            <Text style={styles.rewardsPanelText}>TLEEN Reward</Text>
            <Text style={styles.rewardsSubText}>
              Receive reward when you reach 20 successful deliveries.{' '}
              <Text style={styles.learnMoreText}>Learn more </Text>
            </Text>
          </View>
        </View>
      </View>

      {/* End of Rewards Panel */}
    </SafeAreaView>
  );
};

export default Promotions;
