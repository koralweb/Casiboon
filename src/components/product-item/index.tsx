import React from 'react';

import {styles} from './style';
import {Image, Pressable, Text, View} from 'react-native';
import {CustomButton, Product} from '../../shared';

interface ProductItemProps {
  item: Product;
  onItemPress(item: Product): void;
  onAddToCart(item: Product): void;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  item,
  onItemPress,
  onAddToCart,
}) => {
  return (
    <Pressable onPress={() => onItemPress(item)} style={styles.container}>
      <View style={styles.contentContainer}>
        <Image style={styles.imageStyle} source={{uri: item.images[0]}} />
        <Text style={styles.nameStyle} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.descStyle} numberOfLines={1}>
          {item.description}
        </Text>
        <Text style={styles.priceStyle}>
        €{item.lastUpdated.toString().substring(2, 0)}
        </Text>
      </View>

      <CustomButton onPress={() => onAddToCart(item)} label="Hinzufügen" />
    </Pressable>
  );
};
