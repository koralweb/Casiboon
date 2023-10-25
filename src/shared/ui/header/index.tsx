import React from 'react';

import {styles} from './style';
import {Pressable, View} from 'react-native';
import {LeftArrow} from '../../assets';

interface HeaderType {
  onMenuPress?(): void;
  onBackPress?(): void;
}

export const Header: React.FC<HeaderType> = ({onBackPress, onMenuPress}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onMenuPress}>
        <BurgerIcon />
      </Pressable>

      <Pressable onPressIn={onBackPress} style={styles.arrowContainer}>
        <LeftArrow />
      </Pressable>
    </View>
  );
};

const BurgerIcon = () => {
  return (
    <View style={styles.icon}>
      <View style={styles.iconContainer}>
        <View style={styles.line} />
        <View style={styles.line} />
        <View style={styles.line} />
      </View>
    </View>
  );
};
