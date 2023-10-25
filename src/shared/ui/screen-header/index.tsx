import React from 'react';

import {styles} from './style';
import {Text} from 'react-native';
import {Header} from '../header';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {
  RootStackParamList,
  RootStackParams,
} from '../../../navigation/route/interface';

interface ScreenHeaderType {
  onBackPress?(): void;
  title?: string;
}

export const ScreenHeader: React.FC<ScreenHeaderType> = ({title}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <>
      <Header
        onBackPress={navigation.goBack}
        onMenuPress={() => navigation.navigate(RootStackParams.Home)}
      />
      {title && <Text style={styles.headerText}>{title}</Text>}
    </>
  );
};
