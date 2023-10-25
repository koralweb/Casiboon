import React from 'react';

import {styles} from './style';
import {Image, Pressable, Text, View} from 'react-native';
import {Product, TrashIcon} from '../../shared';

interface CardItemProps {
  product: Product;
  onRemoveItem(): void;
}

export const CartItem: React.FC<CardItemProps> = ({product, onRemoveItem}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.images[0]}} style={styles.imgStyle} />
      <View style={styles.contentContainer}>
        <Text style={styles.nameStyle} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={styles.descStyle} numberOfLines={1}>
          {product.description}
        </Text>
        <Text style={styles.priceStyle}>
        €{product.lastUpdated.toString().substring(2, 0)}
        </Text>
      </View>

      <Pressable onPress={onRemoveItem} style={styles.deleteIcon}>
        <TrashIcon />
      </Pressable>
    </View>
  );
};
