import {Product} from '../../shared';

type NO_PARAMS = undefined;

export const RootStackParams = {
  Home: 'Home',
  Cart: 'Cart',
  Products: 'Products',
  Product: 'Product',
  Broadcasts: 'Broadcasts',
  Contacts: 'Contacts',
  Reservation: 'Reservation',
  Success: 'Success',
  Casi: 'Casi'
} as const;

export type RootStackParamList = {
  [RootStackParams.Home]: NO_PARAMS;
  [RootStackParams.Cart]: NO_PARAMS;
  [RootStackParams.Products]: NO_PARAMS;
  [RootStackParams.Broadcasts]: NO_PARAMS;
  [RootStackParams.Contacts]: NO_PARAMS;
  [RootStackParams.Reservation]: NO_PARAMS;
  [RootStackParams.Product]: {product: Product};
  [RootStackParams.Success]: {isOrder: boolean};
  [RootStackParams.Casi]: NO_PARAMS;
};
