import React, {useState} from 'react';

import {styles} from './style';
import {Alert, SafeAreaView, ScrollView, View} from 'react-native';
import {CustomButton, CustomInput, ScreenHeader} from '../../shared';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/route/interface';

type ContactsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Contacts'
>;
export const ContactsScreen: React.FC<ContactsScreenProps> = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [index, setIndex] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSendMessage = () => {
    Alert.alert(
      'Thank you!',
      'Your message has been sent. We will get back to you soon.',
      [{text: 'OK'}],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <ScreenHeader onBackPress={navigation.goBack} title="Contacts" />

          <CustomInput
            inputValue={phone}
            onChangeInputValue={setPhone}
            placeholder="phone"
            wrapperStyle={styles.inputSpace}
          />

          <CustomInput
            inputValue={index}
            onChangeInputValue={setIndex}
            placeholder="index"
            wrapperStyle={styles.inputSpace}
          />
          <CustomInput
            inputValue={email}
            onChangeInputValue={setEmail}
            placeholder="E-mail"
            wrapperStyle={styles.inputSpace}
          />

          <CustomInput
            inputValue={address}
            onChangeInputValue={setAddress}
            placeholder="Address"
          />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton onPress={handleSendMessage} label="Send Message" />
      </View>
    </SafeAreaView>
  );
};
