import React from 'react';

import {styles} from './style';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {CustomButton} from '../../shared';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/route/interface';

type SuccessScreenProps = NativeStackScreenProps<RootStackParamList, 'Success'>;

export const SuccessScreen: React.FC<SuccessScreenProps> = ({
  navigation,
  route,
}) => {
  const {isOrder} = route.params;
  const onGoToHome = () => navigation.navigate('Home');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.thanksText}>Danke</Text>
          {isOrder ? (
            <Text style={styles.orderText}>FÜR IHRE BESTELLUNG!</Text>
          ) : (
            <Text style={styles.orderText}>FÜR IHRE RESERVE!</Text>
          )}

          {isOrder && (
            <Image
              source={require('../../shared/assets/img/qr.png')}
              style={styles.imgStyle}
            />
          )}
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton
            wrapperStyle={styles.button}
            titleStyle={styles.buttonText}
            onPress={onGoToHome}
            label="Gehen Sie zum Hauptmenü"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
