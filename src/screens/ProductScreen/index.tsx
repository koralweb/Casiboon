import React, {useContext} from 'react';

import {styles} from './style';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/route/interface';
import RenderHTML from 'react-native-render-html';
import {CustomButton, ScreenHeader} from '../../shared';
import {AppContext} from '../../shared/store';

type ProductScreenProps = NativeStackScreenProps<RootStackParamList, 'Product'>;

export const ProductScreen: React.FC<ProductScreenProps> = ({route}) => {
  const {product} = route.params;
  const cartContext = useContext(AppContext);

  const {width} = useWindowDimensions();

  const source = {
    html: `
  ${product.instructions}`,
  };

  const onAddToCart = () => {
    if (cartContext) {
      cartContext.addProductToCart(product);
      Alert.alert('Success', 'Added to cart', [{text: 'OK'}]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <ScreenHeader />
        </View>
        <Image source={{uri: product.images[0]}} style={styles.imgStyle} />
        <View style={styles.contentContainer}>
          <Text style={styles.nameStyle}> {product.name}</Text>
          <Text style={styles.descStyle}>{product.description}</Text>

          <RenderHTML
            contentWidth={width}
            source={source}
            baseStyle={styles.instructionStyle}
          />
        </View>
        <View style={styles.buttonStyle}>
          <CustomButton onPress={onAddToCart} label="Hinzufügen" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
