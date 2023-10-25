import React from 'react';

import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface SpacerProps {
  wrapperStyle?: StyleProp<ViewStyle>;
}

export const Spacer: React.FC<SpacerProps> = ({wrapperStyle}) => {
  return <View style={[styles.container, wrapperStyle]} />;
};

const styles = StyleSheet.create({
  container: {
    height: 50,
  },
});
