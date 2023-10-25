import React, {useState} from 'react';

import {styles} from './style';
import {ScrollView, View} from 'react-native';
import {CustomButton, CustomInput, ScreenHeader} from '../../shared';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  RootStackParamList,
  RootStackParams,
} from '../../navigation/route/interface';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type ReservationScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Reservation'
>;

export const ReservationScreen: React.FC<ReservationScreenProps> = ({
  navigation,
}) => {
  const {top} = useSafeAreaInsets();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [tableNumber, setTableNumber] = useState('');

  const resetStates = () => {
    setFirstName('');
    setLastName('');
    setMobile('');
    setTableNumber('');
  };
  const handleReservation = () => {
    navigation.navigate(RootStackParams.Success, {isOrder: false});
    resetStates();
  };

  return (
    <View style={[styles.container, {top}]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <ScreenHeader
            onBackPress={navigation.goBack}
            title="Tischreservierung"
          />
        </View>

        <View style={styles.container}>
          <CustomInput
            inputValue={firstName}
            onChangeInputValue={setFirstName}
            label="Vorname"
            placeholder="Geben Sie Ihren Vornamen ein"
            wrapperStyle={styles.inputSpace}
          />

          <CustomInput
            inputValue={lastName}
            onChangeInputValue={setLastName}
            placeholder="Geben Sie Ihren Nachnamen ein"
            label="Familienname, Nachname"
            wrapperStyle={styles.inputSpace}
          />

          <CustomInput
            inputValue={mobile}
            onChangeInputValue={setMobile}
            placeholder="Geben Sie Ihre Mobiltelefonnummer ein"
            label="Handynummer"
            wrapperStyle={styles.inputSpace}
          />

          <CustomInput
            inputValue={tableNumber}
            onChangeInputValue={setTableNumber}
            placeholder="Geben Sie Ihre Tischnummer ein"
            label="Tisch Nummer"
            wrapperStyle={styles.inputSpace}
          />
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton onPress={handleReservation} label="Reservieren" />
        </View>
      </ScrollView>
    </View>
  );
};
