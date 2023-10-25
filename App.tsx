/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useState} from 'react';
import {StatusBar} from 'react-native';
import {Route} from './src/navigation';
import {AppContext, CartContextType} from './src/shared/store';
import {Product} from './src/shared';

function App(): JSX.Element {
  const [cart, setCart] = useState<Product[]>([]);

  const addProductToCart = useCallback((product: Product) => {
    setCart(prevCart => {
      // Check if the product is already in the cart
      const isProductInCart = prevCart.some(item => item.uuid === product.uuid);

      // If it's already in the cart, return the previous cart state (no change)
      if (isProductInCart) {
        return prevCart;
      }

      // If it's not in the cart, add the new product
      return [...prevCart, product];
    });
  }, []);

  const removeProductFromCart = useCallback((product: Product) => {
    setCart(prevCart => prevCart.filter(item => item.uuid !== product.uuid));
  }, []);

  const onResetCart = useCallback(() => {
    setCart([]);
  }, []);

  const contextValue: CartContextType = {
    cart,
    addProductToCart,
    removeProductFromCart,
    onResetCart,
  };
  return (
    <AppContext.Provider value={contextValue}>
      <StatusBar hidden />
      <Route />
    </AppContext.Provider>
  );
}

export default App;
