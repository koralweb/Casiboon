import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, { useState } from 'react';

import {
  BroadcastsScreen,
  CartScreen,
  ContactsScreen,
  HomeScreen,
  ProductScreen,
  ProductsScreen,
  ReservationScreen,
  SuccessScreen,
} from '../../screens';
import CasiScreen from '../../screens/CasiScreen'
import {RootStackParamList, RootStackParams} from './interface';
import {COLORS} from '../../shared';

interface RouteType {}

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Route: React.FC<RouteType> = () => {

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          contentStyle: {backgroundColor: COLORS.dark_00356B},
          headerShown: false,
        }}>
        <RootStack.Screen name={RootStackParams.Casi} component={CasiScreen} />
        <RootStack.Screen name={RootStackParams.Home} component={HomeScreen} />
        <RootStack.Screen
          name={RootStackParams.Products}
          component={ProductsScreen}
        />
        <RootStack.Screen
          name={RootStackParams.Broadcasts}
          component={BroadcastsScreen}
        />

        <RootStack.Screen
          name={RootStackParams.Contacts}
          component={ContactsScreen}
        />

        <RootStack.Screen
          options={{
            contentStyle: {backgroundColor: COLORS.dark_000},
          }}
          name={RootStackParams.Success}
          component={SuccessScreen}
        />

        <RootStack.Screen
          name={RootStackParams.Reservation}
          component={ReservationScreen}
        />

        <RootStack.Screen
          name={RootStackParams.Product}
          component={ProductScreen}
        />

        <RootStack.Screen name={RootStackParams.Cart} component={CartScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
