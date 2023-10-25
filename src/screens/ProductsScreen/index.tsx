import React, {useContext} from 'react';

import {styles} from './style';
import {
  Alert,
  FlatList,
  ListRenderItem,
  SafeAreaView,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/route/interface';
import {Product, ScreenHeader, data} from '../../shared';
import {ProductItem} from '../../components';
import {AppContext} from '../../shared/store';

type ProductsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Products'
>;

export const ProductsScreen: React.FC<ProductsScreenProps> = ({navigation}) => {
  const cartContext = useContext(AppContext);

  const onGoToProductDetails = (product: Product) => {
    navigation.navigate('Product', {product});
  };

  const onAddToCart = (product: Product) => {
    if (cartContext) {
      cartContext.addProductToCart(product);
      Alert.alert('Erfolg!', 'wurde hinzugefügt.', [{text: 'OK'}]);
    }
  };

  const renderItem: ListRenderItem<Product> = ({item}) => {
    return (
      <ProductItem
        item={item}
        onItemPress={onGoToProductDetails}
        onAddToCart={onAddToCart}
      />
    );
  };

  const listHeaderComponent = () => {
    return (
      <View style={styles.header}>
        <ScreenHeader onBackPress={navigation.goBack} title="Produkte" />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        data={data}
        ListHeaderComponent={listHeaderComponent}
        contentContainerStyle={styles.flatListContainer}
        renderItem={renderItem}
        keyExtractor={item => item.uuid}
      />
    </SafeAreaView>
  );
};
