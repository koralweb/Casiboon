import React from 'react';
import {Product} from '../types';

export type CartContextType = {
  cart: Product[];
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (product: Product) => void;
  onResetCart(): void;
};

export const AppContext = React.createContext<CartContextType | null>(null);
