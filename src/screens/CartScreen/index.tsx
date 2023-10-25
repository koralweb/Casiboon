import React, {useContext} from 'react';

import {styles} from './style';
import {FlatList, ListRenderItem, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppContext} from '../../shared/store';
import {CustomButton, Product, ScreenHeader} from '../../shared';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/route/interface';
import {CartItem, SummaryCart} from '../../components';

type CartScreenProps = NativeStackScreenProps<RootStackParamList, 'Cart'>;

export const CartScreen: React.FC<CartScreenProps> = ({navigation}) => {
  const cartContext = useContext(AppContext);

  if (!cartContext) {
    return null;
  }

  const onGoToHome = () => navigation.navigate('Home');

  const onRemoveItemFromCart = (item: Product) => {
    cartContext.removeProductFromCart(item);
  };

  const onPlaceOrder = () => {
    navigation.navigate('Success', {isOrder: true});
    cartContext.onResetCart();
  };
  const renderItem: ListRenderItem<Product> = ({item}) => {
    return (
      <CartItem
        product={item}
        onRemoveItem={() => onRemoveItemFromCart(item)}
      />
    );
  };

  const totalSum = cartContext.cart
    .map(item => {
      const firstTwoDigits = parseInt(
        item.lastUpdated.toString().substring(0, 2),
        10,
      );
      return firstTwoDigits;
    })
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ScreenHeader onBackPress={navigation.goBack} title="Wagen" />
      </View>
      {!cartContext.cart.length ? (
        <View style={styles.emptyContainer}>
          <View style={styles.emptyTextContainer}>
            <Text style={styles.emptyText}>Einkaufswagen ist leer</Text>
          </View>
          <View style={styles.buttonWrapperStyle}>
            <CustomButton onPress={onGoToHome} label="Gehen Sie zum Hauptmenü" />
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={cartContext.cart}
            renderItem={renderItem}
            keyExtractor={item => item.uuid}
            contentContainerStyle={styles.listContent}
          />

          <SummaryCart onPlaceOrder={onPlaceOrder} totalSum={totalSum} />
        </View>
      )}
    </SafeAreaView>
  );
};
