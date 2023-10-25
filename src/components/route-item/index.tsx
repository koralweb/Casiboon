import React from 'react';

import {styles} from './style';
import {Text, TouchableOpacity, View} from 'react-native';

interface RouteItemProps {
  route: any;
  onItemPress(): void;
}

export const RouteItem: React.FC<RouteItemProps> = ({route, onItemPress}) => {
  return (
    <>
      <TouchableOpacity style={styles.item} onPress={onItemPress}>
        <View style={styles.iconContainer}>{route.icon()}</View>
        <Text style={styles.itemText}>{route.title}</Text>
      </TouchableOpacity>
      <View style={styles.divider} />
    </>
  );
};
